import HangmanDisplay from "./HangmanDisplay";
import WordDisplay from "./WordDisplay";
import Keyboard from "./Keyboard";  
import { useEffect, useState } from "react";

export default function Game(){

    const [word, setWord] = useState<string>('');
        useEffect(() => {
            // Récupérer les mots depuis le json
            // et instancier la constante words avec ces mots
            const words = ['pomme', 'fraise'];
            const random = words[Math.floor(Math.random() * words.length)]
            setWord(random)
        },[])

    return (
        <div className="Game">
            <WordDisplay word={word}/>
            {/* <Keyboard/> */}
            {/* <HangmanDisplay/> */}
        </div>
    )
}