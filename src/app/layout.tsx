import Head from 'next/head'
import "./globals.css"
import Script from "next/script"
import { Navbar } from "@/design-system/navbar/navbar"
import { Footer } from "@/design-system/footer/footer"
import { ToastContainer } from "@/design-system/toast-container"
import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google"
import { inter } from "@/ui/utils/fonts"
import { twMerge } from "tailwind-merge"
import QueryProvider from './query-provider'

const GA_ID = "G-RWGRZ39YR7"
const GTM_ID = "GTM-MRSD8F6J"

type Metadata = {
    title: string;
    description: string;
    imageUrl: string;
}

export const metadata: Metadata = {
    title: "Marki",
    description: "Marki is your go-to source for longevity meal-prep.",
    imageUrl: "./favicon.png"
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <Head>
                <meta name="google-site-verification" content="X7QiVM_1QluGB2WoX9E720vmaWOSIa5kviCpUMmsyl0" />
                <title>{metadata.title}</title>
                <meta name="description" content={metadata.description}/>
                <meta property="og:title" content={metadata.title}/>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <script src="https://accounts.google.com/gsi/client" async defer></script>

            <body className={twMerge(inter.className, "bg-white text-cod-gray-950")}>
                
                <ToastContainer />
                <Navbar />
                {children}
                <Script id="twitter-ads-pixel">
                    {`
!function(e,t,n,s,u,a){e.twq||(s=e.twq=function(){s.exe?
s.exe.apply(s,arguments):s.queue.push(arguments);
},s.version='1.1',s.queue=[],u=t.createElement(n),u.async=!
0,u.src='https://static.ads-twitter.com/uwt.js',
a=t.getElementsByTagName(n)[0],a.parentNode.insertBefore(u,a))}
(window,document,'script');
twq('config','ola05');
`}
                </Script>
                <Script id="linkedin-insights-tag">
                    {`
_linkedin_partner_id = "6039700";
window._linkedin_data_partner_ids =
window._linkedin_data_partner_ids || [];
window._linkedin_data_partner_ids.push(_linkedin_partner_id);
`}
                </Script>
                <Script id="linkedin-insights-tag-2">
                    {`
(function(l) {
if (!l){window.lintrk = function(a,b){window.lintrk.q.push([a,b])};
window.lintrk.q=[]}
var s = document.getElementsByTagName("script")[0];
var b = document.createElement("script");
b.type = "text/javascript";b.async = true;
b.src = "https://snap.licdn.com/li.lms-analytics/insight.min.js";
s.parentNode.insertBefore(b, s);})(window.lintrk);
`}
                </Script>
                <Script id="meta-pixel-code">
                    {`
!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '393801746820188');
fbq('track', 'PageView');
`}
                </Script>
        
                <Footer />
                <GoogleAnalytics gaId={GA_ID} />
                <GoogleTagManager gtmId={GTM_ID} />
            </body>
        </html>
    )
}