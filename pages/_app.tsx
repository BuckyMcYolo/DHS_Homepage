import "../globals.css";
import { Raleway } from "@next/font/google";
import Nav from "../components/page-Components/nav";
import { ThemeProvider } from "next-themes";

const raleway = Raleway({ subsets: ["latin"] });

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider forcedTheme={Component.theme || null}>
      <Component {...pageProps} className={raleway.className} />
    </ThemeProvider>
  );
}

export default MyApp;
