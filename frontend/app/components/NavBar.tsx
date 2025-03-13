"use client";

import Link from "next/link";
import { useState } from "react"


export default function NavBar () {


    const [active, setActive] = useState("");

    return (
        <nav
        className="bg-grey900 text-white p-4 flex justify-between"
        >
            {/* Title header  */}
            <h1
            className="text-xl font-bold"
            >
                UNB Cyber Security 
            </h1>

            {/* Navigation Links  */}
            <div   
                className="flex space-x-6"
            >
                <Link
                    href="/dashboard"
                    className={active === "dashboard" ? "font-bold" : ""}
                    onClick={() => setActive("dashboard")}
                >
                    Dashboard
                </Link>

                <Link
                    href="/writeups"
                    className={active === "writeups" ? "font-bold" : ""}
                    onClick={() => setActive("writeups")}
                >
                    Write-ups
                </Link>

                <Link
                    href="/members"
                    className={active === "members" ? "font-bold" : ""}
                    onClick={() => setActive("members")}
                >
                    Members
                </Link>

                <Link
                    href="/events"
                    className={active === "events" ? "font-bold" : ""}
                    onClick={() => setActive("events")}
                >
                    Events
                </Link>
            </div>
        </nav>
    );
}