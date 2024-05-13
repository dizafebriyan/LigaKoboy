document.addEventListener("DOMContentLoaded", function() {
  var audio = document.getElementById("myAudio");

  // Cek apakah jendela konfirmasi sudah ditampilkan sebelumnya
  var confirmationShown = localStorage.getItem("confirmationShown");

  if (!confirmationShown) {
    var playConfirmed = window.confirm("This website will play music automatically. Are you sure you want to continue?");
    if (playConfirmed) {
      // Simpan status bahwa jendela konfirmasi sudah ditampilkan
      localStorage.setItem("confirmationShown", true);
      // Mulai pemutaran audio
      audio.play();
    } else {
      // Stop pemutaran audio jika pengguna tidak setuju
      audio.pause();
    }
  } else {
    // Jika jendela konfirmasi sudah ditampilkan sebelumnya, lanjutkan pemutaran audio
    audio.play();
  }
});