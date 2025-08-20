"use client";

import { CircleDollarSign } from "lucide-react";
import Image from "next/image";
import { useState, useEffect } from "react";
import Link from "next/link";

interface Render {
  id: number;
  title: string;
  image: string;
}

export default function Home() {
  const [selectedImage, setSelectedImage] = useState<Render | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Photos de rendus 3D
  const renders = [
    {
      id: 1,
      title: "Castle inside",
      image: "/RenderMaps/MagicalTycoon3.png",
    },
    {
      id: 2,
      title: "Sci-Fi Environment",
      image: "/RenderMaps/Operation Clogged Liberty1.png",
    },
    {
      id: 3,
      title: "Sci-Fi Environment",
      image: "/RenderMaps/Operation Clogged Liberty3.png",
    },
    {
      id: 4,
      title: "Spaceship Simulator",
      image: "/RenderMaps/SpaceshipSimulator3.png",
    },
    {
      id: 5,
      title: "Spaceship Simulator",
      image: "RenderMaps/SpaceshipSimulator7.png",
    },
    {
      id: 6,
      title: "Plants vs Zombies",
      image: "RenderMaps/TDSplant.png",
    },
    {
      id: 7,
      title: "Castle Outside",
      image: "RenderMaps/Castle2.png",
    },
    {
      id: 8,
      title: "Dark Castle",
      image: "RenderMaps/DungeonMap4.png",
    },
    {
      id: 9,
      title: "Giant Island",
      image: "RenderMaps/GiantIsland1.png",
    },
    {
      id: 10,
      title: "Flowers Environment",
      image: "RenderMaps/Flowers.png",
    },
    {
      id: 11,
      title: "Snow Map",
      image: "RenderMaps/SnowMap.png",
    },
    {
      id: 12,
      title: "Elephant Effect",
      image: "RenderMaps/Elephant1Effect.png",
    },
    {
      id: 13,
      title: "Character Showcase",
      image: "RenderMaps/PlancheCharacter.png",
    },
    {
      id: 14,
      title: "Spaceship Render",
      image: "RenderMaps/RenderSpaceship.png",
    },
    {
      id: 15,
      title: "Spaceship Model 2",
      image: "RenderMaps/RenderSpaceship2.png",
    },
    {
      id: 16,
      title: "Spaceship Model 3",
      image: "RenderMaps/RenderSpaceship3.png",
    },
    {
      id: 17,
      title: "Spaceship Design 7",
      image: "RenderMaps/RenderSpaceship7.png",
    },
    {
      id: 18,
      title: "Spaceship Design 8",
      image: "RenderMaps/RenderSpaceship8.png",
    },
    {
      id: 19,
      title: "Robot Design",
      image: "RenderMaps/Robot.png",
    },
    {
      id: 20,
      title: "Spaceship 6",
      image: "RenderMaps/Spaceship6.png",
    },
    {
      id: 21,
      title: "Boss Concept Art",
      image: "RenderMaps/BossConceptArt.png",
    },
    {
      id: 22,
      title: "Crystal Tower",
      image: "RenderMaps/CrystalTowerConceptArt.png",
    },
    {
      id: 23,
      title: "Mushroom Portal",
      image: "RenderMaps/MushroomPortalConceptArt.png",
    },
    {
      id: 24,
      title: "Station Upgrade",
      image: "RenderMaps/StationUpgrade.jpg",
    },
    {
      id: 25,
      title: "Collecte Thumbnail",
      image: "RenderMaps/CollecteThumnail.png",
    },
    {
      id: 26,
      title: "Logo Designs",
      image: "RenderMaps/Logos.png",
    },
  ];

  const openModal = (render: Render) => {
    setSelectedImage(render);
    if (typeof document !== "undefined") {
      document.body.style.overflow = "hidden";
    }
  };

  const closeModal = () => {
    setSelectedImage(null);
    if (typeof document !== "undefined") {
      document.body.style.overflow = "unset";
    }
  };

  // Gestion du scroll lors du modal
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeModal();
      }
    };

    if (selectedImage) {
      document.addEventListener("keydown", handleEscape);
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      if (typeof document !== "undefined") {
        document.body.style.overflow = "unset";
      }
    };
  }, [selectedImage]);

  return (
    <div className="min-h-screen text-white">
      {/* Hero Section */}
      <section className="relative flex items-center justify-center overflow-hidden pt-16 pb-12">
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

          .floating-shapes {
            position: absolute;
            inset: 0;
            pointer-events: none;
          }

          .shape {
            position: absolute;
            animation: float 15s linear infinite;
          }

          @keyframes float {
            0% {
              transform: translateY(100vh) rotate(0deg);
            }
            100% {
              transform: translateY(-100vh) rotate(360deg);
            }
          }
        `}</style>

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
              onMouseMove={(e: React.MouseEvent<HTMLDivElement>) => {
                const rect = e.currentTarget.getBoundingClientRect();
                const x =
                  ((e.clientX - rect.left - rect.width / 2) / rect.width) * 2;
                const y =
                  ((e.clientY - rect.top - rect.height / 2) / rect.height) * 2;
                setMousePosition({ x, y });
              }}
              onMouseLeave={() => setMousePosition({ x: 0, y: 0 })}
            >
              <div className="w-[320px] h-[96px] sm:w-[450px] sm:h-[135px] md:w-[500px] md:h-[150px] lg:w-[550px] lg:h-[165px] xl:w-[600px] xl:h-[180px] relative perspective-1000">
                <div
                  className="logo-3d w-full h-full relative transform-gpu transition-transform duration-200 ease-out"
                  style={{
                    transform: `rotateY(${mousePosition.x * 20}deg) rotateX(${
                      -mousePosition.y * 20
                    }deg) translateZ(10px)`,
                  }}
                >
                  <div className="absolute inset-0 transform translate-z-2 overflow-hidden">
                    <Link
                      href="/library"
                      className="w-full h-full block relative z-10"
                    >
                      <Image
                        src="/Pictures/MyCreations.png"
                        alt="Logo"
                        width={600}
                        height={180}
                        className="object-contain w-full h-full flex items-center justify-center"
                      />
                    </Link>
                  </div>
                  <div className="absolute inset-0 transform translate-x-1 translate-y-1 -translate-z-2 opacity-80 overflow-hidden">
                    <Link
                      href="/library"
                      className="w-full h-full block opacity-80"
                    ></Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Titre principal - Taille harmonisée avec le logo */}
          <div className="mb-4 sm:mb-6">
            <div className="mt-2 mb-3">
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white font-bold max-w-4xl mx-auto leading-tight drop-shadow-[0_0_20px_rgba(234,179,8,0.8)]">
                Builder & 3D Modeler for ROBLOX games
              </p>
              <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-1 sm:gap-2 text-xs sm:text-sm md:text-base font-semibold mt-2 drop-shadow-[0_0_20px_rgba(255,255,255,0.8)]">
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
                    Texturing
                  </span>
                </span>
              </div>
            </div>
          </div>

          {/* Boutons - Espacement très compact */}
          <div className="flex flex-col gap-2 sm:gap-3 justify-center items-center mb-4 md:mb-6 px-4">
            <a href="/pricing" className="group py-5 sm:py-6 md:py-7">
              <button className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-300 hover:to-orange-400 animate-[bounce_3s_infinite] text-white hover:opacity-90 px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 rounded-xl flex items-center space-x-2 sm:space-x-3 text-base sm:text-lg md:text-xl font-bold shadow-2xl hover:shadow-yellow-400/25 transition-all transform hover:scale-105 w-full sm:w-auto justify-center">
                <svg
                  className="h-5 w-5 sm:h-6 sm:w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <CircleDollarSign
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                  />
                </svg>
                <span>View my prices</span>
                <svg
                  className="h-5 w-5 sm:h-6 sm:w-6 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </a>

            <a href="/contact" className="group">
              <button className="bg-zinc-800/50 hover:bg-zinc-700/50 border-2 border-zinc-600 hover:border-yellow-400/50 px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 rounded-xl text-base sm:text-lg md:text-xl text-white font-semibold backdrop-blur-sm transition-all duration-300 transform hover:scale-105 w-full sm:w-auto justify-center">
                Start Project
              </button>
            </a>
          </div>
        </div>
      </section>

      {/* Galerie sans descriptions */}
      <main className="px-6 pb-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {renders.map((render) => (
              <div
                key={render.id}
                className="group bg-gray-900/50 backdrop-blur-sm rounded-xl overflow-hidden border-2 border-gray-800/50 transition-all duration-300 cursor-pointer hover:scale-105 hover:bg-gray-900/70"
                onClick={() => openModal(render)}
              >
                <div className="relative aspect-square overflow-hidden">
                  <Image
                    src={render.image}
                    alt={render.title}
                    width={400}
                    height={400}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    priority={render.id <= 3}
                  />

                  {/* Overlay avec titre uniquement au survol */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4">
                      <h3 className="text-white font-bold text-lg">
                        {render.title}
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Modal de Zoom - sans description */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/95 backdrop-blur-md z-50 flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <div
            className="relative max-w-6xl w-full max-h-[95vh] bg-gray-900/95 backdrop-blur-md rounded-2xl overflow-hidden border-2 border-gray-700 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Bouton Fermer */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 w-12 h-12 bg-black/70 hover:bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
              aria-label="Fermer le modal"
            >
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* Image centrée - pas de description */}
            <div className="flex items-center justify-center min-h-[60vh] p-6">
              <div className="relative bg-black/50 flex items-center justify-center rounded-lg">
                <Image
                  src={selectedImage.image}
                  alt={selectedImage.title}
                  width={1200}
                  height={800}
                  className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}