// components/featured-projects.tsx
import { projects } from "@/data/projects";
import Image from "next/image";
import Link from "next/link";

export default function FeaturedProjects() {
  const featured = projects.filter((p) => p.featured).slice(0, 2);

  return (
    <section id="featured" className="mx-auto max-w-3xl py-20">
      <h2 className="font-bold mb-10 font-calistoga text-3xl">featured projects</h2>

      <div className="grid gap-10 md:grid-cols-2">
        {featured.map((project) => (
          <div
            key={project.id}
            className="bg-muted rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow"
          >
            <Image
              src={project.image}
              alt={project.title}
              width={500}
              height={300}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-sm text-muted-foreground mb-4">{project.description}</p>
              <Link
                href={project.link || "#"}
                className="text-primary underline text-sm hover:text-primary/80"
              >
                View Project →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
