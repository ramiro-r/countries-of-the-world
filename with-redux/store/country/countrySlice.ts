import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Country } from 'interfaces/Country/Country'

const API_ENDPOINT =
  'https://restcountries.com/v3.1/all?fields=name,currencies,capital,region,languages,latlng,maps,population,flags'

// Redux Toolkit allows us to write "mutating" logic in reducers. It
// doesn't actually mutate the state because it uses the immer library,
// which detects changes to a "draft state" and produces a brand new
// immutable state based off those changes
// Define a type for the slice state
interface CountryState {
  countries: Country[]
  displayedCountries: Country[]
  error: string | undefined
  isLoading: boolean
}

// Define the initial state using that type
const initialState: CountryState = {
  countries: [],
  displayedCountries: [],
  isLoading: false,
  error: undefined,
}

export const countrySlice = createSlice({
  name: 'country',
  initialState,
  reducers: {
    filterByRegion: (state, action: PayloadAction<string>) => {
      state.displayedCountries = state.countries.filter(
        (country) => country.region === action.payload
      )
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCountries.pending, (state) => {
      state.isLoading = true
      state.error = undefined
    })

    builder.addCase(fetchCountries.fulfilled, (state, { payload }) => {
      state.countries = payload
      state.displayedCountries = payload
      state.isLoading = false
    })

    builder.addCase(fetchCountries.rejected, (state, { payload }) => {
      state.error = payload?.message
      state.isLoading = false
    })
  },
})

type FetchCountryError = {
  message: string
}

export const fetchCountries = createAsyncThunk<
  Country[],
  void,
  { rejectValue: FetchCountryError }
>('country/fetchCountries', async (_: void, thunkApi) => {
  try {
    const res = await fetch(API_ENDPOINT)
    return await res.json()
  } catch (err) {
    thunkApi.rejectWithValue({ message: 'Fail to fetch countries' })
  }
})

export const { filterByRegion } = countrySlice.actions

export default countrySlice.reducer
