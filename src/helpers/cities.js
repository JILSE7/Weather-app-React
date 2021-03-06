//Cities
export const cities = [
    {city: 'Bogota', country: 'Colombia', countryCode: 'CO'},
    {city: 'Madrid', country: 'España', countryCode: 'ES' },
    {city: 'Buenos Aires', country: 'Argentina', countryCode: 'AR'},
    {city: 'Ciudad de México', country: 'México', countryCode: 'MX' },
  ]


  export const getCountryName = (code) =>  cities.filter(c => c.countryCode === code)[0].country;
