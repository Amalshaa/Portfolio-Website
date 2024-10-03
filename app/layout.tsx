import type { Metadata } from "next";
import { Sora } from "next/font/google";
import "./globals.css";
import Responsivenav from "@/components/home/navbar/responsivenav";
import Footer from "@/components/home/footer/footer";

const font = Sora ({
  weight: ['100' , '200' ,'300' , '400' , '500' , '600' , '700' , '800' ],
  subsets: ['latin']
})
export const metadata: Metadata = {
  title: "Amalsha Madunethmi",
  description: "Personal Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={font.className}>
          <Responsivenav/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
