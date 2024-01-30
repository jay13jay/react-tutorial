function Navigate() {
    return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <a class="navbar-brand" href="/">jTODO</a>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
                <a class="nav-item nav-link active" href="/">Home <span class="sr-only"></span></a>
                <a class="nav-item nav-link" href="/">About</a>

                <div class="dropdown">
                    <a class="btn btn-secondary dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Dropdown link
                    </a>

                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="/">Action</a></li>
                        <li><a class="dropdown-item" href="/">Another action</a></li>
                        <li><a class="dropdown-item" href="/">Something else here</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </nav>
    );
}


export default Navigate;