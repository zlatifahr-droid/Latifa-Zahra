function sapaPengunjung() {
// 1. Mengambil teks nama dari HTML (mencari elemen dengan id 'nama-siswa')
let nama = document.getElementById("nama-siswa").innerText;
// 2. Membuat kalimat sapaan
let pesan = "Halo! Terima kasih sudah mengunjungi web profil " + nama + "!";
// 3. Menampilkan pesan dalam bentuk Pop-up (Alert) di browser
alert(pesan);
}
