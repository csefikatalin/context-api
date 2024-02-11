# React Context API

Pages link:

## Egymásba ágyazott komponensek és a Props láncolat

A Reactban a state -ek azok az objektumok, melyek leírják a program állapotát. A state-ek értékeit a props objektumon keresztül juttathatjuk el a gyerek komponensekhez.

Azonban ez a folyamat hosszú is lehet, ha több, egymásba ágyazott komponensen keresztül kell az értéket leküldeni, majd onnan a gyerek komponens visszabuborékoltatja a legfelső szintre a state változtatásának kérését, megint csak egy hosszú láncon keresztül.

## Nézzük az alábbi példát:

Itt az App komponens a Kategoriak->Kategoria->Elem komponens soron keresztül buborékoltatja le az adatokat a propson keresztül. Amikor rákattintunk egy elemre, akkor a kiválasztott tétel neve megjelenik egy listában. Ez a listát megint csak az App komponens adja át a Kivalasztott komponensnek.

Az alábbi jobb oldali ábrán látszik a komponenshierarchia.
<img src="public/kepek/komponenshierarchia.png" alt="komponens hierarchia">

Az **App** komponens fogja módosítani azt a state-t a kivalaszt függvényében, amit a **Kivalasztott** komponens jelenít majd meg. Ehhez azonban az kell, hogy az Elem komponens tudja, hogy az App **kivalaszt** függévényét kell meghívnia, ha rákattintunk az elemre. Ehhez a teljes Kategoriak -> Kategoria -> Elem láncon végig kell buborékoltatni a propsokon keresztül az információt (piros nyilak), majd visszafelé a függvényhívásokon keresztül vissza kell juttatni az adatot (zöld nyilak).

**Nem lehetne ezt egyszerűbben, kihagyva ezt a hosszú láncolatot? **

**Épp ezt a problémát hidalja át a Context API. **

<img src="public/kepek/props_state.PNG" alt="propsok és statek buborékoltatása">

## Context API

1. Hozzunk létre egy context mappát és hozzuk létre egy fájlt KivalasztContext néven  (nem kötelező, csak szokás).  A beírandó kód:
       
    import { createContext } from "react";
    export const KivalasztContext=createContext("")

2. Az App.js-ben importáljuk be a KivalasztContext contextünket.

    import { KivalasztContext } from "./context/KivalasztContext.js";

Adjuk meg, hogy mely komponensekben akarjuk használni az itt definiált Context-e, azaz öleljük körbe a komponens egy Providerrel.
Itt kell a value attributumban megadni, hogy milyen változókhoz engedünk hozzáférést. Jelen esetben a  state-ben megadott változókat fogja ez jelenteni.

<img src="public/kepek/provider.png" alt="provider">
 
3. Az Elem komponensben, azaz a hívási lánc végén álló komponensben dolgozunk a továbbiakban:  importáljuk ide is a KivalasztContext-et, és a useContext Hook-ot.

A useContext Hook egy objektummal tér vissza, mely tartalmazza azokat a változókat, amelyeket definiáltunk a Context-ben.

<img src="public/kepek/useContext.png" alt="provider">
 
4. Ezután már kitörölhetjük az összes felsőbb komponensláncból  a kivalaszt függvényeinket (a fenti képen zölddel jelölve) és a hozzá tartozó props láncolatot ( a fenti képen pirossal jelölve), mert most az Elem komponensben már közvetlenül meg tudjuk hívni a state változtatását.

Az Elem komponensünk most így fog kinézni:

<img src="public/kepek/Elem_koponens_context.PNG" alt="provider">
