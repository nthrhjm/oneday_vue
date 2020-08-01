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
    },
    computed: {
        isPass() {
            return this.count >= 60;
        }
    },
});