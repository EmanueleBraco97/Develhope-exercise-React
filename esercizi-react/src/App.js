import { Routes, Route, Link } from "react-router-dom";
import { Welcome } from "./Welcome";
import { ClickCounter } from "./ClickCounter";
import { ShowGithubUser } from "./ShowGithubUser";

export function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Welcome name="emanuele"></Welcome>}></Route>
        <Route path="/ClickCounter" element={<ClickCounter></ClickCounter>}></Route>
        <Route path="/users/:username" element={<ShowGithubUser></ShowGithubUser>}></Route>
      </Routes>

      <h1><Link to="/">Enter to Welcome</Link></h1>
      <h2><Link to="/ClickCounter">Enter to ClickCounter</Link></h2>
      <h3><Link to="/users/emanuelebraco97">Username</Link></h3>
    </>
  );
}
