const About = () => {
  return (
    <section id="about-us" className="p-10 lg:p-16 bg-blue-100">
      <div className="container">
        <div id="about" className="bg-white wow fadeInUp" data-wow-delay=".2s">
          <div className="shadow-lg border-0  lg:flex items-center justify-between border overflow-hidden">
            <div className="lg:max-w-[565px] xl:max-w-[640px] w-full py-12 px-7 sm:px-12 md:p-16 lg:py-9 lg:px-16 xl:p-[70px]">
              <span className=" text-sm font-medium text-white py-2 px-5 bg-blue-800 inline-block mb-5">
                About Us
              </span>
              <h2
                className="
                      font-bold
                      text-3xl
                      sm:text-4xl
                      2xl:text-[40px]
                      sm:leading-snug
                      text-dark
                      mb-6
                    "
              >
                Brilliant Toolkit to Build Nextgen Website Faster.
              </h2>
              <p className="text-base text-gray-500 mb-9 leading-relaxed">
                The main ‘thrust' is to focus on educating attendees on how to
                best protect highly vulnerable business applications with
                interactive panel discussions and roundtables led by subject
                matter experts.
              </p>
              <p className="text-base text-gray-500 mb-9 leading-relaxed">
                The main ‘thrust' is to focus on educating attendees on how to
                best protect highly vulnerable business applications with
                interactive panel.
              </p>
              <a
                href="#"
                className="
                      inline-flex
                      items-center
                      justify-center
                      py-4
                      px-6
                      rounded
                      text-white
                      bg-blue-800
                      text-base
                      font-medium
                      hover:bg-opacity-90 hover:shadow-lg
                      transition
                      duration-300
                      ease-in-out
                    "
              >
                Learn More
              </a>
            </div>
            <div className="text-center">
              <div className="relative inline-block z-10">
                <img
                  src="/assets/about-image.svg"
                  alt="image"
                  className="mx-auto lg:ml-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
