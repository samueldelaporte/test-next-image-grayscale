import Head from 'next/head';
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h2>Original grayscale mode picture </h2>
        <div style={{border: '1px solid black'}}>
          <img src="/grey-picture.png" width="550" height="215" style={{display: 'block'}} />
        </div>
        <h2>Next/image version</h2>
        <div style={{border: '1px solid black'}}>
          <Image src="/grey-picture.png" width="550" height="215" />
        </div>
      </main>
    </div>
  )
}
