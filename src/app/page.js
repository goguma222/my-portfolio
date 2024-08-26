"use client";

import React, { useEffect } from "react";
import Header from "@/component/Header";
import Skip from "@/component/Skip";
import Intro from "@/component/Intro";
import Skill from "@/component/Skill";
import Site from "@/component/Site";
import Port from "@/component/Prot";
import Contact from "@/component/Contact";
import Footer from "@/component/Footer";

export default function Home(){
    // useEffect(() => {
    //     smooth();
    //     link();
    // }, []);

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
    )
}