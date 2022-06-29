const SideBar = () => {
  return (
    <div className="mx-4 hidden md:block">
      <div
        className="bg-blue-800 bg-gradient-to-b from-blue-800 to-[#179BEE] rounded-xl relative z-10 overflow-hidden border border-primary border-opacity-20 shadow-pricing py-10 px-8 sm:p-12 lg:py-10 lg:px-6 xl:p-12 mb-10 text-center wow fadeInUp"
        data-wow-delay=".15s
      "
      >
        <span className="text-dark font-medium text-base uppercase block mb-2">
          Algorithme teacher
        </span>
        <img
          className="w-16 h-16"
          src="/assets/chat/algo.svg"
          alt="algorithm"
        />
      </div>
    </div>
  );
};

export default SideBar;
