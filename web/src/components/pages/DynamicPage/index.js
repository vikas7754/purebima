"use client";

import BreadCrumbs from "@/components/BreadCrumbs";
import Faqs from "../Home/Faqs";
import Testimonials from "../Home/Testimonials";
import About from "../Home/About";

function DynamicPage({ page }) {
  return (
    <>
      {page.slug !== "home" && (
        <BreadCrumbs
          title={page.title}
          links={[{ title: page.title, href: `/${page.slug}` }]}
        />
      )}
      <div className="wrapper">
        <div dangerouslySetInnerHTML={{ __html: page.data.content }} />
      </div>
      {page.showTestimonial && <Testimonials />}
      {page.showFaq && <Faqs />}
      {page.slug === "home" && <About />}
    </>
  );
}

export default DynamicPage;
