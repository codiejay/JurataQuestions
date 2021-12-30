
import type { NextPage } from 'next'
import Head from 'next/head'
import { Questionnaire } from '../components/Questionnaire'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Jurata Questions</title>
        <meta name="description" content="Powered by Jurata" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Questionnaire />
    </div>
  )
}

export default Home
