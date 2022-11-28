
const nav = (command = "open") => {
    document.querySelector(".nav").style.width = command == "open" ? "100%" : "0%";
    return null;
}

const copyright = () => {
    document.querySelector(".footer").innerHTML = "<p>&copy; - " + new Date().getFullYear() + " By LFC </p>";
}
copyright();
