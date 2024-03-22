import React from 'react';
import data from './road.mock.json';

const RoadCard: React.FC = () => {
  const mapcard = data.mapcard;
  return (
    <section>
      <div className="mt-[331px] flex items-center justify-end xs:justify-center mb-[287px] mr-[20px]">
        <h1 className="text-blue-400 font-semibold font-['Bai Jamjuree'] text-[45px] md:text-[72px] uppercase relative font-secondary">
          RoadMap
        </h1>
      </div>
      <div className="w-[80%] w-fit mx-auto flex flex-col relative pb-[151px]">
        <div className="grid gap-x-5 2 gap-y-8 justify-items-center lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 ">
          {mapcard.map((items, i) => {
            return (
              <div
                key={`card-${i}`}
                className="max-w-[459px] rounded-[10px] border-[2px] border-[#401675] relative"
                style={{
                  backgroundImage: 'linear-gradient(0deg, rgba(85, 17, 166, 0.79) 22.91%, rgba(0, 0, 0, 0.00) 78.01%)',
                }}
              >
                <div className="flex flex-row justify-between gap-[10px] pt-[63px] px-11">
                  <div className="text-white font-bold font-clash-grotesk text-[26px] uppercase font-primary">
                    {items.year}
                  </div>
                  <div className="text-white font-bold font-clash-grotesk text-[26px] uppercase font-primary">
                    {items.road}
                  </div>
                </div>
                <div className="text-white font-semibold font-clash-grotesk text-base leading-relaxed mb-[98px]">
                  <ul className="max-w-[399px] list-disc pt-[74px] mr-[60px] ml-[76px]">
                    {items.desc.map((items, i) => {
                      return (
                        <li className="font-primary" key={`item-${i}`}>
                          {items}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default RoadCard;
