import Logo from "./nav/Logo";
import NavItem from "./nav/NavItem";

const Nav = () => {
  const links = ["Home", "About Us", "Contact Us"];
  return (
    <div className="ud-header bg-transparent absolute top-0 left-0 z-40 w-full flex items-center">
      <div className="container">
        <div className="flex -mx-4 items-center justify-between relative">
          <div className="flex px-4 justify-between items-center w-full">
            <Logo />
            <div>
              <button
                id="navbarToggler"
                className="block absolute right-4 top-1/2 -translate-y-1/2 lg:hidden focus:ring-2 ring-primary px-3 py-[6px] rounded-lg"
              >
                <span className="relative w-[30px] h-[2px] my-[6px] block bg-white"></span>
                <span className="relative w-[30px] h-[2px] my-[6px] block bg-white"></span>
                <span className="relative w-[30px] h-[2px] my-[6px] block bg-white"></span>
              </button>
              <nav
                id="navbarCollapse"
                className="absolutepy-5lg:py-0 lg:px-4xl:px-6bg-whitelg:bg-transparentshadow-lgrounded-lgmax-w-[250px]w-fulllg:max-w-full lg:w-fullright-4top-fullhiddenlg:block lg:static lg:shadow-none"
              >
                <ul className="blcok lg:flex">
                  {links.map((link, index) => (
                    <NavItem link={link} key={index} />
                  ))}
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
