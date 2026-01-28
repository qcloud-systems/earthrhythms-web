import ReactMarkdown from "react-markdown";
import audio from "../content/audio.md?raw";

export default function Audio() {
  return <ReactMarkdown>{audio}</ReactMarkdown>;
}
