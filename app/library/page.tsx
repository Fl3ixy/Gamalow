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
      title: "Castle inside",
      image: "/RenderMaps/MagicalTycoon2.png",
    },
    {
      id: 3,
      title: "Sci-Fi Environment",
      image: "/RenderMaps/Operation Clogged Liberty1.png",
    },
    {
      id: 4,
      title: "Sci-Fi Environment",
      image: "/RenderMaps/Operation Clogged Liberty3.png",
    },
    {
      id: 5,
      title: "Spaceship Simulator",
      image: "/RenderMaps/SpaceshipSimulator3.png",
    },
    {
      id: 6,
      title: "Spaceship Simulator",
      image: "RenderMaps/SpaceshipSimulator7.png",
    },
    {
      id: 7,
      title: "Spaceship Simulator",
      image: "RenderMaps/SpaceshipSimulator4.png",
    },
    {
      id: 8,
      title: "Spaceship Simulator",
      image: "RenderMaps/SpaceshipSimulator6.png",
    },
    {
      id: 9,
      title: "Spaceship Simulator",
      image: "RenderMaps/SpaceshipSimulator1.png",
    },
    {
      id: 10,
      title: "Plants vs Zombies",
      image: "RenderMaps/TDSplant.png",
    },
    {
      id: 11,
      title: "Viking Map",
      image: "RenderMaps/VikingMap1.png",
    },
    {
      id: 12,
      title: "Fire Station",
      image: "RenderMaps/FireStation1.png",
    },
    {
      id: 13,
      title: "Fire Station",
      image: "RenderMaps/FireStation2.png",
    },
    {
      id: 14,
      title: "Hell Map",
      image: "RenderMaps/HellMap.png",
    },
    {
      id: 15,
      title: "Viking Island",
      image: "RenderMaps/VikingIsland2.png",
    },
    {
      id: 16,
      title: "SkyIsland",
      image: "RenderMaps/SkyIsland.png",
    },
    {
      id: 17,
      title: "VBattle Map",
      image: "RenderMaps/BattleMap3.png",
    },
    {
      id: 18,
      title: "Lava Map",
      image: "RenderMaps/LavaMap1.png",
    },
    {
      id: 19,
      title: "Lava Map",
      image: "RenderMaps/LavaMap2.png",
    },
    {
      id: 20,
      title: "Magical Tycoon",
      image: "RenderMaps/MagicalTycoon1.png",
    },
    {
      id: 21,
      title: "VBattle Map",
      image: "RenderMaps/Island2.png",
    },
    {
      id: 22,
      title: "VBattle Map",
      image: "RenderMaps/FightMap.png",
    },
    {
      id: 23,
      title: "Airport",
      image: "RenderMaps/Airport.png",
    },
    {
      id: 24,
      title: "Anime Map",
      image: "RenderMaps/AniméMap2.png",
    },
    {
      id: 25,
      title: "Anime Map",
      image: "RenderMaps/AniméMap1.png",
    },
    {
      id: 26,
      title: "Anime Map",
      image: "RenderMaps/AniméMap3.png",
    },
    {
      id: 27,
      title: "Dump Simulator",
      image: "RenderMaps/DumpSimulator.png",
    },
    {
      id: 28,
      title: "Castle Outside",
      image: "RenderMaps/Castle2.png",
    },
    {
      id: 29,
      title: "Alien Map",
      image: "RenderMaps/AlienMap.png",
    },
    {
      id: 30,
      title: "Dark Castle",
      image: "RenderMaps/DungeonMap4.png",
    },
    {
      id: 31,
      title: "Dark Castle",
      image: "RenderMaps/DungeonMap3.png",
    },
    {
      id: 32,
      title: "Dark Castle",
      image: "RenderMaps/DungeonMap5.png",
    },
    {
      id: 33,
      title: "Winter Dungeon",
      image: "RenderMaps/DungeonSpawn1.png",
    },
    {
      id: 34,
      title: "Winter Dungeon",
      image: "RenderMaps/DungeonSpawn2.png",
    },
    {
      id: 35,
      title: "Winter Dungeon",
      image: "RenderMaps/DungeonSpawn3.png",
    },
    {
      id: 36,
      title: "Island Japan",
      image: "RenderMaps/Island3.png",
    },
    {
      id: 37,
      title: "Island Japan",
      image: "RenderMaps/Island4.png",
    },
    {
      id: 38,
      title: "Medieval Props",
      image: "RenderMaps/MedievalProps3.png",
    },
    {
      id: 39,
      title: "Medieval Props",
      image: "RenderMaps/MedievalProps5.png",
    },
    {
      id: 40,
      title: "Giant Garden",
      image: "RenderMaps/GiantGarden.png",
    },
    {
      id: 41,
      title: "Giant Island",
      image: "RenderMaps/GiantIsland2.png",
    },
    {
      id: 42,
      title: "Giant Island",
      image: "RenderMaps/GiantIsland1.png",
    },
    {
      id: 43,
      title: "Giant Island",
      image: "RenderMaps/GiantIsland3.png",
    },
    {
      id: 44,
      title: "Flowers Environment",
      image: "RenderMaps/Flowers.png",
    },
    {
      id: 45,
      title: "Hallowen Simulator",
      image: "RenderMaps/HallowenSimulator.png",
    },
    {
      id: 46,
      title: "Jungle Island",
      image: "RenderMaps/JingleIsland1.png",
    },
    {
      id: 47,
      title: "Jungle Island",
      image: "RenderMaps/JingleIsland2.png",
    },
    {
      id: 48,
      title: "Random map",
      image: "RenderMaps/LOLmap.png",
    },
    {
      id: 49,
      title: "London Map",
      image: "RenderMaps/LondonMap1.png",
    },
    {
      id: 50,
      title: "London Map",
      image: "RenderMaps/LondonMap2.png",
    },
    {
      id: 51,
      title: "Medium Island",
      image: "RenderMaps/MediumIsland.png",
    },
    {
      id: 52,
      title: "Medium Island",
      image: "RenderMaps/Simulator2.png",
    },
    {
      id: 53,
      title: "Medium Island",
      image: "RenderMaps/TDSspawn2.png",
    },
    {
      id: 54,
      title: "Obby",
      image: "RenderMaps/Obby.png",
    },
    {
      id: 55,
      title: "Open World",
      image: "RenderMaps/OpenWorld1.png",
    },
    {
      id: 56,
      title: "Open World",
      image: "RenderMaps/OpenWorld2.png",
    },
    {
      id: 57,
      title: "Open World",
      image: "RenderMaps/OpenWorld3.png",
    },
    {
      id: 58,
      title: "Open World",
      image: "RenderMaps/OpenWorld4.png",
    },
    {
      id: 59,
      title: "Open World",
      image: "RenderMaps/OpenWorld5.png",
    },
    {
      id: 60,
      title: "Open World",
      image: "RenderMaps/OpenWorld11.png",
    },
    {
      id: 61,
      title: "Open World",
      image: "RenderMaps/OpenWorld6.png",
    },
    {
      id: 62,
      title: "Open World",
      image: "RenderMaps/OpenWorld7.png",
    },
    {
      id: 63,
      title: "Open World",
      image: "RenderMaps/OpenWorld9.png",
    },
    {
      id: 64,
      title: "Snow Map",
      image: "RenderMaps/SnowMap.png",
    },
    {
      id: 65,
      title: "Lava Map",
      image: "RenderMaps/LavaMap.png",
    },
    {
      id: 66,
      title: "Forest Map",
      image: "RenderMaps/ForestMap.png",
    },
    {
      id: 67,
      title: "Scene",
      image: "RenderMaps/Scene.png",
    },
    {
      id: 68,
      title: "Scene 2",
      image: "RenderMaps/NightClub1.png",
    },
    {
      id: 69,
      title: "Scene 3",
      image: "RenderMaps/NightClub2.png",
    },
    {
      id: 70,
      title: "Elephant Effect",
      image: "RenderMaps/Elephant1Effect.png",
    },
    {
      id: 71,
      title: "Dragon",
      image: "RenderMaps/Dragon.png",
    },
    {
      id: 72,
      title: "Character Showcase",
      image: "RenderMaps/PlancheCharacter.png",
    },
    {
      id: 73,
      title: "Fox in desert",
      image: "RenderMaps/Fox.png",
    },
    {
      id: 74,
      title: "Spaceship Canon",
      image: "RenderMaps/EpicCanon.png",
    },
    {
      id: 75,
      title: "Spaceship Canon",
      image: "RenderMaps/Legendary2.png",
    },
    {
      id: 76,
      title: "Spaceship Canon",
      image: "RenderMaps/Legendary.png",
    },
    {
      id: 77,
      title: "Spaceship Loot Box",
      image: "RenderMaps/LootBox2.png",
    },
    {
      id: 78,
      title: "Spaceship Loot Box",
      image: "RenderMaps/LootBox3.png",
    },
    {
      id: 79,
      title: "Spaceship Loot Box",
      image: "RenderMaps/LootBox4.png",
    },
    {
      id: 80,
      title: "Spaceship Loot Box",
      image: "RenderMaps/LootBox1.png",
    },
    {
      id: 81,
      title: "Uranium Meteor",
      image: "RenderMaps/UraniumMeteor.png",
    },
    {
      id: 82,
      title: "Ruby Meteor",
      image: "RenderMaps/RubyMeteor.png",
    },
    {
      id: 83,
      title: "Icelium",
      image: "RenderMaps/Icelium2.png",
    },
    {
      id: 84,
      title: "Spaceship Render",
      image: "RenderMaps/RenderSpaceship.png",
    },
    {
      id: 85,
      title: "Spaceship Model 2",
      image: "RenderMaps/RenderSpaceship2.png",
    },
    {
      id: 86,
      title: "Spaceship Model 3",
      image: "RenderMaps/RenderSpaceship3.png",
    },
    {
      id: 87,
      title: "Spaceship Design 7",
      image: "RenderMaps/RenderSpaceship7.png",
    },
    {
      id: 88,
      title: "Spaceship Design 8",
      image: "RenderMaps/RenderSpaceship8.png",
    },
    {
      id: 89,
      title: "Robot Design",
      image: "RenderMaps/Robot.png",
    },
    {
      id: 90,
      title: "Spaceship 6",
      image: "RenderMaps/Spaceship6.png",
    },
    {
      id: 91,
      title: "Car ship",
      image: "RenderMaps/Carship2PS.png",
    },
    {
      id: 92,
      title: "Ship Render",
      image: "RenderMaps/ShipRender.png",
    },
    {
      id: 93,
      title: "Pirate Ship",
      image: "RenderMaps/PirateShip3.png",
    },
    {
      id: 94,
      title: "Entrance render",
      image: "RenderMaps/Entrance.png",
    },
    {
      id: 95,
      title: "Boss Concept Art",
      image: "RenderMaps/BossConceptArt.png",
    },
    {
      id: 96,
      title: "Crystal Tower",
      image: "RenderMaps/CrystalTowerConceptArt.png",
    },
    {
      id: 97,
      title: "Mushroom Portal",
      image: "RenderMaps/MushroomPortalConceptArt.png",
    },
    {
      id: 98,
      title: "Station Upgrade",
      image: "RenderMaps/StationUpgrade.jpg",
    },
    {
      id: 99,
      title: "Collecte Thumbnail",
      image: "RenderMaps/CollecteThumnail.png",
    },
    {
      id: 100,
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
