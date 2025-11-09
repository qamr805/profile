async function includeHTML(selector, file) {
  const element = document.querySelector(selector);
  if (element) {
    const response = await fetch(file);
    const data = await response.text();
    element.innerHTML = data;
  }
}

document.addEventListener("DOMContentLoaded", () => {
  includeHTML("#header", "header.html");
  includeHTML("#footer", "footer.html");
});
