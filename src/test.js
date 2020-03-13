let students = [{
    firstName: 'John',
    lastName: 'Appletree',
    grade: 3
}, {
    firstName: 'Mighty',
    lastName: 'Peachtree',
    grade: 11
}, {
    firstName: 'Kim',
    lastName: 'Appletree',
    grade: 11
}, {
    firstName: 'Shooter',
    lastName: 'Appletree',
    grade: 13
},
    {
        firstName: 'Shooter',
        lastName: 'Appletree',
        grade: 1
    },
    {
        firstName: 'Shooter',
        lastName: 'Appletree',
        grade: 10
    }
];


let sortBy = [{
    prop: 'grade',
    direction: 1
}, {
    prop: 'lastName',
    direction: 1
}];

students.sort(function (a, b) {
    let i = 0, result = 0;
    while (i < sortBy.length && result === 0) {
        result = sortBy[i].direction * (a[sortBy[i].prop].toString() < b[sortBy[i].prop].toString() ? -1 : (a[sortBy[i].prop].toString() > b[sortBy[i].prop].toString() ? 1 : 0));
        i++;
    }
    return result;
});

// console.log(students);


const fieldSorter = (fields) => (a, b) => fields.map(o => {
    let dir = 1;
    if (o[0] === '-') {
        dir = -1;
        o = o.substring(1);
    }

    return a[o] > b[o] ? dir : a[o] < b[o] ? -(dir) : 0;
}).reduce((p, n) => p ? p : n, 0);

const fieldSorter2 = (fields) => (a, b) => fields.map(o => {
    let dir = 1;

    if (o.DIR === 'ASC') {
        dir = -1;
    }
    o = o.TITLE;
    return a[o] > b[o] ? dir : a[o] < b[o] ? -(dir) : 0;
}).reduce((p, n) => p ? p : n, 0);


const homes = [
    {"h_id": 3, "city": "Dallas", "state": "TX", "zip": "75201", "price": 600}
    , {
        "h_id": 4,
        "city": "Bevery Hills",
        "state": "CA",
        "zip": "90210",
        "price": 520
    }
    , {
        "h_id": 11,
        "city": "Bevery Hills",
        "state": "CA",
        "zip": "90210",
        "price": 319250
    }
    , {
        "h_id": 10,
        "city": "Bevery Hills3",
        "state": "CA",
        "zip": "90210",
        "price": 319250
    }
    , {
        "h_id": 100,
        "city": "Bevery Hills2",
        "state": "CA",
        "zip": "90210",
        "price": 319250
    }
    , {"h_id": 6, "city": "Dallas", "state": "TX", "zip": "75000", "price": 556699}
    , {
        "h_id": 5,
        "city": "New York",
        "state": "NY",
        "zip": "00010",
        "price": 962500
    }];
// const sortedHomes = homes.sort(fieldSorter(['-h_id']));
let h = [{TITLE:'h_id', DIR:'DE'}]
const sortedHomes2 = homes.sort(fieldSorter2(h));


// console.log(sortedHomes);
console.log('***************')
console.log(sortedHomes2);

