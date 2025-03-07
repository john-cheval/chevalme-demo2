/** @format */

import { Sora } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const sora = Sora({ subsets: ["latin"], variable: "--font-sora" });

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning={true}
      className="notranslate"
      translate="no"
    >
      <head>
        <meta name="google" content="notranslate" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {/* Google Tag (gtag.js) */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-11182646972"
          strategy="afterInteractive"
        />

        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-E4N6B3LXG2"
          strategy="afterInteractive"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'AW-11182646972');
            gtag('config', 'AW-11319129226');
            gtag('config', 'G-E4N6B3LXG2');

          `}
        </Script>

        {/* Google Tag Manager */}
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){
              w[l]=w[l]||[];
              w[l].push({'gtm.start': new Date().getTime(), event:'gtm.js'});
              var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
              j.async=true;
              j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
              f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-KMNRTFC2');
          `}
        </Script>

        <Script id="google-tag-manager-2" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){
              w[l]=w[l]||[];
              w[l].push({'gtm.start': new Date().getTime(), event:'gtm.js'});
              var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
              j.async=true;
              j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
              f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-KXKZ8WL');
          `}
        </Script>

        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
    (function(w,d,s,l,i){
      w[l]=w[l]||[];
      w[l].push({'gtm.start': new Date().getTime(), event:'gtm.js'});
      var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
      j.async=true;
      j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
      f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','GTM-KMNRTFC2');
  `}
        </Script>
        <Script id="gtag-conversion" strategy="afterInteractive">
          {`
    function gtag_report_conversion(url) {
      var callback = function () {
        if (typeof url !== "undefined") {
          window.location = url;
        }
      };
      if (window.gtag) {
        window.gtag("event", "conversion", {
          send_to: "AW-11182646972/5J2lCI-d_uMYELzNptQp",
          event_callback: callback,
        });
      }
      return false;
    }
  `}
        </Script>

        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-11319129226"
          strategy="afterInteractive"
        />

        <link rel="shortcut icon" href="/favicon.png" type="image/x-icon" />
        <meta property="og:type" content="website" />
        <meta name="robots" content="index, follow" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@chevalme" />
        <meta
          name="google-site-verification"
          content="YbB6z89M0yPuoamiqG8bPFz3wMP1p5QRhXO8ni6oxXk"
        />
      </head>
      <body className={sora.variable}>
        <div>
          {children}
          {/* Google Tag Manager (noscript) */}
          <noscript>
            <iframe
              src="https://www.googletagmanager.com/ns.html?id=GTM-KMNRTFC2"
              height="0"
              width="0"
              style={{ display: "none", visibility: "hidden" }}
            ></iframe>
          </noscript>
          <noscript>
            <iframe
              src="https://www.googletagmanager.com/ns.html?id=GTM-KXKZ8WL"
              height="0"
              width="0"
              style={{ display: "none", visibility: "hidden" }}
            ></iframe>
          </noscript>

          {/* Google Tag Manager */}
          <Script id="google-tag-manager" strategy="afterInteractive">
            {`
            (function(w,d,s,l,i){
              w[l]=w[l]||[];
              w[l].push({'gtm.start': new Date().getTime(), event:'gtm.js'});
              var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
              j.async=true;
              j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
              f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-KMNRTFC2');
          `}
          </Script>
          <Script id="google-tag-manager-2" strategy="afterInteractive">
            {`
            (function(w,d,s,l,i){
              w[l]=w[l]||[];
              w[l].push({'gtm.start': new Date().getTime(), event:'gtm.js'});
              var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
              j.async=true;
              j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
              f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-KXKZ8WL');
          `}
          </Script>

          {/* LinkedIn Insight Tag */}
          <Script id="linkedin-insight" strategy="afterInteractive">
            {`
            _linkedin_partner_id = "6408778";
            window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
            window._linkedin_data_partner_ids.push(_linkedin_partner_id);
          `}
          </Script>
          <Script id="linkedin-insight-script" strategy="afterInteractive">
            {`
            (function(l) {
              if (!l){
                window.lintrk = function(a,b){window.lintrk.q.push([a,b])};
                window.lintrk.q=[];
              }
              var s = document.getElementsByTagName("script")[0];
              var b = document.createElement("script");
              b.type = "text/javascript";
              b.async = true;
              b.src = "https://snap.licdn.com/li.lms-analytics/insight.min.js";
              s.parentNode.insertBefore(b, s);
            })(window.lintrk);
          `}
          </Script>
          <noscript>
            <img
              height="1"
              width="1"
              style={{ display: "none" }}
              alt=""
              src="https://px.ads.linkedin.com/collect/?pid=6408778&fmt=gif"
            />
          </noscript>

          {/* Contact Form 7 Event Tracking */}
          <Script id="wpcf7-event" strategy="afterInteractive">
            {`
            document.addEventListener("wpcf7mailsent", function(event) {
              window.location = "https://chevalme.com/thank-you/";
            }, false);
          `}
          </Script>
          <Script id="wpcf7-datalayer" strategy="afterInteractive">
            {`
            document.addEventListener("wpcf7mailsent", function(event) {
              window.dataLayer.push({
                event: "send_form",
                formId: event.detail.contactFormId,
                response: event.detail.inputs,
              });
            });
          `}
          </Script>
        </div>
      </body>
    </html>
  );
}
