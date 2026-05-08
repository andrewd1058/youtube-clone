"use client";

import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import styles from "./page.module.css";

function Video() {
    const videoPrefix = "https://storage.googleapis.com/andrewd1058-yt-processed-videos/";
    const videoSrc = useSearchParams().get('v');

    return (
        <div className={styles.container}>
            <video controls src={videoPrefix + videoSrc} className={styles.video} />
        </div>
    );
}

export default function Watch() {
    return (
        <Suspense fallback={<p>Loading...</p>}>
            <Video />
        </Suspense>
    );
}