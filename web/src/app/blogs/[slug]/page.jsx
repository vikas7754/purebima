import BlogDetailsPage from "@/components/BlogDetailsPage";
import React from "react";

export const generateMetadata = async ({ params }) => {
  const { slug } = params;

  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/blog/${slug}`, {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Data not found");
  }
  const data = await res.json();

  return {
    title: data.title,
    description: data.description,
    openGraph: {
      title: data.title,
      description: data.description,
      images: [
        {
          url: data.media[0].url,
          width: 800,
          height: 600,
          alt: data.title,
        },
      ],
    },
  };
};

const Page = async ({ params }) => {
  const { slug } = params;

  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/blog/${slug}`, {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Data not found");
  }
  const data = await res.json();

  return <BlogDetailsPage blog={data} />;
};

export default Page;
