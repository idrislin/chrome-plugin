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
      timeDisplayEle.innerText = "Result: " + date.toLocaleString();
    } else {
      timeDisplayEle.innerText = "Result: " + "Invalid timestamp";
    }
  });

  convertTimeButtonEle.addEventListener("click", () => {
    const inputValue = timeInputEle.value;
    const unit = document.getElementById("convert_time_select").value;
    const date = new Date(inputValue);
    if (unit === "s") {
      timestampDisplayEle.innerText =
        "Result: " + Math.floor(date.getTime() / 1000);
    } else if (unit === "ms") {
      timestampDisplayEle.innerText = "Result: " + date.getTime();
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

  console.log("create a div");
  tooltip = document.createElement("div");
  tooltip.id = "color-tooltip";
  tooltip.style.position = "absolute";
  tooltip.style.padding = "5px";
  tooltip.style.backgroundColor = "#ffffff";
  tooltip.style.border = "1px solid #000000";
  tooltip.style.borderRadius = "5px";
  //   tooltip.style.boxShadow = "0 0 5px rgba(0,0,0,0.3)";
  tooltip.style.zIndex = "10000";
  tooltip.style.pointerEvents = "none";
  tooltip.style.display = "none";
  document.body.appendChild(tooltip);
});
