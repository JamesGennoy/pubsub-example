import "./style.css";
import { publish } from "./pubsub";

document.querySelector<HTMLDivElement>("#main")!.innerHTML = `
  <div>
    <h1>PubSub</h1>
  </div>
`;

setTimeout(() => publish("NAME", "Phil"), 2000);
