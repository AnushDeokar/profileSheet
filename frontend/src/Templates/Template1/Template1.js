import React from 'react'
import {Header} from "./Header1/Header1";
import {About1} from "./About1/About1";
import {Introduction1} from "./Introduction1/Introduction1";
import {Services1} from "./Services1/Services1";

export const Template1 = () => {
    return (
        <div>
            <Header />
            <About1 />
            <Introduction1 />
            <Services1 />
            {/* <h1>This is the first sample template.</h1> */}
        </div>
    )
}
