new Vue({
    el: '#app',
    data() {
        return {
            count: 59
        };
    },
    methods: {
        increment() {
            this.count += 1;
        },
        decrement() {
            if (this.count > 0) {
                this.count -= 1;
            }
        },
    }
});


const point = 85;
if (point >= 60) {
    console.log('合格！');
} else {
    console.log('不合格');
}
