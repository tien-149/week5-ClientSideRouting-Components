export default {
    template: 
    `<section>
    <h1>This is the app page</h1>
    <form id="my-form">

    <label for="name">Enter your name:</label>
    <input v-model="user" name="username" required placeholder="username">

    <label for="password">Enter your password:</label>
    <input v-model="password" type="password" required placeholder="password">

    <input @click.prevent="submitUserData" type="submit" value="Sign up / Log In">
    </form>
    </section>
    `
    ,

    data: function() {
        return {
            user: "",
            password: ""
        }
    },
    methods: {
        submitUserData() {
            //do a fetch here using post method
            //refer to the Node mailer example from last semester as to
            //How to get data from a form into a Fetch call using post

            console.log('Hit the API PAN is asking for, which should be in the root Vue instance');
            document.querySelector('form').reset();

            this.user = "";
            this.password = "";
        }
    },

    created: function() {
        console.log('Our app component rendered');
    },
}