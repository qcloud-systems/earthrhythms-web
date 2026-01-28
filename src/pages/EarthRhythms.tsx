import ReactMarkdown from "react-markdown";
import earthrhythms from "../content/earthrhythms.md?raw";

export default function EarthRhythms() {
  return <ReactMarkdown>{earthrhythms}</ReactMarkdown>;
}
