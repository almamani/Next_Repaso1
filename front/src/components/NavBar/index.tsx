import Image from "next/image";
import Link from "next/link";
import logo from "../../assets/logo_compuShop.svg";

const NavBar = () => {
  return (
    <nav className="py-1.5 bg-ocean-basic">
      <div className="wrapper">
        <Link href="/">
          <Image src={logo} alt="Logo" width={217} height={20} />
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
