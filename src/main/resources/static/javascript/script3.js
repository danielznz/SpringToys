
document.getElementById("comprar").addEventListener("click", function(event) {
	event.preventDefault();

	Swal.fire({
		icon: "success",
		title: "Brinquedo adicionado ao carrinho.",
		backdrop: `
    rgba(0,0,123,0.4)
    url("./imgs/b7a.gif")
    left top
    no-repeat
  `
	});
});