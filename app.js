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
    customersPerHour: function() {
        const min = this.minCustomers;
        const max = this.maxCustomers;
        return Math.round(Math.random() * (max - min) + min);
    },
    createLi: function () {
        const li = document.createElement('li');
        li.textContent = Math.round(this.customersPerHour() * this.avgCookiesPerCustomer);
        return li;
    }
};

console.log(cookiesAirport.customersPerHour());
console.log(cookiesAirport.createLi());

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