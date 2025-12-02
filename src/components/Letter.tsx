export type LetterState = { display: string; state: 'Display' | 'Hidden'; id: number }

export default function Letter({letter}: {letter: LetterState}){

    return (
        <div className="Letter">
            <p>{letter.display}</p>
        </div>
    )
}