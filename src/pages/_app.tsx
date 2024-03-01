/** @format */

import { Inter } from "next/font/google";
import "../styles/global.css";
import { ChallengesProvider } from "../contexts/ChallengesContext";

const inter = Inter({ subsets: ["latin"], style: ["normal"] });

export default function App({ Component, pageProps }) {
  return (
    <main className={inter.className}>
      <ChallengesProvider>
        <Component {...pageProps} />
      </ChallengesProvider>
    </main>
  );
}
