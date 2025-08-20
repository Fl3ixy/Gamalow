import './globals.css';
import type { Metadata } from 'next';
import { Inter, Orbitron } from 'next/font/google';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });
const orbitron = Orbitron({ 
  subsets: ['latin'],
  variable: '--font-orbitron',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Gamalow | 3D Modeler",
  description: "Portfolio for gamalow",
  keywords: '3D modeling, game design, Roblox, games, 3D artist, game builder, environment design',
  icons: {
    icon: "/Icons/Gamalow.ico",
    apple: "/Icons/Gamalow.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className={`${inter.className} ${orbitron.variable} bg-gray-900 text-white overflow-x-hidden viewport-grid`}>
        <Navigation />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}