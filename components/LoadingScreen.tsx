'use client';

import { useState, useEffect } from 'react';
import { Box } from 'lucide-react';

const LoadingScreen = () => {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    // Simuler le chargement progressif
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          // Démarrer l'animation de transition
          setTimeout(() => {
            setIsTransitioning(true);
            // Masquer complètement après l'animation
            setTimeout(() => setIsVisible(false), 2000);
          }, 500);
          return 100;
        }
        // Progression plus rapide au début, plus lente à la fin
        const increment = prev < 50 ? Math.random() * 15 + 5 : Math.random() * 8 + 2;
        return Math.min(prev + increment, 100);
      });
    }, 150);

    return () => clearInterval(interval);
  }, []);

  if (!isVisible) return null;

  return (
    <div className={`fixed inset-0 z-[9999] bg-zinc-950 flex items-center justify-center transition-all duration-2000 ${
      isTransitioning ? 'opacity-0 scale-110 blur-sm' : 'opacity-100 scale-100 blur-0'
    }`}>
      {/* Background Pattern */}
      <div className={`absolute inset-0 opacity-5 transition-all duration-2000 ${
        isTransitioning ? 'scale-150 rotate-12' : 'scale-100 rotate-0'
      }`}>
        <div className="viewport-grid w-full h-full"></div>
      </div>

      {/* Floating Particles */}
      <div className={`absolute inset-0 overflow-hidden transition-all duration-2000 ${
        isTransitioning ? 'opacity-0 scale-150' : 'opacity-100 scale-100'
      }`}>
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-yellow-400/30 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <div className={`relative z-10 text-center transition-all duration-2000 ${
        isTransitioning ? 'opacity-0 scale-75 -translate-y-20' : 'opacity-100 scale-100 translate-y-0'
      }`}>
        {/* Logo Principal Animé */}
        <div className="mb-12">
          <div className="relative">
            {/* Cercles d'animation autour du logo */}
            <div className={`absolute inset-0 flex items-center justify-center transition-all duration-2000 ${
              isTransitioning ? 'scale-200 rotate-180' : 'scale-100 rotate-0'
            }`}>
              <div className="w-32 h-32 border-2 border-yellow-400/20 rounded-full animate-spin"></div>
            </div>
            <div className={`absolute inset-0 flex items-center justify-center transition-all duration-2000 ${
              isTransitioning ? 'scale-300 -rotate-180' : 'scale-100 rotate-0'
            }`}>
              <div className="w-24 h-24 border-2 border-orange-400/30 rounded-full animate-spin animate-reverse" style={{ animationDuration: '3s' }}></div>
            </div>
            
            {/* Logo Central */}
            <div className={`relative w-20 h-20 mx-auto bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center shadow-2xl shadow-yellow-400/25 animate-pulse transition-all duration-2000 ${
              isTransitioning ? 'scale-150 rotate-360 shadow-yellow-400/80' : 'scale-100 rotate-0 shadow-yellow-400/25'
            }`}>
              <Box className="h-10 w-10 text-black animate-bounce" style={{ animationDuration: '2s' }} />
            </div>
          </div>
        </div>

        {/* Nom du Créateur */}
        <div className="mb-8">
          <h1 className={`text-4xl md:text-5xl font-black font-orbitron mb-2 transition-all duration-2000 ${
            isTransitioning ? 'scale-110 tracking-widest' : 'scale-100 tracking-normal'
          }`}>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
              ALEX VORTEX
            </span>
          </h1>
          <p className={`text-zinc-400 text-lg font-medium transition-all duration-2000 ${
            isTransitioning ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'
          }`}>3D Artist & Builder</p>
        </div>

        {/* Barre de Progression */}
        <div className={`w-80 max-w-sm mx-auto mb-6 transition-all duration-2000 ${
          isTransitioning ? 'opacity-0 scale-75' : 'opacity-100 scale-100'
        }`}>
          <div className="bg-zinc-800/50 rounded-full h-2 overflow-hidden backdrop-blur-sm border border-zinc-700/50">
            <div 
              className={`h-full bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full transition-all duration-300 ease-out shadow-lg ${
                isTransitioning ? 'shadow-yellow-400/80' : 'shadow-yellow-400/30'
              }`}
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="flex justify-between mt-3 text-sm">
            <span className="text-zinc-500">Chargement...</span>
            <span className={`text-yellow-400 font-semibold transition-all duration-2000 ${
              isTransitioning ? 'scale-110' : 'scale-100'
            }`}>{Math.round(progress)}%</span>
          </div>
        </div>

        {/* Messages de Chargement */}
        <div className={`text-zinc-400 text-sm transition-all duration-2000 ${
          isTransitioning ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'
        }`}>
          {progress < 30 && "Initialisation des modèles 3D..."}
          {progress >= 30 && progress < 60 && "Chargement des textures..."}
          {progress >= 60 && progress < 90 && "Optimisation des rendus..."}
          {progress >= 90 && !isTransitioning && "Finalisation..."}
          {progress >= 90 && isTransitioning && "Bienvenue dans l'univers d'Alex Vortex !"}
        </div>

        {/* Éléments Décoratifs */}
        <div className={`absolute -top-20 -left-20 w-40 h-40 bg-gradient-to-br from-yellow-400/10 to-orange-500/10 rounded-full blur-3xl animate-pulse transition-all duration-2000 ${
          isTransitioning ? 'scale-200 opacity-0' : 'scale-100 opacity-100'
        }`}></div>
        <div className={`absolute -bottom-20 -right-20 w-32 h-32 bg-gradient-to-br from-orange-400/10 to-yellow-500/10 rounded-full blur-2xl animate-pulse transition-all duration-2000 ${
          isTransitioning ? 'scale-200 opacity-0' : 'scale-100 opacity-100'
        }`} style={{ animationDelay: '1s' }}></div>
      </div>
      
      {/* Overlay de transition finale */}
      {isTransitioning && (
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/20 via-transparent to-orange-500/20 animate-pulse"></div>
      )}
    </div>
  );
};

export default LoadingScreen;