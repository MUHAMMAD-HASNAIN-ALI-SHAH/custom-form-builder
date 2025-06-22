import NavbarLogo from "./subs/NavbarLogo";

export default async function Navbar() {
  return (
    <nav className="w-full px-6 py-6 bg-white shadow-md fixed flex items-center justify-between">
      {/* Logo */}
      <NavbarLogo />

      {/* Right Icon */}
    </nav>
  );
}
