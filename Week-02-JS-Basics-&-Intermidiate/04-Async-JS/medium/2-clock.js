// Using `1-counter.md` or `2-counter.md` from the easy section, can you create a
// clock that shows you the current machine time?

// Can you make it so that it updates every second, and shows time in the following formats -

//  - HH:MM::SS (Eg. 13:45:23)

//  - HH:MM::SS AM/PM (Eg 01:45:23 PM)

function showTime() {
  const now = new Date();

  // 24-hour format
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();

  // padStart for HH:MM:SS
  let hh = String(hours).padStart(2, "0");
  let mm = String(minutes).padStart(2, "0");
  let ss = String(seconds).padStart(2, "0");

  // 24-hour time
  const time24 = `${hh}:${mm}:${ss}`;

  // 12-hour format logic
  let period = hours >= 12 ? "PM" : "AM";
  let hour12 = hours % 12;
  if (hour12 === 0) hour12 = 12;

  let hh12 = String(hour12).padStart(2, "0");

  const time12 = `${hh12}:${mm}:${ss} ${period}`;

  console.log("🕒 Current Time");
  console.log("24-hour format:", time24);
  console.log("12-hour format:", time12);
  console.log("--------------------");

  // run again after 1 second
  setTimeout(showTime, 1000);
}

// start clock
showTime();