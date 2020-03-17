export default function copyToClipboard(event) {
  const name = event.currentTarget.querySelector(".name_elem").innerHTML;
  const job = event.currentTarget.querySelector(".job_elem").innerHTML;
  const city = event.currentTarget.querySelector(".city_elem").innerHTML;
  const country = event.currentTarget.querySelector(".country_elem").innerHTML;
  const latitude = event.currentTarget.querySelector(".latitude_elem")
    .innerHTML;
  const longitude = event.currentTarget.querySelector(".longitude_elem")
    .innerHTML;
  const date = event.currentTarget.querySelector(".date_elem").innerHTML;

  const tmp = document.createElement("INPUT");
  tmp.value = `${name}, ${job}, ${city}, ${country}, ${latitude}, ${longitude}, ${date}`;
  document.body.appendChild(tmp);
  tmp.select();
  document.execCommand("copy");
  document.body.removeChild(tmp);
  event.currentTarget.focus();
}
