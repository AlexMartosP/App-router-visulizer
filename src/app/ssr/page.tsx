import InlineCode from "@/components/InlineCode";

export default async function Page() {
  const date = await (
    await fetch("http://worldtimeapi.org/api/timezone/Europe/Stockholm", {
      cache: "no-store",
    })
  ).json();

  const time = new Date(date.datetime);

  return (
    <>
      <h1>Dynamic data (SSR)</h1>
      <p className="mt-4">
        This page uses data that we do not want to cache, for that this page wil
        render per-request.
      </p>
      <p>Try reloading and watch the date and time stay the same</p>
      <p className="mt-2">To use SSR you have to:</p>
      <ul className="list-disc pl-4" role="list">
        <li>Use a dynamic function.</li>
        <li>Opt-out or revalidate in route segment config.</li>
        <li>
          Change cache or revalidtion in&nbsp;
          <InlineCode>fetch()</InlineCode>.
        </li>
      </ul>
      <div className="py-4"></div>
      <div>
        <p>Date and time when this was built: </p>
        <p>
          {Intl.DateTimeFormat("se-sv", {
            dateStyle: "short",
            timeStyle: "short",
          }).format(time)}
        </p>
      </div>
    </>
  );
}
