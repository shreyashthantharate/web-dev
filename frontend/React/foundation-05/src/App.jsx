import { useState } from "react";
import heroImg from "./assets/hero.png";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import "./App.css";
import { useEffect } from "react";

function App() {
  const [posts, setPosts] = useState([]);
  const [status, setStatus] = useState("idle");
  const [seconds, setSeconds] = useState(10);

  useEffect(() => {
    const timerId = setInterval(() => {
      setSeconds((current) => Math.max(current - 1, 0));
    }, 1000);
    return () => {
      // cleanup
      clearInterval(timerId);
    };
  }, []);

  useEffect(() => {
    const controller = new AbortController();

    async function loadPost() {
      try {
        setStatus("loading");
        const resposne = await fetch(
          "https://jsonplaceholder.typicode.com/posts?_limit=5",
          { signal: controller.signal },
        );
        const data = await resposne.json();
        setPosts(data);
        setStatus("success");
      } catch (error) {
        console.log(error);
      }
    }

    loadPost();

    return () => {
      controller.abort();
    };
  }, []);

  return (
    <>
      <div>
        <h1>useEffect</h1>
        <h1>{seconds}</h1>
      </div>
    </>
  );
}

export default App;
