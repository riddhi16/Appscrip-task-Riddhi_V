import { Inter } from "next/font/google";
import "./globals.css";
import AnnouncementBar from "@/app/components/annoucement-bar/AnnouncementBar";
import Navigation from "@/app/components/navigation/Navigation";
import Footer from "@/app/components/footer/Footer";
import Header from "@/app/components/header/Header";

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
