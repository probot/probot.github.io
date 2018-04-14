// Calculate the next Office Hours

// Change to true to show nags
var debug = false;

// Adjust to Thursday at 17:00 UTC / 1pm EDT
var attrs = {day: "Thursday", hour: 17, minute: 0, second: 0, millisecond: 0}

var start = moment().utc().set(attrs)

// If it's already passed today, go to the next occurrence
if(start < moment()) {
  start.add({days: 7})
}

var end = moment(start).add({hour: 1})

if(debug || start < moment().utc().add(4, 'hours')) {
  document.body.classList.add('office-hours-soon')
  document.querySelectorAll('.office-hours-nag').forEach(function(el) {
    el.classList.remove('d-none')
  });
}

displayTime(document.querySelectorAll('.js-office-hours-start-time'), start);
displayTime(document.querySelectorAll('.js-office-hours-end-time'), end);

function displayTime(elements, time) {
  elements.forEach(function(el) {
    var format = el.dataset.format
    var value;

    if(format == 'fromNow') {
      value = time.local().fromNow();
    } else {
      value = time.local().format(format);
    }

    el.innerHTML = value;
  });
}
