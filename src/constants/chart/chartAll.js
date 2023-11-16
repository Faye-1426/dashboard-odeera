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
} from '../../assets/img';

export const chartAll = [
	{
		id: 1,
		img: jenisTransportasiIndonesia,
		title: 'Jenis Transportasi di Indonesia',
		sub_title:
			'Ini adalah data dari jenis transportasi yang digunakan di seluruh Indonesia',
		children: [
			{
				id: 1,
				img: jenisKendaraan,
				text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda consequatur odit officiis enim modi! Illum amet a voluptatum ipsa beatae omnis unde aliquid, facilis adipisci pariatur reprehenderit maxime iure necessitatibus, deserunt ipsum voluptate veniam soluta dolorem animi, in iusto inventore impedit consequatur culpa! Architecto ad sit consequuntur ea molestias commodi.',
			},
			{
				id: 2,
				img: jenisAngkutan2019,
				text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda consequatur odit officiis enim modi! Illum amet a voluptatum ipsa beatae omnis unde aliquid, facilis adipisci pariatur reprehenderit maxime iure necessitatibus, deserunt ipsum voluptate veniam soluta dolorem animi, in iusto inventore impedit consequatur culpa! Architecto ad sit consequuntur ea molestias commodi.',
			},
			{
				id: 3,
				img: jenisAngkutan2021,
				text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda consequatur odit officiis enim modi! Illum amet a voluptatum ipsa beatae omnis unde aliquid, facilis adipisci pariatur reprehenderit maxime iure necessitatibus, deserunt ipsum voluptate veniam soluta dolorem animi, in iusto inventore impedit consequatur culpa! Architecto ad sit consequuntur ea molestias commodi.',
			},
			{
				id: 4,
				img: presentasePenumpang,
				text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda consequatur odit officiis enim modi! Illum amet a voluptatum ipsa beatae omnis unde aliquid, facilis adipisci pariatur reprehenderit maxime iure necessitatibus, deserunt ipsum voluptate veniam soluta dolorem animi, in iusto inventore impedit consequatur culpa! Architecto ad sit consequuntur ea molestias commodi.',
			},
		],
	},
	{
		id: 2,
		img: kejahatanIndonesia,
		title: 'Kejahatan di Indonesia',
		sub_title: 'Data-data kejahatan yang terjadi di Indonesia',
		children: [
			{
				id: 1,
				img: kejahatan2019,
				text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda consequatur odit officiis enim modi! Illum amet a voluptatum ipsa beatae omnis unde aliquid, facilis adipisci pariatur reprehenderit maxime iure necessitatibus, deserunt ipsum voluptate veniam soluta dolorem animi, in iusto inventore impedit consequatur culpa! Architecto ad sit consequuntur ea molestias commodi.',
			},
			{
				id: 2,
				img: jumlahKejahatan2021,
				text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda consequatur odit officiis enim modi! Illum amet a voluptatum ipsa beatae omnis unde aliquid, facilis adipisci pariatur reprehenderit maxime iure necessitatibus, deserunt ipsum voluptate veniam soluta dolorem animi, in iusto inventore impedit consequatur culpa! Architecto ad sit consequuntur ea molestias commodi.',
			},
			{
				id: 3,
				img: jumlahKejahatan2019,
				text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda consequatur odit officiis enim modi! Illum amet a voluptatum ipsa beatae omnis unde aliquid, facilis adipisci pariatur reprehenderit maxime iure necessitatibus, deserunt ipsum voluptate veniam soluta dolorem animi, in iusto inventore impedit consequatur culpa! Architecto ad sit consequuntur ea molestias commodi.',
			},
		],
	},
	{
		id: 3,
		img: faktorProporsiAll,
		title: 'Data Pendukung',
		sub_title:
			'Ini adalah data pendukung seperti faktor-faktor dan proporsi masyarakat',
		children: [
			{
				id: 1,
				img: proporsiKorban,
				text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda consequatur odit officiis enim modi! Illum amet a voluptatum ipsa beatae omnis unde aliquid, facilis adipisci pariatur reprehenderit maxime iure necessitatibus, deserunt ipsum voluptate veniam soluta dolorem animi, in iusto inventore impedit consequatur culpa! Architecto ad sit consequuntur ea molestias commodi.',
			},
			{
				id: 2,
				img: faktorNaikAngkot,
				text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda consequatur odit officiis enim modi! Illum amet a voluptatum ipsa beatae omnis unde aliquid, facilis adipisci pariatur reprehenderit maxime iure necessitatibus, deserunt ipsum voluptate veniam soluta dolorem animi, in iusto inventore impedit consequatur culpa! Architecto ad sit consequuntur ea molestias commodi.',
			},
		],
	},
];
