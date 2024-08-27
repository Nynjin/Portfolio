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
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-20 mix-blend-difference m-20">
      {ressources.map((ressource, index) => {
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
            key={ressource.title}
            className="rounded-lg shadow-lg overflow-hidden grid grid-cols-2"
            initial="hidden"
            animate={controls}
            variants={{
              visible: { opacity: 1, x: 0, transition: { duration: 1 } },
              hidden: { opacity: 0, x: index % 2 === 0 ? '-90%' : '90%' },
            }}
          >
            <img src={ressource.image} alt={ressource.title} className="pl-4 sm:w-2/3" />
            {/* <Image
              src={'/' + ressource.image}
              alt={ressource.title}
              width={50}
              height={50}
              style={{
                boxShadow: '0 0 10px 5px rgba(0, 0, 0, 0.5)',
              }}
            /> */}

            <div className="p-4 col-span-2">
              <h2 className="font-bold text-sm sm:text-lg xl:text-xl text-gray-600">
                {ressource.title}
              </h2>
              <p className="text-xs sm:text-sm xl:text-lg text-gray-400">{ressource.description}</p>
            </div>
          </motion.div>
        )
      })}
    </div>
  )
}
