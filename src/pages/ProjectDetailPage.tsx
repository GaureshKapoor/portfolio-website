import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import SectionLayout from "@/components/SectionLayout";
import { Reveal, RevealItem } from "@/components/Reveal";
import { projects } from "@/components/content/ProjectsContent";

const ProjectDetailPage = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <SectionLayout title="Project Not Found">
        <div className="text-center py-16">
          <p className="text-muted-foreground mb-4">Project not found.</p>
          <button onClick={() => navigate("/projects")} className="text-primary hover:underline">
            Back to Projects
          </button>
        </div>
      </SectionLayout>
    );
  }

  return (
    <SectionLayout title={project.name}>
      <Reveal className="space-y-10">
        <RevealItem>
          <button
            onClick={() => navigate("/projects")}
            className="inline-flex items-center gap-2 font-mono text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            All Projects
          </button>
        </RevealItem>

        <RevealItem>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">{project.name}</h2>
          <p className="font-mono text-xs text-primary mt-2">{project.period}</p>
        </RevealItem>

        <RevealItem>
          <p className="text-[15px] text-foreground/85 leading-relaxed">{project.longDescription}</p>
        </RevealItem>

        <RevealItem>
          <h3 className="font-mono text-sm text-muted-foreground">
            <span className="text-primary"># </span>Tech Stack
          </h3>
          <div className="flex flex-wrap gap-1.5 mt-4">
            {project.tech.map((t) => (
              <span
                key={t}
                className="px-2 py-0.5 text-xs rounded-md bg-secondary text-secondary-foreground font-mono"
              >
                {t}
              </span>
            ))}
          </div>
        </RevealItem>
      </Reveal>
    </SectionLayout>
  );
};

export default ProjectDetailPage;
