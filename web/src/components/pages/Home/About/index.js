"use client";

import { useEffect, useState } from "react";

function About() {
  const [content, setContent] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/page/contact-section`
        );
        const data = await response.json();
        setContent(data?.data?.content);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div
      dangerouslySetInnerHTML={{ __html: content }}
      suppressHydrationWarning
    ></div>
  );
}

export default About;
