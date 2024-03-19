import data from "./assets/programs.json";
import Program from "./components/Program";
import Header from "./components/Header";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      {data.map(({ time, title, type, duration, image, isUnseen, direct }) => {
        return (
          <Program
            time={time}
            title={title}
            type={type}
            duration={duration}
            image={image}
            isUnseen={isUnseen}
            direct={direct}
          />
        );
      })}
    </>
  );
}

export default App;
