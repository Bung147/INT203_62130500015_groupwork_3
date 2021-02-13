    const app = {
        data() {
            return {
                Gallery: [{ images: 'images/oita.jpg', name: 'Usa Shrine', done: false },
                { images: 'images/wakayame.jpg', name: 'Nachi Fall', done: false },
                { images: 'images/yamakuji.jpg', name: 'Motonosumi-inari Shrine', done: false }
                ]
             }
            },
            methods: {
            click(index) {
                this.Gallery[index].done = !this.Gallery[index].done
            }
        },
            computed: {
            countPic() {
                return this.Gallery.filter(t => !t.false).length
            }
        }

    }
    Vue.createApp(app).mount('#app')