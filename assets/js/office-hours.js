// Calculate the next Office Hours

// Change to true to show nags
var debug = false;

// Adjust to Friday at 9:30am Pacific / 12:30am Eastern
var attrs = {day: "Friday", hour: 17, minute: 30, second: 0, millisecond: 0}
var start = moment().utc().set(attrs)

// If it's already passed today, go to the next occurrence
if(start < moment()) {
  start.add({days: 7})
}

var end = start.clone().add({hour: 1})

if(debug || start < moment().utc().add(4, 'hours')) {
  document.body.classList.add('office-hours-soon')
  document.querySelectorAll('.office-hours-nag').forEach(function(el) {
    el.classList.remove('d-none')
  });
}

displayTime(document.querySelectorAll('.js-office-hours-start-time'), start.clone());
displayTime(document.querySelectorAll('.js-office-hours-end-time'), end.clone());

function displayTime(elements, time) {
  elements.forEach(function(el) {
    var format = el.dataset.format
    var value;

    if(el.dataset.hasOwnProperty('utc')) {
      time = time.utc()
    } else {
      time = time.local()
    }

    if(format == 'fromNow') {
      value = time.fromNow();
    } else {
      value = time.format(format);
    }

    el.innerHTML = value;
  });
}
