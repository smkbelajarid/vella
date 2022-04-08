$(document).ready(function () {
  $("#vella").hide();

  // jika button cover di klik
  $("#btn-cover").click(function () {
    $("#vella").show();
    $("#cover").hide();
  });

  $("#btn-pernikahan").css("background-color", "#ff6565");
  $("#btn-pernikahan").css("color", "white");
  $("#maps-resepsi").hide();

  // jika button resepsi di klik
  $("#btn-resepsi").click(function () {
    $("#btn-resepsi").css("background-color", "#ff6565");
    $("#btn-resepsi").css("color", "white");
    $("#btn-pernikahan").css("background-color", "transparent");
    $("#btn-pernikahan").css("color", "black");
    $("#maps-resepsi").show();
    $("#maps-pernikahan").hide();
  });

  // jika button tulis di klik
  $("#btn-pernikahan").click(function () {
    $("#btn-pernikahan").css("background-color", "#ff6565");
    $("#btn-pernikahan").css("color", "white");
    $("#btn-resepsi").css("background-color", "transparent");
    $("#btn-resepsi").css("color", "black");
    $("#maps-pernikahan").show();
    $("#maps-resepsi").hide();
  });
});

// ==================== maps pernikahan =====================
var platform = new H.service.Platform({
  app_id: "Qj0Oi2FClG9rVKn1iErQ",
  app_code: "lnY9R1x-_rJF4GBaxSEJzA",
  useCIT: true,
  useHTTPS: true,
});
var defaultLayers = platform.createDefaultLayers();
var maptypes = platform.createDefaultLayers();
var map = new H.Map(document.getElementById("maps-container-pernikahan"), maptypes.normal.map, {
  zoom: 14,
  center: {
    lng: 115.244156,
    lat: -8.644065,
  },
});
var icon = new H.map.Icon("https://www.weddingku.id/wp-content/themes/weddingku/images/webassets/map-marker.png");
var marker = new H.map.Marker(
  {
    lat: -8.644065,
    lng: 115.244156,
  },
  {
    icon: icon,
  }
);
map.addObject(marker);
var ui = H.ui.UI.createDefault(map, defaultLayers);

// ==================== maps resepsi =====================
var platform = new H.service.Platform({
  app_id: "Qj0Oi2FClG9rVKn1iErQ",
  app_code: "lnY9R1x-_rJF4GBaxSEJzA",
  useCIT: true,
  useHTTPS: true,
});
var defaultLayers = platform.createDefaultLayers();
var maptypes = platform.createDefaultLayers();
var map = new H.Map(document.getElementById("maps-container-resepsi"), maptypes.normal.map, {
  zoom: 14,
  center: {
    lng: 115.241769,
    lat: -8.636873,
  },
});
var icon = new H.map.Icon("https://www.weddingku.id/wp-content/themes/weddingku/images/webassets/map-marker.png");
var marker = new H.map.Marker(
  {
    lat: -8.636873,
    lng: 115.241769,
  },
  {
    icon: icon,
  }
);
map.addObject(marker);
var ui = H.ui.UI.createDefault(map, defaultLayers);

// ==================== waktu =====================
var dateTimeEvent = "Apr 28, 2025 09:00:00";

var countDownDate = new Date(dateTimeEvent).getTime();

const clock = document.getElementById("waktu-container");
const daysSpan = clock.querySelector(".hari");
const hoursSpan = clock.querySelector(".jam");
const minutesSpan = clock.querySelector(".menit");
const secondsSpan = clock.querySelector(".detik");

var x = setInterval(function () {
  var now = new Date().getTime();
  var distance = countDownDate - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  if (distance < 0) {
    clearInterval(x);
    daysSpan.innerHTML = 0;
    hoursSpan.innerHTML = 0;
    minutesSpan.innerHTML = 0;
    secondsSpan.innerHTML = 0;
  } else {
    daysSpan.innerHTML = days;
    hoursSpan.innerHTML = hours;
    minutesSpan.innerHTML = minutes;
    secondsSpan.innerHTML = seconds;
  }
}, 1000);
