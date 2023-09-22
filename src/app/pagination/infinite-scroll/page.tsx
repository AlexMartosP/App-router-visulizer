import { getProducts } from "./actions";
import InfniniteScrollMovies from "./components/InfiniteScrollMovies";

export default async function Page() {
  const data = await getProducts(1, 5);

  return (
    <>
      {data.count > 0 ? (
        <InfniniteScrollMovies initialData={data} />
      ) : (
        <p>No products</p>
      )}
    </>
  );
}
