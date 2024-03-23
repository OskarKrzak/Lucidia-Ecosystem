import React from 'react';
import RoadCard from '../components/RoadCard';
import PartnersLower from '../views/Hero/PartnersLower';
import { motion } from 'framer-motion';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

const RoadMap: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.2 }}
      className="bg-bg w-full h-auto overflow-hidden"
    >
      <img src="/team/bg.png" alt="Teambg" className="w-full h-screen object-cover absolute left-0 " />
      <img
        src="/assets/images/man.png"
        alt="man"
        className="w-fit h-fit min-w-[674px] absolute mt-[188px] left-[-329px] md:left-0"
      />
      <img
        src="/assets/images/right_man.png"
        alt="right_man"
        className="w-fit h-fit absolute right-0 mt-[331px] mr-[39px] hidden lg:block"
      />
      <Nav />
      <RoadCard />
      <PartnersLower />
      <Footer />
    </motion.div>
  );
};
export default RoadMap;
