import { h } from "preact";
import { Link } from "preact-router/match";
import style from './style.scss';

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

                <Link activeClassName={style.active} href="/profile">
                    Me
                </Link>
            </nav>
        </header>
    );
};

export default Header;
