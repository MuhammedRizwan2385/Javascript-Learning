weatherdata = [
    { district: 'Thrissur', weather: 28 },
    { district: 'Palakkad', weather: 36 },
    { district: 'Kozhikod', weather: 28 },
    { district: 'Thrissur', weather: 29 },
    { district: 'Palakkad', weather: 31 },
    { district: 'Kozhikod', weather: 34 },

] //array of objects

// print districts with highest temperatures.

output = {};
for (let data of weatherdata) {
    let distname = data["district"];
    let currentTemp = data["weather"];

    if (distname in output) {
        let oldtemp = output[distname];
        if (currentTemp > oldtemp) {
            output[distname] = currentTemp;
        }


    }
    else {
        output[distname] = currentTemp;
    }

}
console.log(output);


//1. object to array conversion -object.entries(object-name) -nested array

console.log(Object.entries(output));

// sort array

console.log(Object.entries(output).sort((n1,n2)=>n2[1]-n1[1]));



