function showtime() {
    let date = new Date();
    let hour = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();

    
    if (sec < 10) {
        sec = '0' + sec;
    }

    if (sec == 60) {
        sec = '0' + '0';
    }

    if (min < 10) {
        min = '0' + min;
    }

    if (min == 60) {
        min = '0' + '0';
    }

    if (hour < 10) {
        hour = '0' + hour;
    }

    if (hour == 60) {
        hour = '0' + '0';
    }


    let currentTime = hour + ':' + min + ':' + sec;

    document.getElementById("myClock").innerHTML = currentTime;

   
}
 console.log(showtime());
 setInterval(showtime, 1000);