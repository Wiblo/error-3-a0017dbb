import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { businessInfo } from "@/lib/data/business-info";
import { generateLocalBusinessSchema, JsonLd } from "@/lib/seo/json-ld";
import { WibloDesignBridge } from "@/components/wiblo-design-bridge";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: `${businessInfo.name} | ${businessInfo.tagline}`,
  description: businessInfo.description,
};

// Early error bridge script - runs before React to catch render-time errors
const earlyErrorBridgeScript = `
(function() {
  if (typeof window === 'undefined') return;

  // Shared dedupe set - also used by WibloDesignBridge component
  window.__wibloReportedErrors__ = window.__wibloReportedErrors__ || {};
  var reported = window.__wibloReportedErrors__;

  function postError(error) {
    try {
      window.parent && window.parent.postMessage({
        type: 'PREVIEW_ERROR',
        error: error
      }, '*');
    } catch (e) {}
  }

  // Catch uncaught exceptions - relaxed filter (don't require filename)
  window.addEventListener('error', function(e) {
    // Only filter out browser extension errors and cross-origin "Script error."
    if (e.filename && e.filename.includes('extension://')) return;
    if (e.message === 'Script error.' && !e.filename) return;

    var key = (e.message || 'unknown') + ':' + (e.lineno || 0) + ':' + (e.colno || 0);
    if (reported[key]) return;
    reported[key] = true;

    postError({
      message: e.message || 'Unknown error',
      filename: e.filename || undefined,
      lineno: e.lineno || undefined,
      colno: e.colno || undefined,
      stack: e.error && e.error.stack,
      type: 'runtime'
    });
  });

  // Catch unhandled promise rejections
  window.addEventListener('unhandledrejection', function(e) {
    var msg = (e.reason && e.reason.message) || String(e.reason || 'Unknown rejection');
    if (reported[msg]) return;
    reported[msg] = true;

    postError({
      message: msg,
      stack: e.reason && e.reason.stack,
      type: 'unhandled-rejection'
    });
  });

  // Hook console.error to catch React-logged errors
  var origConsoleError = console.error;
  console.error = function() {
    origConsoleError.apply(console, arguments);

    try {
      var msg = Array.prototype.slice.call(arguments).map(function(arg) {
        if (typeof arg === 'object') {
          try { return JSON.stringify(arg); } catch (e) { return String(arg); }
        }
        return String(arg);
      }).join(' ');

      // Only report if it looks like an actual error
      var isError = msg.includes('Error') ||
                    msg.includes('Uncaught') ||
                    msg.includes('Invalid') ||
                    msg.includes('Failed') ||
                    msg.includes('Cannot');

      // Skip React internal warnings/messages
      var isReactInternal = msg.includes('Warning:') ||
                            msg.includes('React does not recognize') ||
                            msg.includes('validateDOMNesting');

      if (isError && !isReactInternal) {
        var key = 'console:' + msg.slice(0, 100);
        if (!reported[key]) {
          reported[key] = true;
          postError({
            message: msg.slice(0, 2000),
            type: 'console-error'
          });
        }
      }
    } catch (e) {}
  };

  console.log('[Wiblo] Early error bridge initialized');
})();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Early error bridge - must run before React to catch render-time errors */}
        <script dangerouslySetInnerHTML={{ __html: earlyErrorBridgeScript }} />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <WibloDesignBridge />
        <JsonLd data={generateLocalBusinessSchema()} />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
