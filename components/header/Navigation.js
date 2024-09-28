import DarkModeToggle from "../ui/DarkModeToggle";
import NavLink from "./NavLink";

function Navigation() {
  return (
    <nav>
      <ul className="flex items-center gap-3 sm:gap-5  md:gap-7">
        <li>
          <NavLink href="/products" name="Products" />
        </li>
        <li>
          <NavLink href="/about" name="About" />
        </li>
        <li>
          <DarkModeToggle />
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
