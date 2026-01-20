import ProjectCard from './ProjectCard';

const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'A full-featured e-commerce platform with cart functionality, payment integration, and admin dashboard. Built with modern React patterns and optimized for performance.',
    tech: ['React', 'TypeScript', 'Tailwind', 'Stripe'],
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&auto=format&fit=crop',
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'Task Management App',
    description: 'Collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
    tech: ['Next.js', 'Prisma', 'PostgreSQL', 'Socket.io'],
    image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&auto=format&fit=crop',
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'Analytics Dashboard',
    description: 'Real-time analytics dashboard with interactive charts, data visualization, and customizable widgets for business intelligence.',
    tech: ['React', 'D3.js', 'GraphQL', 'Node.js'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop',
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'Social Media App',
    description: 'Modern social media application with real-time messaging, post sharing, and user authentication. Features a clean and intuitive interface.',
    tech: ['React Native', 'Firebase', 'Redux', 'Expo'],
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&auto=format&fit=crop',
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'Weather Application',
    description: 'Beautiful weather app with location-based forecasts, interactive maps, and hourly/weekly predictions with stunning animations.',
    tech: ['React', 'OpenWeather API', 'Framer Motion', 'PWA'],
    image: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?w=800&auto=format&fit=crop',
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'Portfolio Generator',
    description: 'A tool that helps developers create stunning portfolios in minutes with customizable templates and easy deployment.',
    tech: ['Next.js', 'MDX', 'Vercel', 'Tailwind'],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop',
    liveUrl: '#',
    githubUrl: '#',
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <div className="w-24 h-1 mx-auto rounded-full bg-gradient-to-r from-primary to-secondary mb-6" />
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Hover over the cards to see more details about each project
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className="stagger-item"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <ProjectCard {...project} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
