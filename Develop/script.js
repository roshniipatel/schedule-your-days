// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
// $(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
// });


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
      var currentDate = now.format('[Current Date & Time:] MMM DD, YYYY [ at ] hh:mm:ss a'); 
      $("#currentDay").text(currentDate);

      // Loop through each time slot and compare its time with the current time
      $(".time-block").each(function () {
        var time = dayjs($(this).attr("id"), "hA"); 
        var hour = parseInt($(this).attr('id').split('-')[1]);
        
        // console.log(typeof (hour));
              
        if (time.isBefore(now, "hour")) { 
          $(this).addClass("past");
        } else if (time.isSame(now, "hour")) { 
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



