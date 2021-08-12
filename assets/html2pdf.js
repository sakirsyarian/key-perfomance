// select
localStorage.getItem('tanggal') === null ? document.getElementById('date').innerHTML = "No Period" : document.getElementById('date').innerHTML = localStorage.getItem('tanggal');
// nama
localStorage.getItem('nama') === null ? document.getElementById('name').innerHTML = "No Name" : document.getElementById('name').innerHTML = localStorage.getItem('nama');
// posisi
localStorage.getItem('posisi') === null ? document.getElementById('lbl_position').innerHTML = "No Position" : document.getElementById('position').innerHTML = localStorage.getItem('posisi');
// departemen
localStorage.getItem('departemen') === null ? document.getElementById('departement').innerHTML = "No Departemen" : document.getElementById('departement').innerHTML = localStorage.getItem('departemen');
// hobi
localStorage.getItem('hobi') === null ? document.getElementById('hoby').innerHTML = "No Hobby" : document.getElementById('hoby').innerHTML = localStorage.getItem('hobi');
// email
localStorage.getItem('email') === null ? document.getElementById('email').innerHTML = "No Email" : document.getElementById('email').innerHTML = localStorage.getItem('email');
// telepon
localStorage.getItem('telepon') === null ? document.getElementById('phone').innerHTML = "No Phone" : document.getElementById('phone').innerHTML = localStorage.getItem('telepon');

// chart
var halo = JSON.parse(window.localStorage.getItem('group1'));
var hale = JSON.parse(window.localStorage.getItem('group2'));
const chrt = document.getElementById("chart");
const ChartData = new Chart(chrt, {
    type: "radar",
    data: {
        labels: ["Kemampuan Menyampaikan Ide", "Kerja Sama Tim", "Komunikasi Antar Karyawan", "Kerapihan & Penampilan", "Mengisi Kolom Catatan Setelah Check-Out", "Kualitas Pekerjaan", "Kecepatan Pengumpulan Tugas", "Ketepatan Waktu Absen", "Kehadiran", "Kecepatan Tanggapan"],
        datasets: [
            {
                label: "Minggu Ini",
                data: [
                    halo === null ? 0 : halo.p1percent,
                    halo === null ? 0 : halo.p2percent,
                    halo === null ? 0 : halo.p3percent,
                    halo === null ? 0 : halo.p4percent,
                    halo === null ? 0 : halo.p5percent,
                    halo === null ? 0 : halo.p6percent,
                    halo === null ? 0 : halo.p7percent,
                    halo === null ? 0 : halo.p8percent,
                    halo === null ? 0 : halo.p9percent,
                    halo === null ? 0 : halo.p10percent
                ],
                backgroundColor: "rgba(10, 164, 255,.2)",
                borderColor: "#0aa4ff",
                borderWidth: 1
            },
            {
                label: "Minggu Lalu",
                data: [
                    hale === null ? 0 : hale.p1percent,
                    hale === null ? 0 : hale.p2percent,
                    hale === null ? 0 : hale.p3percent,
                    hale === null ? 0 : hale.p4percent,
                    hale === null ? 0 : hale.p5percent,
                    hale === null ? 0 : hale.p6percent,
                    hale === null ? 0 : hale.p7percent,
                    hale === null ? 0 : hale.p8percent,
                    hale === null ? 0 : hale.p9percent,
                    hale === null ? 0 : hale.p10percent
                ],
                backgroundColor: "rgba(239, 68, 68,.2)",
                borderColor: "#EF4444",
                borderWidth: 1
            }
        ]
    },
    options: {
        responsive: true,
    }
});

// print
function myFunction() {
    setTimeout(function () {
        var element = document.getElementById('cetak');
        let nama = localStorage.getItem('nama');
        let tanggal = localStorage.getItem('tanggal');
        html2pdf(element, {
            margin: 0.5,
            filename: `${nama}_${tanggal}.pdf`,
            image: { type: 'jpeg', quality: 1 },
            html2canvas: { scale: 2, logging: true },
            jsPDF: { unit: 'in', format: 'A3', orientation: 'P' },
            class: createPDF
        });

    }, 1000)
    document.getElementById("cetak").style.display = "block";
    document.getElementById("cetak").style.opacity = 1;
    window.setTimeout(function () { window.location.reload() }, 3000);
}

window.onload = function () {
    var reloading = localStorage.getItem("reloading");
    if (reloading) {
        localStorage.removeItem("reloading");
        myFunction();
    }
}

function createPDF() {
    localStorage.setItem("reloading", "true");
    document.location.reload();
}

// vue
var nilai = new Vue({
    el: '#nilai',
    data: {
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
})