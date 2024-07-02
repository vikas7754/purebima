"use client";

import BreadCrumbs from "@/components/BreadCrumbs";
import Faqs from "../Home/Faqs";
import Testimonials from "../Home/Testimonials";
import About from "../Home/About";
import "swiper/css";

function DynamicPage({ page }) {
  return (
    <>
      {page.slug !== "home" && (
        <BreadCrumbs
          title={page.title}
          links={[{ title: page.title, href: `/${page.slug}` }]}
          image={page?.data?.image}
        />
      )}
      <div className={page.type === "page" ? "wrapper" : ""}>
        <div
          dangerouslySetInnerHTML={{ __html: page.data.content }}
          suppressHydrationWarning
        />
      </div>
      {page.showTestimonial && <Testimonials />}
      {page.showFaq && <Faqs />}
      {page.slug === "home" && <About />}
    </>
  );
}

export default DynamicPage;
