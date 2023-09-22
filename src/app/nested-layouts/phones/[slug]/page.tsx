export default function Page({ params }: { params: { slug: string } }) {
  return (
    <>
      <h1 className="capitalize">{params.slug}</h1>
      <p>This is the page for &quot;{params.slug}&quot; route</p>
    </>
  );
}
