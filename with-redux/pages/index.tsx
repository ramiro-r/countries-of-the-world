import FlagsGrid from 'components/FlagsGrid/FlagsGrid'
import Head from 'next/head'
import { useEffect } from 'react'
import { fetchCountries } from 'store/country/countrySlice'
import { useAppDispatch, useAppSelector } from 'store/hooks'

export default function Home() {
  const countryState = useAppSelector((state) => state.country)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchCountries())
  }, [])

  return (
    <div className="flex flex-col w-full">
      <Head>
        <title>Countries of the world</title>
        <meta name="description" content="Countries of the world app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <nav className="flex space-evenly h-8 bg-green-300">
        <h1>Countries of the world</h1>
      </nav>
      <main className="flex flex-col align-center justify-center">
        <div className="">Filters bar</div>
        {countryState.isLoading ? (
          <p>Countries Loading...</p>
        ) : (
          <FlagsGrid countries={countryState.countries} />
        )}
      </main>

      <footer className="footer">github logo</footer>
    </div>
  )
}
