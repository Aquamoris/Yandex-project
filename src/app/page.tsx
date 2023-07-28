'use client'

import React from "react";
import { FilmDetails } from "@/components/FilmDetails";

export default function Home() {
    return (
        <div>
            <header></header>
            <FilmDetails
                title= 'The Simpsons'
                genre= 'comedy'
                seasonsCount= {5} />
            <footer></footer>
        </div>
    );
}