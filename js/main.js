"use script"

Vue.createApp({

    data() {
        return {
            text: "Hello World!",
            titleClasses: "text-center display-1 text-info mt-5",
            image: "img/vue.jpg",
            imgClasses: "d-block m-auto"
        };
    },
    methods: {
        changeImg() {
            if (this.text.includes("Mio")) {
                this.image = "img/vue.jpg";
                this.text = "Hello World!";
            }
            else {
                this.image = "img/Mio_Padre_Valerio.png";
                this.text = "Mio Padre Valerio";
            }
        },
    },
}).mount("#app");