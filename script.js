let display = document.getElementById("display");
let buttons = document.querySelectorAll("button");

for (let i = 0; i < buttons.length; i++) {

    buttons[i].addEventListener("click", function () {

        let value = this.innerText;

        if (value === "C") {
            display.value = "";
        }

        else if (value === "=") {
            try {
                display.value = eval(display.value);
            } catch {
                display.value = "Error";
            }
        }

        else {
            display.value += value;
        }

    });

}
