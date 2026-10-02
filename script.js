/* =========================
   BUKA UNDANGAN
========================= */

function openInvitation() {

    const cover = document.getElementById("cover");
    const invitation = document.getElementById("invitation");

    cover.style.transition = "opacity 0.8s ease";
    cover.style.opacity = "0";

    setTimeout(function () {

        cover.style.display = "none";

        invitation.style.display = "block";

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }, 800);
}


/* =========================
   COUNTDOWN
========================= */

/*
   Tanggal acara:
   18 Oktober 2026
   Jam 07:00 Pagi WIB
*/

const eventDate = new Date(
    "October 18, 2026 07:00:00 GMT+0700"
).getTime();


const countdown = setInterval(function () {

    const now = new Date().getTime();

    const distance = eventDate - now;


    if (distance < 0) {

        clearInterval(countdown);

        document.getElementById("days").innerHTML = "00";
        document.getElementById("hours").innerHTML = "00";
        document.getElementById("minutes").innerHTML = "00";
        document.getElementById("seconds").innerHTML = "00";

        return;
    }


    const days = Math.floor(
        distance / (1000 * 60 * 60 * 24)
    );

    const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24))
        / (1000 * 60 * 60)
    );

    const minutes = Math.floor(
        (distance % (1000 * 60 * 60))
        / (1000 * 60)
    );

    const seconds = Math.floor(
        (distance % (1000 * 60))
        / 1000
    );


    document.getElementById("days").innerHTML =
        String(days).padStart(2, "0");

    document.getElementById("hours").innerHTML =
        String(hours).padStart(2, "0");

    document.getElementById("minutes").innerHTML =
        String(minutes).padStart(2, "0");

    document.getElementById("seconds").innerHTML =
        String(seconds).padStart(2, "0");

}, 1000);