import Error404 from "@/components/pages/Error404";
import EditPage from "@/components/pages/PageManagement/edit";

async function page({ params }) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/page/${params.slug}`,
    { cache: "no-store" }
  );
  if (!res.ok) {
    return <Error404 />;
  }
  const data = await res.json();
  return <EditPage data={data} />;
}

export default page;
