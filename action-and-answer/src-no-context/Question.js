import Options from "./Options";

export default function Questions({ question, dispath, answer }) {
  console.log(question);
  return (
    <div>
      <h4>{question.question}</h4>
      <Options question={question} dispath={dispath} answer={answer} />
    </div>
  );
}
