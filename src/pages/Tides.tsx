import ReactMarkdown from "react-markdown";
import tides from "../content/tides.md?raw";

export default function Tides() {
  return <ReactMarkdown>{tides}</ReactMarkdown>;
}
