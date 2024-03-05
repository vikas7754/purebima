"use client";

import BreadCrumbs from "@/components/BreadCrumbs";
import Faqs from "../Home/Faqs";
import Testimonials from "../Home/Testimonials";
import Script from "next/script";

function DynamicPage({ page }) {
  return (
    <>
      <Script
        async
        src="https://code.jquery.com/jquery-3.7.1.min.js"
        integrity="sha256-/JqT3SQfawRcv/BIHPThkBvs0OEvtFFmqPF/lYI/Cxo="
        crossorigin="anonymous"
      />
      <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz"
        crossorigin="anonymous"
      />
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
    </>
  );
}

export default DynamicPage;
