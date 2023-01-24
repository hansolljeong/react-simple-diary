import { useRef, useState } from "react";
import "./App.css";
import DiaryEditor from "./DiaryEditor";
import DiaryList from "./DiaryList";

const App = () => {
  const [data, setData] = useState([]);

  const dataId = useRef(0);

  // 게시물 생성 함수
  const onCreate = (author, content, emotion) => {
    const created_date = new Date().getTime();
    const newItem = {
      author,
      content,
      emotion,
      created_date,
      id: dataId.current,
    };
    dataId.current += 1;
    // 최신 게시물이 가장 위로 오도록 state 변경
    setData([newItem, ...data]);
  };

  const onRemove = (targetId) => {
    console.log(`${targetId} is deleted.`);
    // 선택한 데이터가 삭제된 게시글 리스트 정의
    const newDiaryList = data.filter((it) => it.id !== targetId);
    // 갱신된 리스트로 상태 변경
    setData(newDiaryList);
  };

  const onEdit = (targetId, newContent) => {
    setData(
      data.map((it) =>
        it.id === targetId
          ? {
              ...it,
              content: newContent,
            }
          : it
      )
    );
  };

  return (
    <div className="App">
      <DiaryEditor onCreate={onCreate} />
      <DiaryList onEdit={onEdit} onRemove={onRemove} diaryList={data} />
    </div>
  );
};

export default App;
