import Link from "next/link";

export default function Sidebar() {
  const items = Array.from({ length: 8 }, (_, i) => i + 1);

  return (
    <div style={styles.sidebar}> 
      <h2 style={{ marginBottom: 20, color: "white"  }}> Курс</h2>

      <h4 style={{ color: "white" }}>Лекционный материал</h4>
      {items.map((id) => (
        <Link key={id} href={`/lecture/${id}`} style={styles.link}>
           Лекция №{id}
        </Link>
      ))}

      <h4 style={{ marginTop: 20, color: "white" }}>Практические работы </h4>
      {items.map((id) => (
        <Link key={id} href={`/practice/${id}`} style={styles.link}>
           Практическая работа №{id}
        </Link>
      ))}

      <Link href="/exam" style={{ ...styles.link, marginTop: 20 }}>
         <h4>Вопросы к экзамену</h4>
      </Link>
    </div>
  );
}

const styles = {
  sidebar: {
    width: "220px",
    height: "100vh",
    background: "#1e293b",
    padding: "20px",
    position: "fixed",
    left: 0,
    top: 0,
    display: "flex",
    flexDirection: "column",
  },
  link: {
    padding: "6px 0",
    color: "white",
    textDecoration: "none",
  },
};