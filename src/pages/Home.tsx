import ReactMarkdown from "react-markdown";
import home from "../content/home.md?raw";

export default function Home() {
  return <ReactMarkdown>{home}</ReactMarkdown>;
}
