import { Link } from "react-router-dom";

export default function Header() {
  return (
    <nav style={{ padding: "1rem", borderBottom: "1px solid #ccc" }}>
      <Link to="/">Home</Link> |{" "}
      <Link to="/tides">Tides</Link> |{" "}
      <Link to="/cycles">Cycles</Link> |{" "}
      <Link to="/earthrhythms">Earthrhythms</Link> |{" "}
      <Link to="/audio">Audio</Link> |{" "}
      <Link to="/about">About</Link>
    </nav>
  );
}
