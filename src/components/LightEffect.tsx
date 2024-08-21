import { FC, useEffect, useState } from "react";
import { motion } from "framer-motion";

import { Particle } from "@/types/Particle";

const generateParticles = (count: number) => {
  const particles: Particle[] = [];

  for (let i = 0; i < count; i++) {
    particles.push({
      id: i.toString(),
      x: Math.random() * 100,
      duration: 20,
      delay: Math.random() * 80,
      size: Math.random() * 5 + 2,
    });
  }

  return particles;
}

interface LightEffectProps {
  count: number;
}

export const LightEffect: FC<LightEffectProps> = ({ count }: LightEffectProps) => {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
      setParticles(generateParticles(count));
  }, [count]);

  return (
    <div className="fixed inset-0 pointer-events-none z-50 mix-blend-hard-light">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-blue-600"
          style={{
            width: `${particle.size}px`,
            height: `${particle.size}px`,    
          }}
          initial={{ 
            x: `${particle.x}vw`,
            y: `105vh`, opacity: 1 }}
          animate={{ 
            y: 0, 
            opacity: 0, 
            x: [
              `${particle.x}vw`, 
              `${particle.x + Math.random() * 30 - 15}vw`,
              `${particle.x}vw`
            ]
          }}
          transition={{
            duration: particle.duration * particle.size / 5,
            delay: particle.delay,
            repeat: Infinity,
            repeatType: 'loop',
            ease: "easeInOut",
          }}
        />
      ))}
      <motion.div
        style={
          {
            width: '100%',
            height: '100%',
            background: 'linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, rgba(37, 99, 235, 0.5) 250vh)',
          }
        }
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 1, delay: 0.2 } }}
    />

    </div>
  );
};
