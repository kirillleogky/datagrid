export default function handleSticky() {
  const header = document.getElementById("table_title");
  const sticky = header.offsetTop;
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}
