"use client";

import React, { useEffect } from "react";
import Header from "@/component/Header";
import Footer from "@/component/Footer";
import Skip from "@/component/Skip";
import Intro from "@/component/intro";
import Skill from "@/component/Skill";
import Site from "@/component/Site";
import Port from "@/component/Prot";
import Contact from "@/component/Contact";
import lenis from "@/utils/lenis";
import link from "@/utils/link";

export default function Home() {

    useEffect(() => {
        lenis();
        link();
    }, []);

  return (
    <>
        <Skip />
        <Header />
        <main id="main" role="main">
            <Intro />
            <Skill />
            <Site />
            <Port />
            <Contact />
        </main>
        <Footer />
    </>
  );
}
