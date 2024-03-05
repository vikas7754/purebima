import "react-toastify/dist/ReactToastify.min.css";
import { ToastContainer } from "react-toastify";
import "@/styles/globals.scss";
import "@/styles/editor.scss";
import "@fortawesome/fontawesome-svg-core/styles.css";
import ReduxProvider from "@/redux/ReduxProvider";
import NextTopLoader from "nextjs-toploader";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export const metadata = {
  title:
    "PureBima | Signior PureBima Insurance Brokers Pvt. Ltd. - Kadam Bharose Ka…",
  description:
    "Signior PureBima Insurance Brokers Pvt. Ltd. - Kadam Bharose Ka…",
};

export default function RootLayout({ children }) {
  return (
    <ReduxProvider>
      <html lang="en">
        <head>
          <link
            href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
            rel="stylesheet"
            integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH"
            crossOrigin="anonymous"
          />
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
          />
        </head>
        <body className={"light"}>
          <Navbar />
          {/* <NextTopLoader
            color="red"
            height={2}
            shadow="none"
            showSpinner={false}
          /> */}
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
