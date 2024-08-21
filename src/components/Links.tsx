import { FC } from 'react'

import { motion } from 'framer-motion'
import Image from 'next/image'

export const Links: FC = () => {
  return (
    <motion.div
      className="fixed bottom-5 left-5 gap-4 flex flex-col mix-blend-difference"
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1, transition: { duration: 1, delay: 0.2 } }}
    >
      <motion.a
        href="https://www.linkedin.com/in/moncef-hassani-b3a358222/"
        target="_blank"
        rel="noreferrer"
        whileHover={{ scale: 1.2 }}
      >
        <Image src="/linkedin.png" alt="LinkedIn" width={32} height={32} className="w-8 sm:w-12" />
      </motion.a>

      <motion.a
        href="https://github.com/Nynjin"
        target="_blank"
        rel="noreferrer"
        whileHover={{ scale: 1.2 }}
      >
        <Image src="/github.png" alt="GitHub" width={32} height={32} className="w-8 sm:w-12" />
      </motion.a>

      <motion.a href="CV.pdf" target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.2 }}>
        <Image src="/CV.png" alt="CV" width={32} height={32} className="w-8 sm:w-12" />
      </motion.a>
    </motion.div>
  )
}
