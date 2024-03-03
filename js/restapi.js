// arrow function
const loadCountryAPI = () => {
    // fetch url of rest country from website
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => displayCountries(data))
}

const displayCountries = countries =>{
    console.log(countries)
    const countriesHTML = countries.map(country => getCountry(country));
    // displaying div to html 
    const container = document.getElementById('countries')
    container.innerHTML = countriesHTML.join(' ');
}

const getCountry = (country) => {
    console.log(country)
    return `
    <div class="country-div">
    <img src="${country.flags.png}">
    <div class="text">
        <h2>${country.name.common}</h2>
        <h3><strong class="main">Population:</strong> ${country.population}</h3>
        <h3><strong class="main">Region: </strong>${country.region}</h3>
        <h3><strong class="main">Capital:</strong> ${country.capital}</h3>
    </div>
    </div>
    `
}


// call function to get output console

loadCountryAPI()