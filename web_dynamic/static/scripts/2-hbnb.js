$(document).ready(() => {
  init();
  apiStatus();
});

const HOST = window.location.hostname;

function init() {
  const amenityObj = {};
  $(".amenities .popover input").change(function () {
    if ($(this).is(":checked")) {
      amenityObj[$(this).attr("data-name")] = $(this).attr("data-id");
    } else if ($(this).is(":not(:checked)")) {
      delete amenityObj[$(this).attr("data-name")];
    }
    const names = Object.keys(amenityObj);
    $(".amenities h4").text(names.sort().join(", "));
  });
}

function apiStatus() {
  const API_URL = `http://${HOST}:/api/v1/status/`;
  $.get(API_URL, (data, textStatus) => {
    if (textStatus === "success" && data.status === "OK") {
      $("#api_status").addClass("available");
    } else {
      $("#api_status").removeClass("available");
    }
  });
}
