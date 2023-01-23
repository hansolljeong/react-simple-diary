import "./App.css";
import DiaryEditor from "./DiaryEditor";
import DiaryList from "./DiaryList";

const dummyList = [
  {
    id: 1,
    author: "luka",
    content: "dallas mavericks",
    emotion: 3,
    created_date: new Date().getTime(),
  },
  {
    id: 2,
    author: "lebron",
    content: "los angeles lakers",
    emotion: 4,
    created_date: new Date().getTime(),
  },
  {
    id: 3,
    author: "ja",
    content: "memphis grizzlies",
    emotion: 2,
    created_date: new Date().getTime(),
  },
];

function App() {
  return (
    <div className="App">
      <DiaryEditor />
      <DiaryList diaryList={dummyList} />
    </div>
  );
}

export default App;
