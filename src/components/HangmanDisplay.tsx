type HangmanDisplayProps = {
  errors: number;
};

export default function HangmanDisplay({ errors }: HangmanDisplayProps) {
  return (
    <div className="Hangman">
      {/* Poteau */}
      <div className="Gallows">
        <div className="PoleVertical" />
        <div className="PoleHorizontal" />
        <div className="Rope" />
      </div>

      {/* Corps */}
      {errors > 0 && <div className="Head" />}
      {errors > 1 && <div className="Body" />}
      {errors > 2 && <div className="Arm LeftArm" />}
      {errors > 3 && <div className="Arm RightArm" />}
      {errors > 4 && <div className="Leg LeftLeg" />}
      {errors > 5 && <div className="Leg RightLeg" />}
    </div>
  );
}
