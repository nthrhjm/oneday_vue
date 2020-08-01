new Vue({
    el: '#app',
    data() {
        return {
            count: 0
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