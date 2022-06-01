const theme = () => {
    const checkbox = document.querySelector("#light-dark").checked;
    const body = document.querySelector("body");
    console.log(checkbox);
    if (checkbox) {
      //  this is cool state
      // body.style.backgroundColor = "black";
      // body.classList.toggle("dark");
      body.classList.add("dark");
      body.classList.remove("light");
    } else {
      //  this is not so cool state
      // body.style.backgroundColor = "white";
      // body.classList.toggle("light");
      body.classList.add("light");
      body.classList.remove("dark");
    }
  }