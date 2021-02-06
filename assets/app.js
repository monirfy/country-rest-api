'use strict';

fetch('https://restcountries.eu/rest/v2/all')
    .then((res) => res.json())
    .then((data) => {
        displayCountries(data);
    });

const displayCountries = (countries) => {
    const countriesDiv = document.getElementById('countries');

    countries.forEach((country) => {
        const countryDiv = document.createElement('div');
        countryDiv.className = 'col-md-4';
        const countryInfo = `
                <div class="border p-3 text-center h-100">
                <h4>${country.name}</h4>
                <p>${country.capital}</p>
                <button onclick="displayDetails('${country.name}')" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">Details</button>
                </div>
            `;
        countryDiv.innerHTML = countryInfo;
        countriesDiv.appendChild(countryDiv);
    });
};

const displayDetails = (name) => {
    const url = `https://restcountries.eu/rest/v2/name/${name}`;
    fetch(url)
        .then((res) => res.json())
        .then((data) => {
            renderCountryInfo(data[0]);
        });
};

const renderCountryInfo = (country1) => {
    const countriesDetailsDiv = document.getElementById('countriesDetails');

    countriesDetailsDiv.innerHTML = `
        <img class="flag-img" src="${country1.flag}" alt="">
        <ul class="list-unstyled mb-0">
            <li>Country Name: ${country1.name}</li>
            <li>Population: ${country1.population}</li>
            <li>Language: ${country1.languages[0].name}</li>
        </ul>
        
    `;
};

// for (let i = 0; i < countries.length; i++) {
//     const country = countries[i];

//     const countryDiv = document.createElement('div');
//     countryDiv.className = 'col-md-4';
//     // const countryName = document.createElement('h3');
//     // countryName.innerText = country.name;

//     // const countryCapital = document.createElement('h5');
//     // countryCapital.innerText = country.capital;

//     // countryDiv.appendChild(countryName);
//     // countryDiv.appendChild(countryCapital);

//     const countryInfo = `
//         <div class="border p-3 text-center h-100">
//         <h4>${country.name}</h4>
//         <p>${country.capital}</p>
//         </div>
//     `;
//     countryDiv.innerHTML = countryInfo;
//     countriesDiv.appendChild(countryDiv);
// }

// const students = [
//     { id: 21, name: 'Omar Sunny' },
//     { id: 31, name: 'Mannaaaaa' },
//     { id: 41, name: 'Moyouri' },
//     { id: 71, name: 'Depjol' },
// ];

// const names = students.map(s => s.name);
// const su = students.map(dd => dd.id);
// console.log(su);

// const bigger = students.filter(s => s.id > 40);
// console.log(bigger);

// const bigger = students.find(s => s.id > 40);
// console.log(bigger);
