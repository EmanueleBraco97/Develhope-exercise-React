import { Routes, Route, Link } from "react-router-dom";
import { UseGitHubUsers } from "./UseGitHubUsers";
import {Welcome} from "./Welcome";

export function App() {
  return (
    <>
      <h1>
       <Link to='/'>Home</Link> | <Link to="users">Users</Link>
      </h1>

      <Routes>
        <Route path="/" element={<Welcome></Welcome>}></Route>
        <Route path="/users" element={<UseGitHubUsers></UseGitHubUsers>}></Route>
      </Routes>
    </>
  );
}
