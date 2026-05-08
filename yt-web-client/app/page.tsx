import Link from "next/link";
import { getVideos } from "./utilities/firebase/functions";
import styles from "./page.module.css";
import Image from "next/image";

const processedVideosBucket = "https://storage.googleapis.com/andrewd1058-yt-processed-videos/";

export default async function Home() {
  const videos = await getVideos();

  return (
    <main className={styles.main}>
      {
        videos.map(video => (
          <Link key={video.id} href={`/watch?v=${video.filename}`}>
            <Image src={video.thumbnailUrl ? 
              `${processedVideosBucket}${video.thumbnailUrl}` : `/thumbnail.png`} alt='video'
              width={400} height={240} className={styles.thumbnail}/>
          </Link>
        ))
      }
    </main>
  );
}

// Every 30 seconds Next.js will re-render the page on the server and get any new videos
export const revalidate = 30; // Time period in seconds for how often to fetch a new page