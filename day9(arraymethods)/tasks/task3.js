// TASK-3

//[no,district,+ve cases,death rates,curred rates, 1st dose vaccine, 2nd dose vaccine]

covid_data = [
    [1, 'Eranakulam', 34000, 2000, 23000, 20000, 2000],
    [2, 'Edukki', 14000, 3000, 25000, 30000, 1000],
    [3, 'Thrissur', 24000, 4000, 33000, 24000, 2500],
    [4, 'Pathanamthitta', 20000, 2000, 45000, 22000, 1500],
    [5, 'Kozhikode', 44000, 5000, 12000, 21000, 500],
    [6, 'Kottayam', 27000, 1500, 27000, 14000, 1000],
    [7, 'Kollam', 14000, 2500, 25000, 18000, 2700]
]


//1. Find which district having highest +ve case?

const highestCases = covid_data.toSorted((c1, c2) => c2[2] - c1[2]);
console.log("district having highest +ve case");
console.log(highestCases[0][1]);


//2. Find which district having highest 1st dose vaccine?

const highestFirst = covid_data.toSorted((c1, c2) => c2[5] - c1[5]);
console.log("district having highest 1st dose vaccine");
console.log(highestFirst[0][1]);

//3. Find which district having lowest death rate?

const lowestDeath = covid_data.toSorted((c1, c2) => c1[3] - c2[3]);
console.log("district having lowest death rate");
console.log(lowestDeath[0][1]);

//4. Sort the data with +ve case in desending order
const highestCasesdecending = covid_data.toSorted((c1, c2) => c2[2] - c1[2]);
console.log(highestCasesdecending);

//5. sort district with 1st dose vaccine
console.log("sort district with 1st dose vaccine");
console.log(covid_data.sort((x, y) => x[5] - y[5]));
console.log("sort district names with 1st dose vaccine");
covid_data.sort((x, y) => x[5] - y[5]).forEach((x => console.log(x[1])));


//6. print total number of curred cases
console.log("total number of curred cases");

total_curred = covid_data.reduce((sum, district) => sum + district[4],0);
console.log(total_curred);

// Note:

/*
Code:
let total_cured = covid_data.reduce(
    (sum, district) => sum + district[4],
    0
);

Explanation:

1. covid_data.reduce()
   - reduce() is used to combine all elements of an array
     into a single value.
   - Here, we are using it to calculate the total cured cases.

2. (sum, district) => ...
   - This is an arrow function passed to reduce().
   - 'sum' stores the accumulated/total value.
   - 'district' represents the current inner array.

3. district[4]
   - Each district is an inner array.
   - Index 4 contains the cured cases.
   - Example:
     [1, 'Eranakulam', 34000, 2000, 23000, 20000, 2000]
                                            ^
                                          index 4
     So, district[4] = 23000.

4. sum + district[4]
   - Adds the cured cases of the current district
     to the previous total.

5. 0
   - This is the initial value of reduce().
   - It means the sum starts from 0.

6. let total_cured
   - Stores the final result returned by reduce().

The calculation happens like this:

0 + 23000 = 23000
23000 + 25000 = 48000
48000 + 33000 = 81000
81000 + 45000 = 126000
126000 + 12000 = 138000
138000 + 27000 = 165000
165000 + 25000 = 190000

Final result:
total_cured = 190000
*/


//7. print total curred cases in Idukki
console.log("total curred cases in Idukki");

covid_data.filter((x => x[1] === "Edukki")).forEach((x => console.log(x[4])));


//8. Is any district having more than 27000 +ve cases
console.log("full details of district having more than 27000 +ve cases");
console.log(covid_data.filter((x => x[2] > 27000)));
console.log("district names having more than 27000 +ve cases")
covid_data.filter((x => x[2] > 27000)).forEach((x => console.log(x[1])));
