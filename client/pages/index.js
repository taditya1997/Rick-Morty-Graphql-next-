import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
        <meta name="keywords" content="ninjas"/>
      </Head>
      <div>
        <h1 className={styles.title}>Welcome to Rick&Morty</h1>
        <p className={styles.text}>Here we are going view all the characters of the Rick& Morty Cartoon</p>
        <p className={styles.text}>To view the cartoon in details click cartoon card.</p>
        <Link href="/character/">
          <a className={styles.btn}>View Character</a>
        </Link>
      </div>
    </>
  )
}