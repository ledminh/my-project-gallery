import Link from "next/link";

export default function Home() {
  return (
    <>
      <header>
        <h1 className="bg-slate-600 text-white text-3xl font-bold p-2">
          My Project Gallery
        </h1>
      </header>
      <main>
        <ul className="m-4 border border-slate-600 p-4 rounded-lg">
          {projects.map((project) => (
            <li key={project.slug}>
              <Link
                className="text-blue-500 hover:underline"
                href={`/projects/${project.slug}`}
              >
                {project.title}
              </Link>
            </li>
          ))}
        </ul>
      </main>
    </>
  );
}

const projects = [
  {
    slug: "shop-landing-page-1",
    title: "Shop Landing Page 1",
  },
];
