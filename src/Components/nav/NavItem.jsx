const NavItem = ({ link }) => {
  return (
    <li className="relative group">
      <a
        href={`#${link}`}
        className="ud-menu-scroll
        text-base text-dark
        lg:text-white
        lg:group-hover:opacity-70
        lg:group-hover:text-white
        group-hover:text-primary
        py-2
        lg:py-6 lg:inline-flex lg:px-0
        flex
        mx-8
        lg:mr-0 lg:ml-7
        xl:ml-12"
      >
        {link}
      </a>
    </li>
  );
};

export default NavItem;
