var countdownDate = new Date("dec 31, 2022 00:00:00").getTime()

var bodyImage = document.querySelector('.container')

var x = setInterval(function(){
    var now = new Date().getTime()
   

    var distance = countdownDate - now

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById('countdouw').innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s `

    if (distance < 0) {
        clearInterval(x)
        bodyImage.style.background = '#49cccc';
       document.getElementById('countdouw').innerHTML = 'FELIZ ANO NOVO!!'
       
    }

}, 1000)