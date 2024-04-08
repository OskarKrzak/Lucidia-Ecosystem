import { motion } from 'framer-motion';
import React from 'react';
import parse from 'html-react-parser';

const data = [
  {
    title: 'Game Overview',
    desc: [
      "<span class='text-[#C0FF0E]'>Title:</span> Cryptocraft",
      "<span class='text-[#C0FF0E]'>Genre:</span>  Sandbox, Open-World, Survival",
      "<span class='text-[#C0FF0E]'>Setting:</span> Creative builders, explorers, Web3 enthusiasts, and community-driven players",
      'Embark on an adventure in ever-expanding worlds, craft your destiny, and become part of a vibrant community where collaboration and creativity reign supreme.',
      "<p class='text-[#7700FF] pt-[20px] pb-[20px]'>Gameplay Mechanics</p>",
      'Cryptocraft is an amalgamation of creativity, survival, and exploration, set in a richly diverse and responsive world.',
      "<span class='text-[#C0FF0E]'>Building and Crafting:</span>  From humble shelters to grandiose constructions. Cryptocraft's intuitive crafting system invites endless innovation",
      "<span class='text-[#C0FF0E]'>Exploration:</span> Traverse sprawling biomes, each brimming with unique resources and mysteries. Discover, adapt, and survive in a world that's as vast as your imagination",
    ],
    image: '/assets/images/games/crypto/overview.png',
  },
  {
    title: 'Highlighting Points',
    desc: [
      "<span class='text-[#C0FF0E]'>Dynamic, User-Generated Worlds: </span>Step into infinite realms shaped by players. Your creations contribute to the ever-evolving tapestry of Cryptocraft's universe.",
      "<span class='text-[#C0FF0E]'>Web3 Integration: </span>  Experience true ownership with blockchain-powered in-game assets. Trade, own, and monetize your creations and real estate as NFTs, adding a layer of investment to your gameplay.",
      "<span class='text-[#0ED4FF]'>Evolving Ecosystems: </span>  Interact with living environments where your actions influence the world. From altering landscapes to affecting local wildlife, your impact is tangible.",
      "<span class='text-[#0ED4FF]'>Customizable Gameplay: </span>Tailor your Cryptocraft experience with extensive modding tools and in game programming, creating unique game modes and personalizing your adventures.",
      "<span class='text-[#0ED4FF]'>Community Governance: </span>  Have a say in the development and future of Cryptocraft through a decentralized autonomous organization (DAO), empowering the community to steer the game's evolution.",
    ],
    image: '/assets/images/games/crypto/overview_2.png',
  },
];
const GameOverview: React.FC = () => {
  return (
    <section className="w-full h-full relative">
      <div className="w-full h-full overflow-hidden px-5 py-10">
        {data.map((item, i) => {
          return (
            <div
              key={i}
              className="container w-full mx-auto flex justify-between lg:flex-row flex-col sm:items-center items-start"
            >
              <motion.div
                initial={{ x: -150 }}
                whileInView={{ x: 0 }}
                transition={{ type: 'spring', stiffness: 60 }}
                className="md:w-[80%] overflow-hidden"
              >
                <div className="lg:w-[37vw] lg:h-[23.3vw] max-w-[340px] max-h-[420px] rounded-md clipped2 bg-white relative font-bold flex items-center justify-center scale-x-[-1] ">
                  <div className="scale-x-[-1] relative w-full h-full group overflow-hidden">
                    <img src={item.image} alt={item.title} className="object-cover absolute w-full h-full" />
                  </div>
                </div>
              </motion.div>
              <motion.div
                initial={{ x: 150 }}
                whileInView={{ x: 0 }}
                transition={{ type: 'spring', stiffness: 60 }}
                className="sm:w-[58.9%] flex flex-col gap-y-5 lg:py-[80px] md:py-8 sm:py-6 py-4 overflow-hidden"
              >
                <div className="w-full h-auto clipped2 bg-gry relative  font-[400] flex items-center justify-center scale-x-[-1] rounded-md">
                  <div className="scale-x-[-1] text-white w-full h-full md:md:border-l-[0.5rem] border-cyan rounded-md py-9 pl-9 pr-7">
                    <h4 className="pb-6 font-secondary text-[18px] font-bold leading-normal text-prpl">
                      {parse(item.title)}
                    </h4>
                    {item.desc.map((desc, d) => {
                      return (
                        <p key={d} className="text-[16px] font-primary leading-normal">
                          {parse(desc)}
                        </p>
                      );
                    })}
                  </div>
                </div>
              </motion.div>
            </div>
          );
        })}
      </div>
      <img
        src="/assets/images/games/crypto/coin_left.svg"
        alt="coins"
        className="absolute lg:block hidden lg:left-[75px] lg:top-[350px] "
      />
    </section>
  );
};

export default GameOverview;
