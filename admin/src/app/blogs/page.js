import BlogsPage from "@/components/BlogsPage";
import React from "react";

const Page = async ({ searchParams }) => {
  const { page = 1, limit = 12 } = await searchParams;

  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/blog`, {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Data not found");
  }
  const data = await res.json();

  return (
    <div>
      <BlogsPage
        blogs={data.blogs}
        page={page}
        limit={limit}
        total={data.total}
      />
    </div>
  );
};

export default Page;
