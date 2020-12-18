// var countdownglobal;
// function timerotp() {
//      const countdown = () => {
//         let timer = document.getElementById("timer");
//         let dt = new Date();
//         let m = dt.getMinutes();
//         let s = dt.getSeconds();
//
//         // minutes remaining until next 10 minute mark
//         m = s ? 0 - (m % 1) : 0 - (m % 1);
//
//         // seconds remaining until next minute mark
//         if (s) {
//             s = 60 - s;
//         }
//
//         timer.textContent = `${m}:${s < 1 ? "0" + s : s} `;
//     };
//
//
//     countdownglobal = setInterval(countdown, 1000);
//
// }
//
// function stoptimer() {
//
//     clearInterval(countdownglobal)
//
// }
