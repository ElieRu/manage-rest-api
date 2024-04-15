export default function Header () {
    return <nav className="navbar navbar-expand-lg fixed-top bg-secondary text-uppercase navbar-light" id="mainNav">
                <div className="container"><a className="navbar-brand" href="/">Brand</a><button data-bs-toggle="collapse" data-bs-target="#navbarResponsive" className="navbar-toggler text-white bg-primary navbar-toggler-right text-uppercase rounded" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><i className="fa fa-bars"></i></button>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item mx-0 mx-lg-1"><a className="nav-link py-3 px-0 px-lg-3 rounded" href="/">home</a></li>
                            <li className="nav-item mx-0 mx-lg-1"><a className="nav-link py-3 px-0 px-lg-3 rounded" href="#projects">projects</a></li>
                            <li className="nav-item mx-0 mx-lg-1"><a className="nav-link py-3 px-0 px-lg-3 rounded" href="#about">About</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
}
