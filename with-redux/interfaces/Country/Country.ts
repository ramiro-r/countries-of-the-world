import { CountryMap } from "./CountryMap";
import { CountryName } from "./CountryName";
import { CountryFlagSrc } from "./CountryFlagSrc";

//https://restcountries.com/v3.1/all?fields=name,currencies,capital,region,languages,latlng,maps,population,flags

export interface Country {
    flags: CountryFlagSrc,
    name: CountryName,
    capital: string[],
    region: string,
    latlng: number[],
    maps: CountryMap,
    population: number,
}