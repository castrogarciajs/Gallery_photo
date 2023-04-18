import Link from "next/link";

function Header() {
  return (
    <header className="bg-zinc-800 h-20 shadow-sm">
      <nav>
        <ul>
          <li>
            <Link href="/Gallery">GALLERY</Link>
          </li>
          <li>
            <Link href="/Carrusel">CARRUSEL</Link>
          </li>
          <li>
            <Link href="/Public">PUBLIC</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
