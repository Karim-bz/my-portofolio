import { useState } from "react";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { motion } from "motion/react";
import { useTailwindBreakpoint } from "../hooks/breakpoint";

export const SocialMediaLinks = () => {
  const [isInstagramLabelVisible, setIsInstagramLabelVisible] = useState(false);
  const [isLinkedinLabelVisible, setIsLinkedinLabelVisible] = useState(false);
  const [isGithubLabelVisible, setIsGithubLabelVisible] = useState(false);
  const { orientation } = useTailwindBreakpoint();

  return (
    <div className="fixed portrait:left-5 landscape:right-15 portrait:bottom-5 landscape:bottom-15 z-1000 text-2xl md:text-3xl space-y-6 text-cfgray">
      <div className="flex gap-5 items-center justify-end">
        {(isLinkedinLabelVisible && orientation === "landscape") && 
          <motion.div 
            className="text-sm md:text-lg"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}  
          >LinkedIn
          </motion.div>}
        <FaLinkedin className="cursor-pointer hover:scale-110 transition hover:text-secondary" onClick={() => window.open("https://www.linkedin.com/in/karimbouzid", "_blank")} onMouseEnter={() => setIsLinkedinLabelVisible(true)} onMouseLeave={() => setIsLinkedinLabelVisible(false)} />
      </div>
      <div className="flex gap-5 items-center justify-end">
        {(isInstagramLabelVisible && orientation === "landscape") && 
          <motion.div className="text-sm md:text-lg"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}  
          >Instagram
          </motion.div>}
        <FaInstagram className="cursor-pointer hover:scale-110 transition hover:text-secondary" onClick={() => window.open("https://www.instagram.com/dev.karim", "_blank")} onMouseEnter={() => setIsInstagramLabelVisible(true)} onMouseLeave={() => setIsInstagramLabelVisible(false)} />
      </div>
      <div className="flex gap-5 items-center justify-end">
        {isGithubLabelVisible && (orientation === "landscape") && 
          <motion.div className="text-sm md:text-lg"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}  
          >GitHub
          </motion.div>}
        <FaGithub className="cursor-pointer hover:scale-110 transition hover:text-secondary" onClick={() => window.open("https://github.com/Karim-bz", "_blank")} onMouseEnter={() => setIsGithubLabelVisible(true)} onMouseLeave={() => setIsGithubLabelVisible(false)} />
      </div>
    </div>
  );
};
