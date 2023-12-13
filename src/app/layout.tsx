import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import "./globals.css";
import styles from "./layout.module.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "기술 기록 저장소",
  description: "내 개인 프론트엔드 기술을 저장소",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className={styles.header}>
          <h1 className={inter.className}>URI 기술저장소</h1>
          <nav className={styles.nav}>
            <Link href="/technology">기술</Link>
            <Link href="/references">참고자료</Link>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
