
export default function Footer () {
    return <>
            <footer className="text-center footer">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 mb-5 mb-lg-0"></div>
                        <div className="col-md-4 mb-5 mb-lg-0">
                            <h4 className="text-uppercase">My contacts</h4>
                            <ul className="list-inline">
                                <li className="list-inline-item">
                                    <a className="btn btn-outline-light text-center btn-social rounded-circle" target="_blanck" role="button" href="https://github.com/ElieRu">
                                        <i className="fa fa-github fa-fw"></i>
                                    </a>
                                </li>
                                <li className="list-inline-item">
                                    <a className="btn btn-outline-light text-center btn-social rounded-circle" target="_blanck" role="button" href="https://www.linkedin.com/in/elie-ruhamya-996826285">
                                        <i className="fa fa-linkedin fa-fw"></i>
                                    </a>
                                </li>
                                <li className="list-inline-item">
                                    <a className="btn btn-outline-light text-center btn-social rounded-circle" target="_blanck" role="button" href="mailto:ruhamyaelie3@gmail.com">
                                        <i className="fa fa-google fa-fw"></i>
                                    </a>
                                </li>
                                <li className="list-inline-item">
                                    <a className="btn btn-outline-light text-center btn-social rounded-circle" target="_blanck" role="button" href="https://twitter.com/RuhamyaElie">
                                        <i className="fa fa-twitter fa-fw"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-4"></div>
                    </div>
                </div>
            </footer>
            <div className="text-center text-white copyright py-4">
                <div className="container"><small>Copyright ©&nbsp;Ruhanya Elie 2024</small></div>
            </div>
    </>
}

