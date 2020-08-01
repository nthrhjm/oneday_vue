new Vue({
    el: '#app'
});

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

const car = {bodyType: 'ワゴン'};
console.log(car.bodyType);
car.bodyType = 'セダン';
console.log(car.bodyType);

