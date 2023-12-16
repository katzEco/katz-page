document.querySelector("#link-create").onclick = (e) => {
  e.preventDefault();

  let inpValue = document.querySelector("#repo-link").value;

  if (inpValue != undefined || inpValue != "") {
    const split = inpValue.replace("https://github.com/", "").split("/");
    let link = `https://${split[0]}.github.io/${split[1]}`;

    document.querySelector("#input").classList.remove("display");
    document.querySelector("#input").classList.add("hidden");

    document.querySelector("#response").classList.remove("hidden");
    document.querySelector("#response").classList.add("display");

    document.querySelector("#result").setAttribute("href", link);
    document.querySelector("#result-link").innerHTML = link;
  }
};

document.querySelector("#return").onclick = (e) => {
  e.preventDefault();

  document.querySelector("#input").classList.add("display");
  document.querySelector("#input").classList.remove("hidden");

  document.querySelector("#response").classList.add("hidden");
  document.querySelector("#response").classList.remove("display");
};
