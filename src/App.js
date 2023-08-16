import "./App.css";
import { createContext } from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "./Routes/Routes";
export const counter_context = createContext();

function App() {
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
