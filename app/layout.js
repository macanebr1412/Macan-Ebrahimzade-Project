import "./globals.css";
import Header from "@/components/header/Header";
import { DarkModeProvider } from "@/context/DarkModeContext";
import { ItemProvider } from "@/context/ItemContext";

import { Josefin_Sans } from "next/font/google";

const josefin = Josefin_Sans({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: {
    template: "%s / Macan Project",
    default: "Welcome / Macan Project",
  },
  description: "Project By Macan Ebrahimzade",
};

export default function RootLayout({ children }) {
  return (
    // class dark ba estefade az ghabliate tailwind.
    <html lang="en" className="dark">
      <DarkModeProvider>
        <body
          className={`${josefin.className} bg-primary-100 text-primary-950 dark:bg-primary-950 dark:text-primary-100 p-9 2xl:py-10 2xl:px-40`}
        >
          <Header />
          <main className="flex justify-center flex-col">
            <ItemProvider>{children}</ItemProvider>
          </main>
        </body>
      </DarkModeProvider>
    </html>
  );
}
