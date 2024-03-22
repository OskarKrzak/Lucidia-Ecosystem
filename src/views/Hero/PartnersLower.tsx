import { motion } from 'framer-motion';
import React from 'react';

const PartnersLower: React.FC = () => {
  const partners = ['bloomberg', 'yahoo', 'benzinga', 'globe', 'digital', 'block', 'market'];

  return (
    <section className="w-full h-auto p-5 bg-[#0ED4FF] relative">
      <motion.div
        initial={{ y: -50 }}
        whileInView={{ y: 0 }}
        transition={{ type: 'spring', stiffness: 60 }}
        className=""
      >
        <div className="w-full max-w-[1400px] mx-auto flex flex-wrap items-center gap-x-9 md:gap-x-14 gap-y-7 justify-center h-auto">
          {partners.map((items, i) => {
            return <img src={`/partners2/${items}.webp`} key={i} alt={items} className="md:w-auto w-20 invert" />;
          })}
        </div>
      </motion.div>
    </section>
  );
};

export default PartnersLower;
