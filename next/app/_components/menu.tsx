"use client";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";

type Project = {
  _id: string;
  title: string;
  slug: { current: string };
};

const Menu = ({ projects }: { projects: Project[] }) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const isOpen = searchParams.get("menu") === "1";
  const activeTab = searchParams.get("tab") ?? "projects";

  const toggle = () => {
    if (isOpen) {
      router.replace("/", { scroll: false });
    } else {
      router.push(`/?menu=1&tab=${activeTab}`, { scroll: false });
    }
  };

  const setTab = (tab: string) => {
    router.replace(`/?menu=1&tab=${tab}`, { scroll: false });
  };

  return (
    <main className="h-screen relative">
      <button onClick={toggle} className="fixed top-4 right-4 z-50">
        {isOpen ? "x" : "="}
      </button>

      {/* Slideshow / title — always in DOM for SEO */}
      <div
        className="absolute inset-0 flex flex-col items-center justify-center text-[64px]"
        style={{ visibility: isOpen ? "hidden" : "visible" }}
        aria-hidden={isOpen}
      >
        <h1 className="uppercase">Todd Alexander Romano</h1>
        <h2>Interior Design</h2>
        {/* Slideshow Placeholder */}
      </div>

      {/* Menu — always in DOM for SEO */}
      <div
        className="absolute inset-0 overflow-y-auto p-4"
        style={{ visibility: isOpen ? "visible" : "hidden" }}
        aria-hidden={!isOpen}
      >
        <div className="text-center">
          <h1 className="uppercase">Todd Alexander Romano</h1>
          <h2>Interior Design</h2>
        </div>
        <br />
        <div className="flex gap-1 justify-center">
          <button className="cursor-pointer" onClick={() => setTab("projects")}>
            Projects
          </button>
          <button className="cursor-pointer" onClick={() => setTab("profile")}>
            Profile
          </button>
          <button className="cursor-pointer" onClick={() => setTab("contact")}>
            Contact
          </button>
        </div>
        <br />
        {activeTab === "projects" && (
          <ul className="text-center">
            {projects.map((project) => (
              <li key={project._id}>
                <Link href={`/projects/${project.slug.current}`}>
                  {project.title}
                </Link>
              </li>
            ))}
          </ul>
        )}
        {activeTab === "profile" && (
          <div>
            <h3>Profile</h3>
          </div>
        )}
        {activeTab === "contact" && (
          <div>
            <h3>Contact</h3>
          </div>
        )}
      </div>
    </main>
  );
};

export { Menu };
