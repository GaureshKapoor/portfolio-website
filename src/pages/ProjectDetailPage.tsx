import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";
import SectionLayout from "@/components/SectionLayout";
import { projects } from "@/components/content/ProjectsContent";
import StaggerChildren, { staggerItem } from "@/components/StaggerChildren";

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
            ← Back to Projects
          </button>
        </div>
      </SectionLayout>
    );
  }

  return (
    <SectionLayout title={project.name}>
      <StaggerChildren className="space-y-8 max-w-2xl">
        <motion.button
          variants={staggerItem}
          onClick={() => navigate("/projects")}
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          All Projects
        </motion.button>

        <motion.div variants={staggerItem}>
          <h2 className="text-3xl font-bold text-foreground mb-1">{project.name}</h2>
          <p className="font-mono text-sm text-muted-foreground">{project.period}</p>
        </motion.div>

        <motion.div variants={staggerItem}>
          <p className="text-muted-foreground leading-relaxed">{project.longDescription}</p>
        </motion.div>

        <motion.div variants={staggerItem}>
          <h3 className="text-sm font-semibold text-foreground mb-3 font-mono">
            <span className="text-primary/60">#</span> Tech Stack
          </h3>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <span key={t} className="px-3 py-1 text-sm rounded-md bg-secondary text-secondary-foreground border border-border font-mono">
                {t}
              </span>
            ))}
          </div>
        </motion.div>
      </StaggerChildren>
    </SectionLayout>
  );
};

export default ProjectDetailPage;
