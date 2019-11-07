class Navbar {
    render() {
        const navbar = ` <img class="navbar__logo" src="./imgs/logo.png" alt="Logo" />
        <div class="group__input id='div'">
            <input id='input' class="input__search" type="search" placeholder="Search" aria-label="Search">
            <button id='botao' class="button__search"> Search </button>
        </div`

        document.getElementById('navbar').insertAdjacentHTML('beforeend', navbar)
    }
}

const novaNavbar= new Navbar()
novaNavbar.render()

