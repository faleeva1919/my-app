import "./globals.css";
import Sidebar from "./components/Sidebar";
import ScrollToTop from "./components/ScrollToTop";

export const metadata = {
  title: "Мой курс",
  description: "Учебный сайт",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body>
        <div className="layout">
          <Sidebar />

          <main className="main">
            {children}
          </main>
        </div>

        <ScrollToTop />
      </body>
    </html>
  );
}