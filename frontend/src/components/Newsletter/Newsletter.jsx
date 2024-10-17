const Idea = () => {
  return (
    <div className="bg-[#f4f0ea] landingHeader">
      <div className="flex flex-col items-center w-full lg:px-16 gap-6 px-8 py-20">
        <p className="text-3xl md:text-xl text-[#411900] landingHeader font-semibold text-center flex flex-col gap-2">
          <span className="text-5xl">Sign up</span>
          <p>Get updates about our latest and <span className="text-orange-400">special offers.</span></p>
        </p>

        <div className=" w-full md:w-2/3 flex gap-2 items-center border-2 rounded-full overflow-hidden p-1">
          
          <input
            type="text"
            className="pl-4 w-full h-12 rounded-full flex-grow focus:outline-none"
            placeholder="Email Address"
          />

          <button className=" bg-[#411900] text-white rounded-full h-12 px-6 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-2">
            Send
          </button>
        </div>
        <div className="w-full flex justify-center">
          
        </div>
      </div>
    </div>
  );
};

export default Idea;
