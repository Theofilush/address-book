function display() {
  const data = ["Apel", "Mangga", "Jeruk"];
  const output = document.getElementById("output");

  output.innerHTML =
    "<ul>" + data.map((item) => `<li>${item}</li>`).join("") + "</ul>";
}
