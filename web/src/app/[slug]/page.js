import DynamicPage from "@/components/pages/DynamicPage";
import Error404 from "@/components/pages/Error404";

export async function generateMetadata({ params }) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/page/${params.slug}`,
    { cache: "no-store" }
  );
  if (!res.ok) {
    return {
      title: "Error 404",
      description: "Page not found",
    };
  }
  const data = await res.json();
  return {
    title: data.title + " - PureBima",
    description: data.title,
  };
}

async function page({ params }) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/page/${params.slug}`,
    { cache: "no-store" }
  );

  if (!res.ok) {
    return <Error404 />;
  }

  const data = await res.json();

  return <DynamicPage page={data} />;
}

export default page;
