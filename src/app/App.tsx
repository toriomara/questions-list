import { useState } from "react";
import reactLogo from "../assets/react.svg";
import viteLogo from "/vite.svg";
import { MainLayout } from "../widgets/layouts/main-layout";
import { Button } from "../shared/ui/Button/Button";
import { Input } from "../shared/ui/Input/Input";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col min-h-screen ">
      <MainLayout>
        <div className="flex justify-center items-center gap-4 bg-primary-600">
          <a href="https://vite.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <h1 className="text-primary-900 font-bold">Vite + React</h1>
        <div className="card">
          <button
            className="text-error-400"
            onClick={() => setCount((count) => count + 1)}
          >
            count is {count}
          </button>
          <p>
            Edit <code>src/App.tsx</code> and save to test HMR
          </p>
        </div>
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>
        <h1 className="text-3xl font-bold underline text-mint-500">
          Hello world!
        </h1>
        <div>
          <Button variant="primary">Отправить</Button>
          <Input className="max-w-fit" placeholder="Ваш комментарий..." />
        </div>
      </MainLayout>
    </div>
  );
}

export default App;
