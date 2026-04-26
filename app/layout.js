import "./globals.css";
import Sidebar from "./components/Sidebar";
import ScrollToTop from "./components/ScrollToTop";

export const metadata = {
  title: "Мой курс",
  description: "Учебный сайт",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body style={{ display: "flex" }}>
        <Sidebar />

        <main
          style={{
            marginLeft: "240px",
            padding: "20px",
            width: "100%",
          }}
        >
          {children}
        </main>

        <ScrollToTop />
      </body>
    </html>
  );
}