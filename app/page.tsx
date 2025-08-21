'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import emailjs from '@emailjs/browser';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import Image from 'next/image';
import { ThemeToggle } from '@/components/theme-toggle';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { 
  Download, 
  Mail, 
  Phone, 
  Linkedin, 
  Github, 
  ExternalLink,
  Code,
  Palette,
  Users,
  Calendar,
  MapPin,
  GraduationCap,
  Award,
  ChevronDown,
  Sparkles,
  Zap,
  Star,
  Cpu,
  Database,
  Globe,
  Layers,
  Terminal,
  Braces,
  FileCode,
  Smartphone,
  Server,
  Cloud,
  Wrench,
  Brain,
  Lightbulb,
  Rocket
} from 'lucide-react';

// Animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const scaleIn = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.5, ease: "easeOut" }
};

const slideInLeft = {
  initial: { opacity: 0, x: -60 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.6, ease: "easeOut" }
};

const slideInRight = {
  initial: { opacity: 0, x: 60 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.6, ease: "easeOut" }
};

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('home');
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'services', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 80; // Account for fixed navbar
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  const downloadCV = () => {
    const link = document.createElement('a');
    link.href = '/Kirtankumar_CV.pdf';
    link.download = 'Kirtankumar_Panchal_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const openEmail = () => {
    const email = 'kirtan.2082006@gmail.com';
    const subject = 'Hello Kirtankumar';
    const body = 'Hi Kirtankumar,%0D%0A%0D%0AI hope this message finds you well. I would like to connect with you.';
    
    window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${encodeURIComponent(subject)}&body=${body}`, '_blank');
  };

  const openWhatsApp = () => {
    window.open('https://wa.me/918780092234?text=Hello%20Kirtankumar', '_blank');
  };

  const openLinkedIn = () => {
    window.open('https://www.linkedin.com/in/kirtan-panchal-309760320/', '_blank');
  };

  const openGitHub = () => {
    window.open('https://github.com/kirtan597', '_blank');
  };

  const skills = {
    languages: [
      { name: 'JavaScript', icon: FileCode, color: 'from-yellow-400 to-yellow-600' },
      { name: 'C++', icon: Terminal, color: 'from-blue-500 to-blue-700' },
      { name: 'HTML', icon: Globe, color: 'from-orange-400 to-orange-600' },
      { name: 'CSS', icon: Palette, color: 'from-blue-400 to-blue-600' }
    ],
    frontend: [
      { name: 'React.js', icon: Cpu, color: 'from-cyan-400 to-cyan-600' },
      { name: 'Responsive Design', icon: Smartphone, color: 'from-green-400 to-green-600' },
      { name: 'UI/UX Basics', icon: Layers, color: 'from-purple-400 to-purple-600' }
    ],
    backend: [
      { name: 'Node.js', icon: Server, color: 'from-green-500 to-green-700' },
      { name: 'REST APIs', icon: Cloud, color: 'from-indigo-400 to-indigo-600' },
      { name: 'MongoDB', icon: Database, color: 'from-emerald-400 to-emerald-600' }
    ],
    tools: [
      { name: 'VS Code', icon: Code, color: 'from-blue-500 to-blue-700' },
      { name: 'Dev C++', icon: Wrench, color: 'from-gray-500 to-gray-700' }
    ],
    concepts: [
      { name: 'DSA', icon: Brain, color: 'from-pink-400 to-pink-600' },
      { name: 'Logic Building', icon: Lightbulb, color: 'from-yellow-400 to-yellow-600' },
      { name: 'Server Management', icon: Rocket, color: 'from-red-400 to-red-600' }
    ]
  };

  const projects = [
    {
      title: '🛍 E-Commerce Shopping Website',
      description: 'Full-featured e-commerce platform with user authentication, admin dashboard, and real-time cart management.',
      techStack: ['React.js', 'Node.js', 'MongoDB'],
      features: [
        'Responsive layout with modern UI',
        'JWT-based authentication system',
        'Admin dashboard for product management',
        'Dynamic routing and navigation',
        'Real-time cart and discount logic'
      ],
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
      github: 'github.com/kirtan597/E-commerce-Full-Stack-',
      demo: 'https://kpcart.netlify.app/'
    },
    {
      title: '🎞 Movie Collection Platform',
      description: 'Dual-section platform for managing movie and music collections with advanced search and filtering.',
      techStack: ['React.js', 'Figma-inspired UI'],
      features: [
        'Dual sections for movies and music',
        'Advanced search and genre filtering',
        'Infinite scroll with smooth transitions',
        'Detailed modal views for content',
        'Fully responsive animated layout'
      ],
      image: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=800',
      github: 'github.com/kirtan597/MoviesHub',
      demo: 'https://kpxhub.netlify.app/'
    }
  ];

  const services = [
    {
      icon: <Code className="h-8 w-8" />,
      title: 'Custom Web Development',
      description: 'Build responsive, clean UI-based websites using modern web technologies like HTML, CSS, JavaScript, and React.'
    },
    {
      icon: <Palette className="h-8 w-8" />,
      title: 'UI/UX Design & Enhancement',
      description: 'Design modern, user-friendly interfaces or enhance existing ones with contemporary design principles.'
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: 'Project Collaboration',
      description: 'Open to freelance opportunities and academic/creative teamwork on innovative software projects.'
    }
  ];

  // Component for animated sections
  const AnimatedSection = React.memo(({ children, className = "" }: { children: React.ReactNode, className?: string }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    
    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 75 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 75 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={className}
      >
        {children}
      </motion.div>
    );
  });
  
  AnimatedSection.displayName = 'AnimatedSection';

  // Contact form component
  const ContactForm = React.memo(() => {
    const [localFormData, setLocalFormData] = React.useState({
      name: '',
      email: '',
      message: ''
    });
    const [localSubmitting, setLocalSubmitting] = React.useState(false);
    const [localStatus, setLocalStatus] = React.useState<'idle' | 'success' | 'error'>('idle');

    const handleLocalChange = React.useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target;
      setLocalFormData(prev => ({ ...prev, [name]: value }));
    }, []);

    const handleLocalSubmit = React.useCallback(async (e: React.FormEvent) => {
      e.preventDefault();
      setLocalSubmitting(true);
      setLocalStatus('idle');

      try {
        emailjs.init("It5AZUzGJMVz622IT");
        
        const templateParams = {
          from_name: localFormData.name,
          from_email: localFormData.email,
          message: localFormData.message,
          to_name: 'Kirtankumar',
        };

        await emailjs.send('service_zgz8yxk', 'template_5pox2yi', templateParams);
        setLocalStatus('success');
        setLocalFormData({ name: '', email: '', message: '' });
      } catch (error) {
        console.error('EmailJS error:', error);
        setLocalStatus('error');
      } finally {
        setLocalSubmitting(false);
      }
    }, [localFormData]);

    return (
      <form onSubmit={handleLocalSubmit} className="space-y-6">
        <div>
          <Label htmlFor="name" className="text-gray-700 dark:text-gray-300">Name</Label>
          <Input 
            id="name" 
            name="name"
            value={localFormData.name}
            onChange={handleLocalChange}
            placeholder="Your name" 
            className="mt-1 bg-white/50 dark:bg-gray-800/50 border-2 border-blue-300 dark:border-blue-600 text-gray-800 dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:border-purple-500 dark:focus:border-purple-400 hover:border-teal-400 dark:hover:border-teal-500 transition-colors duration-300"
            required
          />
        </div>
        <div>
          <Label htmlFor="email" className="text-gray-700 dark:text-gray-300">Email</Label>
          <Input 
            id="email" 
            name="email"
            value={localFormData.email}
            onChange={handleLocalChange}
            type="email" 
            placeholder="your.email@example.com" 
            className="mt-1 bg-white/50 dark:bg-gray-800/50 border-2 border-blue-300 dark:border-blue-600 text-gray-800 dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:border-purple-500 dark:focus:border-purple-400 hover:border-teal-400 dark:hover:border-teal-500 transition-colors duration-300"
            required
          />
        </div>
        <div>
          <Label htmlFor="message" className="text-gray-700 dark:text-gray-300">Message</Label>
          <Textarea 
            id="message" 
            name="message"
            value={localFormData.message}
            onChange={handleLocalChange}
            placeholder="Your message..." 
            className="mt-1 min-h-[120px] bg-white/50 dark:bg-gray-800/50 border-gray-200 dark:border-gray-600 text-gray-800 dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:border-blue-500 dark:focus:border-blue-400 resize-none"
            required
          />
        </div>
        
        {localStatus === 'success' && (
          <div className="p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg text-green-700 dark:text-green-400">
            ✅ Message sent successfully! I'll get back to you soon.
          </div>
        )}
        
        {localStatus === 'error' && (
          <div className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg text-red-700 dark:text-red-400">
            ❌ Failed to send message. Please try again or contact me directly.
          </div>
        )}
        
        <Button 
          type="submit" 
          disabled={localSubmitting}
          className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 dark:from-blue-500 dark:to-purple-500 dark:hover:from-blue-600 dark:hover:to-purple-600 text-white border-0 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {localSubmitting ? (
            <>
              <div className="mr-2 h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
              Sending...
            </>
          ) : (
            <>
              <Zap className="mr-2 h-4 w-4" />
              Send Message
            </>
          )}
        </Button>
      </form>
    );
  });
  
  ContactForm.displayName = 'ContactForm';

  return (
    <div className="min-h-screen relative overflow-hidden scroll-smooth">
      {/* Animated Network Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-teal-900 dark:from-black dark:via-slate-900 dark:to-blue-950">
        {/* Animated particles */}
        {Array.from({ length: 80 }).map((_, i) => {
          const x = Math.random() * 100;
          const y = Math.random() * 100;
          return (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-cyan-400 dark:bg-blue-300 rounded-full shadow-lg shadow-cyan-400/50 dark:shadow-blue-300/50"
              style={{ left: `${x}%`, top: `${y}%` }}
              animate={{
                x: [0, Math.random() * 100 - 50, 0],
                y: [0, Math.random() * 100 - 50, 0],
                opacity: [0.3, 1, 0.3],
                scale: [0.5, 1.5, 0.5],
              }}
              transition={{
                duration: 8 + Math.random() * 12,
                repeat: Infinity,
                ease: "linear",
                delay: Math.random() * 5,
              }}
            />
          );
        })}
        
        {/* Flowing connection lines */}
        {Array.from({ length: 15 }).map((_, i) => (
          <motion.div
            key={`line-${i}`}
            className="absolute h-px bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent dark:via-blue-300/30"
            style={{
              left: '0%',
              top: `${Math.random() * 100}%`,
              width: '100%',
            }}
            animate={{
              opacity: [0, 0.6, 0],
              scaleX: [0, 1, 0],
            }}
            transition={{
              duration: 4 + Math.random() * 6,
              repeat: Infinity,
              delay: Math.random() * 8,
            }}
          />
        ))}
        
        {/* Glowing network nodes */}
        {Array.from({ length: 6 }).map((_, i) => (
          <motion.div
            key={`orb-${i}`}
            className="absolute w-32 h-32 bg-gradient-radial from-cyan-400/20 via-blue-500/10 to-transparent dark:from-blue-300/20 dark:via-cyan-500/10 rounded-full blur-xl"
            style={{
              left: `${Math.random() * 80 + 10}%`,
              top: `${Math.random() * 80 + 10}%`,
            }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.3, 0.7, 0.3],
              x: [0, Math.random() * 200 - 100, 0],
              y: [0, Math.random() * 200 - 100, 0],
            }}
            transition={{
              duration: 15 + Math.random() * 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
      
      {/* Content overlay */}
      <div className="absolute inset-0 bg-white/5 dark:bg-black/20 backdrop-blur-[1px]"></div>

      {/* Navigation */}
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="fixed top-0 left-0 right-0 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl z-50 shadow-lg shadow-blue-500/20 transition-colors duration-300"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="font-bold text-xl bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent"
            >
              Kirtankumar
            </motion.div>
            <div className="flex items-center space-x-4 md:space-x-8">
              {/* Mobile Menu Button */}
              <motion.button
                className="md:hidden p-2 rounded-lg bg-white/10 backdrop-blur-sm border border-blue-300/30"
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveSection(activeSection === 'menu' ? 'home' : 'menu')}
              >
                <div className="w-5 h-5 flex flex-col justify-center space-y-1">
                  <motion.div 
                    className="w-full h-0.5 bg-blue-600 dark:bg-blue-400"
                    animate={{ rotate: activeSection === 'menu' ? 45 : 0, y: activeSection === 'menu' ? 6 : 0 }}
                  />
                  <motion.div 
                    className="w-full h-0.5 bg-blue-600 dark:bg-blue-400"
                    animate={{ opacity: activeSection === 'menu' ? 0 : 1 }}
                  />
                  <motion.div 
                    className="w-full h-0.5 bg-blue-600 dark:bg-blue-400"
                    animate={{ rotate: activeSection === 'menu' ? -45 : 0, y: activeSection === 'menu' ? -6 : 0 }}
                  />
                </div>
              </motion.button>

              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center space-x-8">
                {['home', 'about', 'skills', 'projects', 'services', 'contact'].map((section) => (
                  <motion.button
                    key={section}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => scrollToSection(section)}
                    className={`capitalize transition-colors duration-200 ${
                      activeSection === section 
                        ? 'text-blue-600 dark:text-blue-400 font-medium' 
                        : 'text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
                    }`}
                  >
                    {section}
                  </motion.button>
                ))}
              </div>
              
              <div className="ml-4">
                <ThemeToggle />
              </div>
            </div>
          </div>
        </div>
        
        {/* Mobile Menu */}
        <motion.div
          className="md:hidden absolute top-full left-0 right-0 bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl shadow-lg"
          initial={{ height: 0, opacity: 0 }}
          animate={{ 
            height: activeSection === 'menu' ? 'auto' : 0, 
            opacity: activeSection === 'menu' ? 1 : 0 
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          style={{ overflow: 'hidden' }}
        >
          <div className="px-4 py-6 space-y-4">
            {['home', 'about', 'skills', 'projects', 'services', 'contact'].map((section, index) => (
              <motion.button
                key={section}
                initial={{ x: -20, opacity: 0 }}
                animate={{ 
                  x: activeSection === 'menu' ? 0 : -20, 
                  opacity: activeSection === 'menu' ? 1 : 0 
                }}
                transition={{ delay: index * 0.1, duration: 0.3 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  scrollToSection(section);
                  setActiveSection(section);
                }}
                className="block w-full text-left px-4 py-3 rounded-lg capitalize text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-200"
              >
                {section}
              </motion.button>
            ))}
          </div>
        </motion.div>
      </motion.nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16 md:pt-20">
        <div className="w-full max-w-7xl mx-auto relative">
          {/* Expanded Hero Container */}
          <div className="relative min-h-[600px] rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-900 dark:via-purple-900/50 dark:to-slate-900 border-4 border-blue-400 dark:border-blue-600">
            
            {/* Background Pattern */}
            <motion.div
              animate={{ 
                backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
              }}
              transition={{ 
                duration: 20, 
                repeat: Infinity, 
                ease: "linear" 
              }}
              className="absolute inset-0 opacity-5 dark:opacity-10"
              style={{
                backgroundImage: `
                  linear-gradient(45deg, transparent 40%, rgba(59, 130, 246, 0.1) 50%, transparent 60%),
                  linear-gradient(-45deg, transparent 40%, rgba(139, 92, 246, 0.1) 50%, transparent 60%)
                `,
                backgroundSize: '40px 40px'
              }}
            />

            {/* Left Side - Abstract Shapes & Code Elements */}
            <div className="absolute left-0 top-0 w-1/3 h-full flex flex-col justify-center items-center space-y-8 p-8">
              {/* Large Code Symbol */}
              <motion.div
                animate={{ 
                  rotate: [0, 5, -5, 0],
                  scale: [1, 1.1, 1]
                }}
                transition={{ duration: 4, repeat: Infinity }}
                className="text-6xl font-mono font-bold text-blue-500/20 dark:text-blue-400/30"
              >
                {'</>'}
              </motion.div>

              {/* Abstract Geometric Shapes */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="w-24 h-24 border-4 border-purple-500/20 dark:border-purple-400/30 rounded-lg"
              />

              {/* Floating Tech Icons */}
              <div className="space-y-4">
                {['AI', 'ML', 'JS'].map((tech, index) => (
                  <motion.div
                    key={tech}
                    animate={{
                      y: [0, -10, 0],
                      opacity: [0.3, 0.7, 0.3],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: index * 0.5,
                    }}
                    className="px-3 py-1 bg-gradient-to-r from-blue-500/10 to-purple-500/10 dark:from-blue-400/20 dark:to-purple-400/20 rounded-full text-sm font-mono text-blue-600 dark:text-blue-400 border border-blue-500/20 dark:border-blue-400/30"
                  >
                    {tech}
                  </motion.div>
                ))}
              </div>

              {/* Code Snippet */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1 }}
                className="bg-gray-900/5 dark:bg-gray-800/20 rounded-lg p-3 font-mono text-xs text-gray-600 dark:text-gray-400 border border-gray-200/50 dark:border-gray-700/50"
              >
                <div className="text-blue-500">const</div>
                <div className="text-purple-500">developer</div>
                <div className="text-green-500">= "Kirtankumar"</div>
              </motion.div>
            </div>

            {/* Center - Profile Photo */}
            <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                whileHover={{ scale: 1.05 }}
                className="relative"
              >
                {/* Animated Border */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 w-80 h-80 rounded-full"
                  style={{
                    background: 'conic-gradient(from 0deg, #3B82F6, #8B5CF6, #06B6D4, #10B981, #3B82F6)',
                    padding: '4px',
                  }}
                >
                  <div className="w-full h-full rounded-full bg-white dark:bg-gray-900" />
                </motion.div>
                
                {/* Large Circular Profile Image */}
                <div className="relative w-80 h-80 mx-auto">
                  <Image
                    src="/WhatsApp Image 2025-07-08 at 10.15.30_4cac4a67.jpg"
                    alt="Panchal Kirtankumar"
                    width={320}
                    height={320}
                    className="w-full h-full object-cover rounded-full"
                  />
                  
                  {/* Status Indicator */}
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute bottom-8 right-8 w-8 h-8 bg-green-500 rounded-full border-4 border-white dark:border-gray-900 shadow-lg"
                  />
                </div>

                {/* Orbital Rings */}
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 w-96 h-96 border-2 border-dashed border-blue-500/20 dark:border-blue-400/30 rounded-full"
                  style={{ left: '-32px', top: '-32px' }}
                />
                
                {/* Additional Orbital Ring */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 w-[28rem] h-[28rem] border border-dashed border-purple-500/15 dark:border-purple-400/25 rounded-full"
                  style={{ left: '-56px', top: '-56px' }}
                />
              </motion.div>
            </div>

            {/* Right Side - Tech Patterns & Skills */}
            <div className="absolute right-0 top-0 w-1/3 h-full flex flex-col justify-center items-center space-y-8 p-8">
              {/* Large Bracket Symbol */}
              <motion.div
                animate={{ 
                  rotate: [0, -5, 5, 0],
                  scale: [1, 1.1, 1]
                }}
                transition={{ duration: 4, repeat: Infinity, delay: 2 }}
                className="text-6xl font-mono font-bold text-purple-500/20 dark:text-purple-400/30"
              >
                {'{}'}
              </motion.div>

              {/* Hexagonal Pattern */}
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="w-24 h-24 border-4 border-teal-500/20 dark:border-teal-400/30"
                style={{
                  clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)',
                }}
              />

              {/* Floating Skill Tags */}
              <div className="space-y-4">
                {['React', 'Node.js', 'MongoDB'].map((skill, index) => (
                  <motion.div
                    key={skill}
                    animate={{
                      y: [0, -10, 0],
                      opacity: [0.3, 0.7, 0.3],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: index * 0.5 + 1,
                    }}
                    className="px-3 py-1 bg-gradient-to-r from-purple-500/10 to-teal-500/10 dark:from-purple-400/20 dark:to-teal-400/20 rounded-full text-sm font-mono text-purple-600 dark:text-purple-400 border border-purple-500/20 dark:border-purple-400/30"
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>

              {/* Binary Pattern */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.5 }}
                className="bg-gray-900/5 dark:bg-gray-800/20 rounded-lg p-3 font-mono text-xs text-gray-600 dark:text-gray-400 border border-gray-200/50 dark:border-gray-700/50"
              >
                <div>1010 1100</div>
                <div>0110 1001</div>
                <div>1001 0110</div>
              </motion.div>
            </div>

            {/* Floating Particles Throughout */}
            {Array.from({ length: 12 }).map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-30"
                style={{
                  left: `${10 + Math.random() * 80}%`,
                  top: `${10 + Math.random() * 80}%`,
                }}
                animate={{
                  y: [0, -20, 0],
                  opacity: [0.2, 0.6, 0.2],
                  scale: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 4 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                }}
              />
            ))}
          </div>

          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-center mt-12"
          >
            <motion.h1 
              className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 gradient-text"
              {...fadeInUp}
            >
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 dark:from-blue-400 dark:via-purple-400 dark:to-teal-400 bg-clip-text text-transparent">
                Panchal Kirtankumar
              </span>
              <span className="block text-xl sm:text-2xl lg:text-3xl text-blue-600 dark:text-blue-400 mt-2 font-normal">
                Software Developer | AI & Web Enthusiast
              </span>
            </motion.h1>
            
            <motion.p 
              className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed"
              {...fadeInUp}
              transition={{ delay: 0.2 }}
            >
              Passionate Computer Science student specializing in AI/ML, building intelligent web solutions 
              and creating exceptional user experiences through modern technology.
            </motion.p>

            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
              {...fadeInUp}
              transition={{ delay: 0.4 }}
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button 
                  onClick={() => scrollToSection('contact')} 
                  size="lg" 
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 dark:from-blue-500 dark:to-purple-500 dark:hover:from-blue-600 dark:hover:to-purple-600 text-white border-0 shadow-lg"
                >
                  <Mail className="mr-2 h-5 w-5" />
                  Contact Me
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button 
                  onClick={downloadCV}
                  variant="outline" 
                  size="lg"
                  className="border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 backdrop-blur-sm bg-white/50 dark:bg-gray-800/50"
                >
                  <Download className="mr-2 h-5 w-5" />
                  Download Resume
                </Button>
              </motion.div>
            </motion.div>

            <motion.button 
              onClick={() => scrollToSection('about')}
              className="text-gray-400 dark:text-gray-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <ChevronDown className="h-8 w-8" />
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 md:py-20 px-4 relative">
        <div className="max-w-6xl mx-auto relative z-10">
          <AnimatedSection>
            <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                About Me
              </span>
            </h2>
          </AnimatedSection>
          
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <AnimatedSection>
              <motion.div whileHover={{ y: -5 }}>
                <Card className="p-8 shadow-xl bg-white/70 dark:bg-gray-800/70 backdrop-blur-xl border-2 border-blue-300 dark:border-blue-600 hover:border-purple-400 dark:hover:border-purple-500 transition-colors duration-300">
                  <CardContent className="p-0">
                    <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                      I am a dedicated and enthusiastic Software Developer, currently pursuing a B.Tech in Computer Science and Engineering (CSE) with a specialization in Artificial Intelligence and Machine Learning (AIML) at Rai University, Ahmedabad.
                    </p>
                    <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                      With a strong interest in building intelligent and efficient software solutions, I focus on developing skills in programming, machine learning, and real-world problem-solving.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </AnimatedSection>

            <AnimatedSection>
              <motion.div whileHover={{ y: -5 }}>
                <Card className="p-8 shadow-xl bg-white/70 dark:bg-gray-800/70 backdrop-blur-xl border-2 border-purple-300 dark:border-purple-600 hover:border-teal-400 dark:hover:border-teal-500 transition-colors duration-300">
                  <CardContent className="p-0">
                    <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6 flex items-center">
                      <GraduationCap className="mr-3 h-6 w-6 text-blue-600 dark:text-blue-400" />
                      Education Timeline
                    </h3>
                    
                    <motion.div 
                      className="space-y-6"
                      variants={staggerContainer}
                      initial="initial"
                      whileInView="animate"
                      viewport={{ once: true }}
                    >
                      {[
                        { title: "B.Tech CSE (AIML)", school: "Rai University, Ahmedabad", year: "Expected 2028", color: "bg-blue-500 dark:bg-blue-400" },
                        { title: "HSC (Science Stream)", school: "Yagnik Education Group, Vadodara", year: "", color: "bg-purple-500 dark:bg-purple-400" },
                        { title: "SSC (General Education)", school: "Yagnik Education Group, Vadodara", year: "", color: "bg-teal-500 dark:bg-teal-400" }
                      ].map((edu, index) => (
                        <motion.div 
                          key={index}
                          variants={fadeInUp}
                          className="flex items-start space-x-4"
                        >
                          <motion.div 
                            whileHover={{ scale: 1.2 }}
                            className={`w-3 h-3 ${edu.color} rounded-full mt-2 flex-shrink-0`}
                          />
                          <div>
                            <h4 className="font-semibold text-gray-800 dark:text-white">{edu.title}</h4>
                            <p className="text-gray-600 dark:text-gray-300">{edu.school}</p>
                            {edu.year && <p className="text-sm text-gray-500 dark:text-gray-400">{edu.year}</p>}
                          </div>
                        </motion.div>
                      ))}
                    </motion.div>

                    <Separator className="my-6 bg-gray-200 dark:bg-gray-700" />

                    <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4 flex items-center">
                      <Award className="mr-3 h-6 w-6 text-blue-600 dark:text-blue-400" />
                      Certifications
                    </h3>
                    
                    <div className="space-y-2">
                      <motion.div whileHover={{ scale: 1.05 }}>
                        <Badge className="mr-2 mb-2 bg-gradient-to-r from-blue-500 to-purple-500 dark:from-blue-400 dark:to-purple-400 text-white border-0">
                          Google AI Certifications
                        </Badge>
                      </motion.div>
                      <motion.div whileHover={{ scale: 1.05 }}>
                        <Badge className="mr-2 mb-2 bg-gradient-to-r from-purple-500 to-teal-500 dark:from-purple-400 dark:to-teal-400 text-white border-0">
                          GradRight Seminar Participation
                        </Badge>
                      </motion.div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Enhanced Skills Section */}
      <section id="skills" className="py-16 md:py-20 px-4 relative overflow-hidden">
        <div className="max-w-6xl mx-auto relative z-10">
          <AnimatedSection>
            <h2 className="text-4xl font-bold text-center text-gray-800 dark:text-white mb-16">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
                Technical Skills
              </span>
            </h2>
          </AnimatedSection>
          
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {Object.entries(skills).map(([category, skillList], categoryIndex) => (
              <motion.div
                key={category}
                variants={scaleIn}
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Card className="p-6 shadow-xl bg-white/70 dark:bg-gray-800/70 backdrop-blur-xl border-2 border-teal-300 dark:border-teal-600 hover:border-blue-400 dark:hover:border-blue-500 transition-all duration-300 h-full">
                  <CardContent className="p-0">
                    <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4 capitalize flex items-center">
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 2, delay: categoryIndex * 0.2, repeat: Infinity, ease: "linear" }}
                        className="mr-2"
                      >
                        <Sparkles className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                      </motion.div>
                      {category.replace(/([A-Z])/g, ' $1').trim()}
                    </h3>
                    <div className="grid grid-cols-2 gap-3">
                      {skillList.map((skill, skillIndex) => {
                        const IconComponent = skill.icon;
                        return (
                          <motion.div
                            key={skill.name}
                            initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: skillIndex * 0.1 }}
                            whileHover={{ scale: 1.1, rotate: 5 }}
                          >
                            <div className={`relative p-3 rounded-xl bg-gradient-to-br ${skill.color} shadow-lg cursor-pointer overflow-hidden`}>
                              <div className="relative z-10 flex flex-col items-center text-center">
                                <motion.div
                                  className="mb-2"
                                  animate={{
                                    y: [-2, 2, -2],
                                    rotate: [-2, 2, -2],
                                  }}
                                  transition={{
                                    duration: 3,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                  }}
                                >
                                  <IconComponent className="h-6 w-6 text-white drop-shadow-lg" />
                                </motion.div>
                                
                                <span className="text-xs font-semibold text-white drop-shadow-sm">
                                  {skill.name}
                                </span>
                              </div>
                            </div>
                          </motion.div>
                        );
                      })}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 md:py-20 px-4 relative">
        <div className="max-w-7xl mx-auto relative z-10">
          <AnimatedSection>
            <h2 className="text-4xl font-bold text-center text-gray-800 dark:text-white mb-16">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
                Featured Projects
              </span>
            </h2>
          </AnimatedSection>
          
          <div className="grid lg:grid-cols-2 gap-12">
            {projects.map((project, index) => (
              <AnimatedSection key={index}>
                <motion.div
                  whileHover={{ y: -10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Card className="overflow-hidden shadow-xl bg-white/70 dark:bg-gray-800/70 backdrop-blur-xl border-2 border-blue-300 dark:border-blue-600 hover:border-teal-400 dark:hover:border-teal-500 transition-colors duration-300">
                    <motion.div 
                      className="aspect-video overflow-hidden relative"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Image 
                        src={project.image} 
                        alt={project.title}
                        width={600}
                        height={400}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    </motion.div>
                    <CardContent className="p-8">
                      <motion.h3 
                        className="text-2xl font-bold text-gray-800 dark:text-white mb-4"
                        whileHover={{ scale: 1.02 }}
                      >
                        {project.title}
                      </motion.h3>
                      <p className="text-gray-600 dark:text-gray-300 mb-6">{project.description}</p>
                      
                      <div className="mb-6">
                        <h4 className="font-semibold text-gray-800 dark:text-white mb-2">Tech Stack:</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.techStack.map((tech, techIndex) => (
                            <motion.div
                              key={tech}
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ delay: techIndex * 0.1 }}
                              whileHover={{ scale: 1.1 }}
                            >
                              <Badge className="bg-gradient-to-r from-blue-500 to-purple-500 dark:from-blue-400 dark:to-purple-400 text-white border-0">
                                {tech}
                              </Badge>
                            </motion.div>
                          ))}
                        </div>
                      </div>

                      <div className="mb-6">
                        <h4 className="font-semibold text-gray-800 dark:text-white mb-2">Key Features:</h4>
                        <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                          {project.features.map((feature, idx) => (
                            <motion.li 
                              key={idx} 
                              className="flex items-center"
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ delay: idx * 0.1 }}
                            >
                              <motion.div 
                                whileHover={{ scale: 1.5 }}
                                className="w-1.5 h-1.5 bg-blue-500 dark:bg-blue-400 rounded-full mr-2 flex-shrink-0"
                              />
                              {feature}
                            </motion.li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex gap-4">
                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                          <Button 
                            onClick={() => window.open(`https://${project.github}`, '_blank')}
                            className="bg-gradient-to-r from-gray-700 to-gray-800 hover:from-gray-800 hover:to-gray-900 dark:from-gray-600 dark:to-gray-700 dark:hover:from-gray-700 dark:hover:to-gray-800 text-white border-0"
                          >
                            <Github className="mr-2 h-4 w-4" />
                            View Code
                          </Button>
                        </motion.div>
                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                          <Button 
                            onClick={() => project.demo && window.open(project.demo, '_blank')}
                            className="border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 backdrop-blur-sm bg-white/50 dark:bg-gray-800/50"
                          >
                            <ExternalLink className="mr-2 h-4 w-4" />
                            Live Demo
                          </Button>
                        </motion.div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 md:py-20 px-4 relative">
        <div className="max-w-6xl mx-auto relative z-10">
          <AnimatedSection>
            <h2 className="text-4xl font-bold text-center text-gray-800 dark:text-white mb-16">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
                Services
              </span>
            </h2>
          </AnimatedSection>
          
          <motion.div 
            className="grid md:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={scaleIn}
                whileHover={{ y: -15, scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Card className="p-8 shadow-xl bg-white/70 dark:bg-gray-800/70 backdrop-blur-xl border-2 border-purple-300 dark:border-purple-600 hover:border-blue-400 dark:hover:border-blue-500 transition-colors duration-300 h-full">
                  <CardContent className="p-0 text-center">
                    <motion.div 
                      className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/50 dark:to-purple-900/50 rounded-full text-blue-600 dark:text-blue-400 mb-6 border border-blue-200 dark:border-blue-700"
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                    >
                      {service.icon}
                    </motion.div>
                    <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">{service.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{service.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 md:py-20 px-4 relative">
        <div className="max-w-6xl mx-auto relative z-10">
          <AnimatedSection>
            <h2 className="text-4xl font-bold text-center text-gray-800 dark:text-white mb-16">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
                Get In Touch
              </span>
            </h2>
          </AnimatedSection>
          
          <div className="grid lg:grid-cols-2 gap-12">
            <AnimatedSection>
              <motion.div whileHover={{ y: -5 }}>
                <Card className="p-8 shadow-xl bg-white/70 dark:bg-gray-800/70 backdrop-blur-xl border-2 border-teal-300 dark:border-teal-600 hover:border-purple-400 dark:hover:border-purple-500 transition-colors duration-300">
                  <CardContent className="p-0">
                    <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6">Contact Information</h3>
                    
                    <motion.div 
                      className="space-y-4"
                      variants={staggerContainer}
                      initial="initial"
                      whileInView="animate"
                      viewport={{ once: true }}
                    >
                      {[
                        { icon: Mail, text: "kirtan.2082006@gmail.com", color: "text-blue-600 dark:text-blue-400", onClick: openEmail },
                        { icon: Phone, text: "+91 87800 92234", color: "text-green-600 dark:text-green-400", onClick: openWhatsApp },
                        { icon: MapPin, text: "Ahmedabad, Gujarat, India", color: "text-purple-600 dark:text-purple-400" }
                      ].map((contact, index) => (
                        <motion.div 
                          key={index}
                          variants={slideInLeft}
                          className={`flex items-center space-x-4 ${contact.onClick ? 'cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800 p-2 rounded-lg transition-colors' : ''}`}
                          whileHover={{ x: 10 }}
                          onClick={contact.onClick}
                        >
                          <contact.icon className={`h-5 w-5 ${contact.color}`} />
                          <span className="text-gray-700 dark:text-gray-300">{contact.text}</span>
                        </motion.div>
                      ))}
                    </motion.div>

                    <Separator className="my-6 bg-gray-200 dark:bg-gray-700" />

                    <div className="flex space-x-4">
                      {[
                        { Icon: Linkedin, onClick: openLinkedIn },
                        { Icon: Github, onClick: openGitHub }
                      ].map(({ Icon, onClick }, index) => (
                        <motion.div
                          key={index}
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <Button 
                            onClick={onClick}
                            className="border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 backdrop-blur-sm bg-white/50 dark:bg-gray-800/50" 
                            size="sm"
                          >
                            <Icon className="h-4 w-4" />
                          </Button>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </AnimatedSection>

            <AnimatedSection>
              <motion.div whileHover={{ y: -5 }}>
                <Card className="p-8 shadow-xl bg-white/70 dark:bg-gray-800/70 backdrop-blur-xl border-2 border-blue-300 dark:border-blue-600 hover:border-teal-400 dark:hover:border-teal-500 transition-colors duration-300">
                  <CardContent className="p-0">
                    <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6">Send a Message</h3>
                    
                    <ContactForm />
                  </CardContent>
                </Card>
              </motion.div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-teal-900 dark:from-black dark:via-slate-900 dark:to-blue-950 text-white py-12 px-4 overflow-hidden">
        {/* Animated Footer Background */}
        <div className="absolute inset-0">
          {/* Floating particles */}
          {Array.from({ length: 30 }).map((_, i) => {
            const x = Math.random() * 100;
            const y = Math.random() * 100;
            return (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-cyan-400 dark:bg-blue-300 rounded-full opacity-40"
                style={{ left: `${x}%`, top: `${y}%` }}
                animate={{
                  y: [0, -20, 0],
                  opacity: [0.2, 0.6, 0.2],
                }}
                transition={{
                  duration: 6 + Math.random() * 4,
                  repeat: Infinity,
                  delay: Math.random() * 3,
                }}
              />
            );
          })}
          
          {/* Gradient orbs */}
          {Array.from({ length: 3 }).map((_, i) => (
            <motion.div
              key={`footer-orb-${i}`}
              className="absolute w-40 h-40 bg-gradient-radial from-blue-500/20 via-purple-500/10 to-transparent rounded-full blur-xl"
              style={{
                left: `${20 + i * 30}%`,
                top: `${20 + Math.random() * 60}%`,
              }}
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 8 + i * 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>
        
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-4">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Panchal Kirtankumar Prakashbhai
              </span>
            </h3>
            <p className="text-cyan-200 mb-6">Software Developer | AI & Web Enthusiast</p>
            <div className="flex justify-center space-x-6">
              {[
                { Icon: Mail, onClick: openEmail },
                { Icon: Linkedin, onClick: openLinkedIn },
                { Icon: Github, onClick: openGitHub }
              ].map(({ Icon, onClick }, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.2, y: -5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Button 
                    onClick={onClick}
                    className="text-cyan-300 hover:text-white bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-cyan-400/30 hover:border-cyan-300" 
                    size="sm"
                  >
                    <Icon className="h-4 w-4" />
                  </Button>
                </motion.div>
              ))}
            </div>
            <Separator className="my-8 bg-cyan-400/30" />
            <p className="text-cyan-300/80 text-sm">
              © 2024 Panchal Kirtankumar. All rights reserved. Built with Next.js, Tailwind CSS & Framer Motion.
            </p>
          </motion.div>
        </div>
      </footer>
    </div>
  );
}