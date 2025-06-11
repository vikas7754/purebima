import BlogForm from "@/components/BlogForm";
import React from "react";

const Page = async ({ params }) => {
  const { slug } = params;

  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/blog/${slug}`, {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Data not found");
  }
  const data = await res.json();

  return <BlogForm data={data} action="update" />;
};

export default Page;
