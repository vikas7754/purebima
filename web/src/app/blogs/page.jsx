import BlogsPage from "@/components/BlogsPage";
import React from "react";

export const metadata = {
  title: "Blogs",
};

const Page = async ({ searchParams }) => {
  const params = await searchParams;
  const { page = 1, limit = 12, category, type, related } = params;

  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/blog`, {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Data not found");
  }
  const data = await res.json();

  return <BlogsPage blogs={data.blogs} total={data.total} page={page} />;
};

export default Page;
