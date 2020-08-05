
const weddingDate = new Date("Jun 20, 2020 17:30:00").getTime();
console.log(weddingDate);

const x = setInterval(function() {

	const currentTime = new Date().getTime();

	const timeSinceMarried = (currentTime - weddingDate);

  const milisecondsInAYear = (1000*60*60*24*365);

  const timeToAnniversary = milisecondsInAYear - timeSinceMarried;

  const yearsMarried = 1;

  //Take displayNumber in miliseconds and convert to days 
	var days = Math.floor(timeToAnniversary / (1000 * 60 * 60 * 24));
  var hours = Math.floor((timeToAnniversary % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((timeToAnniversary % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((timeToAnniversary % (1000 * 60)) / 1000);


  /*
  console.log('days = '  + days)
  console.log('hours = ' + hours)
  console.log('minutes = ' + minutes)
  console.log('seconds = ' + seconds)
  */

  document.getElementById("title").innerHTML = 
  'Claire and Seth\'s ' + yearsMarried + 'st anniversary is in ';

  document.getElementById("date").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

}, 1000);



