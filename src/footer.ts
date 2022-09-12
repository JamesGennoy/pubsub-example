import { subscribe } from "./pubsub";
import "./style.css";

document.querySelector<HTMLDivElement>("#footer")!.innerHTML = `
  <footer></footer>
`;

subscribe(
  "NAME",
  (message) => (document.querySelector("footer")!.innerHTML = message)
);
