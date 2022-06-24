import ReactDom from "react-dom/client";
import { App } from "./App";
import { BrowserRouter} from 'react-router-dom'

const container = document.querySelector("#root");
const root = ReactDom.createRoot(container);

root.render(
  <BrowserRouter>
    <App></App>
  </BrowserRouter>
);
