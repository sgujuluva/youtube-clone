const theme = () => {
    const checkbox = document.querySelector("#light-dark").checked;
    const body = document.querySelector("body");
    const aside = document.querySelector(".aside-bar");
    const linkAside = document.querySelectorAll(".aside-bar ul li a");
   
    const footer = document.querySelectorAll("footer p a");
   //checkbox
    if (checkbox) {
      body.classList.add("dark");
      body.classList.remove("light");
      aside.classList.add("dark");
      aside.classList.remove("light");
      linkAside.forEach(item => {
       item.classList.add("dark");
      item.classList.remove("light");
      });
     footer.forEach(item => {
        item.classList.add("dark");
       item.classList.remove("light");
       });
    } else {
      body.classList.add("light");
      body.classList.remove("dark");
      aside.classList.add("light");
      aside.classList.remove("dark");
      linkAside.forEach(item => {
        item.classList.add("light");
       item.classList.remove("dark");
       });
       footer.forEach(item => {
        item.classList.add("light");
       item.classList.remove("dark");
       });
    }

  }