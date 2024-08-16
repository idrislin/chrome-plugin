document.addEventListener("DOMContentLoaded", () => {
  const rInputEle = document.getElementById("random_input");
  const rButtonEle = document.getElementById("random_button");
  const rDisplayEle = document.getElementById("random_display");
  const check1Ele = document.getElementById("checkbox_1");
  const check2Ele = document.getElementById("checkbox_2");
  const check3Ele = document.getElementById("checkbox_3");

  function getRandomAlphanumericString(length) {
    const characters1 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const characters2 = "abcdefghijklmnopqrstuvwxyz";
    const characters3 = "0123456789";
    let characters = "";
    console.log(check1Ele.checked);
    if (check1Ele.checked) {
      characters += characters1;
    }
    if (check2Ele.checked) {
      characters += characters2;
    }
    if (check3Ele.checked) {
      characters += characters3;
    }

    let result = "";
    const charactersLength = characters.length;

    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result;
  }

  rButtonEle.addEventListener("click", () => {
    const randomString = getRandomAlphanumericString(rInputEle.value);
    rDisplayEle.innerText = "Result: " + randomString;
  });
});
