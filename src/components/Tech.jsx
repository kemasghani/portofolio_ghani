import React from 'react';
import { SectionsWrapper } from '../HOC';
import { motion } from 'framer-motion';
import { textVariant } from '../utils/motion';
import { styles } from '../styles';
import { BallCanvas } from './canvas';
import { technologies } from '../constants';

const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>What I have learned  </p>
        <h2 className={styles.sectionHeadText}>Tech Stack</h2>
      </motion.div>
      <div className="flex justify-center flex-wrap gap-10 mt-16">
        {technologies?.map((technology, index) => (
          <div key={index} className="w-28 h-28">
            <BallCanvas icon={technology.icon} />
          </div>
        ))}
      </div></>
  );
};

export default SectionsWrapper(Tech, '');
