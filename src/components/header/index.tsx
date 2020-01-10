import { h } from "preact";
import { Link } from "preact-router/match";
import style from "./style.scss";

const Header: preact.FunctionalComponent = () => {
  return (
    <header class={style.header}>
      <nav>
        <Link activeClassName={style.active} href="/">
          Home
        </Link>
      </nav>
      <h1>Recipe App Name</h1>
      <nav>
        <Link
          activeClassName={style.none}
          className={style.none}
          href="/profile"
        >
          Profile
        </Link>
        <Link activeClassName={style.active} href="/profile">
          Login
        </Link>
        <Link activeClassName={style.active} href="/profile">
          Sign Up
        </Link>
      </nav>
    </header>
  );
};

export default Header;
