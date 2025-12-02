import Letter, { LetterState } from "./Letter"

export default function WordDisplay({word}: {word: string}){
    const lettersWords: LetterState[] = word.split('').map((l, index) => ({display: l, state: 'Hidden', id: index}));
    const letters = lettersWords.map(letter => {
        return (
            <Letter key={letter.id} letter={letter}/>
        )
    })
    return (
        <div className="WordDisplay">
           {letters}
        </div>
    )
}