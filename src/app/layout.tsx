import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const loosNormal = localFont({
  src: [
    {
      path: "../../public/fonts/fonnts.com-Loos_Normal_Regular.otf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-loos-normal",
});

export const metadata: Metadata = {
  title: "Sol4U - Think it, We Deliver it",
  description: "Sol4u is a creative agency delivering web development, design, and tech solutions tailored to empower businesses and individuals. Innovation, clarity, and impact in every project.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={loosNormal.variable}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Pontano+Sans:wght@300..700&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}