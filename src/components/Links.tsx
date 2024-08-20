import { FC } from 'react'

import { motion } from 'framer-motion'

export const Links: FC = () => {
    return (
        <motion.div
            className="fixed bottom-5 left-5 gap-4 flex flex-col mix-blend-difference"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
        >

            <a href="https://www.linkedin.com/in/moncef-hassani-b3a358222/" target="_blank">
                <img src="linkedin.png" alt="LinkedIn" className='w-12 h-12' />
            </a>

            <a href="https://github.com/Nynjin" target="_blank">
                <img src="github.png" alt="GitHub" className='w-12 h-12' />
            </a>

            <a href="CV.pdf" target="_blank" rel="noopener noreferrer">
                <img src="CV.png" alt="Download CV" className='w-12 h-12' />
            </a>
        </motion.div>
    );
};