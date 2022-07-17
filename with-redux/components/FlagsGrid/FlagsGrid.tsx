import Card from 'components/Card/Card'
import { Country } from '../../interfaces/Country/Country'

interface FlagsGridProps {
  countries: Country[]
}

const CountryContent = (countries: Country[]) => {
  if (!countries.length) return <p>No countries available</p>

  return countries.map((country) => (
    <Card image={country.flags.png} name={country.name.common} />
  ))
}

const FlagsGrid: React.FC<FlagsGridProps> = ({ countries }) => {
  return (
    <div className="p-8 grid grid-cols-6 gap-4">
      {CountryContent(countries)}
    </div>
  )
}

export default FlagsGrid
