import parse from 'html-react-parser';
import { motion } from 'framer-motion';
import React from 'react';

const Benefits: React.FC = () => {
  const data = [
    {
      desc: "<span classname='font-semibold'>Wider Audience Reach:</span> Joining Lucidia provides games with instant exposure to over <span classname='text-[#0ED4FF]'>40,000</span> users. This helps tackle the common struggle faced by many Web3 games in attracting players: <span classname='font-semibold'>Active Users</span>",
    },
    {
      desc: "<span classname='font-semibold'>Enhanced Player Experience:</span> Lucidia makes gaming simpler and more connected. With just <span classname='font-semibold'>one login for all games</span>. you can easily explore different titles without juggling multiple accounts. As an addition, whether you're on your PC, console, or phone, the experience stays smooth and consistent.",
    },
    {
      desc: "<span classname='font-semibold'>Community Engagement:</span> At Lucidia, our <span classname='font-semibold'>community is alive and buzzing</span>. growing by the day. it's not iust a place to play games: it's a tight-knit group where developers get, support, <span classname='text-[#0ED4FF]'>real-time feedback</span>, and engagement from passionate players like you.",
    },
    {
      desc: "<span classname='font-semibold'>Innovative Features:</span> At Lucidia, we offer developers more than just a gaming platform. With our <span classname='text-[#0ED4FF]'>NFT Integration Toolkit,</span> marketplaces, and community-driven platforms. we provide the tools you need to <span classname='font-semibold'>take your games to the next level</span>.",
    },
  ];

  return (
    <section className="container mx-auto w-full h-full relative mt-[200px]">
      <div className="w-full mx-auto flex justify-center lg:flex-row flex-col sm:items-center items-start">
        <motion.div
          initial={{ x: 150 }}
          whileInView={{ x: 0 }}
          transition={{ type: 'spring', stiffness: 60 }}
          className=""
        >
          {' '}
          <div className="w-[40%]">
            <h1 className="max-w-[380px] min-w-[320px] flex items-center font-primary leading-[58px] w-auto text-[32px] 2xl:text-[62px] 2xl:leading-[3.5rem] font-[500] text-transparent bg-clip-text bg-gradient-to-r from-[#A5FF16] via-[#0ED4FF] to-white">
              Benefits for game developers
            </h1>
          </div>
        </motion.div>
        <div className="sm:w-[58.9%] flex flex-col gap-y-5 md:py-16 sm:py-7 py-5 lg:block hidden">
          <motion.div
            initial={{ x: -150 }}
            whileInView={{ x: 0 }}
            transition={{ type: 'spring', stiffness: 60 }}
            className=""
          >
            {' '}
            <div className="w-full h-auto clipped2 bg-gry relative  font-[400] flex items-center justify-center scale-x-[-1] rounded-md">
              <div className="scale-x-[-1] text-white w-full h-full md:md:border-l-[0.5rem] border-[#0ED4FF] rounded-md py-14 pl-7 pr-8 flex flex-col gap-y-10">
                {data.map((item, i) => {
                  return (
                    <p key={`desc-${i}`} className="text-[20px] font-primary leading-[20px] tracking-[1px]">
                      {parse(item.desc)}
                    </p>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>
        <div className="sm:w-[58.9%] flex flex-col gap-y-5 md:py-16 sm:py-7 py-5 lg:hidden md:block">
          <div className="w-full h-auto clipped2 bg-gry relative  font-[400] flex items-center justify-center scale-x-[-1] rounded-md">
            <div className="scale-x-[-1] text-white w-full h-full md:md:border-l-[0.5rem] border-[#0ED4FF] rounded-md py-14 pl-7 pr-8 flex flex-col gap-y-10">
              {data.map((item, i) => {
                return (
                  <div key={`item-${i}`}>
                    <p key={`desc-${i}`} className="text-[20px] font-primary leading-[20px] tracking-[1px]">
                      {parse(item.desc)}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
