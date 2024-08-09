import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const skills = [
  {
    skill: "HTML+CSS",
    level: "advanced",
    color: "#2662EA",
  },
  {
    skill: "JavaScript",
    level: "advanced",
    color: "#EFD81D",
  },
  {
    skill: "Web Design",
    level: "advanced",
    color: "#C3DCAF",
  },
  {
    skill: "Git and GitHub",
    level: "intermediate",
    color: "#E84F33",
  },
  {
    skill: "React",
    level: "advanced",
    color: "#60DAFB",
  },
  {
    skill: "Svelte",
    level: "beginner",
    color: "#FF3B00",
  },
];
function App() {
  return (
    <div className="card">
      <Avatar />
      <Body />
    </div>
  );
}
function Avatar() {
  return (
    <div className="avatar">
      <img
        className="avatar_img"
        src="https://scontent.fdad1-3.fna.fbcdn.net/v/t39.30808-6/452138819_7907423982639733_4092838361619860313_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=YmMKyHCH4QEQ7kNvgGFC3nH&_nc_ht=scontent.fdad1-3.fna&oh=00_AYBs-nLCi4I11ZhW9yC5fF0LtZJMweSlqcIka-0g_9YVnQ&oe=66A5407B"
      />
    </div>
  );
}

function Body() {
  return (
    <body>
      <div className="body">
        <h1 className="title">Nguyễn Đức Dũng</h1>
        <p className="description">
          Im Lerning web developer , i learn in Udemy , react not eazy , very
          difficult to learn react but i will try to learn it , and I learning
          in duolingo , thank You !!!.
          <br /> Thank you viewer my profile
        </p>
        <div className="footer">
          {skills.map((element) => (
            <ButtonFooter element={element} />
          ))}
        </div>
      </div>
    </body>
  );
}
function ButtonFooter({ element }) {
  console.log(element);
  return (
    <div>
      <button className="btn" style={{ backgroundColor: element.color }}>
        <span>{element.skill}</span>
        <soan>
          {element.level === "beginner" && "👶"}
          {element.level === "intermediate" && "👍"}
          {element.level === "advanced" && "💪"}
        </soan>
      </button>
    </div>
  );
}
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
