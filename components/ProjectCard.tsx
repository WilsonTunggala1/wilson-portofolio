import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/data/projects";

export default function ProjectCard({ project }: { project: Project }) {
  return <article className="project-card">
    {project.image && <a href={project.repository} target="_blank" rel="noopener noreferrer" className="project-image">
      <Image src={project.image.src} alt={project.image.alt} width={900} height={560} sizes="(max-width: 640px) 100vw, 460px" />
    </a>}
    <h3>{project.title}</h3>
    <p>{project.description}</p>
    <p className="project-detail">{project.detail}</p>
    <p className="project-technologies"><span className="sr-only">Technologies: </span>{project.tags.join(" · ")}</p>
    <a className="project-link" href={project.repository} target="_blank" rel="noopener noreferrer">View on GitHub <ArrowUpRight size={14}/><span className="sr-only">: {project.title} (opens in a new tab)</span></a>
  </article>;
}
