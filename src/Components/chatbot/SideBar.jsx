const SideBar = () => {
  return (
    <div className="mx-4">
      <div
        className="bg-blue-800 bg-gradient-to-b from-blue-800 to-[#179BEE] rounded-xl relative z-10 overflow-hidden border border-primary border-opacity-20 shadow-pricing py-10 px-8 sm:p-12 lg:py-10 lg:px-6 xl:p-12 mb-10 text-center wow fadeInUp"
        data-wow-delay=".15s
      "
      >
        <span className="text-dark font-medium text-base uppercase block mb-2">
          Chatbot List
        </span>
        <ul>
          <li className="text-base font-medium text-gray-200 hover:text-gray-300 hover:underline hover:cursor-pointer leading-loose md:w-max px-4 mb-1">
            Algorithme
          </li>
          <li className="text-base font-medium text-gray-200 hover:text-gray-300 hover:underline hover:cursor-pointer leading-loose md:w-max px-4 mb-1">
            Networking
          </li>
          <li className="text-base font-medium text-gray-200 hover:text-gray-300 hover:underline hover:cursor-pointer leading-loose md:w-max px-4 mb-1">
            Software
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
