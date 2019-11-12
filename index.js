// Arrow - функции 

 function square (x){
     return x*x;
 } 

 const sq = (x) => x*x;  

 console.log(sq(3));   
 const arr = [ '1', '3', '2', '4'];
 
 const res = arr.map((el) => parseInt(el)).filter((num) => num%2).reduce((max, value) => Math.max(max, value), 0);
 console.log(res);   

// Параметры по умолчанию

function fetchOrders(count = 1, start = 4){
    console.log('Getting', count, 'orders starting from', start);

}
fetchOrders(null, 10)

// Rest параметр 
function max (a, b, ...numbers){
    console.log(numbers);
}
max(1,2, 3);

// Spread operator

const arr1 = [1, 2, 3];
const arr2 = [4, 7, 1];

const result = Math.max(41, ...arr1, 5, ...arr2, 10);
console.log(result);

const shallowcopy = [...arr1, ...arr2, 41];
console.log(shallowcopy);

// Деструктуризация объектов

function connect({
    host = 'localhost',
    port = 12345,
    user = 'guest'} = {}) {
        console.log('user:', user, 'port:', port, 'host:', host);
    }
    connect({ port: 1111});

    
    const person = {
        name: {
            first: 'Peter',
            last: 'Smith'
        },
        age: 27
    };

    const { name: { first: firstname, last: lastname} } = person;
    console.log(firstname, lastname);

    const dic = {
        duck: 'quack',
        dog: 'wuff',
        mouse: 'squeak'
    };

    const {duck, ...otherAnimals } = dic;

    console.log(otherAnimals);

// Деструктуризация массивов

const dic1 = {
    duck: 'quack',
    dog: 'wuff',
    mouse: 'squeak',
    hamster: 'squeak'
};

const res2 = Object.entries(dic1).filter(([, value]) => value === 'squeak').map(([key]) => key);

console.log(res2);

const shape = {
    type: 'segement',
    coordinates: {
        start: [10, 15],
        end: [17, 15]
    }
};

const {coordinates: {start: [startX, startY], end: [endX, endY]}} = shape;
console.log(startX, startY, endX, endY);

// Шаблонные строки 


const items = ['tea', 'coffee'];

const templateHtml =  `
<ul>
    <li>${items[0]}</li>
    <li>${items[1]}</li>
</ul>
`; 
console.log(templateHtml);   

// Objects

const prefix = '_blah_';

const data = {
    [prefix + 'name']: 'Bob',
    [prefix + 'age']: 23
};
console.log(data);

const defaults = {
    host: 'localhost',
    dbName: 'blog',
    user: 'admin'
};

const opts = {
    user: 'John',
    password: 'utopia'
};

const res3 = Object.assign({}, defaults, opts);
console.log(res3);