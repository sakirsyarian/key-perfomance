var app = new Vue({
    el: '#app',
    data: {
        isOpen: false,
        group1: {
            p1percent: 0,
            p2percent: 0,
            p3percent: 0,
            p4percent: 0,
            p5percent: 0,
            p6percent: 0,
            p7percent: 0,
            p8percent: 0,
            p9percent: 0,
            p10percent: 0,
        },
        group2: {
            p1percent: 0,
            p2percent: 0,
            p3percent: 0,
            p4percent: 0,
            p5percent: 0,
            p6percent: 0,
            p7percent: 0,
            p8percent: 0,
            p9percent: 0,
            p10percent: 0,
        },
    },
    computed: {},
    methods: {
        addData() {
            planetChartData.data.datasets.forEach((dataset) => {
                // group1
                planetChartData.data.datasets[0].data[0] = this.group1.p1percent;
                planetChartData.data.datasets[0].data[1] = this.group1.p2percent;
                planetChartData.data.datasets[0].data[2] = this.group1.p3percent;
                planetChartData.data.datasets[0].data[3] = this.group1.p4percent;
                planetChartData.data.datasets[0].data[4] = this.group1.p5percent;
                planetChartData.data.datasets[0].data[5] = this.group1.p6percent;
                planetChartData.data.datasets[0].data[6] = this.group1.p7percent;
                planetChartData.data.datasets[0].data[7] = this.group1.p8percent;
                planetChartData.data.datasets[0].data[8] = this.group1.p9percent;
                planetChartData.data.datasets[0].data[9] = this.group1.p10percent;

                // group2
                planetChartData.data.datasets[1].data[0] = this.group2.p1percent;
                planetChartData.data.datasets[1].data[1] = this.group2.p2percent;
                planetChartData.data.datasets[1].data[2] = this.group2.p3percent;
                planetChartData.data.datasets[1].data[3] = this.group2.p4percent;
                planetChartData.data.datasets[1].data[4] = this.group2.p5percent;
                planetChartData.data.datasets[1].data[5] = this.group2.p6percent;
                planetChartData.data.datasets[1].data[6] = this.group2.p7percent;
                planetChartData.data.datasets[1].data[7] = this.group2.p8percent;
                planetChartData.data.datasets[1].data[8] = this.group2.p9percent;
                planetChartData.data.datasets[1].data[9] = this.group2.p10percent;

            });
            planetChartData.update();
        },
        remove() {
            localStorage.clear();
        },
        saveData() {
            const parsed = JSON.stringify(this.group1);
            localStorage.setItem('group1', parsed);

            const dua = JSON.stringify(this.group2);
            localStorage.setItem('group2', dua);

        }
    },
    mounted() {
        if (localStorage.getItem('group1')) {
            try {
                this.group1 = JSON.parse(localStorage.getItem('group1'));
                this.group2 = JSON.parse(localStorage.getItem('group2'));
            } catch (e) {
                localStorage.removeItem('group1');
                localStorage.removeItem('group2');
            }
        }
    },
});