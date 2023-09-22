import Time from "./Time";

export const dynamicParams = true;
export const revalidate = 60;

export default function Page({ params }: { params: { slug: string } }) {
  const buildTime = Date.now();
  return (
    <div className="flex flex-col lg:flex-row lg:items-center gap-8">
      <div className="flex-1">
        <h1>Page {params.slug}</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam, nam
          itaque, debitis quam commodi alias facilis temporibus qui porro facere
          sit. Sapiente harum error quam unde, ipsum enim at corrupti!
        </p>
      </div>
      <div className="lg:w-[250px] w-full rounded border shadow-sm p-4">
        <p className="font-semibold">Time since last build</p>
        <div className="py-2"></div>
        <Time buildTime={buildTime} />
      </div>
    </div>
  );
}

export function generateStaticParams() {
  return [
    {
      slug: "1",
    },
    {
      slug: "2",
    },
    {
      slug: "3",
    },
  ];
}
