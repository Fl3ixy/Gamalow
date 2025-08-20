"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ChevronRight,
  Play,
  Star,
  Box,
  Gamepad2,
  Cpu,
  Palette,
  Layers,
  Zap,
  PencilRuler,
  User,
} from "lucide-react";

const HomePage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left - rect.width / 2) / rect.width) * 2;
    const y = ((e.clientY - rect.top - rect.height / 2) / rect.height) * 2;
    setMousePosition({ x, y });
  };

  const projects = [
    {
      id: 1,
      title: "plantVSzombie",
      category: "Environment Design/Creation",
      image: "/RenderMaps/TDSplant.png",
      description:
        "Colorful cartoon village at sunset with a road, white fences, and a large mansion surrounded by stylized trees",
    },
    {
      id: 2,
      title: "Gamejam 2025",
      category: "Environment Design/Creation",
      image: "/RenderMaps/Operation Clogged Liberty3.png",
      description:
        "Futuristic suspended industrial warehouse, lit by lamps and surrounded by walkways and crates, created in 3 days for the GameJam 2025",
    },
    {
      id: 3,
      title: "Environment Design/Creation",
      category: "Environment Design/Creation",
      image: "/RenderMaps/SpaceshipSimulator3.png",
      description:
        "Map created for my own video game Spaceship Simulator, coming soon.",
    },
    {
      id: 4,
      title: "Castle inside",
      category: "Environment Design/Creation",
      image: "/RenderMaps/MagicalTycoon3.png",
      description: "Detailed map of a castle interior created for a client",
    },
  ];

  const services = [
    { icon: Gamepad2, title: "Roblox Studio" },
    { icon: Cpu, title: "Blender" },
    { icon: Palette, title: "Substance 3D Painter" },
    { icon: Star, title: "3D Designer" },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % projects.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [projects.length]);

  return (
    <div className="min-h-screen viewport-grid">
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
      `}</style>

      {/* Hero Section */}
      <section className="relative flex items-center justify-center overflow-hidden pt-16 pb-2">
        {/* Floating 3D Shapes */}
        <div className="floating-shapes hidden md:block">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="shape"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 15}s`,
                animationDuration: `${10 + Math.random() * 10}s`,
              }}
            >
              <div className="w-4 h-4 bg-yellow-400/20 rounded"></div>
            </div>
          ))}
        </div>

        {/* Subtle Grid Background */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-400/10 to-transparent"></div>
        </div>

        <div className="relative z-10 text-center max-w-6xl mx-auto px-4 py-4">
          <div className="flex justify-center mb-1 sm:mb-2">
            <div
              className="rounded-2xl relative cursor-pointer"
              onMouseMove={handleMouseMove}
              onMouseLeave={() => setMousePosition({ x: 0, y: 0 })}
            >
              <div className="w-96 h-16 sm:w-24 sm:h-16 md:w-96 md:h-24 lg:w-96 lg:h-28 xl:w-96 xl:h-32 relative perspective-1000">
                <div
                  className="logo-3d w-full h-full relative transform-gpu transition-transform ease-out"
                  style={{
                    transform: `rotateY(${mousePosition.x * 10}deg) rotateX(${
                      -mousePosition.y * 10
                    }deg) translateZ(10px)`,
                  }}
                >
                  <div className="absolute inset-0 transform translate-z-2 overflow-hidden">
                    <a
                      href="#"
                      className="w-full h-full block relative z-10"
                      style={{
                        backgroundImage: "url('/logo-dev.png')",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                      }}
                    >
                      <Image
                        src="/Pictures/GamaText.png"
                        alt="Logo"
                        width={250}
                        height={250}
                        className="object-contain w-full h-full flex items-center justify-center"
                      />
                    </a>
                  </div>
                  <div className="absolute inset-0 transform translate-x-1 translate-y-1 -translate-z-2 opacity-80 overflow-hidden">
                    <a
                      href="#"
                      className="w-full h-full block opacity-80"
                      style={{
                        backgroundImage: "url('/logo-dev.png')",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                      }}
                    ></a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Titre principal - Taille harmonisée avec le logo */}
          <div className="mb-4 sm:mb-6">
            <div className="mt-2 mb-3">
              {" "}
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white font-bold max-w-4xl mx-auto leading-tight drop-shadow-[0_0_20px_rgba(255,255,255,0.8)]">
                Builder & 3D Modeler for ROBLOX games
              </p>
              <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-1 sm:gap-2 text-xs sm:text-sm md:text-base font-semibold mt-2 drop-shadow-[0_0_20px_rgba(234,179,8,0.8)]">
                <span className="flex items-center justify-center">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mr-2"></div>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-300">
                    Map Building
                  </span>
                </span>
                <span className="flex items-center justify-center">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mr-2"></div>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-300">
                    3D objects modeling
                  </span>
                </span>
                <span className="flex items-center justify-center">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mr-2"></div>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-300">
                    Texturing for best immersion
                  </span>
                </span>
              </div>
            </div>
          </div>

          {/* Boutons - Espacement très compact */}
          <div className="flex flex-col gap-2 sm:gap-3 justify-center items-center mb-4 md:mb-6 px-4">
            <Link href="/about" className="group py-5 sm:py-6 md:py-7">
              <button className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-300 hover:to-orange-400 animate-[bounce_3s_infinite] text-white hover:opacity-90 px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 rounded-xl flex items-center space-x-2 sm:space-x-3 text-base sm:text-lg md:text-xl font-bold shadow-2xl hover:shadow-yellow-400/25 transition-all transform hover:scale-105 w-full sm:w-auto justify-center">
                <User className="h-5 w-5 sm:h-6 sm:w-6" />
                <span>About me</span>
                <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6 group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>

            <Link href="/contact" className="group">
              <button className="bg-zinc-800/50 hover:bg-zinc-700/50 border-2 border-zinc-600 hover:border-yellow-400/50 px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 rounded-xl text-base sm:text-lg md:text-xl text-white font-semibold backdrop-blur-sm transition-all duration-300 transform hover:scale-105 w-full sm:w-auto justify-center">
                Start Project
              </button>
            </Link>
          </div>

          {/* Enhanced Stats - Taille des cartes optimisée */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 lg:gap-6 max-w-4xl mx-auto px-4">
            {services.map((service, index) => {
              return (
                <div key={index} className="text-center group">
                  <div className="bg-zinc-800/30 hover:bg-zinc-700/40 backdrop-blur-sm border-2 border-zinc-600/50 hover:border-yellow-400/30 p-3 sm:p-4 md:p-6 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
                    <div className="mb-2 sm:mb-3 md:mb-4">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 mx-auto rounded-lg md:rounded-xl flex items-center justify-center text-sm sm:text-base md:text-lg font-black text-black shadow-lg">
                        {index === 0 && (
                          <Image
                            src="/Pictures/RobloxStudio.png"
                            alt="Logo"
                            width={32}
                            height={32}
                            className="w-full h-full flex items-center justify-center"
                          />
                        )}
                        {index === 1 && (
                          <Image
                            src="/Pictures/Blender.png"
                            alt="Logo"
                            width={32}
                            height={32}
                            className="w-full h-full flex items-center justify-center"
                          />
                        )}
                        {index === 2 && (
                          <Image
                            src="/Pictures/Subtance.png"
                            alt="Logo"
                            width={32}
                            height={32}
                            className="w-full h-full flex items-center justify-center"
                          />
                        )}
                        {index === 3 && (
                          <Image
                            src="/Pictures/3Designer.png"
                            alt="Logo"
                            width={32}
                            height={32}
                            className="w-full h-full flex items-center justify-center"
                          />
                        )}
                      </div>
                    </div>
                    <div className="text-lg sm:text-xl md:text-2xl font-black text-white mb-1 md:mb-2">
                      {service.count}
                    </div>
                    <div className="text-xs sm:text-sm text-zinc-400 font-medium">
                      {service.title}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Projects Carousel */}
      <section className="py-4 md:py-6 lg:py-8 px-4 md:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-4 md:mb-6 lg:mb-8">
            <div className="flex justify-center mb-4 md:mb-6">
              <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl flex items-center justify-center">
                <Image
                  src="/Pictures/RobloxStudio.png"
                  alt="Logo"
                  width={32}
                  height={32}
                  className="w-full h-full flex items-center justify-center"
                />{" "}
              </div>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black mb-4 md:mb-6 font-orbitron leading-tight px-2">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500 drop-shadow-[0_0_20px_rgba(234,179,8,0.8)]">
                RECENT
              </span>
              <br />
              <span className="text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.8)]">
                CREATIONS
              </span>
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-zinc-400 max-w-2xl mx-auto leading-relaxed px-4">
              Discover a selection of my latest projects, combining cutting-edge
              technology and artistic creativity.
            </p>
          </div>

          <div className="relative">
            {/* Navigation Arrows */}
            <div className="hidden sm:block">
              <button
                onClick={() =>
                  setCurrentSlide(
                    currentSlide === 0 ? projects.length - 1 : currentSlide - 1
                  )
                }
                className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 z-20 bg-zinc-900/80 hover:bg-zinc-800/90 backdrop-blur-sm border border-zinc-700/50 hover:border-yellow-400/50 p-2 sm:p-3 rounded-full transition-all duration-300 group"
              >
                <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6 text-white group-hover:text-yellow-400 rotate-180" />
              </button>

              <button
                onClick={() =>
                  setCurrentSlide(
                    currentSlide === projects.length - 1 ? 0 : currentSlide + 1
                  )
                }
                className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 z-20 bg-zinc-900/80 hover:bg-zinc-800/90 backdrop-blur-sm border border-zinc-700/50 hover:border-yellow-400/50 p-2 sm:p-3 rounded-full transition-all duration-300 group"
              >
                <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6 text-white group-hover:text-yellow-400" />
              </button>
            </div>

            <div className="overflow-hidden rounded-2xl shadow-2xl">
              <div
                className="flex transition-transform duration-700 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {projects.map((project, index) => (
                  <div key={project.id} className="w-full flex-shrink-0">
                    <div className="relative h-64 sm:h-80 md:h-96 lg:h-[500px] xl:h-[700px] rounded-2xl overflow-hidden group">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover group-hover:scale-105 duration-700"
                        priority={index === 0}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                      <div className="absolute bottom-0 left-0 p-4 sm:p-6 md:p-8 lg:p-12 xl:p-16 w-full">
                        <div className="bg-zinc-900/80 backdrop-blur-md border border-zinc-700/50 p-4 sm:p-6 md:p-8 rounded-xl md:rounded-2xl max-w-full sm:max-w-lg">
                          <div className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500 text-xs sm:text-sm font-bold mb-2 sm:mb-3 uppercase tracking-wider">
                            {project.category}
                          </div>
                          <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black text-white mb-3 sm:mb-4 md:mb-6 leading-tight">
                            {project.title}
                          </h3>
                          <p className="text-zinc-300 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base hidden sm:block">
                            {project.description}
                          </p>
                          <Link
                            href="/library"
                            className="inline-flex animate-bounce transition-all duration-700 items-center text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500 hover:opacity-80 font-bold group text-sm sm:text-base md:text-lg"
                          >
                            View more
                            <ChevronRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Enhanced Carousel Dots */}
            <div className="flex justify-center mt-4 md:mt-6 space-x-3 md:space-x-4">
              {projects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 md:w-4 md:h-4 rounded-full transition-all duration-300 ${
                    index === currentSlide
                      ? "bg-gradient-to-r from-yellow-400 to-orange-500 scale-125 shadow-lg shadow-yellow-400/50"
                      : "bg-zinc-600 hover:bg-zinc-500 hover:scale-110"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Call to Action */}
      <section className="py-4 md:py-6 lg:py-8 px-4 md:px-8 lg:px-12">
        <div className="max-w-5xl mx-auto text-center">
          <div className="bg-gradient-to-br from-zinc-800/50 to-zinc-900/50 backdrop-blur-sm border-2 border-zinc-700/50 p-6 sm:p-8 md:p-10 lg:p-12 xl:p-16 rounded-2xl md:rounded-3xl relative overflow-hidden shadow-2xl group">
            <div className="relative z-10 group-hover:scale-105 duration-500">
              <div className="flex justify-center mb-4 sm:mb-6 md:mb-8">
                <div className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-xl md:rounded-2xl flex items-center justify-center">
                  <Image
                    src="/Pictures/Dollar.png"
                    alt="Logo"
                    width={32}
                    height={32}
                    className="w-full h-full flex items-center justify-center"
                  />
                </div>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-black mb-4 md:mb-6 font-orbitron leading-tight px-2 ">
                Ready to create something
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
                  extraordinary ?
                </span>{" "}
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-zinc-300 mb-6 md:mb-8 max-w-2xl mx-auto leading-relaxed px-2">
                Let&apos;s collaborate to bring your most ambitious ideas to
                life. From design to execution, I transform your visions into
                unforgettable Roblox experiences
              </p>
              <div className="flex flex-col gap-4 sm:gap-6 justify-center px-4">
                <Link href="/pricing">
                  <button className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-300 hover:to-orange-400 px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 rounded-xl text-white font-bold text-base sm:text-lg md:text-xl shadow-2xl border-2 hover:shadow-yellow-400/25 transition-all duration-300 transform hover:scale-105 w-full sm:w-auto">
                    View prices
                  </button>
                </Link>
                <Link href="/contact">
                  <button className="bg-zinc-800/50 hover:bg-zinc-700/50 border-2 border-zinc-600 hover:border-yellow-400/50 px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 rounded-xl text-white font-bold text-base sm:text-lg md:text-xl backdrop-blur-sm transition-all duration-300 transform hover:scale-105 w-full sm:w-auto">
                    Start NOW!
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

export default HomePage;
