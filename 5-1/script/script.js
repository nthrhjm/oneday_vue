const app = new Vue({
   el: '#app',
   data() {
       return {
           fruits: ['りんご', 'ぶどう', 'いちご', 'パイナップル'],
           obj: {
               name: "Taro",
               age: 30,
               like: "sushi",
           }
       };
   },
});