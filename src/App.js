import { adatok } from "./adatok/adatok.js";
import Kategoriak from "./components/Kategoriak.js";
import Kivalasztott from "./components/Kivalasztott.js";

import { KivalasztProvider } from "./context/KivalasztContext.js";

function App() {
    return (
        <div className="container">
            <header className="App-header">
                <h1>React Context API</h1>
            </header>

            <KivalasztProvider>
                <section>
                    <h5 className="pt-5">Kiválasztott virágok</h5>
                    <Kivalasztott />
                </section>
                <article>
                    <Kategoriak lista={adatok} />
                </article>
            </KivalasztProvider>
            
            <aside>
                <h5 className="pt-5">Hasznos linkek:</h5>

                <ul className="nav nav-pills">
                    <li className="nav-item">
                        <a
                            className="nav-link"
                            href="https://github.com/csefikatalin/context-api.git"
                        >
                            Repo Readme.md
                        </a>
                    </li>
                    <li className="nav-item">
                        <a
                            className="nav-link"
                            href="https://www.freecodecamp.org/news/context-api-in-react/"
                        >
                            FreeCodeCamp
                        </a>
                    </li>
                    <li className="nav-item">
                        <a
                            className="nav-link"
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
