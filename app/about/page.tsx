"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Code,
  Palette,
  Box,
  Monitor,
  Gamepad2,
  Users,
  Award,
  Clock,
  Layers,
  Cpu,
  Play,
  Download,
  Eye,
  Star,
  ChevronRight,
  ChevronLeft,
  Zap,
  Target,
  Sparkles,
  ArrowDown,
  ArrowUp,
  Circle,
  Hexagon,
} from "lucide-react";

const AboutPage = () => {
  const [activeTab, setActiveTab] = useState("experience");
  const [currentShowcase, setCurrentShowcase] = useState(0);
  const [skillsVisible, setSkillsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeParallax, setActiveParallax] = useState(0);
  const heroRef = useRef(null);
  const [statsCounter, setStatsCounter] = useState({
    projects: 0,
    years: 0,
    clients: 0,
    rating: 0,
  });

  const skills = [
    {
      icon: "/Pictures/RobloxStudio.png",
      name: "Roblox Studio",
      level: 95,
      color: "from-yellow-400 to-orange-500",
      specialty: "Build / Lighting",
    },
    {
      icon: "/Pictures/Blender.png",
      name: "Blender 3D",
      level: 90,
      color: "from-orange-400 to-yellow-500",
      specialty: "3D object creation",
    },
    {
      icon: "/Pictures/Subtance.png",
      name: "Substance Painter",
      level: 88,
      color: "from-yellow-500 to-orange-400",
      specialty: "Specific texture for 3D model",
    },
  ];

  const projects = [
    {
      id: 1,
      title: "Neon Metropolis",
      category: "Environment Design",
      year: "2024",
      image: "RenderMaps/SpaceshipSimulator3.png",
      description:
        "Création complète d'un environnement cyberpunk de 5km² avec système d'éclairage dynamique et 200+ assets uniques.",
      tech: ["Unreal Engine 5", "Nanite", "Lumen"],
      client: "Studio Nexus Games",
      polygons: "2.5M",
      status: "Completed",
      featured: true,
    },
    {
      id: 2,
      title: "Fantasy Realm Castle",
      category: "Level Design",
      year: "2024",
      image: "RenderMaps/TDSplant.png",
      description:
        "Forteresse médiévale interactive avec 15 salles détaillées, système de quêtes intégré et animations de personnages.",
      tech: ["Blender", "Substance Suite", "Unreal Engine"],
      client: "Medieval Worlds Studio",
      polygons: "1.8M",
      status: "In Progress",
      featured: false,
    },
    {
      id: 3,
      title: "Mecha Warrior Series",
      category: "Character Design",
      year: "2023",
      image: "RenderMaps/Operation Clogged Liberty1.png",
      description:
        "Collection de 12 mechas haute définition avec rigging avancé, 50+ animations et système de customisation.",
      tech: ["3ds Max", "Maya", "ZBrush"],
      client: "Titan Robotics Game",
      polygons: "3.2M",
      status: "Completed",
      featured: true,
    },
    {
      id: 4,
      title: "Mecha Warrior Series",
      category: "Character Design",
      year: "2023",
      image: "RenderMaps/Flowers.png",
      description:
        "Collection de 12 mechas haute définition avec rigging avancé, 50+ animations et système de customisation.",
      tech: ["3ds Max", "Maya", "ZBrush"],
      client: "Titan Robotics Game",
      polygons: "3.2M",
      status: "Completed",
      featured: true,
    },
  ];

  const timeline = [
    {
      year: "2015",
      title: "Roblox Studio",
      company: "Building",
      description:
        "Simple map assembly and learning Roblox Studio software",
    },
    {
      year: "2020",
      title: "Blender",
      company: "3D modeling",
      description:
        "Creation of 3D models to improve my creations on Roblox Studio which allows me to be more versatile",
    },
    {
      year: "2023",
      title: "3D Substance Painter",
      company: "Texturing",
      description:
        "Texture creation for better visual rendering on the map, and also allows for better optimization",
    },
    {
      year: "2024",
      title: "Photoshop",
      company: "Photo editing and retouching",
      description:
        "Assembly and creation of UIs with 3D vectors created on blender for an optimal user interface",
    },
  ];

  // Mouse tracking pour le logo
  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left - rect.width / 2) / rect.width) * 2;
    const y = ((e.clientY - rect.top - rect.height / 2) / rect.height) * 2;
    setMousePosition({ x, y });
  };

  // Scroll effects
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
      setActiveParallax(Math.min(window.scrollY / 10, 50));
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Animation des compteurs
  useEffect(() => {
    let mounted = true;
    const timer = setTimeout(() => {
      if (mounted) {
        setStatsCounter({
          projects: 85,
          years: 6,
          clients: 42,
          rating: 5.0,
        });
      }
    }, 1000);
    return () => {
      mounted = false;
      clearTimeout(timer);
    };
  }, []);

  // Auto-advance showcase
  const nextShowcase = useCallback(() => {
    setCurrentShowcase((prev) => (prev + 1) % projects.length);
  }, [projects.length]);

  const prevShowcase = useCallback(() => {
    setCurrentShowcase(
      (prev) => (prev - 1 + projects.length) % projects.length
    );
  }, [projects.length]);

  useEffect(() => {
    const timer = setInterval(nextShowcase, 6000);
    return () => clearInterval(timer);
  }, [nextShowcase]);

  // Animation des barres de compétences
  useEffect(() => {
    let mounted = true;
    const timer = setTimeout(() => {
      if (mounted) {
        setSkillsVisible(true);
      }
    }, 1500);
    return () => {
      mounted = false;
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className="min-h-screen overflow-hidden">
      <style jsx>{`
        .perspective-1000 {
          perspective: 1000px;
        }

        .logo-3d {
          transform-style: preserve-3d;
        }

        .translate-z-2 {
          transform: translateZ(8px);
        }

        .-translate-z-2 {
          transform: translateZ(-8px);
        }

        .transform-gpu {
          transform: translateZ(0);
          backface-visibility: hidden;
          will-change: transform;
        }

        .gradient-text-roblox {
          background: linear-gradient(135deg, #fbb034, #ff8c00, #ffd700);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
      `}</style>

      {/* Hero Section avec Logo Animé */}
      <section className="relative flex items-center justify-center overflow-hidden pt-16 pb-8">
        {/* Subtle Grid Background */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-400/10 to-transparent"></div>
        </div>

        <div className="relative z-10 text-center max-w-6xl mx-auto px-4 py-4">
          {/* Logo 3D Animé */}
          <div className="flex justify-center mb-6 sm:mb-8">
            <div
              className="rounded-2xl relative cursor-pointer"
              onMouseMove={handleMouseMove}
              onMouseLeave={() => setMousePosition({ x: 0, y: 0 })}
            >
              <div className="w-80 h-20 sm:w-96 sm:h-24 md:w-[500px] md:h-32 lg:w-[600px] lg:h-40 relative perspective-1000">
                <div
                  className="logo-3d w-full h-full relative transform-gpu transition-transform ease-out"
                  style={{
                    transform: `rotateY(${mousePosition.x * 10}deg) rotateX(${
                      -mousePosition.y * 10
                    }deg) translateZ(10px)`,
                  }}
                >
                  <div className="absolute inset-0 transform translate-z-2 overflow-hidden">
                    <div className="w-full h-full block relative z-10">
                      <Image
                        src="/Pictures/GamaText.png"
                        alt="GamaText Logo"
                        width={600}
                        height={160}
                        className="object-contain w-full h-full opacity-90"
                        style={{
                          filter: "brightness(1.2) contrast(1.1) saturate(1.2)",
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Titre principal */}
          <div className="mb-6 sm:mb-8">
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white font-bold max-w-4xl mx-auto leading-tight drop-shadow-[0_0_20px_rgba(255,255,255,0.8)] mb-4">
              Builder & 3D Modeler for ROBLOX games
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-2 sm:gap-4 text-sm sm:text-base md:text-lg font-semibold drop-shadow-[0_0_20px_rgba(234,179,8,0.8)]">
              <span className="flex items-center justify-center">
                <div className="w-2 h-2 bg-yellow-400 rounded-full mr-2"></div>
                <span className="gradient-text-roblox">Map Building</span>
              </span>
              <span className="flex items-center justify-center">
                <div className="w-2 h-2 bg-yellow-400 rounded-full mr-2"></div>
                <span className="gradient-text-roblox">
                  3D objects modeling
                </span>
              </span>
              <span className="flex items-center justify-center">
                <div className="w-2 h-2 bg-yellow-400 rounded-full mr-2"></div>
                <span className="gradient-text-roblox">
                  Texturing for best immersion
                </span>
              </span>
            </div>
          </div>

          {/* Boutons d'action */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Link href="/library">
              <button className="group bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-300 hover:to-orange-400 text-white px-8 py-4 rounded-xl flex items-center space-x-3 text-lg font-bold shadow-2xl hover:shadow-yellow-400/25 transition-all transform hover:scale-105">
                <Box className="h-6 w-6" />
                <span>Views my creations</span>
                <ChevronRight className="h-6 w-6 group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>

            <Link href="/contact">
              <button className="bg-zinc-800/50 hover:bg-zinc-700/50 border-2 border-zinc-600 hover:border-yellow-400/50 px-8 py-4 rounded-xl text-lg text-white font-semibold backdrop-blur-sm transition-all duration-300 transform hover:scale-105">
                <span>Start Project</span>
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Skills Section - Redesigned with Hexagonal Layout */}
      <section className="relative pt-24 pb-32 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center space-x-4 mb-8">
              <h2 className="text-4xl md:text-6xl font-black font-orbitron">
                <span className="text-yellow-400 to-orange-500 drop-shadow-[0_0_20px_rgba(234,179,8,0.8)]">
                  EXPERTISE
                </span>
                <span className="text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.8)]">
                  {" "}
                  TECHNIQUE
                </span>
              </h2>
            </div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Advanced mastery of cutting-edge technologies and workflows
              optimized for video game creation
            </p>
          </div>

          {/* Hexagonal Skills Grid */}
          <div className="relative">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {skills.map((skill, index) => {
                return (
                  <div
                    key={index}
                    className="group relative"
                    style={{
                      animationDelay: `${index * 200}ms`,
                    }}
                  >
                    {/* Main Card */}
                    <div className="relative p-8 rounded-3xl bg-gradient-to-br from-zinc-900/80 via-zinc-800/60 to-zinc-900/80 backdrop-blur-xl border border-zinc-700/50 group-hover:border-yellow-400/50 transition-all duration-500 group-hover:scale-105">
                      {/* Background Effect */}
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity duration-500`}
                      ></div>

                      {/* Icon Container */}
                      <div className="relative z-10 mb-6">
                        <div
                          className={`relative w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 overflow-hidden`}
                        >
                          <Image
                            src={skill.icon}
                            alt={skill.name}
                            width={64}
                            height={64}
                            className="object-contain"
                          />

                          {/* Icon Glow */}
                          <div
                            className={`absolute -inset-1 rounded-2xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-500`}
                          ></div>
                        </div>

                        <h3 className="text-xl font-bold text-white text-center mb-2">
                          {skill.name}
                        </h3>
                        <p className="text-sm text-yellow-400 text-center font-medium">
                          {skill.specialty}
                        </p>
                      </div>

                      {/* Skill Level */}
                      <div className="relative z-10">
                        <div className="flex items-center justify-between mb-3">
                          <span className="text-sm text-gray-400">
                            Maîtrise
                          </span>
                          <span className="text-sm font-bold text-yellow-400">
                            {skill.level}%
                          </span>
                        </div>

                        {/* Progress Bar */}
                        <div className="relative h-2 bg-zinc-700/50 rounded-full overflow-hidden">
                          <div
                            className={`absolute inset-y-0 left-0 bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out`}
                            style={{
                              width: skillsVisible ? `${skill.level}%` : "0%",
                              transitionDelay: `${index * 200}ms`,
                            }}
                          >
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse"></div>
                          </div>
                        </div>
                      </div>

                      {/* Hover Glow */}
                      <div
                        className={`absolute -inset-0.5 bg-gradient-to-r ${skill.color} rounded-3xl opacity-0 group-hover:opacity-20 blur transition-opacity duration-500 -z-10`}
                      ></div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Showcase - Simplified Clean Gallery */}
      <section className="relative py-32 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center space-x-4 mb-8">
              <h2 className="text-4xl md:text-6xl font-black font-orbitron">
                <span className="text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.8)]">
                  PORTFOLIO
                </span>
                <span className="text-yellow-400 to-orange-500 drop-shadow-[0_0_20px_rgba(234,179,8,0.8)]">
                  {" "}
                  RENDER
                </span>
              </h2>
            </div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Discover my most ambitious creations and the worlds I have created
            </p>
          </div>

          {/* Clean Gallery - Featured Project */}
          <div className="mb-20">
            <div className="relative rounded-3xl overflow-hidden group cursor-pointer">
              <div className="aspect-video md:aspect-[21/9] relative">
                <Image
                  src={projects[currentShowcase].image}
                  alt={projects[currentShowcase].title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Simple gradient overlay for better contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>

                {/* Navigation Arrows Only */}
                <button
                  onClick={prevShowcase}
                  className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-black/50 hover:bg-black/70 backdrop-blur-sm rounded-full transition-all duration-300 group/nav"
                >
                  <ChevronLeft className="h-6 w-6 text-white" />
                </button>

                <button
                  onClick={nextShowcase}
                  className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-black/50 hover:bg-black/70 backdrop-blur-sm rounded-full transition-all duration-300 group/nav"
                >
                  <ChevronRight className="h-6 w-6 text-white" />
                </button>
              </div>
            </div>

            {/* Project Indicators */}
            <div className="flex justify-center space-x-3 mt-8">
              {projects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentShowcase(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentShowcase
                      ? "bg-gradient-to-r from-yellow-400 to-orange-500 scale-125 shadow-lg shadow-yellow-400/50"
                      : "bg-zinc-600 hover:bg-zinc-500 hover:scale-110"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Additional Projects Grid - Clean Version */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects
              .filter((_, index) => index !== currentShowcase)
              .map((project, index) => (
                <div
                  key={project.id}
                  className="group relative rounded-2xl overflow-hidden hover:scale-105 cursor-pointer transition-transform duration-500"
                >
                  <div className="aspect-video relative">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    {/* Minimal overlay for better image visibility */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent"></div>
                  </div>

                  {/* Hover Glow Only */}
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-2xl opacity-0 group-hover:opacity-20 blur transition-opacity duration-500 -z-10"></div>
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* Experience Timeline - Vertical Flow */}
      <section className="relative py-32 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center space-x-4 mb-8">
              <h2 className="text-4xl md:text-6xl font-black font-orbitron">
                <span className="text-yellow-400 to-orange-500 drop-shadow-[0_0_20px_rgba(234,179,8,0.8)]">
                  PROFESSIONAL
                </span>
                <span className="text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.8)]">
                  {" "}
                  CAREER
                </span>
              </h2>
            </div>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Central Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-yellow-400 via-orange-500 to-yellow-400 rounded-full"></div>

            <div className="space-y-20">
              {timeline.map((item, index) => (
                <div
                  key={index}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? "justify-start" : "justify-end"
                  }`}
                >
                  {/* Content Card */}
                  <div
                    className={`w-full md:w-5/12 ${
                      index % 2 === 0
                        ? "md:mr-auto md:pr-16"
                        : "md:ml-auto md:pl-16"
                    }`}
                  >
                    <div className="group relative p-8 rounded-3xl bg-gradient-to-br from-zinc-900/80 via-zinc-800/60 to-zinc-900/80 backdrop-blur-xl border border-zinc-700/50 hover:border-yellow-400/50 transition-all duration-500 hover:scale-105">
                      {/* Year Badge */}
                      <div className="absolute -top-4 left-8">
                        <div className="px-4 py-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-black rounded-full font-black text-lg shadow-lg">
                          {item.year}
                        </div>
                      </div>

                      <div className="mt-6">
                        <h3 className="text-2xl font-black gradient-text-roblox mb-2">
                          {item.title}
                        </h3>
                        <p className="text-lg font-semibold text-gray-300 mb-4">
                          {item.company}
                        </p>
                        <p className="text-gray-400 leading-relaxed">
                          {item.description}
                        </p>
                      </div>

                      {/* Connecting Line */}
                      <div
                        className={`absolute top-1/2 ${
                          index % 2 === 0
                            ? "right-0 translate-x-full"
                            : "left-0 -translate-x-full"
                        } w-12 h-0.5 bg-gradient-to-r from-yellow-400 to-orange-500 hidden md:block`}
                      ></div>

                      {/* Hover Glow */}
                      <div className="absolute -inset-0.5 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-3xl opacity-0 group-hover:opacity-20 blur transition-opacity duration-500 -z-10"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Advanced Tools & Workflow Section */}
      <section className="relative py-32 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center space-x-4 mb-8">
              <h2 className="text-4xl md:text-6xl font-black font-orbitron">
                <span className="text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.8)]">
                  OUTILS &
                </span>
                <span className="text-yellow-400 to-orange-500 drop-shadow-[0_0_20px_rgba(234,179,8,0.8)]">
                  {" "}
                  WORKFLOW
                </span>
              </h2>
            </div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Optimized production pipeline and mastery of industry-standard
              tools
            </p>
          </div>

          {/* Workflow Visualization */}
          <div className="mb-20">
            <div className="relative p-8 md:p-12 rounded-3xl bg-gradient-to-br from-zinc-900/80 via-zinc-800/60 to-zinc-900/80 backdrop-blur-xl border border-zinc-700/50 overflow-hidden hover:scale-105 duration-300">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-5">
                <div className="grid grid-cols-12 grid-rows-12 w-full h-full">
                  {[...Array(144)].map((_, i) => (
                    <div key={i} className="border border-yellow-400/20"></div>
                  ))}
                </div>
              </div>

              <div className="relative z-10">
                <h3 className="text-3xl font-black text-center mb-12 text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.8)]">
                  Production plan
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
                  {[
                    {
                      phase: "Concept",
                      desc: "Brief & Research",
                      icon: Target,
                    },
                    {
                      phase: "Modeling",
                      desc: "3D sculpture",
                      icon: Box,
                    },
                    {
                      phase: "Texturing",
                      desc: "Custom texture",
                      icon: Palette,
                    },
                    {
                      phase: "Lighting",
                      desc: "Lighting and Rendering",
                      icon: Zap,
                    },
                    {
                      phase: "Export",
                      desc: "Optimization",
                      icon: Download,
                    },
                  ].map((phase, index) => {
                    const Icon = phase.icon;
                    return (
                      <div key={index} className="relative">
                        {/* Connecting Arrow */}
                        {index < 4 && (
                          <div className="absolute top-1/2 -right-3 z-20 hidden md:block">
                            <ChevronRight className="h-6 w-6 text-yellow-400" />
                          </div>
                        )}

                        <div className="group text-center p-6 rounded-2xl bg-zinc-800/40 border border-zinc-700/50 hover:border-yellow-400/50 transition-all duration-300 hover:scale-105">
                          <div
                            className={`w-16 h-16 rounded-2xl ${phase.color} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}
                          >
                            <Icon className="h-8 w-8 text-yellow-400" />
                          </div>
                          <h4 className="text-lg font-bold text-white mb-2">
                            {phase.phase}
                          </h4>
                          <p className="text-sm text-gray-400 mb-3">
                            {phase.desc}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="relative py-32 px-4 md:px-8 ">
        <div className="max-w-4xl mx-auto text-center">
          <div className="relative p-12 rounded-3xl bg-gradient-to-br from-zinc-900/80 via-zinc-800/60 to-zinc-900/80 backdrop-blur-xl border border-zinc-700/50 overflow-hidden hover:scale-105 duration-300">
            <div className="absolute inset-0">
              <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-r from-yellow-400/10 to-orange-500/10 rounded-full blur-2xl animate-pulse"></div>
              <div
                className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-gradient-to-l from-orange-400/10 to-yellow-500/10 rounded-full blur-3xl animate-pulse"
                style={{ animationDelay: "1s" }}
              ></div>
            </div>

            <div className="relative z-10">
              <h2 className="text-4xl md:text-6xl sm:text-2xl font-black font-orbitron mb-6">
                <span className="text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.8)]">
                  READY TO CREATE
                </span>
                <br />
                <span className="text-yellow-400 to-orange-500 drop-shadow-[0_0_20px_rgba(234,179,8,0.8)]">
                  an amazing map?
                </span>
              </h2>

              <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
                Let&apos;s transform your video game ideas into stunning 3D
                visuals. Contact me to discuss your project and discover how I
                can bring your most ambitious ideas to life.
              </p>

              <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
                <button className="group relative px-10 py-4 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-2xl font-black text-lg text-black shadow-2xl hover:shadow-yellow-400/25 transition-all duration-300 hover:scale-105">
                  <span className="relative z-10 flex items-center justify-center space-x-2">
                    <span className="text-white">Start a projet</span>
                    <ChevronRight className="h-5 w-5 text-white" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-300 to-orange-400 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm -z-10"></div>
                </button>

                <Link href="/library">
                  <button className="group relative px-10 py-4 border-2 border-yellow-400/50 rounded-2xl font-bold text-lg text-white backdrop-blur-sm hover:border-yellow-400 hover:bg-yellow-400/10 transition-all duration-300">
                    <span className="flex items-center justify-center space-x-2">
                      <span className="text-white">Views my creations</span>
                      <Eye className="h-5 w-5 text-white" />
                    </span>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
