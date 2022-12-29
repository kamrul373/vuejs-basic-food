const app = Vue.createApp({
    data: function () {
        return {
            heding: "Hello Vue Food",
            headingClass: "text-3xl font-bold text-center text-orange-500",
            foodURL: "./images/food.png",
            cart: [],
            flavors: [
                { id: 1, foodName: "banana", price: 10 },
                { id: 2, foodName: "apple", price: 20 },
                { id: 3, foodName: "orange", price: 30 },
                { id: 4, foodName: "lemon", price: 7 },
                { id: 5, foodName: "pineapple", price: 50 },
            ]
        }

    },
    methods: {
        addToCart(id) {
            this.cart.push(this.flavors.find(flavor => flavor.id === id))
        },
        removeFromCart(id) {
            const index = this.cart.findIndex(flavor => flavor.id === id)
            this.cart.splice(index, 1);
        }
    },
    computed: {
        total() {
            return this.cart.reduce((total, current) => total + current.price, 0)
        }
    }


})