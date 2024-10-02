'use client'

import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  color: string;
}

interface ParticleButtonProps {
  children: React.ReactNode;
  className?: string;
  particleCount?: number;
  particleColors?: string[];
}

const ParticleButton: React.FC<ParticleButtonProps> = ({
  children,
  className = '',
  particleCount = 50,
  particleColors = ['#FF6B6B', '#4ECDC4', '#45B7D1', '#FFA07A', '#98D8C8'],
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const createParticles = () => {
      const particles: Particle[] = [];
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.2, // Consistent low velocity
          vy: (Math.random() - 0.5) * 0.2, // Consistent low velocity
          radius: Math.random() * 1.5 + 0.5,
          color: particleColors[Math.floor(Math.random() * particleColors.length)],
        });
      }
      return particles;
    };

    particlesRef.current = createParticles();

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particlesRef.current.forEach((particle) => {
        particle.x += particle.vx;
        particle.y += particle.vy;

        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.fill();
      });

      requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      particlesRef.current = createParticles();
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [particleCount, particleColors]);

  return (
    <motion.button
      className={`relative overflow-hidden rounded-lg px-6 py-3 font-medium text-sm uppercase tracking-wider transition-all duration-300 ease-in-out ${className}`}
      style={{
        background: 'rgba(255, 255, 255, 0.8)',
        backdropFilter: 'blur(10px)',
        border: '1px solid rgba(0, 0, 0, 0.1)',
        boxShadow: '0 0 0 1px rgba(0, 0, 0, 0.05)',
      }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ mixBlendMode: 'multiply' }}
      />
      <span className="relative z-10 text-black font-semibold">
        {children}
      </span>
    </motion.button>
  );
};

export default ParticleButton;