import "./globals.css";
import { Raleway } from "@next/font/google";
import Nav from "../components/page-Components/nav";
import { ThemeProvider } from "next-themes";

const raleway = Raleway({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={raleway.className}>
        <Nav />
        {children}
      </body>
    </html>
  );
}
