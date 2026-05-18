"use client";

import { useState } from "react";
import Link from "next/link";

export default function Sidebar() {
  const [open, setOpen] = useState(false);

  const items = Array.from({ length: 8 }, (_, i) => i + 1);

  return (
    <>
      {/* КНОПКА */}
      <button
        onClick={() => setOpen(!open)}
        style={styles.burger}
      >
        ☰
      </button>

      {/* ЗАТЕМНЕНИЕ */}
      {open && (
        <div
          style={styles.overlay}
          onClick={() => setOpen(false)}
        />
      )}

      {/* SIDEBAR */}
      <div
        style={{
          ...styles.sidebar,
          transform: open
            ? "translateX(0)"
            : "translateX(-100%)",
        }}
      >
        <Link
          href="/"
          style={styles.logo}
          onClick={() => setOpen(false)}
        >
          📘 Главная
        </Link>

        <h3 style={styles.title}>Лекционный материал</h3>

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

        <h3 style={styles.title}>Практические работы</h3>

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
          href="/vopros"
          style={styles.link}
          onClick={() => setOpen(false)}
        >
          📚 Вопросы к тестированию
        </Link>

        <Link
          href="/exam"
          style={styles.link}
          onClick={() => setOpen(false)}
        >
          📝 Пройти тестирование
        </Link>
      </div>
    </>
  );
}

const styles = {
  sidebar: {
    width: "260px",
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
    overflowY: "auto",
  },

  logo: {
    color: "white",
    fontSize: "24px",
    fontWeight: "700",
    textDecoration: "none",
    marginBottom: "20px",
  },

  title: {
    color: "#cbd5e1",
    marginTop: "20px",
    marginBottom: "10px",
  },

  link: {
    padding: "8px 0",
    color: "white",
    textDecoration: "none",
    fontSize: "16px",
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
    padding: "10px 14px",
    borderRadius: "10px",
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
