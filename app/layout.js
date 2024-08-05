import { Inter } from "next/font/google";
import { Providers } from "./provider";
import "./globals.css";
import { store } from "./store/store";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
