import { useState } from "react";
import { adatok } from "./adatok/adatok.js";
import Kategoriak from "./components/Kategoriak.js";
import Kivalasztott from "./components/Kivalasztott.js";
import { KivalasztContext } from "./context/KivalasztContext.js";
function App() {
    const [kivalasztottLista, setKivalasztottLista] = useState([]);

 /*    function kivalaszt(ertek) {
        const a = kivalasztottLista;
        a.push(ertek);
        setKivalasztottLista([...a]);
    } */
    return (
        <div className="container">
            <header className="App-header">
                <h1>React Context API</h1>
            </header>
            <section>
                <h5>Kiválasztott virágok</h5>
                <Kivalasztott lista={kivalasztottLista} />
            </section>
            <article>
                <KivalasztContext.Provider value={{kivalasztottLista, setKivalasztottLista}}>
                    <Kategoriak lista={adatok} />
                </KivalasztContext.Provider>
            </article>
            <aside>
                <h5 className="pt-5">Hasznos linkek:</h5>

                <ul class="nav nav-pills">
                    <li class="nav-item">
                        <a
                            class="nav-link"
                            href="https://www.freecodecamp.org/news/context-api-in-react/"
                        >
                            FreeCodeCamp
                        </a>
                    </li>
                    <li class="nav-item">
                        <a
                            class="nav-link"
                            href="https://react.dev/learn/passing-data-deeply-with-context"
                        >
                            React kézikönyv - Context
                        </a>
                    </li>
                </ul>
            </aside>
            <footer>
                <p className="text-center">
                    <b>Próbáld ki, kísérletezz! Jó tanulást kívánok!</b>
                </p>
            </footer>
        </div>
    );
}

export default App;
