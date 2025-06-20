import Link from "next/link";

const NavLink = ({ href, title }) => {
  return (
    <Link
      href={href}
      className="block py-2 px-3 text-[#ADB7BE] sm:text-xl rounded hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white"
    >
      {title}
    </Link>
  );
};

export default NavLink; 
