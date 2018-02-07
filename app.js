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
    '',
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
    'Daily Total',
];

const footerArray = [
    'Total',
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0
];

const reducer = (accumulator, currentValue) => accumulator + currentValue;

//Constructor

function Location (location, minCustomers, maxCustomers, avgCookiesPerCustomer) {
    this.location = location;
    this.minCustomers = minCustomers;
    this.maxCustomers = maxCustomers;
    this.avgCookiesPerCustomer = avgCookiesPerCustomer;
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

// Location.prototype.renderCookies = function() {
//     for (let i = 0; i < this.hourlyArray.length; i++) {
//         const airportList = document.getElementById(this.parentId);
//         const newListItem = document.createElement('li');
//         newListItem.textContent = timeOfDay[i] + this.hourlyArray[i];
    
//         airportList.appendChild(newListItem);
//     }
// };

Location.prototype.renderTotal = function() {
    const airportList = document.getElementById(this.parentId);
    const newListItem = document.createElement('li');
    newListItem.textContent = 'Total: ' + this.hourlyArray.reduce(reducer);

    airportList.appendChild(newListItem);
};

Location.prototype.renderHeader = function() {
    const thead = document.querySelector('#cookies-table thead');
    const tr = document.createElement('tr');
    for (let i = 0; i < timeOfDay.length; i++) {
        const th = document.createElement('th');
        th.textContent = timeOfDay[i];

        tr.appendChild(th);
        thead.appendChild(tr);

    }
};

Location.prototype.renderFooter = function() {
    const tfoot = document.querySelector('#cookies-table tfoot');
    const tr = document.createElement('tr');
    for (let i = 0; i < footerArray.length; i++) {
        const td = document.createElement('th');
        td.textContent = footerArray[i];

        tr.appendChild(td);
        tfoot.appendChild(tr);

    }
};

// Location.prototype.renderFooter = function() {
//     const tfoot = document.querySelector('#cookies-table thead');
//     const tr = document.createElement('tr');
//     for (let i = 0; i < timeOfDay.length; i++) {
//         const td = document.createElement('td');
//         td.textContent = timeOfDay[i];

//         tr.appendChild(td);
//         tfoot.appendChild(tr);

//     }
// };

Location.prototype.buildTable = function() {
    const tbody = document.querySelector('#cookies-table tbody');
    const tr = document.createElement('tr');
    const td = document.createElement('td');
    td.textContent = this.location;
    tr.appendChild(td);
    for (let i = 0; i < this.hourlyArray.length - 1; i++) {
        const td = document.createElement('td');
        td.textContent = this.hourlyArray[i];

        tr.appendChild(td);
        tbody.appendChild(tr);
    }

};

const airportLocation = new Location('Airport', 23, 65, 6.3);
console.log(airportLocation);
airportLocation.cookiesPerHour();
// airportLocation.renderTotal();
airportLocation.renderHeader();
airportLocation.renderFooter();
airportLocation.buildTable();

const pioneerLocation = new Location('Pioneer', 3, 24, 1.2);
pioneerLocation.cookiesPerHour();
// pioneerLocation.renderTotal();
pioneerLocation.buildTable();

const powellsLocation = new Location('Powells', 3, 24, 1.2);
powellsLocation.cookiesPerHour();
// powellsLocation.renderTotal();
powellsLocation.buildTable();

const stjohnsLocation = new Location('St. Johns', 3, 24, 1.2);
stjohnsLocation.cookiesPerHour();
// stjohnsLocation.renderTotal();
stjohnsLocation.buildTable();

const waterfrontLocation = new Location('Waterfront', 3, 24, 1.2);
waterfrontLocation.cookiesPerHour();
// waterfrontLocation.renderTotal();
waterfrontLocation.buildTable();