import type { Metadata } from "next";
import { Manrope, Unbounded } from "next/font/google";
import { SignupModalProvider } from "@/components/SignupModal";
import "./globals.css";

const unbounded = Unbounded({
  variable: "--font-unbounded",
  subsets: ["cyrillic", "latin"],
  weight: ["500", "700", "900"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["cyrillic", "latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title:
    "ФАЙТБОКСИНГ — клуб единоборств в Нижнем Новгороде | ММА, бокс, муай-тай",
  description:
    "Клуб смешанных боевых единоборств «ФАЙТБОКСИНГ» (КЕФ): ММА, бокс, кикбоксинг, муай-тай, боевое самбо, рукопашный бой. Детские группы с 7 лет и взрослые. Нижний Новгород, ул. Бетанкура, 1А. Запись: +7 (920) 253-69-30.",
  openGraph: {
    title: "ФАЙТБОКСИНГ — клуб единоборств в Нижнем Новгороде",
    description:
      "ММА и ударные техники. Группы для детей с 7 лет и взрослых. Искусство побеждать.",
    locale: "ru_RU",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="ru"
      className={`${unbounded.variable} ${manrope.variable} h-full antialiased`}
    >
      <script
        dangerouslySetInnerHTML={{
          __html: `(function(){try{var t=localStorage.getItem("theme");if(t)document.documentElement.dataset.theme=t;}catch(e){}})();`,
        }}
      />
      <body className="min-h-full bg-ink text-bone">
        <SignupModalProvider>{children}</SignupModalProvider>
      </body>
    </html>
  );
}
