import Head from 'next/head'
import Header from '@/components/Header'

export default function Home() {
  return (
    <div className='h-screen bg-zinc-100'>
      <Head>
        <title>Asheville Brewing Co.</title>
      </Head>
      <section>
        <Header />
      </section>
    </div>
  )
}
