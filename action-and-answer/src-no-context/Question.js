import Options from "./Options";

export default function Questions({ question, dispath, answer }) {
  return (
    <div>
      <h4>{question.question}</h4>
      <Options question={question} dispath={dispath} answer={answer} />
    </div>
  );
}
