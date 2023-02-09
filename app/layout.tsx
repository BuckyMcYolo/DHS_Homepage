import "./globals.css";
import { Raleway } from "@next/font/google";
import Nav from "../components/UI-Components/nav";

const raleway = Raleway({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Nav/>
      <body className={raleway.className}>{children}</body>
    </html>
  );
}
