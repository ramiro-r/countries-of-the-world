import Head from 'next/head'
import FlagsGrid from 'components/FlagsGrid/FlagsGrid'
import { Country } from 'interfaces/Country/Country'

export default function Home() {
  const countries: Country[] = []

  return (
    <div className="flex flex-col w-full">
      <Head>
        <title>Countries of the world</title>
        <meta name="description" content="Countries of the world app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <nav className="flex space-evenly h-8 bg-green-300">
        <h1>
          Countries of the world
        </h1>
      </nav>
      <main className="flex flex-col align-center justify-center">
        <div className="">Filters bar</div>
        <FlagsGrid countries={countries} />
      </main>

      <footer className="footer">
          github logo
      </footer>
    </div>
  )
}
