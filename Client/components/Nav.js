import Link from "next/link";
const Nav = () => {
    return(
      <nav className="nav bg-dark d-flex justify-content-between">
        <Link href="/" className="nav-link text-light">
          <a>Home</a>
        </Link>
            <Link href="/login" className="nav-link">
          Login
          </Link>

            <Link href="/register" className="nav-link">
          Register
          </Link>
    
      </nav>

    );
};

export default Nav;