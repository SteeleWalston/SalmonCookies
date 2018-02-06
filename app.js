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



const cookiesAirport = {
    minCustomers: 23,
    maxCustomers: 65,
    avgCookiesPerCustomer: 6.3,
    hourlyArray: [],
    cookiesPerHour: function() {
        const min = this.minCustomers;
        const max = this.maxCustomers;
        // const customers = Math.round(Math.random() * (max - min) + min);
        // const calcCookies = this.avgCookiesPerCustomer * customers;
        const timeOfDay = ['6', '7', '8', '9', '10', '11', '12', '1', '2', '3', '4', '5', '6', '7', '8'];
        for (let i = 0; i < timeOfDay.length; i++) {
            const customers = Math.round(Math.random() * (max - min) + min);
            const calcCookies = this.avgCookiesPerCustomer * customers;
            this.hourlyArray.push(Math.round(calcCookies));
        }
    }
};

console.log(cookiesAirport.hourlyArray);

const airportLocation = {
    cookiesArray: [cookiesAirport.cookiesPerHour()]
};

const cookiesPioneer = {
    minCustomers: 3,
    maxCustomers: 24,
    avgCookiesPerCustomer: 1.2,
    customersPerHour: function() {
        const min = this.minCustomers;
        const max = this.maxCustomers;
        return Math.round(Math.random() * (max - min) + min);
    }
};

console.log(cookiesPioneer.customersPerHour());

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