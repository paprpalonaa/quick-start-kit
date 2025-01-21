import React from 'react';
import { Command } from 'lucide-react';

const features = [
  { title: 'React + Vite', description: 'Modern frontend tooling' },
  { title: 'Node/Express', description: 'Robust backend setup' },
  { title: 'TailwindCSS', description: 'Utility-first styling' },
  { title: 'Recoil', description: 'State management' },
  { title: 'Prisma', description: 'Type-safe ORM' },
  { title: 'Docker + CI', description: 'Production-ready deployment' },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-skyBlue/5 via-mintGreen/5 to-babyPink/5">
      <main className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-6xl font-bold bg-gradient-to-r from-skyBlue via-mintGreen to-babyPink bg-clip-text text-transparent mb-4">
            quick-start
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Your complete development toolkit with React, Node, and Docker - everything you need to build and deploy modern web applications.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 rounded-lg backdrop-blur-sm bg-white/50 border border-gray-200 hover:border-skyBlue transition-all duration-300"
            >
              <h3 className="text-xl font-semibold mb-2 text-gray-800">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-white/70 backdrop-blur-sm rounded-lg p-8 border border-gray-200">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">Quick Setup</h2>
          <div className="bg-gray-900 rounded-lg p-4 font-mono text-sm text-gray-200">
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