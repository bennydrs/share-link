const row = document.getElementById("row")

data.map((item) => {
  row.innerHTML += `<a href=${item.url} target="_blank">
  <div class="card">
    <div class="card-image">
      <img src=${item.image} alt=${item.name}>
    </div>
    <div class="card-body">
      <h2>${item.name}</h2>
      <p>${item.url}</p>
    </div>
  </div>
</a>`
})
