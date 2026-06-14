import PillNav from "../../utils/pill";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  return (
    <div>
      <PillNav
        items={navLinks}
        baseColor="rgba(7, 2, 16, 0.94)"
        navBackground="transparent"
        pillColor="rgba(28, 11, 46, 0.92)"
        hoveredPillTextColor="#f8f2ff"
        pillTextColor="#e9ddff"
        pillGap="10px"
        className="relative mx-auto mt-4 max-w-6xl"
      />
    </div>
  );
}
