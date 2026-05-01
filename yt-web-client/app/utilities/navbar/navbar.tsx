"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { onAuthStateChangedHelper } from "../firebase/firebase";
import { User } from "firebase/auth";

import styles from  "./navbar.module.css"
import SignIn from "./sign-in";
import Upload from "./upload";

export default function Navbar() {
    // Init user state
    const [user, setUser] = useState<User | null>(null);
    const [loadingAuth, setLoadingAuth] = useState(true);

    useEffect(() => {
        const unsubscribe = onAuthStateChangedHelper((user) => {
            setUser(user);
            setLoadingAuth(false);
        });

        return () => unsubscribe();
    }, []);

    return (
        <nav className={styles.nav}>
            <Link href="/">
                <Image width={110} height={30}
                    src="/youtube-logo.svg" alt="Youtube Logo" 
                />
            </Link>
            {user && <Upload />}
            {!loadingAuth && <SignIn user={user} />}
        </nav>
    );
}