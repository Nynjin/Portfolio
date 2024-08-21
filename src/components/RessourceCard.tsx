/* eslint-disable @typescript-eslint/no-unsafe-assignment */

/* eslint-disable react-hooks/rules-of-hooks */
import { Ressource } from '@/types/Ressource'

import { FC } from 'react'
import { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'

import { motion, useAnimation } from 'framer-motion'

interface RessourceCardProps {
  ressources: Ressource[]
}

export const RessourceCards: FC<RessourceCardProps> = ({ ressources }: RessourceCardProps) => {
  return (
    <div className="grid grid-cols-2 gap-20">
      {ressources.map((ressource, index) => {
        const controls = useAnimation()
        // eslint-disable-next-line @typescript-eslint/no-unsafe-call
        const [ref, inView] = useInView()

        useEffect(() => {
          if (inView) {
            void controls.start('visible')
          }
        }, [controls, inView])

        return (
          <motion.div
            ref={ref}
            key={ressource.title}
            className="rounded-lg shadow-lg overflow-hidden flex flex-row mb-10"
            initial="hidden"
            animate={controls}
            variants={{
              visible: { opacity: 1, x: 0, transition: { duration: 1 } },
              hidden: { opacity: 0, x: index % 2 === 0 ? '-90%' : '90%' },
            }}
          >
            <img
              src={ressource.image}
              alt={ressource.title}
              className="object-cover w-1/5 p-10 mix-blend-difference"
            />

            <div className="p-4">
              <h2 className="font-bold text-lg xl:text-xl text-gray-600">{ressource.title}</h2>
              <p className="text-sm xl:text-lg text-gray-400">{ressource.description}</p>
            </div>
          </motion.div>
        )
      })}
    </div>
  )
}
