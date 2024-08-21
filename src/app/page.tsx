'use client'

import { DarkModeWrapper } from '@/components/DarkModeWrapper'
import { LightEffect } from '@/components/LightEffect'
import { Links } from '@/components/Links'
import { ProjectCard } from '@/components/ProjectCard'
import { RessourceCards } from '@/components/RessourceCards'

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

      <div style={{ height: '100vh' }} />

      <motion.h1
        className="font-bold flex justify-center items-center h-screen text-transparent text-2xl sm:text-4xl xl:text-5xl 2xl:text-7xl"
        style={{
          background: 'linear-gradient(90deg, #ff00ff, #00ffff)',
          backgroundClip: 'text',
        }}
      >
        Mes projets
      </motion.h1>

      <ProjectCard
        project={{
          title: 'IMU VIEWER',
          description:
            'Projet web en NextJS utilisant un serveur Socket.IO permettant de connecter un tracker avec un code unique et de visualiser ses déplacements en 3D.',
          image: 'imu-viewer.png',
          link: 'https://tracker.moncef.studio',
          techStack: [
            'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-plain.svg',
            'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/threejs/threejs-original-wordmark.svg',
            'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/socketio/socketio-original.svg',
            'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-plain-wordmark.svg',
          ],
        }}
      />

      <div style={{ height: '100vh' }} />

      <motion.h1
        className="font-bold flex justify-center items-center h-screen text-transparent text-2xl sm:text-4xl xl:text-5xl 2xl:text-7xl"
        style={{
          background: 'linear-gradient(90deg, #ff00ff, #00ffff)',
          backgroundClip: 'text',
        }}
      >
        Mes compétences
      </motion.h1>

      <RessourceCards
        ressources={[
          {
            title: "Réaliser un développement d'application",
            description:
              "Je suis capable de théoriser, d'élaborer et de prototyper des algorithmes permettant de répondre à des problématiques complexes. La montée en compétences sur des technologies de pointe n'a rien de nouveau pour moi",
            image: 'development.png',
          },
          {
            title: 'Optimiser  des applications informatiques',
            description:
              "Je suis particulièrement rigoureux en terme de recherches et de benchmarking pour choisir les solutions technique et technologiques les plus adaptées à mon besoin. J'essaye toujours de rendre mes applications les plus performantes possibles",
            image: 'optimisation.png',
          },
          {
            title: 'Travailler dans une équipe informatique',
            description:
              "J'ai souvent eu l'opportunité de travailler en équipe, que cela soit pour des projets personnels, scolaires ou dans un contexte professionnel. J'ai donc acquis une certaine aisance en terme de collaboration, notamment à l'aide de code reviews ou de pair programming",
            image: 'team.png',
          },
          {
            title: 'Conduire un projet',
            description:
              "J'ai su mener à bien de nombreux projets en Agile dans le cadre de mes études, mais également dans le contexte de réalisations professionnelles destinées à être commercialisées",
            image: 'project.png',
          },
          {
            title: "Gérer des données de l'information",
            description:
              "J'ai eu à travailler avec des structures de données particulièrement complexes, de les traiter, de les transformer, afin de les rendre exploitables au sein de systèmes complexes",
            image: 'database.png',
          },
          {
            title: 'Administrer des systèmes informatiques communicants complexes',
            description:
              "Je suis capable de mettre au point un environnement conteneurisé pouvant être déployé au sein d'une architecture microservice et de maintenir son intégrité au fur et à mesure de l'évolution des besoins",
            image: 'server.png',
          },
        ]}
      />

      <div style={{ height: '100vh' }} />

      <motion.h1
        className="font-bold flex justify-center items-center h-screen text-transparent text-2xl sm:text-4xl xl:text-5xl 2xl:text-7xl"
        style={{
          background: 'linear-gradient(90deg, #ff00ff, #00ffff)',
          backgroundClip: 'text',
        }}
      >
        Mon expérience
      </motion.h1>
    </DarkModeWrapper>
  )
}
