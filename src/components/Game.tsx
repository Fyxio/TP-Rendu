import HangmanDisplay from "./HangmanDisplay";
import WordDisplay from "./WordDisplay";
import Keyboard from "./Keyboard"; 

export default function Game(){
    return (
        <div className="Game">
            <p>Ceci est ma composante "Game"</p>
            <WordDisplay/>
            <Keyboard/>
            <HangmanDisplay/>
        </div>
    )
}