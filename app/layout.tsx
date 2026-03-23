import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import "./globals.css";

const cairo = Cairo({ subsets: ["arabic", "latin"] });

export const metadata: Metadata = {
  title: "مستشفى وعيادات العياشي التخصصي | Al Ayashi Specialized Hospital & Clinics",
  description: "مستشفى وعيادات العياشي التخصصي - طنطا، مصر. صحتك وسلامتك في فؤادنا. مفتوح 24 ساعة. Al Ayashi Specialized Hospital & Clinics - Tanta, Egypt. Your health and safety in our hearts. Open 24 hours.",
  keywords: "مستشفى العياشي, Al Ayashi Hospital, Tanta, Egypt, طنطا, مصر, مستشفى, hospital, emergency, طوارئ",
  openGraph: {
    title: "مستشفى وعيادات العياشي التخصصي",
    description: "صحتك وسلامتك في فؤادنا - مفتوح 24 ساعة",
    type: "website",
    locale: "ar_EG",
    alternateLocale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body className={cairo.className}>{children}</body>
    </html>
  );
}
