import { Github, Linkedin, Twitter, Heart } from 'lucide-react';

const socialLinks = [
  { icon: Github, href: 'https://github.com/omsoni555', label: 'GitHub' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/omsonii/', label: 'LinkedIn' },
  { icon: Twitter, href: 'https://x.com/OmSoni7692', label: 'Twitter' },
];

const Footer = () => {
  return (
    <footer className="py-8 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-muted-foreground">
            <Heart size={16} className="text-red-500 animate-pulse" fill="currentColor" />
            <span>Made by</span>
            <span className="gradient-text font-semibold">Om Prakash Soni</span>
          </div>

          <div className="flex items-center gap-4">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                className="w-10 h-10 rounded-full glass-card flex items-center justify-center text-muted-foreground hover:text-primary hover:glow-border transition-all duration-300 hover-scale"
                aria-label={label}
              >
                <Icon size={18} />
              </a>
            ))}
          </div>

          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
