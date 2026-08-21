const button = document.getElementById("show-log-button");
const latestLog = document.getElementById("latest-log");

button.addEventListener("click", function () {
    latestLog.classList.toggle("hidden");
});