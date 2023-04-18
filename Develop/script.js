$(document).ready(function () {

  var hour9 = $('#09').find(".description");
  var hour10 = $('#10').find(".description");
  var hour11 = $('#11').find(".description");
  var hour12 = $('#12').find(".description");
  var hour13 = $('#13').find(".description");
  var hour14 = $('#14').find(".description");
  var hour15 = $('#15').find(".description");
  var hour16 = $('#16').find(".description");
  var hour17 = $("#17").find(".description");

  // so that it saves the data and doesn't go away when loaded
  hour9.val(localStorage.getItem("9:00AM"));
  hour10.val(localStorage.getItem("10:00AM"));
  hour11.val(localStorage.getItem("11:00AM"));
  hour12.val(localStorage.getItem("12:00PM"));
  hour13.val(localStorage.getItem("1:00PM"));
  hour14.val(localStorage.getItem("2:00PM"));
  hour15.val(localStorage.getItem("3:00PM"));
  hour16.val(localStorage.getItem("4:00PM"));
  hour17.val(localStorage.getItem("5:00PM"));

  $(function () {

    $(".saveBtn").click(function () {

      localStorage.setItem("9:00AM", hour9.val());
      localStorage.setItem("10:00AM", hour10.val());
      localStorage.setItem("11:00AM", hour11.val());
      localStorage.setItem("12:00PM", hour12.val());
      localStorage.setItem("1:00PM", hour13.val());
      localStorage.setItem("2:00PM", hour14.val());
      localStorage.setItem("3:00PM", hour15.val());
      localStorage.setItem("4:00PM", hour16.val());
      localStorage.setItem("5:00PM", hour17.val());
    });

    function updateTime() {
      var now = dayjs();
      var date = now.format('[Current Date & Time:] MMM DD, YYYY [ at ] hh:mm:ss a');
      $("#currentDay").text(date);

      $(".time-block").each(function () {
        var time = dayjs($(this).attr("id"), "hA");
        var hour = parseInt($(this).attr('id').split('-')[1]);

        localStorage.setItem(time, hour);
        
        if (time.hour() < now.hour()) {
          $(this).addClass("past");
        } else if (time.hour() === now.hour()) {
          $(this).addClass("present");
        } else {
          $(this).addClass("future");
        }

      });
    }

    updateTime();
    setInterval(updateTime, 1000); // Call updateTime() every second

  });

});

