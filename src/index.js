const init = () => {
  const form = document.querySelector("form");
 
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    
    const input = document.getElementById("searchByID");
    
    fetch(`http://localhost:3000/movies/${input.value}`)
      .then((resp) => resp.json())
      .then((data) => {
        const title = document.querySelector("#movieDetails h4");
        const summary = document.querySelector("#movieDetails p");

        if(data.id) {
          title.textContent = data.title;
          summary.textContent = data.summary;         
        } else {
          console.log("Movie Not Found")
        }
    })
  })
}

document.addEventListener('DOMContentLoaded', init);