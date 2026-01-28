import { useEffect, useRef, useState } from 'react';

const skills = [
  { name: 'HTML', level: 95, color: 'from-blue-500 to-primary' },
  { name: 'React', level: 95, color: 'from-primary to-cyan-400' },
  { name: 'TypeScript', level: 90, color: 'from-blue-500 to-primary' },
  { name: 'JavaScript', level: 95, color: 'from-yellow-500 to-orange-500' },
  { name: 'CSS/Tailwind', level: 90, color: 'from-primary to-secondary' },
  { name: 'Next.js', level: 85, color: 'from-gray-500 to-foreground' },
];

const technologies = [
   'HTML5', 'CSS3','JavaScript', 'React', 'TypeScript', 'Tailwind CSS', 'Next.js', 'Redux', 'Git', 'REST APIs', 
];

const SkillsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="py-24 relative" ref={sectionRef}>
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
              My <span className="gradient-text">Skills</span>
            </h2>
            <div className="w-24 h-1 mx-auto rounded-full bg-gradient-to-r from-primary to-secondary" />
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Skill Bars */}
            <div className="space-y-6">
              <h3 className="text-2xl font-display font-semibold mb-6">Expertise Level</h3>
              {skills.map(({ name, level, color }, index) => (
                <div key={name} className="group">
                  <div className="flex justify-between mb-2">
                    <span className="font-medium group-hover:text-primary transition-colors duration-300">
                      {name}
                    </span>
                    <span className="text-muted-foreground">{level}%</span>
                  </div>
                  <div className="skill-bar h-3">
                    <div
                      className={`skill-bar-fill bg-gradient-to-r ${color}`}
                      style={{
                        width: isVisible ? `${level}%` : '0%',
                        transitionDelay: `${index * 0.1}s`,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Technology Tags */}
            <div>
              <h3 className="text-2xl font-display font-semibold mb-6">Technologies I Use</h3>
              <div className="flex flex-wrap gap-3">
                {technologies.map((tech, index) => (
                  <span
                    key={tech}
                    className="px-4 py-2 glass-card rounded-full text-sm font-medium hover:bg-primary/20 hover:text-primary cursor-pointer transition-all duration-300 hover-scale stagger-item"
                    style={{
                      animationDelay: isVisible ? `${index * 0.05}s` : '0s',
                      opacity: isVisible ? 1 : 0,
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
