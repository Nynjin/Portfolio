'use client'

import { DarkModeWrapper } from '@/components/DarkModeWrapper'
import { ExperienceCards } from '@/components/ExperienceCard'
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
        // ref={titleRef}
        className=" font-bold flex justify-center items-center h-screen text-transparent text-3xl sm:text-5xl xl:text-7xl 2xl:text-9xl"
        style={{
          background: 'linear-gradient(90deg, #ff00ff, #00ffff)',
          backgroundClip: 'text',
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 1, delay: 0.2 } }}
      >
        Moncef Hassani
      </motion.h1>

      <div style={{ height: '80vh' }} />

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
            "Projet web NextJS utilisant permettant de connecter un tracker à l'aide de Socket.IO et de visualiser ses déplacements en 3D avec ThreeJS.",
          image: 'imu-viewer.png',
          link: 'https://tracker.moncef.studio',
          techStack: [
            'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-plain.svg',
            'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/threejs/threejs-original-wordmark.svg',
            'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/socketio/socketio-original-wordmark.svg',
            'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-plain-wordmark.svg',
          ],
        }}
      />

      <div style={{ height: '80vh' }} />

      <ProjectCard
        project={{
          title: 'ANSIBLE MANAGER',
          description:
            'Système de gestion de serveurs distants avec Ansible capable de créer un environnement contrôlé avec un terminal interne pour un serveur de production et de staging permettant actuellement de déployer une application php ou wordpress.',
          image: 'empty.png',
          link: 'https://github.com/Nynjin/Ansible',
          techStack: [
            'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/ansible/ansible-plain-wordmark.svg',
            'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/openstack/openstack-plain-wordmark.svg',
            'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-plain.svg',
            'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-plain-wordmark.svg',
            'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/wordpress/wordpress-plain-wordmark.svg',
            'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-plain-wordmark.svg',
          ],
        }}
      />

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
              "J'ai de l'expérience dans le développement d'applications web, mobiles et logicielles. Je suis capable de monter en compétences en autonomie sur des technologies de pointe comme la réalité virtuelle ou l'intelligence artificielle",
            image: 'development.png',
          },
          {
            title: 'Optimiser  des applications informatiques',
            description:
              "Je suis capable de théoriser, d'élaborer et de prototyper des algorithmes optimisés pour répondre à des problématiques complexes. Je suis particulièrement rigoureux en terme de recherches et de benchmarking pour choisir les solutions technique et technologiques les plus adaptées à mes besoins",
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
              "J'ai su mener à bien de nombreux projets collaboratifs en Agile dans le cadre de mes études, mais également dans le contexte de réalisations professionnelles destinées à être commercialisées",
            image: 'project.png',
          },
          {
            title: "Gérer des données de l'information",
            description:
              "J'ai eu à travailler avec des structures de données particulièrement complexes, de les traiter, de les transformer, afin de les rendre exploitables",
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

      <motion.h1
        className="font-bold flex justify-center items-center h-screen text-transparent text-2xl sm:text-4xl xl:text-5xl 2xl:text-7xl"
        style={{
          background: 'linear-gradient(90deg, #ff00ff, #00ffff)',
          backgroundClip: 'text',
        }}
      >
        Mes expériences
      </motion.h1>

      <ExperienceCards
        experiences={[
          {
            title: 'Alternant - Développeur logiciel',
            date: "Octobre 2022 - Aujourd'hui",
            description:
              "Développement de solutions logicielles pour intégrer des modules de simulations électriques complexes au sein d'une application micro-services. Benchmarking, prototypage d'algorithmes, déploiement et contribution à l'évolution du stack technique",
            image: 'ikattan.png',
            techStack: [
              'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-plain.svg',
              'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-plain.svg',
              'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cmake/cmake-plain-wordmark.svg',
              'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-plain-wordmark.svg',
              'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bun/bun-line.svg',
              'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/go/go-original-wordmark.svg',
              'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original-wordmark.svg',
              'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/githubactions/githubactions-plain.svg',
              'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-plain-wordmark.svg',
              'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jira/jira-plain-wordmark.svg',
            ],
          },
          {
            title: 'Stagiaire - Développeur Unity en Réalité Virtuelle',
            date: 'Avril - Juin 2022',
            description:
              "Développement d’un Serious Game en Réalité Virtuelle pour interagir avec des objets 3D issus d'outils de CAO. Implémentation d'un système de création d'avatar, de simulation de physiques et d'interactions",
            image: 'smart.jpg',
            techStack: [
              'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/unity/unity-plain-wordmark.svg',
            ],
          },
          {
            title: "Bénévolat - Membre du BDE Informatique de l'IUT Lyon 1",
            date: '2022 - 2023',
            description:
              'Planification et réalisation d’évènements. Participation à des week-end de formation',
            image: 'bde.jpeg',
            techStack: [''],
          },
        ]}
      />
    </DarkModeWrapper>
  )
}
