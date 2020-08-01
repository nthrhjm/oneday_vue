const app = new Vue({
    el: '#app',
    data() {
        return {
            name: 'name'
        };
    },
    computed: {
        isInvalidName() {
            return this.name.length < 4;
        },
    },
});