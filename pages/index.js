import Head from 'next/head'

import Body from '../components/Home/Body'
import Footer from '../components/Home/Footer'
import Navbar from '../components/Home/NavBar'
import styles from '../styles/index.module.scss'

export default function Home() {

  return (
    <div className={`${styles.container}`}>
      <Head>
        <title>Canasta</title>
        <meta name="description" content="Canasta Domain" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="theme-color" content="#ffffff" />

        <meta property="og:site_name" content="Canasta" />
        <meta property="og:url" content="https://canasta.domain" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Canasta" />
        <meta property="og:description" content="The first marketplace to buy domain bsc!" />
        <meta property="og:image" content="https://canasta.domain/assets/icon-shared.png" />

        {/* Global Site Tag (gtag.js) - Google Analytics */}
        <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
              page_path: window.location.pathname,
            });
          `,
            }} />

      </Head>

      <Navbar />

      <Body />

      <Footer />
      
    </div>
  )
}
