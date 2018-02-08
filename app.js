
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

// const newStoreArray = [
// ];

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

function renderHeader() {
    const thead = document.querySelector('#cookies-table thead');
    const tr = document.createElement('tr');
    for (let i = 0; i < timeOfDay.length; i++) {
        const th = document.createElement('th');
        th.textContent = timeOfDay[i];

        tr.appendChild(th);
        thead.appendChild(tr);

    }
};

function renderFooter() {
    const tfoot = document.querySelector('#cookies-table tfoot');
    const tr = document.createElement('tr');
    const td = document.createElement('td');
    td.textContent = 'Total';
    tr.appendChild(td);
    for (let i = 0; i < timeOfDay.length - 2; i++) {
        const td = document.createElement('th');
        td.textContent = airportLocation.hourlyArray[i] + pioneerLocation.hourlyArray[i] + powellsLocation.hourlyArray[i] + stjohnsLocation.hourlyArray[i] + waterfrontLocation.hourlyArray[i];

        tr.appendChild(td);
        tfoot.appendChild(tr);

    }
};

Location.prototype.buildTable = function() {
    const tbody = document.querySelector('#cookies-table tbody');
    const tr = document.createElement('tr');
    const td = document.createElement('td');
    td.textContent = this.location;
    tr.appendChild(td);
    for (let i = 0; i < this.hourlyArray.length - 2; i++) {
        const td = document.createElement('td');
        td.textContent = this.hourlyArray[i];

        tr.appendChild(td);
        tbody.appendChild(tr);
    }

    const th = document.createElement('th');
    th.textContent = this.hourlyArray.reduce(reducer);

    tr.appendChild(th);
};

const airportLocation = new Location('Airport', 23, 65, 6.3);
console.log(airportLocation);
airportLocation.cookiesPerHour();
airportLocation.buildTable();

const pioneerLocation = new Location('Pioneer', 3, 24, 1.2);
pioneerLocation.cookiesPerHour();
pioneerLocation.buildTable();

const powellsLocation = new Location('Powells', 3, 24, 1.2);
powellsLocation.cookiesPerHour();
powellsLocation.buildTable();

const stjohnsLocation = new Location('St. Johns', 3, 24, 1.2);
stjohnsLocation.cookiesPerHour();
stjohnsLocation.buildTable();

const waterfrontLocation = new Location('Waterfront', 3, 24, 1.2);
waterfrontLocation.cookiesPerHour();
waterfrontLocation.buildTable();

renderHeader();
renderFooter();

const newLocationForm = document.querySelector('form');

newLocationForm.addEventListener('submit', function() {
    event.preventDefault();
    const location = this.newStore.value;
    const minCustomers = this.minCustomers.value;
    const maxCustomers = this.maxCustomers.value;
    const avgCookiesPerCustomer = this.cookiesPer.value;

    const newStore = new Location(location, minCustomers, maxCustomers, avgCookiesPerCustomer);
    newStore.cookiesPerHour();
    newStore.buildTable();
});