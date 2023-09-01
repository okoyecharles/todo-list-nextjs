import Navigation from "./components/nav/navigation";
import AuthProvider from "./context/auth-provider";
import "./globals.css";
import localFont from "next/font/local";

const SF = localFont({
  src: [
    { path: "./fonts/SFUIText-Regular.ttf", weight: "400" },
    { path: "./fonts/SFUIText-Medium.ttf", weight: "500" },
    { path: "./fonts/SFUIText-Bold.ttf", weight: "600" },
  ],
});

export const metadata = {
  title: "Todo List",
  description: "A Todo List created with the Next.js 13 app directory.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={SF.className}>
      <body className="bg-dark text-light-secondary">
        <AuthProvider>
          <main className="flex flex-col">{children}</main>
        </AuthProvider>
      </body>
    </html>
  );
}
