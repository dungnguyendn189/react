import { useQuiz } from "../context/QuizContext";
import Options from "./Options";

export default function Questions() {
  const { questions, index, dispath, answer } = useQuiz();
  return (
    <div>
      <h4>{questions[index].question}</h4>
      <Options questions={questions[index]} dispath={dispath} answer={answer} />
    </div>
  );
}
