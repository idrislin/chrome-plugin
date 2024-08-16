let tooltip;
let canvas;
let ctx;

document.addEventListener("DOMContentLoaded", () => {
  // Create a div element for the tooltip
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

  // Create canvas for screenshot processing
  //   canvas = document.createElement("canvas");
  //   ctx = canvas.getContext("2d");

  // Update tooltip position and color
  document.addEventListener("mousemove", (event) => {
    const x = event.clientX;
    const y = event.clientY;

    // Set tooltip position
    tooltip.style.left = `${x + 15}px`;
    tooltip.style.top = `${y + 15}px`;

    chrome.runtime.sendMessage({ action: "capture" }, (response) => {
      if (response && response.screenshotUrl) {
        console.log(response);
        //     const image = new Image();
        //     image.onload = () => {
        //       canvas.width = image.width;
        //       canvas.height = image.height;
        //       //   ctx.drawImage(image, 0, 0);
        //       // Get the pixel data
        //       const pixel = ctx.getImageData(x, y, 1, 1).data;
        //       // Construct the RGB color
        //       const color = `rgb(${pixel[0]}, ${pixel[1]}, ${pixel[2]})`;
        //       // Update the tooltip content and display
        //       tooltip.innerText = color;
        //       tooltip.style.backgroundColor = color;
        //       tooltip.style.display = "block";
        //     };
        //     image.src = response.screenshotUrl;
      }
    });
  });

  // Hide tooltip when mouse leaves the window
  document.addEventListener("mouseleave", () => {
    tooltip.style.display = "none";
  });
});
