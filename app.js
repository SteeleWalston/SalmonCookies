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
// const locations = ['Airport', 'Pioneer Square', 'Powells', 'St. Johns', 'Waterfront'];

const timeOfDay = [
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

const reducer = (accumulator, currentValue) => accumulator + currentValue;

//Constructor

function Location (location, minCustomers, maxCustomers, avgCookiesPerCustomer, parentId) {
    this.location = location;
    this.minCustomers = minCustomers;
    this.maxCustomers = maxCustomers;
    this.avgCookiesPerCustomer = avgCookiesPerCustomer;
    this.parentId = parentId;
    this.hourlyArray = [];
}

Location.prototype.cookiesPerHour = function() {
    const min = this.minCustomers;
    const max = this.maxCustomers;
    for (let i = 0; i < timeOfDay.length; i++) {
        const customers = Math.round(Math.random() * (max - min) + min);
        const calcCookies = this.avgCookiesPerCustomer * customers;
        const cookiesPerHour = Math.round(calcCookies);
        this.hourlyArray.push(cookiesPerHour);
    }
};

Location.prototype.renderCookies = function() {
    for (let i = 0; i < this.hourlyArray.length; i++) {
        const airportList = document.getElementById(this.parentId);
        const newListItem = document.createElement('li');
        newListItem.textContent = timeOfDay[i] + this.hourlyArray[i];
    
        airportList.appendChild(newListItem);
    }
};

Location.prototype.renderTotal = function() {
    const airportList = document.getElementById(this.parentId);
    const newListItem = document.createElement('li');
    newListItem.textContent = 'Total: ' + this.hourlyArray.reduce(reducer);

    airportList.appendChild(newListItem);
};

Location.prototype.renderLocationRow = function() {
    const thead = document.querySelector('#cookies-table thead');
    const tr = document.createElement('tr');
    const td = document.createElement('td');
    td.textContent = this.location;

    tr.appendChild(td);
    thead.appendChild(tr);
};

Location.prototype.renderRow = function() {
    for (let i = 0; i < this.hourlyArray.length; i++) {
        const tbody = document.querySelector('#cookies-table tbody');
        const tr = document.createElement('tr');
        const td = document.createElement('td');
        td.textContent = timeOfDay[i] + this.hourlyArray[i];

        // tr.appendChild(td);
        
        tr.appendChild(td);
        tbody.appendChild(tr);
    }
};

const airportLocation = new Location('Airport', 23, 65, 6.3, 'airport-cookies');
console.log(airportLocation);
airportLocation.cookiesPerHour();
airportLocation.renderCookies();
airportLocation.renderTotal();
airportLocation.renderLocationRow();
// airportLocation.renderRow();

const pioneerLocation = new Location('Pioneer', 3, 24, 1.2, 'pioneer-cookies');
pioneerLocation.cookiesPerHour();
pioneerLocation.renderCookies();
pioneerLocation.renderTotal();
pioneerLocation.renderLocationRow();
// pioneerLocation.renderRow();

const powellsLocation = new Location('Powells', 3, 24, 1.2, 'pioneer-cookies');
powellsLocation.cookiesPerHour();
powellsLocation.renderCookies();
powellsLocation.renderTotal();
powellsLocation.renderLocationRow();
// pioneerLocation.renderRow();

const stjohnsLocation = new Location('St. Johns', 3, 24, 1.2, 'pioneer-cookies');
stjohnsLocation.cookiesPerHour();
stjohnsLocation.renderCookies();
stjohnsLocation.renderTotal();
stjohnsLocation.renderLocationRow();
// pioneerLocation.renderRow();

const waterfrontLocation = new Location('Waterfront', 3, 24, 1.2, 'pioneer-cookies');
waterfrontLocation.cookiesPerHour();
waterfrontLocation.renderCookies();
waterfrontLocation.renderTotal();
waterfrontLocation.renderLocationRow();
// pioneerLocation.renderRow();


// //Pioneer Location

// const cookiesPioneer = {
//     minCustomers: 3,
//     maxCustomers: 24,
//     avgCookiesPerCustomer: 1.2,
//     hourlyArray: [],
//     cookiesPerHour: function() {
//         const min = this.minCustomers;
//         const max = this.maxCustomers;
//         const timeOfDay = ['6', '7', '8', '9', '10', '11', '12', '1', '2', '3', '4', '5', '6', '7', '8'];
//         for (let i = 0; i < timeOfDay.length; i++) {
//             const customers = Math.round(Math.random() * (max - min) + min);
//             const calcCookies = this.avgCookiesPerCustomer * customers;
//             const cookiesPerHour = Math.round(calcCookies);
//             this.hourlyArray.push(cookiesPerHour);
//         }
//     }
// };

// cookiesPioneer.cookiesPerHour();

// const pioneerList = document.getElementById('pioneer-cookies');
// console.log(pioneerList);

// for (let i = 0; i < cookiePerHour.length; i++) {
//     const pioneerNewListItem = document.createElement('li');
//     pioneerNewListItem.innerHTML = timeOfDay[i] + cookiesPioneer.hourlyArray[i];
//     console.log(pioneerNewListItem);

//     pioneerList.appendChild(pioneerNewListItem);
// }

// //Creating a list item for Total of all hours

// const pioneerNewListItem = document.createElement('li');
// pioneerNewListItem.innerHTML = 'Total: ' + cookiesPioneer.hourlyArray.reduce(reducer);
// console.log(pioneerNewListItem);

// pioneerList.appendChild(pioneerNewListItem);


// //Powells Location

// const cookiesPowells = {
//     minCustomers: 11,
//     maxCustomers: 38,
//     avgCookiesPerCustomer: 3.7,
//     hourlyArray: [],
//     cookiesPerHour: function() {
//         const min = this.minCustomers;
//         const max = this.maxCustomers;
//         const timeOfDay = ['6', '7', '8', '9', '10', '11', '12', '1', '2', '3', '4', '5', '6', '7', '8'];
//         for (let i = 0; i < timeOfDay.length; i++) {
//             const customers = Math.round(Math.random() * (max - min) + min);
//             const calcCookies = this.avgCookiesPerCustomer * customers;
//             const cookiesPerHour = Math.round(calcCookies);
//             this.hourlyArray.push(cookiesPerHour);
//         }
//     }
// };

// cookiesPowells.cookiesPerHour();

// const powellsList = document.getElementById('powells-cookies');
// console.log(powellsList);

// for (let i = 0; i < cookiePerHour.length; i++) {
//     const powellsNewListItem = document.createElement('li');
//     powellsNewListItem.innerHTML = timeOfDay[i] + cookiesPowells.hourlyArray[i];
//     console.log(powellsNewListItem);

//     powellsList.appendChild(powellsNewListItem);
// }

// //Creating a list item for Total of all hours

// const powellsNewListItem = document.createElement('li');
// powellsNewListItem.innerHTML = 'Total: ' + cookiesPowells.hourlyArray.reduce(reducer);
// console.log(powellsNewListItem);

// powellsList.appendChild(powellsNewListItem);

// //St Johns Location 

// const cookiesStJohns = {
//     minCustomers: 20,
//     maxCustomers: 38,
//     avgCookiesPerCustomer: 2.3,
//     hourlyArray: [],
//     cookiesPerHour: function() {
//         const min = this.minCustomers;
//         const max = this.maxCustomers;
//         const timeOfDay = ['6', '7', '8', '9', '10', '11', '12', '1', '2', '3', '4', '5', '6', '7', '8'];
//         for (let i = 0; i < timeOfDay.length; i++) {
//             const customers = Math.round(Math.random() * (max - min) + min);
//             const calcCookies = this.avgCookiesPerCustomer * customers;
//             const cookiesPerHour = Math.round(calcCookies);
//             this.hourlyArray.push(cookiesPerHour);
//         }
//     }
// };

// cookiesStJohns.cookiesPerHour();

// const stJohnsList = document.getElementById('st-johns-cookies');
// console.log(stJohnsList);

// for (let i = 0; i < cookiePerHour.length; i++) {
//     const stJohnsNewListItem = document.createElement('li');
//     stJohnsNewListItem.innerHTML = timeOfDay[i] + cookiesStJohns.hourlyArray[i];
//     console.log(stJohnsNewListItem);

//     stJohnsList.appendChild(stJohnsNewListItem);
// }

// //Creating a list item for Total of all hours

// const stJohnsNewListItem = document.createElement('li');
// stJohnsNewListItem.innerHTML = 'Total: ' + cookiesStJohns.hourlyArray.reduce(reducer);
// console.log(stJohnsNewListItem);

// stJohnsList.appendChild(stJohnsNewListItem);

// //Waterfront Location 

// const cookiesWaterfront = {
//     minCustomers: 2,
//     maxCustomers: 16,
//     avgCookiesPerCustomer: 4.6,
//     hourlyArray: [],
//     cookiesPerHour: function() {
//         const min = this.minCustomers;
//         const max = this.maxCustomers;
//         const timeOfDay = ['6', '7', '8', '9', '10', '11', '12', '1', '2', '3', '4', '5', '6', '7', '8'];
//         for (let i = 0; i < timeOfDay.length; i++) {
//             const customers = Math.round(Math.random() * (max - min) + min);
//             const calcCookies = this.avgCookiesPerCustomer * customers;
//             const cookiesPerHour = Math.round(calcCookies);
//             this.hourlyArray.push(cookiesPerHour);
//         }
//     }
// };

// cookiesWaterfront.cookiesPerHour();

// const waterfrontList = document.getElementById('waterfront-cookies');
// console.log(waterfrontList);

// for (let i = 0; i < cookiePerHour.length; i++) {
//     const waterfrontNewListItem = document.createElement('li');
//     waterfrontNewListItem.innerHTML = timeOfDay[i] + cookiesWaterfront.hourlyArray[i];
//     console.log(waterfrontNewListItem);

//     waterfrontList.appendChild(waterfrontNewListItem);
// }

// //Creating a list item for Total of all hours

// const waterfrontNewListItem = document.createElement('li');
// waterfrontNewListItem.innerHTML = 'Total: ' + cookiesWaterfront.hourlyArray.reduce(reducer);
// console.log(waterfrontNewListItem);

// waterfrontList.appendChild(waterfrontNewListItem);