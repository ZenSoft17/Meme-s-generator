import { useState } from "react";
import "./assets/style.css";
import useCall from "./components/useCall";

const App = () => {

    const { Data } = useCall();
    const [Match, setMatch] = useState(0);

    return (
        <div className="app">
            <br />
            <h1>The memes generator</h1>
            <br />
            <img src={Data ? Data.data.memes[Match].url : ""} alt="img meme" />
            <br />
            <button onClick={() => setMatch(Math.floor(Math.random() * (Data ? Data.data.memes.length : 0 - 0 + 1)) + 0)}>Generate</button>
            <br />
        </div>
    );
};

export default App;