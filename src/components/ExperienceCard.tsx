/* eslint-disable @typescript-eslint/no-unsafe-assignment */

/* eslint-disable react-hooks/rules-of-hooks */
import { Experience } from '@/types/Experience'

import { FC } from 'react'
import { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'

import { motion, useAnimation } from 'framer-motion'

interface ExperienceCardProps {
  experiences: Experience[]
}

export const ExperienceCards: FC<ExperienceCardProps> = ({ experiences }: ExperienceCardProps) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-1 gap-20 m-20">
      {experiences.map((experience, index) => {
        const controls = useAnimation()
        // eslint-disable-next-line @typescript-eslint/no-unsafe-call
        const [ref, inView] = useInView()

        useEffect(() => {
          if (inView) {
            void controls.start('visible')
          } else {
            void controls.start('hidden')
          }
        }, [controls, inView])

        return (
          <motion.div
            ref={ref}
            key={experience.title}
            className="rounded-lg shadow-lg overflow-hidden grid grid-cols-1 bg-white p-5"
            initial="hidden"
            animate={controls}
            variants={{
              visible: { opacity: 1, x: 0, transition: { duration: 1 } },
              hidden: { opacity: 0, x: index % 2 === 0 ? '-90%' : '90%' },
            }}
          >
            <img
              src={experience.image}
              alt={experience.title}
              className="pl-4 w-1/2 sm:w-1/3 xl:w-1/6"
            />

            <div className="p-4 col-span-2">
              <h2 className="font-bold text-sm sm:text-lg xl:text-xl text-gray-600">
                {experience.title}
              </h2>
              <p className="text-xs sm:text-xs xl:text-base text-gray-300">{experience.date}</p>
              <p className="text-xs sm:text-sm xl:text-lg text-gray-400">
                {experience.description}
              </p>
            </div>

            <div className="flex flex-row items-end w-1/5 sm:w-1/12 xl:w-1/12">
              {experience.techStack.map((tech, index) => (
                <img key={index} src={tech} alt={tech} className="m-1 w-12" />
              ))}
            </div>
          </motion.div>
        )
      })}
    </div>
  )
}
