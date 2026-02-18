import { Suspense } from "react";
import { client } from "../lib/sanity";
import { Menu } from "./_components/menu";

type Project = {
  _id: string;
  title: string;
  slug: { current: string };
};

export default async function Home() {
  const projects = await client.fetch<Project[]>(
    `*[_type == "projects" && defined(slug.current)] | order(_createdAt desc) {_id, title, slug}`,
  );

  return (
    <Suspense>
      <Menu projects={projects} />
    </Suspense>
  );
}
