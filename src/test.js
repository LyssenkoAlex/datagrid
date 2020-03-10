let g = [
    {a: 'alex50', b: 'd1', k: 105},
    {a: 'alex2', b: 'd2', k: 3},
    {a: 'alex35', b: 'd3', k: 1525},
    {a: 'alex563', b: 'd4', k: 263},
    {a: 'alex93', b: 'd5', k: 2},
];


console.log(g);


function compare( a, b ) {
    if ( a.a < b.a ){
        return -1;
    }
    if ( a.a > b.a ){
        return 1;
    }
    return 0;
}

function compare2( a, b ) {
    if ( a.a < b.a ){
        return 1;
    }
    if ( a.a > b.a ){
        return -1;
    }
    return 0;
}


console.log(g.sort(compare))
console.log(g.sort(compare2))
