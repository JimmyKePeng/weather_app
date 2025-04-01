document.addEventListener("DOMContentLoaded", function () {
    temp = parseFloat(temp);
    if (temp > 50) {
        document.body.style.backgroundImage = "url('/images/sunny.jpg')";
    } else {
        document.body.style.backgroundImage = "url('/images/cloudy.jpg')";
    }
});
