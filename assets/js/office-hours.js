// Calculate the next Office Hours


// Adjust to Friday at 17:00 UTC / 1pm Eastern
var attrs = {day: "Friday", hour: 17, minute: 0, second: 0, millisecond: 0}

var start = moment().utc().set(attrs)

// If it's already passed today, go to next Friday
if(start < moment().utc()) {
  start.add({days: 7})
}

end = moment(start).add({hour: 1})

if(start < moment().add(4, 'hours')) {
  document.body.classList.add('office-hours-soon')
  document.querySelectorAll('.office-hours-nag').forEach(function(el) {
    el.classList.remove('d-none')
  });
}

// Switch back to local time
start.local();
end.local();

displayTime(document.querySelectorAll('.js-office-hours-start-time'), start);
displayTime(document.querySelectorAll('.js-office-hours-end-time'), end);

function displayTime(elements, time) {
  elements.forEach(function(el) {
    var format = el.dataset.format
    var value;

    if(format == 'fromNow') {
      value = time.fromNow();
    } else {
      value = time.format(format);
    }

    el.innerHTML = value;
  });
}
