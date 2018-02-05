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
    }
};

console.log(cookiesAirport.customersPerHour());