'use client'

import { DarkModeWrapper } from '@/components/DarkModeWrapper'
import { LightEffect } from '@/components/LightEffect'
import { Links } from '@/components/Links'
import { ProjectCard } from '@/components/ProjectCard'
import { RessourceCards } from '@/components/RessourceCard'

import { motion } from 'framer-motion'

export default function Home() {
  return (
    <DarkModeWrapper>
      <LightEffect count={50} />
      <Links />
      <motion.h1
        className="font-bold flex justify-center items-center h-screen text-transparent text-3xl sm:text-5xl xl:text-7xl 2xl:text-9xl"
        style={{
          background: 'linear-gradient(90deg, #ff00ff, #00ffff)',
          backgroundClip: 'text',
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 1, delay: 0.2 } }}
      >
        Moncef Hassani
      </motion.h1>

      <ProjectCard
        project={{
          title: 'IMU VIEWER',
          description:
            'Projet web en NextJS utilisant un serveur Socket.IO permettant de connecter un tracker avec un code unique et de visualiser ses déplacements en 3D.',
          image: 'imu-viewer.png',
          link: 'https://www.google.com',
          techStack: [
            'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-plain.svg',
            'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/threejs/threejs-original-wordmark.svg',
            'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/socketio/socketio-original.svg',
            'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-plain-wordmark.svg',
          ],
        }}
      />
      <div style={{ height: '200vh' }} />

      <RessourceCards
        ressources={[
          {
            title: "Réaliser un développement d'application",
            description: 'Framework ReactJS pour le rendu côté serveur.',
            image: 'development.png',
          },
          {
            title: 'Optimiser  des applications informatiques',
            description: 'Framework CSS pour un design rapide et responsive.',
            image: 'optimisation.png',
          },
          {
            title: 'Travailler dans une équipe informatique',
            description: "Librairie d'animation pour ReactJS.",
            image: 'team.png',
          },
          {
            title: 'Conduire un projet',
            description: 'Framework CSS pour un design rapide et responsive.',
            image: 'project.png',
          },
          {
            title: "Gérer des données de l'information",
            description: 'Framework CSS pour un design rapide et responsive.',
            image: 'database.png',
          },
          {
            title: 'Administrer des systèmes informatiques communicants complexes',
            description: 'Framework CSS pour un design rapide et responsive.',
            image: 'server.png',
          },
        ]}
      />

      <div style={{ height: '200vh' }} />
    </DarkModeWrapper>
  )
}
