const app = Vue.createApp({
    data() {
        return{ 
                fullName: 'Upal Sanghani',
                userAge: '24' ,
                city: 'London',
                province : 'Ontario',
                country : 'Canada',
                Temperature: '',
                Wind: '',
                Description: '',
                word: '',
                phonetic: '',
                definition: ''  
            };
    },
    methods: {
        getRandomUser() {
            fetch("https://comp6062.liamstewart.ca/random-user-data")
            .then(response => {
                if(response.ok) {
                    return response.json();
                }
                else {
                    console.log("An error occured. Please try again.");
                }
            })
           
            .then(data => {
            this.posts = data;
            })
            .catch(error =>{    
                console.log('Total Failure');
            });
        },

        getWeatherData() {
            fetch("https://comp6062.liamstewart.ca/weather-data")
            .then(response => {
                if(response.ok) {
                    return response.json();
                }
                else {
                    console.log("An error occured. Please try again.");
                }
            })

        },

        defineWord() {
            fetch("https://comp6062.liamstewart.ca/api/define?word=Bottle")
            .then(response => {
                if(response.ok) {
                    return response.json();
                }
                else {
                    console.log("An error occured. Please try again.");
                }
            })

        }
    }
});

app.mount('#app')