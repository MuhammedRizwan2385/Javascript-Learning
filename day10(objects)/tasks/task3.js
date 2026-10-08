// TASK-3
const countries = [
    { name: 'United States', population: 331002651, continent: 'North America', capital: 'Washington, D.C.' },
    { name: 'China', population: 1439323776, continent: 'Asia', capital: 'Beijing' },
    { name: 'Brazil', population: 212559417, continent: 'South America', capital: 'Brasília' },
    { name: 'United Kingdom', population: 67886011, continent: 'Europe', capital: 'London' },
    { name: 'South Africa', population: 59308690, continent: 'Africa', capital: 'Pretoria, Cape Town, Bloemfontein' },
];

// 1. Print the names of all countries.

console.log("names of all countries.");
countries.forEach(c => console.log(c.name));

// 2. Find the country with the largest population.

console.log("country with the largest population.");
console.log(countries.reduce((c1, c2) => c1.population > c2.population ? c1 : c2));


// 3. Find the total population of all countries.
console.log("total population of all countries.");
console.log(countries.reduce((sum, c) => sum + c.population, 0));

// 4. Find all countries in a specific continent (e.g., Asia).

console.log("all countries in Asia");
countries.filter(c => c.continent === "Asia").forEach(c => console.log(c.name));

// 5. Print the names of capitals with more than one city.

console.log("The names of capitals with more than one city.");
countries.filter(c => c.capital.split(",").length > 1).forEach(c => console.log(c.capital));

console.log("The names of country whose capital have more than one city.");
countries.filter(c => c.capital.split(",").length > 1).forEach(c => console.log(c.name));


// 6. Sort countries based on population (descending order).

console.log("countries based on population (descending order).");
console.log(countries.sort((c1, c2) => c2["population"] - c1["population"]));

// 7. Find the country with the smallest population.
console.log("the country with the smallest population.");
console.log(countries.reduceRight((c1, c2) => c1.population < c2.population ? c1 : c2));

// 8. Find the country with the longest name.
console.log("the country with the longest name");
console.log(countries.reduce((c1, c2) => c1.name.length > c2.name.length ? c1 : c2));

// 9. Find the country with the shortest name.

console.log("the country with the shorted name");
console.log(countries.reduce((c1, c2) => c1.name.length < c2.name.length ? c1 : c2));

// 10. Find the average population of all countries

total_population = countries.reduce((sum, c) => (sum + c.population), 0);
average_population = total_population / countries.length;
console.log(`The average population of all countries: ${average_population}`);
