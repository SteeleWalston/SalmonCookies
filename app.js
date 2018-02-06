/* 

const location = {
    minCustomers: 0,
    maxCustomers: 0,
    avgCookiesPerCustomer: 0,
    customersPerHour: function (min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
};
*/


//Airport Location

const cookiesAirport = {
    minCustomers: 23,
    maxCustomers: 65,
    avgCookiesPerCustomer: 6.3,
    hourlyArray: [],
    cookiesPerHour: function() {
        const min = this.minCustomers;
        const max = this.maxCustomers;
        const timeOfDay = ['6', '7', '8', '9', '10', '11', '12', '1', '2', '3', '4', '5', '6', '7', '8'];
        for (let i = 0; i < timeOfDay.length; i++) {
            const customers = Math.round(Math.random() * (max - min) + min);
            const calcCookies = this.avgCookiesPerCustomer * customers;
            const cookiesPerHour = Math.round(calcCookies);
            this.hourlyArray.push(cookiesPerHour);
        }
    }
};

cookiesAirport.cookiesPerHour();

const airportList = document.getElementById('airport-cookies');
console.log(airportList);

//Creating list items for the array inside the cookiesAirport object

let cookiePerHour = [
    cookiesAirport.hourlyArray[0],
    cookiesAirport.hourlyArray[1],
    cookiesAirport.hourlyArray[2],
    cookiesAirport.hourlyArray[3],
    cookiesAirport.hourlyArray[4],
    cookiesAirport.hourlyArray[5],
    cookiesAirport.hourlyArray[6],
    cookiesAirport.hourlyArray[7],
    cookiesAirport.hourlyArray[8],
    cookiesAirport.hourlyArray[9],
    cookiesAirport.hourlyArray[10],
    cookiesAirport.hourlyArray[11],
    cookiesAirport.hourlyArray[12],
    cookiesAirport.hourlyArray[13],
    cookiesAirport.hourlyArray[14]

];

let timeOfDay = [
    '6am: ',
    '7am: ',
    '8am: ',
    '9am: ',
    '10am: ',
    '11am: ',
    '12pm: ',
    '1pm: ',
    '2pm: ',
    '3pm: ',
    '4pm: ',
    '5pm: ',
    '6pm: ',
    '7pm: ',
    '8pm: ',

];

for (let i = 0; i < cookiePerHour.length; i++) {
    const newListItem = document.createElement('li');
    newListItem.innerHTML = timeOfDay[i] + cookiesAirport.hourlyArray[i];
    console.log(newListItem);

    airportList.appendChild(newListItem);
}

//Creating a list item for Total of all hours

const reducer = (accumulator, currentValue) => accumulator + currentValue;

const newListItem = document.createElement('li');
newListItem.innerHTML = 'Total: ' + cookiesAirport.hourlyArray.reduce(reducer);
console.log(newListItem);

airportList.appendChild(newListItem);


//Pioneer Location

const cookiesPioneer = {
    minCustomers: 23,
    maxCustomers: 65,
    avgCookiesPerCustomer: 6.3,
    hourlyArray: [],
    cookiesPerHour: function() {
        const min = this.minCustomers;
        const max = this.maxCustomers;
        const timeOfDay = ['6', '7', '8', '9', '10', '11', '12', '1', '2', '3', '4', '5', '6', '7', '8'];
        for (let i = 0; i < timeOfDay.length; i++) {
            const customers = Math.round(Math.random() * (max - min) + min);
            const calcCookies = this.avgCookiesPerCustomer * customers;
            const cookiesPerHour = Math.round(calcCookies);
            this.hourlyArray.push(cookiesPerHour);
        }
    }
};

cookiesPioneer.cookiesPerHour();

const pioneerList = document.getElementById('pioneer-cookies');
console.log(pioneerList);

let pioneerCookiePerHour = [
    cookiesPioneer.hourlyArray[0],
    cookiesPioneer.hourlyArray[1],
    cookiesPioneer.hourlyArray[2],
    cookiesPioneer.hourlyArray[3],
    cookiesPioneer.hourlyArray[4],
    cookiesPioneer.hourlyArray[5],
    cookiesPioneer.hourlyArray[6],
    cookiesPioneer.hourlyArray[7],
    cookiesPioneer.hourlyArray[8],
    cookiesPioneer.hourlyArray[9],
    cookiesPioneer.hourlyArray[10],
    cookiesPioneer.hourlyArray[11],
    cookiesPioneer.hourlyArray[12],
    cookiesPioneer.hourlyArray[13],
    cookiesPioneer.hourlyArray[14]

];

let pioneerTimeOfDay = [
    '6am: ',
    '7am: ',
    '8am: ',
    '9am: ',
    '10am: ',
    '11am: ',
    '12pm: ',
    '1pm: ',
    '2pm: ',
    '3pm: ',
    '4pm: ',
    '5pm: ',
    '6pm: ',
    '7pm: ',
    '8pm: ',

];

for (let i = 0; i < pioneerCookiePerHour.length; i++) {
    const pioneerNewListItem = document.createElement('li');
    pioneerNewListItem.innerHTML = pioneerTimeOfDay[i] + cookiesPioneer.hourlyArray[i];
    console.log(newListItem);

    pioneerList.appendChild(pioneerNewListItem);
}

//Creating a list item for Total of all hours

const pioneerNewListItem = document.createElement('li');
pioneerNewListItem.innerHTML = 'Total: ' + cookiesPioneer.hourlyArray.reduce(reducer);
console.log(newListItem);

pioneerList.appendChild(pioneerNewListItem);


//Powells Location

const cookiesPowells = {
    minCustomers: 11,
    maxCustomers: 38,
    avgCookiesPerCustomer: 3.7,
    customersPerHour: function() {
        const min = this.minCustomers;
        const max = this.maxCustomers;
        return Math.round(Math.random() * (max - min) + min);
    }
};

console.log(cookiesPowells.customersPerHour());

//St Johns Location 

const cookiesStJohns = {
    minCustomers: 20,
    maxCustomers: 38,
    avgCookiesPerCustomer: 2.3,
    customersPerHour: function() {
        const min = this.minCustomers;
        const max = this.maxCustomers;
        return Math.round(Math.random() * (max - min) + min);
    }
};

console.log(cookiesStJohns.customersPerHour());

//Waterfront Location 

const cookiesWaterFront = {
    minCustomers: 2,
    maxCustomers: 16,
    avgCookiesPerCustomer: 4.6,
    customersPerHour: function() {
        const min = this.minCustomers;
        const max = this.maxCustomers;
        return Math.round(Math.random() * (max - min) + min);
    }
};

console.log(cookiesWaterFront.customersPerHour());