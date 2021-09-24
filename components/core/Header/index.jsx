import Link from 'next/link';
import { BiSearch } from "react-icons/bi";

export default function Header() {
  return (
    <div className="app-content-full header">
      <div className="app-container">
        <div className="app-header">
          <div className="app-logo">
            <Link href="/"><a>Calcify</a></Link>
          </div>
          <div className="app-navigation">
            <ul>
              <li><Link href="/"><a>Home</a></Link></li>
              <li><Link href="/about-us"><a>About Us</a></Link></li>
              <li><Link href="/"><a>Contact</a></Link></li>
              <li><Link href="/"><a>Login</a></Link></li>
              <li><Link href="/"><a>Signup</a></Link></li>
              <li><span><BiSearch /></span></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
