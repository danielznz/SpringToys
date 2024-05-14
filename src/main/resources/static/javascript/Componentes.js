VerificarComponentes();

function VerificarComponentes() {

	var Navs = document.getElementsByClassName('navComponents');
	var Footer = document.getElementsByClassName('footerComponents');
	var Navshtml = document.getElementsByClassName('navComponentshtml');
	var Footerhtml = document.getElementsByClassName('footerComponentshtml');
	var Navsjsp = document.getElementsByClassName('navComponentsjsp');
	var Footerjsp = document.getElementsByClassName('footerComponentsjsp');

	if (Navs) {
		CriarNav(Navs);
	}
	if (Navshtml) {
		CriarNavhtml(Navshtml);
	}
	if (Navsjsp) {
		CriarNavjsp(Navsjsp);
	}
	if (Footer) {
		CriarFooter(Footer);
	}
	if (Footerhtml) {
		CriarFooterhtml(Footerhtml);
	}
	if (Footerjsp) {
		CriarFooterjsp(Footerjsp);
	}
}

function CriarNav(Navs) {
	for (const n of Navs) {
		var nav = ` <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container">
            <a class="navbar-brand" href="./index.html">
                <img src="imgs/logo.png" alt="Logo SpringToys" class="logo">
                SpringToys
            </a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ml-auto"> <!-- Adicionei a classe ml-auto para mover os links para a direita -->
                    <li class="nav-item active">
                        <a class="nav-link" href="#">Home</a>
                    </li>

                    <li class="nav-item">
                        <a class="nav-link" href="html/catalogo.html">Catálogo de Brinquedos</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="html/login.html">Administração</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="html/equipe.html">Sobre a Equipe</a>
                    </li>
                    <li class="nav-item"style="margin-left:5px">
                        <button class="btn btn-light" onclick="toggleTheme()" ><img src="./imgs/clima.png" alt="" width="25px" width="20px"> </button>
                    </li>
                </ul>
            </div>
        </div>
    </nav>`;
		// console.log(nav); stop;

		n.innerHTML = nav;
	}
}

function CriarNavhtml(Navshtml) {
	for (const n of Navshtml) {
		var navhtml = ` <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container">
            <a class="navbar-brand" href="../index.html">
                <img src="../imgs/logo.png" alt="Logo SpringToys" class="logo">
                SpringToys
            </a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ml-auto"> <!-- Adicionei a classe ml-auto para mover os links para a direita -->
                    <li class="nav-item active">
                        <a class="nav-link" href="../index.html">Home</a>
                    </li>

                    <li class="nav-item">
                        <a class="nav-link" href="catalogo.html">Catálogo de Brinquedos</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="login.html">Administração</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="equipe.html">Sobre a Equipe</a>
                    </li>
                   	<li class="nav-item"style="margin-left:5px">
                        <button class="btn btn-light" onclick="toggleTheme()" ><img src="../imgs/clima.png" alt="" width="25px" width="20px"> </button>
                    </li>
                </ul>
            </div>
        </div>
    </nav>`;
		// console.log(nav); stop;

		n.innerHTML = navhtml;
	}
}
function CriarNavjsp(Navsjsp) {
	for (const n of Navsjsp) {
		var navjsp = ` <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container">
            <a class="navbar-brand" href="./index.html">
                <img src="./imgs/logo.png" alt="Logo SpringToys" class="logo">
                SpringToys
            </a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ml-auto"> <!-- Adicionei a classe ml-auto para mover os links para a direita -->
                    <li class="nav-item active">
                        <a class="nav-link" href="./index.html">Home</a>
                    </li>

                    <li class="nav-item">
                        <a class="nav-link" href="./html/catalogo.html">Catálogo de Brinquedos</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="./ServletBrinquedo?cmd=listar">Administração</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="./html/equipe.html">Sobre a Equipe</a>
                    </li>
                    <li class="nav-item"style="margin-left:5px">
                        <button class="btn btn-light" onclick="toggleTheme()" ><img src="./imgs/clima.png" alt="" width="25px" width="20px"> </button>
                    </li>
                </ul>
            </div>
        </div>
    </nav>`;
		// console.log(nav); stop;

		n.innerHTML = navjsp;
	}
}
function CriarFooter(Footer) {
	for (const f of Footer) {
		var footer = ` <footer class="footer">
        <div class="container">
            <div class="row">
                <div class="col-md-6">
                    <img src="imgs/logo.png" alt="Logo SpringToys" class="footer-logo">
                    <p>SpringToys é uma loja de brinquedos que oferece uma ampla variedade de produtos para crianças de todas as idades.</p>
                </div>
                <div class="col-md-6">
                    <h5>Informações de Contato</h5>
                    <ul class="contact-info">
                        <li><i class="fa fa-map-marker"></i> Endereço: Rua das Brincadeiras, 123 - Centro</li>
                        <li><i class="fa fa-phone"></i> Telefone: (11) 1234-5678</li>
                        <li><i class="fa fa-envelope"></i> Email: contato@springtoys.com</li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>`;
		// console.log(nav); stop;

		f.innerHTML = footer;
	}



}

function CriarFooterhtml(Footerhtml) {
	for (const f of Footerhtml) {
		var footerhtml = ` <footer class="footer">
        <div class="container">
            <div class="row">
                <div class="col-md-6">
                    <img src="../imgs/logo.png" alt="Logo SpringToys" class="footer-logo">
                    <p>SpringToys é uma loja de brinquedos que oferece uma ampla variedade de produtos para crianças de todas as idades.</p>
                </div>
                <div class="col-md-6">
                    <h5>Informações de Contato</h5>
                    <ul class="contact-info">
                        <li><i class="fa fa-map-marker"></i> Endereço: Rua das Brincadeiras, 123 - Centro</li>
                        <li><i class="fa fa-phone"></i> Telefone: (11) 1234-5678</li>
                        <li><i class="fa fa-envelope"></i> Email: contato@springtoys.com</li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>`;
		// console.log(nav); stop;

		f.innerHTML = footerhtml;
	}



}
function CriarFooterjsp(Footerjsp) {
	for (const f of Footerjsp) {
		var footerjsp = ` <footer class="footer">
        <div class="container">
            <div class="row">
                <div class="col-md-6">
                    <img src="./imgs/logo.png" alt="Logo SpringToys" class="footer-logo">
                    <p>SpringToys é uma loja de brinquedos que oferece uma ampla variedade de produtos para crianças de todas as idades.</p>
                </div>
                <div class="col-md-6">
                    <h5>Informações de Contato</h5>
                    <ul class="contact-info">
                        <li><i class="fa fa-map-marker"></i> Endereço: Rua das Brincadeiras, 123 - Centro</li>
                        <li><i class="fa fa-phone"></i> Telefone: (11) 1234-5678</li>
                        <li><i class="fa fa-envelope"></i> Email: contato@springtoys.com</li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>`;
		// console.log(nav); stop;

		f.innerHTML = footerjsp;
	}



}

function toggleTheme() {
	document.body.classList.toggle('dark-theme');
}
