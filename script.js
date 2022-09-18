const date = new Date();
const months = [
	"January",
	"February",
	"March",
	"April",
	"May",
	"June",
	"July",
	"August",
	"September",
	"October",
	"November",
	"December",
];

document.querySelector('.date #month').innerHTML
=months[date.getMonth()];
document.querySelector('.date #day').innerHTML
=date.getDate();;
document.querySelector('.date #year').innerHTML
=date.getFullYear();;
document.querySelector('.hour #hour').innerHTML
=date.getHours();;
document.querySelector('.hour #minute').innerHTML
=date.getMinutes();
document.querySelector('.hour #second').innerHTML
=date.getSeconds();


console.log(date);