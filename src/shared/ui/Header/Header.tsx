import { Link } from "@tanstack/react-router";

export default function Header() {
  return (
    <header className="w-full py-4">
      <nav className="flex justify-center space-x-6 text-white text-sm">
        <Link className="hover:underline" to={"/about"}>about us</Link>
        <Link className="hover:underline" to={"/"}>home</Link>
        <Link className="hover:underline" to={"/meet"}>meet</Link>
      </nav>
    </header>
  );
}
