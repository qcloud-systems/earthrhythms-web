import Header from "./Header";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ maxWidth: "800px", margin: "0 auto", padding: "2rem" }}>
      <Header />
      <main style={{ marginTop: "2rem" }}>{children}</main>
    </div>
  );
}
