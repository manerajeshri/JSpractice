const data = {
    code: 42,
    items: [{
        id: 1,
        name: 'food'
    }, {
        id: 2,
        name: 'bar'
    }],
    item1 : {
        id: 3,
        name: 'Cafe'
    }
};
console.log(data.items);
console.log(data.items[1]);
const item_name = data.items[1].name;

console.log(item_name);
