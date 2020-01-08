import { h } from "preact";
const style = require('./home.scss')

interface Props {}
const Home: preact.FunctionalComponent<Props> = props => {
    return (
        <div class={style.home}>
            <h1>Home</h1>
            <p>This is the Home component.</p>
        </div>
    );
};

export default Home;
