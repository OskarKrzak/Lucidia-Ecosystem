const Culture = () => {
  return (
    <section className="w-full h-full relative">
      <div className="w-full h-full overflow-hidden px-5">
        <div className="container w-full mx-auto flex justify-between lg:flex-row flex-col sm:items-center items-start">
          <div className="md:w-[60%]">
            <h2 className="font-medium text-right md:text-[62px] text-[32px] leading-normal font-primary text-cyan max-w-[320px]">
              Culture & Benefits
            </h2>
          </div>
          <div className="sm:w-[58.9%] flex flex-col gap-y-5 lg:py-[134px] md:py-16 sm:py-7 py-5">
            <div className="w-full h-auto clipped2 bg-gry relative  font-[600] flex items-center justify-center scale-x-[-1] rounded-md">
              <div className="scale-x-[-1] text-white w-full h-full md:md:border-l-[0.5rem] border-cyan rounded-md">
                <p className="py-16 pl-7 pr-1 text-[24px] font-primary leading-[36px]">
                  Emphasize Lucidia's collaborative culture, commitment to innovation, and benefits like remote work
                  options, continuous learning opportunities, and participation in groundbreaking projects.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Culture;
