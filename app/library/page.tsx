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
      image: "https://files.cdn-files-a.com/uploads/7854194/2000_68ff6b0d8d31a.png?width=1200",
    },
    {
      id: 2,
      title: "Castle inside",
      image: "https://files.cdn-files-a.com/uploads/7854194/2000_68ff6b0d4b44e.png?width=1200",
    },
    {
      id: 3,
      title: "Sci-Fi Environment",
      image: "https://files.cdn-files-a.com/uploads/7854194/2000_68ff6b0d8aa6a.png?width=1200",
    },
    {
      id: 4,
      title: "Sci-Fi Environment",
      image: "https://files.cdn-files-a.com/uploads/7854194/2000_68ff6b0e09ad9.png?width=1200",
    },
    {
      id: 5,
      title: "Spaceship Simulator",
      image: "https://files.cdn-files-a.com/uploads/7854194/2000_68ff6b0cf1432.png?width=1200",
    },
    {
      id: 6,
      title: "Spaceship Simulator",
      image: "https://files.cdn-files-a.com/uploads/7854194/2000_68ff6b0fc1987.png?width=1200",
    },
    {
      id: 7,
      title: "Spaceship Simulator",
      image: "https://files.cdn-files-a.com/uploads/7854194/2000_68ff6b0e68d4a.png?width=1200",
    },
    {
      id: 8,
      title: "Spaceship Simulator",
      image: "https://files.cdn-files-a.com/uploads/7854194/2000_68ff6d4a5b88f.png?width=1200",
    },
    {
      id: 9,
      title: "Spaceship Simulator",
      image: "https://files.cdn-files-a.com/uploads/7854194/2000_68ff6b0e2ac7d.png?width=1200",
    },
    {
      id: 10,
      title: "Plants vs Zombies",
      image: "https://files.cdn-files-a.com/uploads/7854194/2000_68ff6d4a8b9cd.png?width=1200",
    },
    {
      id: 11,
      title: "Viking Map",
      image: "https://files.cdn-files-a.com/uploads/7854194/2000_68ff6b109416d.png?width=1200",
    },
    {
      id: 12,
      title: "Fire Station",
      image: "https://files.cdn-files-a.com/uploads/7854194/2000_68ff6b109f61f.png?width=1200",
    },
    {
      id: 13,
      title: "Fire Station",
      image: "https://files.cdn-files-a.com/uploads/7854194/2000_68ff6b103b202.png?width=1200",
    },
    {
      id: 14,
      title: "Hell Map",
      image: "https://files.cdn-files-a.com/uploads/7854194/2000_68ff6b0d8d26b.png?width=1200",
    },
    {
      id: 15,
      title: "Viking Island",
      image: "https://files.cdn-files-a.com/uploads/7854194/2000_68ff6b1037f60.png?width=1200",
    },
    {
      id: 16,
      title: "SkyIsland",
      image: "https://files.cdn-files-a.com/uploads/7854194/2000_68ff6b0f9ba47.png?width=1200",
    },
    {
      id: 17,
      title: "VBattle Map",
      image: "https://files.cdn-files-a.com/uploads/7854194/2000_68ff6b1190bb3.png?width=1200",
    },
    {
      id: 18,
      title: "Lava Map",
      image: "https://files.cdn-files-a.com/uploads/7854194/2000_68ff6b0cc00d5.png?width=1200",
    },
    {
      id: 19,
      title: "Lava Map",
      image: "https://files.cdn-files-a.com/uploads/7854194/2000_68ff6b0c6a90d.png?width=1200",
    },
    {
      id: 20,
      title: "Magical Tycoon",
      image: "https://files.cdn-files-a.com/uploads/7854194/2000_68ff6d4a8810d.png?width=1200",
    },
    {
      id: 21,
      title: "VBattle Map",
      image: "https://files.cdn-files-a.com/uploads/7854194/2000_68ff6b0d8ab15.png?width=1200",
    },
    {
      id: 22,
      title: "VBattle Map",
      image: "https://files.cdn-files-a.com/uploads/7854194/2000_68ff6b10a4787.png?width=1200",
    },
    {
      id: 23,
      title: "Airport",
      image: "https://files.cdn-files-a.com/uploads/7854194/2000_68ff6b0f7b079.png?width=1200",
    },
    {
      id: 24,
      title: "Anime Map",
      image: "https://files.cdn-files-a.com/uploads/7854194/2000_68ff6b0de15eb.png?width=1200",
    },
    {
      id: 25,
      title: "Anime Map",
      image: "https://files.cdn-files-a.com/uploads/7854194/2000_68ff6b0d8b2a2.png?width=1200",
    },
    {
      id: 26,
      title: "Anime Map",
      image: "https://files.cdn-files-a.com/uploads/7854194/2000_68ff6b0f30801.png?width=1200",
    },
    {
      id: 27,
      title: "Dump Simulator",
      image: "https://files.cdn-files-a.com/uploads/7854194/2000_68ff6b0d8b942.png?width=1200",
    },
    {
      id: 28,
      title: "Castle Outside",
      image: "https://files.cdn-files-a.com/uploads/7854194/2000_68ff6b0f6b8bb.png?width=1200",
    },
    {
      id: 29,
      title: "Alien Map",
      image: "https://files.cdn-files-a.com/uploads/7854194/2000_68ff6b11be0c3.png?width=1200",
    },
    {
      id: 30,
      title: "Dark Castle",
      image: "https://files.cdn-files-a.com/uploads/7854194/2000_68ff6b11eef43.png?width=1200",
    },
    {
      id: 31,
      title: "Dark Castle",
      image: "https://files.cdn-files-a.com/uploads/7854194/2000_68ff6b1218570.png?width=1200",
    },
    {
      id: 32,
      title: "Dark Castle",
      image: "https://files.cdn-files-a.com/uploads/7854194/2000_68ff6b10022b4.png?width=1200",
    },
    {
      id: 33,
      title: "Winter Dungeon",
      image: "https://files.cdn-files-a.com/uploads/7854194/2000_68ff6b122aa4a.png?width=1200",
    },
    {
      id: 34,
      title: "Winter Dungeon",
      image: "https://files.cdn-files-a.com/uploads/7854194/2000_68ff6b12316cf.png?width=1600",
    },
    {
      id: 35,
      title: "Winter Dungeon",
      image: "https://files.cdn-files-a.com/uploads/7854194/2000_68ff6b1111737.png?width=1200",
    },
    {
      id: 36,
      title: "Island Japan",
      image: "https://files.cdn-files-a.com/uploads/7854194/2000_68ff6b12236b4.png?width=1200",
    },
    {
      id: 37,
      title: "Island Japan",
      image: "https://files.cdn-files-a.com/uploads/7854194/2000_68ff6b117771e.png?width=1200",
    },
    {
      id: 38,
      title: "Medieval Props",
      image: "https://files.cdn-files-a.com/uploads/7854194/2000_68ff6b0fbe05e.png?width=1200",
    },
    {
      id: 39,
      title: "Medieval Props",
      image: "https://files.cdn-files-a.com/uploads/7854194/2000_68ff6b0fb1437.png?width=1200",
    },
    {
      id: 40,
      title: "Giant Garden",
      image: "https://files.cdn-files-a.com/uploads/7854194/2000_68ff6b1230751.png?width=1200",
    },
    {
      id: 41,
      title: "Giant Island",
      image: "https://files.cdn-files-a.com/uploads/7854194/2000_68ff6b0d8d31a.png?width=1200",
    },
    {
      id: 42,
      title: "Giant Island",
      image: "https://files.cdn-files-a.com/uploads/7854194/2000_68ff6b0d4b44e.png?width=1200",
    },
    {
      id: 43,
      title: "Giant Island",
      image: "https://files.cdn-files-a.com/uploads/7854194/2000_68ff6b0d8aa6a.png?width=1200",
    },
    {
      id: 44,
      title: "Flowers Environment",
      image: "https://files.cdn-files-a.com/uploads/7854194/2000_68ff6b0e09ad9.png?width=1200",
    },
    {
      id: 45,
      title: "Hallowen Simulator",
      image: "https://files.cdn-files-a.com/uploads/7854194/2000_68ff6b0cf1432.png?width=1200",
    },
    {
      id: 46,
      title: "Jungle Island",
      image: "https://files.cdn-files-a.com/uploads/7854194/2000_68ff6b0fc1987.png?width=1200",
    },
    {
      id: 47,
      title: "Jungle Island",
      image: "https://files.cdn-files-a.com/uploads/7854194/2000_68ff6b0e68d4a.png?width=1200",
    },
    {
      id: 48,
      title: "Random map",
      image: "https://files.cdn-files-a.com/uploads/7854194/2000_68ff6d4a5b88f.png?width=1200",
    },
    {
      id: 49,
      title: "London Map",
      image: "https://files.cdn-files-a.com/uploads/7854194/2000_68ff6b0e2ac7d.png?width=1200",
    },
    {
      id: 50,
      title: "London Map",
      image: "https://files.cdn-files-a.com/uploads/7854194/2000_68ff6d4a8b9cd.png?width=1200",
    },
    {
      id: 51,
      title: "Medium Island",
      image: "https://files.cdn-files-a.com/uploads/7854194/2000_68ff6b109416d.png?width=1200",
    },
    {
      id: 52,
      title: "Medium Island",
      image: "https://files.cdn-files-a.com/uploads/7854194/2000_68ff6b109f61f.png?width=1200",
    },
    {
      id: 53,
      title: "Medium Island",
      image: "https://files.cdn-files-a.com/uploads/7854194/2000_68ff6b103b202.png?width=1200",
    },
    {
      id: 54,
      title: "Obby",
      image: "https://files.cdn-files-a.com/uploads/7854194/2000_68ff6b0d8d26b.png?width=1200",
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
