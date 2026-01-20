import { ExternalLink, Github } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  tech: string[];
  image: string;
  liveUrl?: string;
  githubUrl?: string;
}

const ProjectCard = ({ title, description, tech, image, liveUrl, githubUrl }: ProjectCardProps) => {
  return (
    <div className="flip-card h-80 group">
      <div className="flip-card-inner relative w-full h-full">
        {/* Front Side */}
        <div className="flip-card-front absolute inset-0 glass-card rounded-2xl overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${image})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <h3 className="text-xl font-display font-bold mb-2 group-hover:text-primary transition-colors duration-300">
              {title}
            </h3>
            <div className="flex flex-wrap gap-2">
              {tech.slice(0, 3).map((t) => (
                <span
                  key={t}
                  className="px-2 py-1 text-xs bg-primary/20 text-primary rounded-full"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Back Side */}
        <div className="flip-card-back absolute inset-0 glass-card rounded-2xl p-6 flex flex-col justify-between gradient-border">
          <div>
            <h3 className="text-xl font-display font-bold mb-3 gradient-text">{title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">{description}</p>
            <div className="flex flex-wrap gap-2">
              {tech.map((t) => (
                <span
                  key={t}
                  className="px-2 py-1 text-xs bg-primary/10 text-primary rounded-full"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div className="flex gap-4 mt-4">
            {liveUrl && (
              <a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors group/link"
              >
                <ExternalLink size={16} />
                <span className="animated-underline">Live Demo</span>
              </a>
            )}
            {githubUrl && (
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors group/link"
              >
                <Github size={16} />
                <span className="animated-underline">Source</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
