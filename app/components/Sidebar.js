import { useState } from "react";
import Link from "next/link";

export default function Sidebar() {
  const [open, setOpen] = useState(false);

  const items = Array.from({ length: 8 }, (_, i) => i + 1);

  return (
    <>
      {/* КНОПКА ОТКРЫТИЯ */}
      <button style={styles.burger} onClick={() => setOpen(!open)}>
        ☰
      </button>

      {/* ЗАТЕМНЕНИЕ (по желанию) */}
      {open && <div style={styles.overlay} onClick={() => setOpen(false)} />}

      {/* SIDEBAR */}
      <div
        style={{
          ...styles.sidebar,
          transform: open ? "translateX(0)" : "translateX(-100%)",
        }}
      >
        <h2 style={{ marginBottom: 20, color: "white" }}>Курс</h2>

        <h4 style={{ color: "white" }}>Лекционный материал</h4>
        {items.map((id) => (
          <Link
            key={id}
            href={`/lecture/${id}`}
            style={styles.link}
            onClick={() => setOpen(false)}
          >
            Лекция №{id}
          </Link>
        ))}

        <h4 style={{ marginTop: 20, color: "white" }}>
          Практические работы
        </h4>
        {items.map((id) => (
          <Link
            key={id}
            href={`/practice/${id}`}
            style={styles.link}
            onClick={() => setOpen(false)}
          >
            Практическая работа №{id}
          </Link>
        ))}

        <Link
          href="/exam"
          style={{ ...styles.link, marginTop: 20 }}
          onClick={() => setOpen(false)}
        >
          <h4>Вопросы к экзамену</h4>
        </Link>
      </div>
    </>
  );
}
const styles = {
  sidebar: {
    width: "240px",
    height: "100vh",
    background: "#1e293b",
    padding: "20px",
    position: "fixed",
    left: 0,
    top: 0,
    display: "flex",
    flexDirection: "column",
    transition: "transform 0.3s ease",
    zIndex: 1000,
  },

  link: {
    padding: "6px 0",
    color: "white",
    textDecoration: "none",
  },

  burger: {
    position: "fixed",
    top: "15px",
    left: "15px",
    zIndex: 1100,
    fontSize: "24px",
    background: "#1e293b",
    color: "white",
    border: "none",
    padding: "8px 12px",
    borderRadius: "6px",
    cursor: "pointer",
  },

  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    background: "rgba(0,0,0,0.4)",
    zIndex: 900,
  },
};