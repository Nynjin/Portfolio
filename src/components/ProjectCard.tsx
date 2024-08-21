import { FC, useState } from "react";
import { motion } from "framer-motion";
import { Project } from "@/types/Project";


interface ProjectProps {
  project: Project;
}

export const ProjectCard: FC<ProjectProps> = ({ project }) => {
	const [isOnViewport, setIsOnViewport] = useState(false);
	const variants = {
    hidden: { opacity: 0, left: '50vw', borderLeft: '0vw', borderRight: '0vw', transition: { duration: 0.5 } },
    visible: { opacity: 0.1, left: '20vw', borderLeft: '30vw solid transparent', borderRight: '30vw solid transparent', position: 'fixed', transition: { duration: 0.5 } }
  }
	
  return (
		<section>

    <div className="flex justify-center items-center h-screen">
      <motion.div
        className='relative w-8/12 h-2/5 sm:h-auto lg:w-6/12'
				onViewportEnter={() => {
					setIsOnViewport(true);
				}}
				onViewportLeave={() => {
					setIsOnViewport(false);
				}}
      >
        <a href={project.link} target="_blank" rel="noopener noreferrer">
          <img 
            src={project.image} 
            alt={project.title} 
            className="rounded-lg object-cover w-full h-full"
            style={{
              // filter: 'brightness(1)',
							boxShadow: '0 0 10px 5px rgba(0, 0, 0, 0.5)',
            }}
          />

          <div className="absolute inset-0 flex flex-col justify-between m-2">
            <h2 className="font-bold text-gray-800 text-xl sm:text-3xl xl:text-4xl">
              {project.title}
            </h2>

            <div className="flex justify-between items-end w-full">
              <h1 className="text-black text-l sm:text-lg xl:text-xl">
                {project.description}
              </h1>
              <div className="flex flex-col items-end">
                {project.techStack.map((tech, index) => (
                  <img key={index} src={tech} alt={tech} className="w-3/5 sm:w-1/4 m-1"/>
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
					borderTop: '110vh solid rgba(37, 99, 235, 0.5)',
					y: "10vh"
				}}
				variants={variants}
				initial={isOnViewport ? 'hidden' : 'visible'}
				animate={isOnViewport ? 'visible' : 'hidden'}
    	/>
		</section>
  );
};
