import Link from 'next/link'

export function Header() {
  return (
    <header>
      <nav>
        <div>
          <h2>GALLERY NEXT</h2>
        </div>
        <div className="option-navbar">
          <ul className="list-navbar">
            <li>
              <Link className="list" href="/Gallery">GALLERY</Link>
            </li>
            <li>
              <Link className="list" href="/Carrusel">CARRUSEL</Link>
            </li>
            <li>
              <Link className="list" href="/Public">PUBLIC</Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
