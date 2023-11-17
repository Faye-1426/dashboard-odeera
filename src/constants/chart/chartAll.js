import {
  jenisAngkutan2019,
  jenisAngkutan2021,
  proporsiKorban,
  faktorProporsiAll,
  faktorNaikAngkot,
  jenisKendaraan,
  jenisTransportasiIndonesia,
  jumlahKejahatan2019,
  jumlahKejahatan2021,
  kejahatan2019,
  kejahatanIndonesia,
  presentasePenumpang,
} from "../../assets/img";

export const chartAll = [
  {
    id: 1,
    img: jenisTransportasiIndonesia,
    title: "Jenis Transportasi di Indonesia",
    sub_title:
      "Ini adalah data dari jenis transportasi yang digunakan di seluruh Indonesia",
    children: [
      {
        id: 1,
        img: jenisKendaraan,
        text: "Transportasi umum menjadi opsi terbanyak masyarakat dalam menunjang produktifitas setelah kendaraan pribadi. Artinya, masyarakat lebih antusias menggunakan transportasi umum dibanding dengan transportasi daring dan jalan kaki",
      },
      {
        id: 2,
        img: jenisAngkutan2019,
        text: "BRT menjadi angkutan umum yang sering digunakan pada tahun 2019. Angkutan Umum Integrasi menempati urutan ketiga setelah BRT dan Angkutan Integrasi Bus Kecil",
      },
      {
        id: 3,
        img: jenisAngkutan2021,
        text: "Pada tahun 2021 BRT masih mendominasi minat masyarakat dalam penggunaan angkutan umum. Tahun 2020 masyarakat mengurangi penggunaan transportasi, dikarenakan masa pandemi yang berdampak pada menurunnya angka penggunaan transportasi di Indonesia",
      },
      {
        id: 4,
        img: presentasePenumpang,
        text: "Tahun 2019 menjadi tahun dengan jumlah persentase penumpang paling tinggi dalam kurun waktu 2017-2021. Jika dilihat, pada tahun 2020-2021 minat masyarakat dalam menggunakan transportasi umum menurun drastis akibat dampak dari pandemi",
      },
    ],
  },
  {
    id: 2,
    img: kejahatanIndonesia,
    title: "Kejahatan di Indonesia",
    sub_title: "Data-data kejahatan yang terjadi di Indonesia",
    children: [
      {
        id: 1,
        img: kejahatan2019,
        text: "Kejahatan di Indonesia mengalami penurunan yang cukup signifikan dari tahun 2019-2021. Tahun 2019 menempati tahun tertinggi rentang kejahatan di Indonesia selama 2019-2021",
      },
      {
        id: 2,
        img: jumlahKejahatan2019,
        text: "Provinsi Sumatera Utara menjadi provinsi dengan jumlah kejahatan tertinggi selama tahun 2019-2022. Sebaliknya, Provinsi Lampung menjadi provinsi dengan jumlah kejahatan terendah dengan persentase 9,149%",
      },
      {
        id: 3,
        img: jumlahKejahatan2021,
        text: "Pada tahun 2021 Sumatera Utara menjadi provinsi dengan ratio kejahatan tertinggi di Indonesia. Disusul DKI Jakarta dengan presentase 29.103%",
      },
    ],
  },
  {
    id: 3,
    img: faktorProporsiAll,
    title: "Data Pendukung",
    sub_title:
      "Ini adalah data pendukung seperti faktor-faktor dan proporsi masyarakat",
    children: [
      {
        id: 1,
        img: proporsiKorban,
        text: "Dengan terjangkaunya biaya operasional, masyarakat menjadi lebih nyaman untuk menggunakan transportasi umum. Biaya yang terjangkau menjadi salah satu faktor penyebab masyarakat lebih nyaman menggunakan tranportasi umum dibanding dengan menggunakan kendaraan pribadi dan tranportasi daring",
      },
      {
        id: 2,
        img: faktorNaikAngkot,
        text: "Jika dilihat, Laki-laki menjadi jenis kelamin yang paling dominan sebagai korban kejahatan di tahun 2019. Mengalahkan jumlah persentase Perempuan. Artinya, para pelaku tindak kejahatan tidak memandang gender dari para calon korbannya. Pada tahun 2021 korban kejahatan yang berjenis kelamin laki-laki mengalami penurunan yaitu, dari 0,07% ke 0,03% yang setara dengan presentase perempuan",
      },
    ],
  },
];
