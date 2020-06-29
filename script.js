// efek scroll
// event saat tombol navbar di klik
$(".page-scroll").on("click", function (e) {
  // ambil link href
  var tujuan = $(this).attr("href");

  // tangkap elemen yang bersangkutan
  var elemenTujuan = $(tujuan);

  $("html").animate({
      scrollTop: elemenTujuan.offset().top - 25,
    },
    1000,
    "swing"
  );

  e.preventDefault();
});
// akhir efek scroll

// button click
const tombol = document.querySelector("form .btn");

tombol.addEventListener("click", function () {
  alert("thank you!");
});
// akhir button click

// parallax
$(window).on("load", function () {
  $(".kiri").addClass("pmuncul");
  $(".kanan").addClass("pmuncul");
});

$(window).scroll(function () {
  var wScroll = $(this).scrollTop();

  // jumbotron
  $(".jumbotron img").css({
    transform: "translate(0px, " + wScroll / 1 + "%)",
  });

  $(".jumbotron h1").css({
    transform: "translate(0px, " + wScroll / 2 + "%)",
  });

  $(".jumbotron h5").css({
    transform: "translate(0px, " + wScroll + "%)",
  });

  $(".jumbotron p").css({
    transform: "translate(0px, " + wScroll + "%)",
  });
  // akhir jumbotron

  // portfolio
  if (wScroll > $(".portfolio").offset().top - 350) {
    $(".portfolio .card").each(function (i) {
      setTimeout(function () {
        $(".portfolio .card").eq(i).addClass("muncul");
      }, 300 * (i + 1));
    });
  }
  // akhir portfolio
});
