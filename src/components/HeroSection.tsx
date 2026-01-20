import { useEffect, useState } from 'react';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from './ui/button';

const roles = ['Frontend Developer', 'React Specialist', 'UI/UX Enthusiast', 'Web Innovator'];

const HeroSection = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const role = roles[currentRole];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (displayText.length < role.length) {
            setDisplayText(role.slice(0, displayText.length + 1));
          } else {
            setTimeout(() => setIsDeleting(true), 2000);
          }
        } else {
          if (displayText.length > 0) {
            setDisplayText(displayText.slice(0, -1));
          } else {
            setIsDeleting(false);
            setCurrentRole((prev) => (prev + 1) % roles.length);
          }
        }
      },
      isDeleting ? 50 : 100
    );
    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentRole]);

  const scrollToProjects = () => {
    document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-grid"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl float-animation" />
        <div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary/10 rounded-full blur-3xl float-animation"
          style={{ animationDelay: '-3s' }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <p
            className="text-primary font-medium mb-4 opacity-0 animate-fade-in"
            style={{ animationDelay: '0.2s' }}
          >
            Hello, I'm
          </p>

          <h1
            className="text-5xl md:text-7xl lg:text-8xl font-display font-bold mb-6 opacity-0 animate-fade-in"
            style={{ animationDelay: '0.4s' }}
          >
            <span className="gradient-text">John Doe</span>
          </h1>

          <div
            className="text-2xl md:text-3xl text-muted-foreground mb-8 h-12 opacity-0 animate-fade-in"
            style={{ animationDelay: '0.6s' }}
          >
            <span className="typing-cursor">{displayText}</span>
          </div>

          <p
            className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10 opacity-0 animate-fade-in"
            style={{ animationDelay: '0.8s' }}
          >
            Crafting beautiful, responsive, and performant web experiences with
            modern technologies. Passionate about clean code and pixel-perfect designs.
          </p>

          <div
            className="flex flex-wrap items-center justify-center gap-4 mb-12 opacity-0 animate-fade-in"
            style={{ animationDelay: '1s' }}
          >
            <Button
              onClick={scrollToProjects}
              className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 text-lg font-semibold hover-glow"
            >
              View My Work
            </Button>
            <Button
              variant="outline"
              className="border-primary text-primary hover:bg-primary/10 px-8 py-6 text-lg font-semibold gradient-border"
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get In Touch
            </Button>
          </div>

          <div
            className="flex items-center justify-center gap-6 opacity-0 animate-fade-in"
            style={{ animationDelay: '1.2s' }}
          >
            {[
              { icon: Github, href: '#', label: 'GitHub' },
              { icon: Linkedin, href: '#', label: 'LinkedIn' },
              { icon: Mail, href: '#contact', label: 'Email' },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                className="w-12 h-12 rounded-full glass-card flex items-center justify-center text-muted-foreground hover:text-primary hover:glow-border transition-all duration-300 hover-scale"
                aria-label={label}
              >
                <Icon size={22} />
              </a>
            ))}
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce-subtle">
          <ArrowDown className="text-primary" size={28} />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
