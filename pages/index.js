
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'


export default function Home(data) {



  
  return (
    <div className={styles.container}>
      <Head>
        <title>Food & Data</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Food & Data
        </h1>

        <p className={styles.description}>
          Getting started with public {' '}
          <code className={styles.code}>API's & data</code>
        </p>

        <div className={styles.grid}>


        </div>
      </main>
      

      <p>Data provided by: U.S. Department of Agriculture, Agricultural Research Service. FoodData Central, 2019. <a href="https://fdc.nal.usda.gov">fdc.nal.usda.gov</a> </p>
      <footer className={styles.footer}>
  
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
};

export async function getServerSideProps(){
 
 
  const res = await fetch("https://api.nal.usda.gov/fdc/v1/foods/search?query=apple&pageSize=1&api_key=" + process.env.API_KEY);

  const data = await res.json();


  return {
    props: {
      results: data
    }
  }

};