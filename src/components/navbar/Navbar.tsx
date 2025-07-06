import { auth } from "@/lib/auth";
import NavAuthSignin from "./NavAuthSignin";
import NavbarLogo from "./NavbarLogo";
import NavAuthDashboard from "./NavAuthDashboard";

export default async function Navbar() {
  const session = await auth();
  const user = session?.user;
  return (
    <nav className="w-full px-6 py-4 bg-white shadow-md fixed flex items-center justify-between">
      {/* Logo */}
      <NavbarLogo />

      {/* Right Icon */}
      {user && <NavAuthDashboard />}
      {!user && <NavAuthSignin />}
    </nav>
  );
}
