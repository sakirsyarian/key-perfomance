var halo = JSON.parse(window.localStorage.getItem('group1'));
var hale = JSON.parse(window.localStorage.getItem('group2'));
const ctx = document.getElementById("planet-chart");
const planetChartData = new Chart(ctx, {
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