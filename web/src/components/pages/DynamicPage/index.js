"use client";

import Faqs from "../Home/Faqs";
import Testimonials from "../Home/Testimonials";

function DynamicPage({ page }) {
  return (
    <div className="wrapper">
      <div dangerouslySetInnerHTML={{ __html: page.data.content }} />
      {page.showTestimonial && <Testimonials />}
      {page.showFaq && <Faqs />}
    </div>
  );
}

export default DynamicPage;
