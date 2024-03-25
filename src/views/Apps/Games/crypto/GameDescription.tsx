import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import React from 'react';

interface IOtherGames {
  id: number;
}

const GameDescription: React.FC<IOtherGames> = ({ id }: IOtherGames) => {
  const description = [
    {
      title: 'cryptocraft',
      image: 'bg_1',
      path: '/public/assets/app/games/crypto',
    },
    {
      title: 'cryptocraft',
      image: 'bg_2',
      path: '/public/assets/app/games/crypto',
    },
    {
      title: 'cryptocraft',
      image: 'bg_3',
      path: '/public/assets/app/games/crypto',
    },
  ];
  return (
    <div className="container mx-auto z-10">
      <div className="flex flex-wrap gap-3 mt-12 overflow-hidden gap-x-[68px] items-center justify-center  mb-[100px]">
        {description.map((items, i) => {
          return (
            <motion.div
              key={i}
              initial={{ x: 150 }}
              whileInView={{ x: 0 }}
              transition={{ type: 'spring', stiffness: 70 }}
              className={`${id == i ? 'hidden' : 'block'}`}
            >
              <Link to={items.path}>
                <div
                  key={i}
                  className="sm:w-[350px] w-[230px] sm:h-[470px] h-[318px] rounded-md clipped2 bg-white relative font-bold flex items-center justify-center scale-x-[-1] "
                >
                  <div className="scale-x-[-1] relative w-full h-full group overflow-hidden border border-2 border-[#A5FF16] bg-transparent">
                    <img
                      src={`/public/assets/app/games/crypto/${items.image}.png`}
                      alt={items.title}
                      className="object-cover absolute w-full h-full"
                    />

                    {/* <div className=" shadow-world w-full h-full relative z-10"></div> */}

                    <div
                      className={`transition-shadow ease-in-out duration-500 group-hover:shadow-gameHover  w-full h-full top-0 left-0 absolute z-10`}
                    ></div>

                    {/* <div className="absolute bottom-4 left-4 z-10 p-3 group-hover:text-black text-white ease-in-out duration-[0.1s]">
                      <h1 className="uppercase font-primary text-2xl tracking-wide group-hover:mb-2 transition-all">
                        {items.title}
                      </h1>
                      <div className="overflow-hidden max-h-0 group-hover:max-h-[3rem] transition-all">
                        <p className="font-medium font-primary">{items.desc}</p>
                      </div>
                    </div> */}
                  </div>
                </div>
              </Link>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default GameDescription;
