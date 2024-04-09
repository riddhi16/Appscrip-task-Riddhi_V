"use client";
import Image from "next/image";
import styles from "./page.module.css";
import Header from "@/app/components/Header";
import AnnouncementBar from "@/app/components/AnnouncementBar";
import Navigation from "@/app/components/Navigation";
import ShopAll from "@/app/components/ShopAll";
import Skills from "@/app/components/Skills";
import Stories from "./components/Stories";
import About from "@/app/components/About";
import ContactUS from "@/app/components/ContactUS";
import HomePage from "@/app/components/Home";
import Footer from "@/app/components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Header from "@/app/components/Header.css";
export default function Home() {
  return (
    <>
      <AnnouncementBar />
      <div className="container">
        <Header />
      </div>
      <BrowserRouter>
        <Navigation />
        <div className="container">
          <Routes>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/ShopAll" element={<ShopAll />}></Route>
            <Route path="/Skills" element={<Skills />}></Route>
            <Route path="/Stories" element={<Stories />}></Route>
            <Route path="/About" element={<About />}></Route>
            <Route path="/ContactUS" elemen={<ContactUS />}></Route>
          </Routes>
        </div>
      </BrowserRouter>
      <Footer />
    </>
  );
}
