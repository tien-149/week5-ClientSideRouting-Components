export default {
    template: `<h1>{{message}}</h1>`,

    created: function() {
        console.log('Our splash component rendered');
    },

    data: function() {
        return {
            message: "Welcome to my Supper awesome App!"
        }
    }
}