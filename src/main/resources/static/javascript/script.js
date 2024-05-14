function confirmarExclusao(codBrinquedo) {
	this.codBrinquedoexc = codBrinquedo;
	const swalWithBootstrapButtons = Swal.mixin({
		customClass: {
			confirmButton: "btn btn-success",
			cancelButton: "btn btn-danger"
		},
		buttonsStyling: false
	});
	swalWithBootstrapButtons.fire({
		title: "você quer deletar este brinquedo?",
		icon: "warning",
		showCancelButton: true,
		confirmButtonText: "Sim, deletar!",
		cancelButtonText: "Não, cancelar!",
		reverseButtons: true
	}).then((result) => {
		if (result.isConfirmed) {
			swalWithBootstrapButtons.fire({
				title: "Deletado!",
				text: "Brinquedo deletedo.",
				icon: "success"
			});
			window.location.href = "./ServletBrinquedo?cmd=excluir&txtcodBrinquedo=" + this.codBrinquedoexc;
		} else if (
			/* Read more about handling dismissals below */
			result.dismiss === Swal.DismissReason.cancel
		) {
			swalWithBootstrapButtons.fire({
				title: "Cancelado",
				text: "Brinquedo não deletedo :)",
				icon: "error"
			});
			window.location.href = "./ServletBrinquedo?cmd=listar";
		}
	});

}

