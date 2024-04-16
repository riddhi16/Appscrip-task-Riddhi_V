import { Inter } from "next/font/google";
import "./globals.css";
import AnnouncementBar from "@/app/components/AnnouncementBar";
import Navigation from "@/app/components/Navigation";
import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "ShopMore",
  description: "E-commerce Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AnnouncementBar />
        <div className="container">
          <Header />
        </div>
        <Navigation />
        <div className="container">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
