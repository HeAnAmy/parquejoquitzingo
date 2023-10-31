let navbar = document.getElementById("navbar");
navbar.insertAdjacentHTML("beforeend",
        `<nav class="navbar navbar1 navbar-expand-lg ">
        <div class="container-fluid">
            <a class="navbar-brand" href="/parquejoquitzingo/index.html"><img src="../img/1.png" alt="logo" width="200px"
                    height="50px"></a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation"
                style="color: aliceblue;">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav nav-pills">
                    <li class="nav-item dropdown">
                        <a class="gg dropdown-toggle" data-bs-toggle="dropdown" role="button" aria-expanded="false"
                            href="#">¿Quienes somos?</a>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="#">Simbolos</a></li>
                            <li><a class="dropdown-item" href="#">Reservas</a></li>
                            <li><a class="dropdown-item" href="#">Comisión</a></li>
                            <li><a class="dropdown-item" href="#">Invitanos un cafe</a></li>
                            <li><a class="dropdown-item" href="#">Proceso constructivo</a></li>
                            
                        </ul>
                    </li>
                    <li class="nav-item">
                        <a class="gg" href="./automata.html">Producciones</a>
                    </li>
                    <li class="nav-item">
                        <a class="gg" href="/parquejoquitzingo/libro-de-visitas.html">Testimonios</a>
                    </li>
                    <li class="nav-item">
                        <a class="gg" href="./contacto.html">Contáctanos</a>
                    </li>
                    <li class="nav-item">
                        <a class="gg" href="#">Silo</a>
                    </li>
                    <li class="nav-item dropdown">
                    <a class="gg dropdown-toggle" data-bs-toggle="dropdown" role="button" aria-expanded="false" href="#">Actividades</a>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="#">Actividades Próximas</a></li>
                        <li><a class="dropdown-item" href="#">Actividades Recientes</a></li>
                    </ul>
                </li>
                </ul>
            </div>
        </div>
    </nav>`);
