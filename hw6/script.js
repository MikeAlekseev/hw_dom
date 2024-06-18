const url1 = "/data.json";

async function fetchData(url1) {
  try {
    const responce = await fetch(url1);
    const data = await responce.json();
    return data;
  } catch (error) {
    console.log(error.message);
  }
}

document.addEventListener("DOMContentLoaded", async () => {
  const data = await fetchData(url1);
  const containerEl = document.querySelector(".container");

  data.forEach((el) => {
    containerEl.insertAdjacentHTML(
      "beforeend",
      `
        <article class = "card">
            <img class="card-img" src="${el.img}" alt="${el.title}">
            <div class="card-info">
                <h2 class="card-title">${el.title}</h2>
                <p class="card-text">${el.text}</p>
                <p class="card-price">${el.price}</p>
            </div>
        </article>
        `
    );
  });
});
