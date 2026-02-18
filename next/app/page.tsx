import Link from 'next/link'
import {client} from '../lib/sanity'

type Project = {
  _id: string
  title: string
  slug: {current: string}
}

export default async function Home() {
  const projects = await client.fetch<Project[]>(
    `*[_type == "projects" && defined(slug.current)] | order(_createdAt desc) {_id, title, slug}`
  )

  return (
    <ul>
      {projects.map((project) => (
        <li key={project._id}>
          <Link href={`/projects/${project.slug.current}`}>{project.title}</Link>
        </li>
      ))}
    </ul>
  )
}
