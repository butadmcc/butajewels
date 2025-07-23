
document.getElementById("searchInput").addEventListener("input", function () {
  const keyword = this.value.toLowerCase();
  const cards = document.querySelectorAll(".product-card");

  cards.forEach(card => {
    const text = card.innerText.toLowerCase();
    card.style.display = text.includes(keyword) ? "block" : "none";
  });
});

document.getElementById("sortSelect").addEventListener("change", function () {
  const cards = Array.from(document.querySelectorAll(".product-card"));
  const container = document.getElementById("productContainer");
  const sortBy = this.value;

  cards.sort((a, b) => {
    const priceA = parseFloat(a.dataset.price);
    const priceB = parseFloat(b.dataset.price);
    return sortBy === "low" ? priceA - priceB : priceB - priceA;
  });

  container.innerHTML = "";
  cards.forEach(card => container.appendChild(card));
});
