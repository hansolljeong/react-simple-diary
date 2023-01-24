import { useEffect, useState } from "react";

const Lifecycle = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  // 첫 렌더링 때만 실행
  useEffect(() => {
    console.log("Mount!");
  }, []);

  // 렌더링 될 때마다 실행
  useEffect(() => {
    console.log("Update!");
  });

  // dependency array의 요소가 실행될 때만 함수 실행
  useEffect(() => {
    console.log(`count is updated : ${count}`);
  }, [count]);
  useEffect(() => {
    console.log(`text is updated : ${text}`);
  }, [text]);

  return (
    <div style={{ padding: 20 }}>
      <div>
        {count}
        <button onClick={() => setCount(count + 1)}>+</button>
      </div>
      <div>
        <input value={text} onChange={(e) => setText(e.target.value)} />
      </div>
    </div>
  );
};

export default Lifecycle;
