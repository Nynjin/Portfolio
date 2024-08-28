import { Project } from '@/types/Project'

import { FC, useState } from 'react'

import { motion } from 'framer-motion'

interface ProjectProps {
  project: Project
}

export const ProjectCard: FC<ProjectProps> = ({ project }) => {
  const [isOnViewport, setIsOnViewport] = useState(false)

  const hidden = {
    opacity: 0,
    left: '50vw',
    borderLeft: '0vw',
    borderRight: '0vw',
    transition: { duration: 0.5 },
  }

  const visible = {
    opacity: 0.15,
    left: '4vw',
    borderLeft: '45vw solid transparent',
    borderRight: '45vw solid transparent',
    position: 'fixed',
    transition: { duration: 0.5 },
  }

  const cardVisible = {
    opacity: 1,
    transition: {
      delay: 0.4,
    },
  }

  const cardInvisible = {
    opacity: 0,
  }

  return (
    <section>
      <div className="flex justify-center items-center h-screen">
        <motion.div
          className="inset-0 z-10 p-40"
          onViewportEnter={() => {
            setIsOnViewport(true)
          }}
          onViewportLeave={() => {
            setIsOnViewport(false)
          }}
        ></motion.div>
        <motion.div
          className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8/12 h-2/5 sm:h-auto lg:w-6/12 z-50"
          initial={isOnViewport ? cardVisible : cardInvisible}
          animate={isOnViewport ? cardVisible : cardInvisible}
          style={{
            pointerEvents: isOnViewport ? 'auto' : 'none',
          }}
        >
          <a href={project.link} target="_blank" rel="noopener noreferrer">
            <img
              src={project.image}
              alt={project.title}
              className="object-cover w-full h-full"
              style={{
                boxShadow: '0 0 10px 5px rgba(0, 0, 0, 0.5)',
              }}
            />

            <div className="absolute inset-0 bg-white opacity-50" />

            <div className="absolute inset-0 flex flex-col justify-between m-2">
              <h2 className="font-bold text-gray-800 text-xl sm:text-3xl xl:text-4xl">
                {project.title}
              </h2>

              <div className="flex justify-between items-end w-full absolute">
                <h1 className="text-black text-sm sm:text-lg xl:text-xl w-11/12">
                  {project.description}
                </h1>
                <div className="flex flex-col items-end w-1/5 sm:w-1/12 xl:w-1/6">
                  {project.techStack.map((tech, index) => (
                    <img key={index} src={tech} alt={tech} className="m-1 w-12" />
                  ))}
                </div>
              </div>
            </div>
          </a>
        </motion.div>
      </div>
      <motion.div
        className="inset-x-0 bottom-0 pointer-events-none z-50 mix-blend-hard-light"
        style={{
          width: 0,
          height: 0,
          borderTop: '110vh solid rgb(37, 99, 235)',
          y: '10vh',
        }}
        initial={isOnViewport ? hidden : visible}
        animate={isOnViewport ? visible : hidden}
      />
    </section>
  )
}
