"use client";

import { useState } from "react";
import Image from "next/image";
import { Check, Star, Box, Shield, Clock, Users, Layers, User, ChevronRight, BoxIcon } from "lucide-react";
import Link from "next/link";

const PricingPage = () => {
  const pricingRanges = [
    {
      name: "Assets & Props",
      priceRange: "50$ - 500$",
      duration: "3-7 days",
      description:
        "Individual 3D models, accessories and assets for your projects",
      features: [
        "Low to high-poly models",
        "Textures incluses",
        "Multiple formats",
        "Revisions included",
      ],
      popular: false,
      examples: ["Gun", "Car", "Assets", "Decorative objects"],
    },
    {
      name: "Environments",
      priceRange: "300$ - 2500$",
      duration: "few days / 1 week",
      description: "Complete and immersive environments for your games",
      features: [
        "Optimizeds",
        "Custom assets",
        "Professional lighting",
        "Custom textures",
        "Extended technical support",
      ],
      popular: true,
      examples: ["World Design", "Open worlds"],
    },
    {
      name: "Characters & Rigs",
      priceRange: "100$ - 800$",
      duration: "1 week",
      description: "Complete characters",
      features: ["High definition modeling", "Custom texture", "Optimizeds"],
      popular: false,
      examples: ["Main heroes", "NPCs", "Creatures", "Mechas"],
    },
  ];

  const customServices = [
    {
      icon: Box,
      title: "Performance Optimization",
      description: "Improving performance for your existing projects",
      price: "Starting at 300$",
    },
    {
      icon: Shield,
      title: "Dedicated Technical Support",
      description: "Ongoing technical assistance and maintenance",
      price: "Starting at 50$",
    },
    {
      icon: Users,
      title: "Texturing",
      description: "Creating high-quality textures for your 3D models",
      price: "Starting at 50$",
    },
  ];

  return (
    <div className="min-h-screen pt-16 md:pt-20 viewport-grid">
      {/* Hero Section */}
      <section className="py-10 md:py-16 lg:py-20 px-4 relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center px-2">
          <div className="flex justify-center mb-6 md:mb-8">
            <div className="cube-3d w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-xl md:rounded-2xl shadow-2xl overflow-hidden">
              <Image
                src="/Pictures/Dollar.png"
                alt="Alex Vortex Logo"
                width={80}
                height={80}
                className="w-full h-full object-cover"
                priority
              />
            </div>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black mb-6 md:mb-8">
            <span className="text-yellow-400 drop-shadow-[0_0_20px_rgba(234,179,8,0.8)]">
              PRICES
            </span>
            <br />
            <span className="text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.8)]">
              TRANSPARENT
            </span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-8 md:mb-12 max-w-3xl mx-auto leading-relaxed px-4">
            Clear and competitive pricing for exceptional 3D creations. Each
            project benefits from my technical expertise and artistic passion
          </p>
        </div>

      </section>
          {/* Boutons d'action */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Link href="/library">
              <button className="group bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-300 hover:to-orange-400 text-white px-8 py-4 rounded-xl flex items-center space-x-3 text-lg font-bold shadow-2xl hover:shadow-yellow-400/25 transition-all transform hover:scale-105">
                <BoxIcon className="h-6 w-6" />
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

      {/* Pricing Cards */}
      <section className="py-12 md:py-16 lg:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16 lg:mb-20">
            {pricingRanges.map((range, index) => (
              <div
                key={index}
                className={`bolt-card rounded-xl md:rounded-2xl p-6 md:p-8 relative overflow-hidden hover:scale-105 duration-300 border-2 border-gray-700 ${
                  range.popular ? "scale-105 border-2 border-gray-700 hover:scale-110 duration-300" : ""
                }`}
              >
                {range.popular && (
                  <div className="absolute -top-3 sm:-top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-yellow-400 to-orange-500 px-4 sm:px-6 py-1 sm:py-2 rounded-lg sm:rounded-xl text-white font-bold flex items-center shadow-lg text-sm sm:text-base">
                      <Star className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
                      POPULAR
                    </div>
                  </div>
                )}

                <div className="text-center mb-6 md:mb-8 relative z-10">
                  <h3 className="text-xl sm:text-2xl font-black mb-3 md:mb-4 text-yellow-400 drop-shadow-[0_0_20px_rgba(234,179,8,0.8)]">
                    {range.name}
                  </h3>
                  <div className="mb-3 md:mb-4">
                    <span className="text-2xl sm:text-3xl font-bold text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.8)]">
                      {range.priceRange}
                    </span>
                  </div>
                  <div className="flex items-center justify-center text-gray-400 mb-3 md:mb-4">
                    <Clock className="h-3 w-3 sm:h-4 sm:w-4 mr-2" />
                    <span>{range.duration}</span>
                  </div>
                  <p className="text-sm sm:text-base text-zinc-300">
                    {range.description}
                  </p>
                </div>

                <ul className="space-y-3 md:space-y-4 mb-6 md:mb-8 relative z-10">
                  {range.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <Check className="h-4 w-4 sm:h-5 sm:w-5 text-green-400 mt-0.5 mr-2 sm:mr-3 flex-shrink-0" />
                      <span className="text-sm sm:text-base text-zinc-300">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <div className="mb-4 md:mb-6 relative z-10">
                  <p className="text-xs sm:text-sm text-zinc-400 mb-2">
                    Exemples :
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {range.examples.map((example, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 bolt-card rounded text-xs sm:text-sm"
                      >
                        {example}
                      </span>
                    ))}
                  </div>
                </div>

                <Link href="/contact">
                  <button className="w-full py-3 sm:py-4 rounded-lg md:rounded-xl font-semibold text-base sm:text-lg transition-all duration-300 relative z-10 hover:scale-105 bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-300 hover:to-orange-400 text-black">
                    <span className="text-white text-xl font-black">
                      Contact me!
                    </span>
                  </button>
                </Link>
              </div>
            ))}
          </div>

          {/* Custom Services */}
          <div className="text-center mb-12 md:mb-16">
            <div className="flex justify-center mb-4 md:mb-6">
              <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl flex items-center justify-center">
                <Image
                  src="/Pictures/Deal.png"
                  alt="Logo"
                  width={32}
                  height={32}
                  className="w-full h-full flex items-center justify-center"
                />{" "}
              </div>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black mb-4 md:mb-6 px-2">
              <p className="text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.8)]">
                SERVICES
              </p>{" "}
              <span className="text-yellow-400 drop-shadow-[0_0_20px_rgba(234,179,8,0.8)]">
                ADDITIONNELS
              </span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto px-4">
              Additional services to support your long-term projects
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16 lg:mb-20">
            {customServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="bolt-card rounded-xl md:rounded-2xl p-6 md:p-8 text-center relative overflow-hidden border-2 border-gray-700 hover:scale-105 duration-300"
                >
                  <div className="absolute top-4 right-4 opacity-10 hidden sm:block">
                    <div className="wireframe-cube w-6 h-6 md:w-8 md:h-8"></div>
                  </div>
                  <div className="bolt-card p-3 sm:p-4 rounded-xl md:rounded-2xl w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 mx-auto mb-4 md:mb-6 flex items-center justify-center relative z-10">
                    <Icon className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 text-yellow-400" />
                  </div>
                  <div className="relative z-10">
                    <h3 className="text-lg sm:text-xl font-bold mb-3 md:mb-4 text-white">
                      {service.title}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-300 mb-4 md:mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    <div className="text-xl sm:text-2xl font-bold text-yellow-400">
                      {service.price}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Custom Services */}
          <div className="text-center mb-12 md:mb-16">
            <div className="flex justify-center mb-4 md:mb-6">
              <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl flex items-center justify-center">
                <Image
                  src="/Pictures/Questions.png"
                  alt="Logo"
                  width={32}
                  height={32}
                  className="w-full h-full flex items-center justify-center"
                />{" "}
              </div>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black mb-4 md:mb-6 px-2">
              <p className="text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.8)]">
                NEED HELP?
              </p>
            <p className="text-base sm:text-lg md:text-xl max-w-3xl mx-auto px-4 text-yellow-400 drop-shadow-[0_0_20px_rgba(234,179,8,0.8)]">
              Read this to be informed
            </p>
            </h2>
          </div>

          {/* FAQ Section */}
          <div className="bolt-card rounded-2xl md:rounded-3xl p-6 sm:p-8 md:p-12 relative overflow-hidden hover:scale-105 duration-300 border-2 border-gray-700">
            <div className="absolute top-4 left-4 sm:top-8 sm:left-8 wireframe-cube opacity-10 hidden sm:block"></div>
            <div className="relative z-10">
              <h2 className="text-2xl sm:text-3xl font-black mb-6 md:mb-8 text-center px-2">
                <p className="text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.8)]">
                  QUESTIONS
                </p>{" "}
                <span className="text-yellow-400 to-orange-500 drop-shadow-[0_0_20px_rgba(234,179,8,0.8)]">
                  FREQUENTLY
                </span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-yellow-400 mb-2 sm:mb-3">
                    Delivery times?
                  </h3>
                  <p className="text-sm sm:text-base text-gray-300 mb-4 sm:mb-6">
                    Each project scrupulously adheres to the announced
                    deadlines. Regular communication and daily updates are
                    guaranteed..
                  </p>

                  <h3 className="text-base sm:text-lg font-bold text-yellow-400 mb-2 sm:mb-3">
                    Revisions included?
                  </h3>
                  <p className="text-sm sm:text-base text-gray-300 mb-4 sm:mb-6">
                    The number of revisions varies depending on the package.
                  </p>
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-yellow-400 mb-2 sm:mb-3">
                    Delivery formats?
                  </h3>
                  <p className="text-sm sm:text-base text-gray-300 mb-4 sm:mb-6">
                    All standard formats: .fbx, .obj, .blend, .spp, .rbxm
                    Specific formats on request.
                  </p>

                  <h3 className="text-base sm:text-lg font-bold text-yellow-400 mb-2 sm:mb-3">
                    Secure payment?
                  </h3>
                  <p className="text-sm sm:text-base text-gray-300">
                    Secure payments via PayPal, bank transfer, or Robux
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PricingPage;
