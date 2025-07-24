import "react-toastify/dist/ReactToastify.min.css";
import { ToastContainer } from "react-toastify";
import "@/styles/globals.scss";
import "@/styles/editor.scss";
import "@fortawesome/fontawesome-svg-core/styles.css";
import ReduxProvider from "@/redux/ReduxProvider";
import Footer from "@/components/footer";
import dynamic from "next/dynamic";
import Script from "next/script";
const Navbar = dynamic(() => import("@/components/navbar"), { ssr: false });
import faqSchema from "@/schemas/faqSchema.json";
import localBusinessSchema from "@/schemas/localBusinessSchema.json";
import organizationSchema from "@/schemas/organizationSchema.json";

export const metadata = {
  title: {
    template: "%s | PureBima",
    default: "Best Insurance Provider for Trusted Coverage | PureBima",
  },
  description:
    "Discover the best Insurance Provider for Trusted Coverage offering trusted coverage, top customer service, and tailored plans for every need.",
  openGraph: {
    title: "Best Insurance Provider for Trusted Coverage | PureBima",
    description:
      "Discover the best Insurance Provider for Trusted Coverage offering trusted coverage, top customer service, and tailored plans for every need.",
    url: "https://www.purebima.com",
    siteName: "PureBima",
    images: [
      {
        url: "https://res.cloudinary.com/freecodez/image/upload/v1749149984/images/mk09wx7fxfxcpxo9jzvr.webp",
        width: 1200,
        height: 630,
        alt: "Best Insurance Provider for Trusted Coverage | PureBima",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    url: "https://www.purebima.com",
    title: "Best Insurance Provider for Trusted Coverage | PureBima",
    description:
      "Discover the best Insurance Provider for Trusted Coverage offering trusted coverage, top customer service, and tailored plans for every need.",
    images: [
      "https://res.cloudinary.com/freecodez/image/upload/v1749149984/images/mk09wx7fxfxcpxo9jzvr.webp",
    ],
  },
};

const GA_ID = process.env.NEXT_PUBLIC_GA_ID || "G-Q8CLMLB47R";

export default function RootLayout({ children }) {
  return (
    <ReduxProvider>
      <html lang="en">
        <head>
          <link rel="canonical" href="https://www.purebima.com/" />
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
          />
          <meta
            name="google-site-verification"
            content="oxAjopIR8y02Np4Aru3f87Lbzjel7MnDsvAi0YH7BO8"
          />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(faqSchema),
            }}
          />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(localBusinessSchema),
            }}
          />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(organizationSchema),
            }}
          />
        </head>
        <body className={"light"}>
          {process.env.NODE_ENV === "production" && (
            <>
              <Script
                src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
              />
              <Script id="google-analytics">
                {`
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
         
                  gtag('config', '${GA_ID}');
                `}
              </Script>
            </>
          )}
          <Navbar />
          <ToastContainer
            position="top-center"
            closeOnClick
            hideProgressBar={false}
            newestOnTop={true}
            draggable={true}
            theme="light"
            pauseOnHover={true}
            autoClose={3000}
          />
          {children}
          <Footer />
        </body>
      </html>
    </ReduxProvider>
  );
}
