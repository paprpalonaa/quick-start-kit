import React from 'react';
import { Command } from 'lucide-react';

const features = [
  { title: 'React + Vite', description: 'Modern frontend tooling' },
  { title: 'Node/Express', description: 'Robust backend setup' },
  { title: 'TailwindCSS', description: 'Utility-first styling' },
  { title: 'Recoil', description: 'State management' },
  { title: 'Prisma', description: 'Type-safe ORM' },
  { title: 'Docker + CI', description: 'Production-ready deployment' },
  { title: 'Turborepo', description: 'High-performance monorepo management' },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-black bg-gradient-to-br from-skyBlue/5 via-mintGreen/5 to-babyPink/5 backdrop-blur-sm">
      <main className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-6xl font-bold bg-gradient-to-r from-skyBlue via-mintGreen to-babyPink bg-clip-text text-transparent mb-4 drop-shadow-lg">
            quick-start
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto backdrop-blur-sm">
            Your complete development toolkit with React, Node, and Docker - everything you need to build and deploy modern web applications.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative p-6 rounded-lg backdrop-blur-md bg-white/10 border border-white/20 
                        hover:bg-white/20 transition-all duration-300 
                        before:absolute before:inset-0 before:rounded-lg before:transition-all
                        before:opacity-0 hover:before:opacity-100
                        before:shadow-[0_0_15px_rgba(152,255,179,0.3),0_0_45px_rgba(51,195,240,0.2),0_0_75px_rgba(255,214,224,0.1)]
                        hover:transform hover:scale-[1.02]"
            >
              <div className="relative z-10">
                <h3 className="text-xl font-semibold mb-2 text-gray-100">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white/10 backdrop-blur-md rounded-lg p-8 border border-white/20">
          <h2 className="text-2xl font-bold mb-6 text-gray-100">Quick Setup</h2>
          <div className="bg-gray-900/90 rounded-lg p-4 font-mono text-sm text-gray-200">
            <pre className="whitespace-pre-wrap">
              {`# Clone the repository
git clone your-repo-url

# Install dependencies
pnpm install

# Start development servers
pnpm dev`}
            </pre>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;