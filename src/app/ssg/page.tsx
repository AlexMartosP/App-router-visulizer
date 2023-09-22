import ClickButton from "@/components/ClickButton";

export default async function Page() {
  const date = await (
    await fetch("http://worldtimeapi.org/api/timezone/Europe/Stockholm")
  ).json();

  const time = new Date(date.datetime);

  return (
    <>
      <h1>Static data (SSG)</h1>
      <p className="mt-4">
        This page uses data that will not change very often or at all.
      </p>
      <p>Try reloading and watch the date and time stay the same</p>
      <ul className="list-disc pl-4 mt-2" role="list">
        <li>This is the standard rendering method for NEXT.js</li>
        <li>HTML, data and RSC payload are cached</li>
        <li>
          You have to use a dynamic function or opt-out/revalidate to
          dynamically render
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
