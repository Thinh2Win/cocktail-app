import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

function Home() {
  return (
    <>
    <main className={styles.main}>

        <div className={styles.center}>
          <Image
            className={styles.logo}
            src='/next.svg'
            alt='Next.js Logo'
            width={180}
            height={37}
            priority
          />
          <div className={styles.thirteen}>
            <Image
              src='/thirteen.svg'
              alt='13'
              width={40}
              height={31}
              priority
            />
          </div>
        </div>

        <div className={styles.grid}>
            <Link
              href={'/cocktails/random'}
              className={styles.card}
            >
              <h2>
                Surprise Me <span>-&gt;</span>
              </h2>
              <p>
                Generates a Random Cocktail
              </p>
            </Link>
          <a
            href='/cocktails/search'
            className={styles.card}
          >
            <h2>
              Search &quot;&quot; <span>-&gt;</span>
            </h2>
            <p>
              Search Cocktails by Name or Ingredients
            </p>
          </a>
        </div>
      </main>
    </>
  )
}

export default Home