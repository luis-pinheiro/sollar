import Head from 'next/head';
import { useVideo } from 'react-use';

export default function Home() {
  const [video, state, controls, ref] = useVideo(
    <video className="inset-0 absolute h-500" src="sollar-no-sound-2.mp4" autoPlay loop />
  );
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        {/* <div>{video}</div> */}
        <div className="gif absolute h-screen w-full"></div>
        {/* <img src="header2.png" alt="sollar front image" className="w-auto h-96 relative " /> */}
        <div className="front-image relative h-screen"></div>
      </main>
    </div>
  );
}
