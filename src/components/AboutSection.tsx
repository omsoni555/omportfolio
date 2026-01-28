import { Code2, Palette, Zap, Users } from 'lucide-react';

const highlights = [
  {
    icon: Code2,
    title: 'Clean Code',
    description: 'Writing maintainable, scalable, and efficient code following best practices.',
  },
  {
    icon: Palette,
    title: 'Creative Design',
    description: 'Transforming ideas into visually stunning and intuitive interfaces.',
  },
  {
    icon: Zap,
    title: 'Performance',
    description: 'Optimizing for speed and delivering lightning-fast experiences.',
  },
  {
    icon: Users,
    title: 'User Focused',
    description: 'Building with accessibility and user experience as top priorities.',
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
              About <span className="gradient-text">Me</span>
            </h2>
            <div className="w-24 h-1 mx-auto rounded-full bg-gradient-to-r from-primary to-secondary" />
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Profile Card */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500" />
              <div className="relative glass-card rounded-2xl p-8 hover-glow">
                <div className="aspect-square rounded-xl overflow-hidden mb-6 gradient-border">
                  <div className="w-full h-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                    <span className="text-8xl">👨‍💻</span>
                  </div>
                </div>
                <h3 className="text-2xl font-display font-bold mb-2">Om Prakash Soni</h3>
                <p className="text-primary mb-4">Frontend Developer</p>
                <p className="text-muted-foreground leading-relaxed">
                  Frontend Web Developer with 1 year of hands-on experience in building responsive, user-friendly web applications. Skilled in HTML, CSS, JavaScript, TypeScript, React.js, Next.js and modern UI libraries.Experienced in integrating REST APIs, and optimizing performance. Passionate about writing clean code, learning new technologies, and delivering high-quality user experiences.
                </p>
              </div>
            </div>

            {/* Highlights Grid */}
            <div className="grid sm:grid-cols-2 gap-6">
              {highlights.map(({ icon: Icon, title, description }, index) => (
                <div
                  key={title}
                  className="glass-card rounded-xl p-6 hover-glow group cursor-pointer stagger-item"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                    <Icon className="text-primary" size={28} />
                  </div>
                  <h4 className="text-lg font-display font-semibold mb-2 group-hover:text-primary transition-colors duration-300">
                    {title}
                  </h4>
                  <p className="text-muted-foreground text-sm">{description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
