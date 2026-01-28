import ReactMarkdown from "react-markdown";
import about from "../content/about.md?raw";

export default function About() {
  return <ReactMarkdown>{about}</ReactMarkdown>;
}
