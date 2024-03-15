// script.js


// Helps load the Current Date and Time Settings
const localeSettings = {};
dayjs.locale(localeSettings);

// Uses dayjs library to find the time

$(function () {
  const hoursNow = dayjs().format('H');

// Function that will change the background color of the tiles

// Problem with colors might be here or classmanager function
  function changeColor() {
    $('.time-block').each(function() {
      const tileHours = parseInt(this.id); 
      console.log(dayjs("id", tileHours));
      $(this).toggleClass('past', tileHours < hoursNow);
      $(this).toggleClass('present', tileHours === hoursNow);
      $(this).toggleClass('future', tileHours > hoursNow);
    });
   
  }

  // Funcation that saves user input "onclick"
  function textEntry() {
    $('.saveBtn').on('click', function() {
      const key = $(this).parent().attr('id');
      const value = $(this).siblings('.description').val();
      localStorage.setItem(key, value);
    });
  }

 // Function that adds the corresponding tile colors with the time

 // Problem with colors might be here or changecolor function
  function classManager() {
    $('.time-block').each(function() {
      const tileHours = parseInt(this.id);
      if (tileHours == hoursNow) {
        $(this).removeClass('past future').addClass('present');
      } else if (tileHours < hoursNow) {
        $(this).removeClass('future present').addClass('past');
      } else {
        $(this).removeClass('past present').addClass('future');
      }
    });
  }
  
  // Gets localstorage and sets the text vaules
  $('.time-block').each(function() {
    const key = $(this).attr('id');
    const value = localStorage.getItem(key);
    $(this).children('.description').val(value);
  });


  // Function that updates the time with the actual time
  function updateTime() {
    const dateEl = $('#date');
    const timeEl = $('#time');
    const dateNow = dayjs().format('dddd, MM/DD/YYYY');
    const timeNow = dayjs().format('hh:mm:ss A');
    dateEl.text(dateNow);
    timeEl.text(timeNow);
  }

  
  changeColor();
  textEntry();                
  classManager();


  setInterval(updateTime, 1000);

});