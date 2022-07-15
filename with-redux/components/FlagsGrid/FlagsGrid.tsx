import { Country } from "../../interfaces/Country/Country"

interface FlagsGridProps {
    countries: Country[]
}

const FlagsGrid: React.FC<FlagsGridProps> = () => {
    return <p>this is the flag grid</p>
}

export default FlagsGrid