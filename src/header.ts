import { subscribe } from "./pubsub";
import "./style.css";

document.querySelector<HTMLDivElement>("#header")!.innerHTML = `
  <header></header>
`;

subscribe(
  "NAME",
  (message) => (document.querySelector("header")!.innerHTML = message)
);
