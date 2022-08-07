function changeColor(element) {

    var currentColor = element.style.backgroundColor;

    if (currentColor == "rgba(255, 255, 255, 0.8)") {

        element.style.backgroundColor = "yellow";

    }

    else {

        element.style.backgroundColor = "rgba(255, 255, 255, 0.8)";

    }

}