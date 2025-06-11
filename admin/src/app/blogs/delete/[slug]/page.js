import DeleteBlog from "@/components/DeleteBlog";
import React from "react";

const Page = async ({ params }) => {
  const { slug } = await params;

  return <DeleteBlog slug={slug} />;
};

export default Page;
