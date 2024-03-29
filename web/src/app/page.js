import DynamicPage from "@/components/pages/DynamicPage";
import Error404 from "@/components/pages/Error404";

async function page() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/page/home`, {
    cache: "no-store",
  });
  if (!res.ok) {
    return <Error404 />;
  }
  const data = await res.json();
  return <DynamicPage page={data} />;
}

export default page;
