document.addEventListener("DOMContentLoaded", () => {
  let timerRunning = true;
  let intervalId;

  const timestampInputEle = document.getElementById("timestamp_input");
  const timeInputEle = document.getElementById("time_input");
  const timeDisplayEle = document.getElementById("time_display");
  const timestampDisplayEle = document.getElementById("timestamp2_display");
  const timerControllButtonEle = document.getElementById(
    "timer_controll_button"
  );
  const convertTimestampButtonEle = document.getElementById(
    "convert_timestamp_button"
  );
  const convertTimeButtonEle = document.getElementById("convert_time_button");

  timestampInputEle.value = new Date().getTime();
  timeInputEle.value = new Date().toLocaleString();

  convertTimestampButtonEle.addEventListener("click", () => {
    const inputValue = timestampInputEle.value;
    const unit = document.getElementById("convert_timestamp_select").value;
    let timestamp;
    if (unit === "s") {
      timestamp = parseInt(inputValue) * 1000;
    } else if (unit === "ms") {
      timestamp = parseInt(inputValue);
    }

    if (!isNaN(timestamp)) {
      const date = new Date(timestamp);
      timeDisplayEle.innerText = date.toLocaleString();
    } else {
      timeDisplayEle.innerText = "Invalid timestamp";
    }
  });

  convertTimeButtonEle.addEventListener("click", () => {
    const inputValue = timeInputEle.value;
    const unit = document.getElementById("convert_time_select").value;
    const date = new Date(inputValue);
    if (unit === "s") {
      timestampDisplayEle.innerText = Math.floor(date.getTime() / 1000);
    } else if (unit === "ms") {
      timestampDisplayEle.innerText = date.getTime();
    }
  });

  // Function to update the timestamp
  function updateTimestamp() {
    const timestamp = new Date().getTime();
    document.getElementById("timestamp_display").innerText = timestamp;
  }

  // Add click event listener for the timer control button
  timerControllButtonEle.addEventListener("click", () => {
    if (timerRunning) {
      clearInterval(intervalId);
      timerControllButtonEle.innerText = "start";
    } else {
      intervalId = setInterval(updateTimestamp, 1000);
      updateTimestamp();
      timerControllButtonEle.innerText = "stop";
    }
    timerRunning = !timerRunning;
  });
  updateTimestamp();
  intervalId = setInterval(updateTimestamp, 1000);
});
