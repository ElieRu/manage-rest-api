
export default function Footer () {
    return <>
            <footer className="text-center footer">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 mb-5 mb-lg-0">
                            <h4 className="text-uppercase mb-4">Location</h4>
                            <p>2215 John Daniel Drive</p>
                            <p>Clark, MO 65243</p>
                        </div>
                        <div className="col-md-4 mb-5 mb-lg-0">
                            <h4 className="text-uppercase">Around the Web</h4>
                            <ul className="list-inline">
                                <li className="list-inline-item"><a className="btn btn-outline-light text-center btn-social rounded-circle" role="button" href="#"><i className="fa fa-facebook fa-fw"></i></a></li>
                                <li className="list-inline-item"><a className="btn btn-outline-light text-center btn-social rounded-circle" role="button" href="#"><i className="fa fa-google-plus fa-fw"></i></a></li>
                                <li className="list-inline-item"><a className="btn btn-outline-light text-center btn-social rounded-circle" role="button" href="#"><i className="fa fa-twitter fa-fw"></i></a></li>
                                <li className="list-inline-item"><a className="btn btn-outline-light text-center btn-social rounded-circle" role="button" href="#"><i className="fa fa-dribbble fa-fw"></i></a></li>
                            </ul>
                        </div>
                        <div className="col-md-4">
                            <h4 className="text-uppercase mb-4">About Freelancer</h4>
                            <p className="lead mb-0"><span>Freelance is a free to use, open source Bootstrap theme.&nbsp;</span></p>
                        </div>
                    </div>
                </div>
            </footer>
            <div className="text-center text-white copyright py-4">
                <div className="container"><small>Copyright ©&nbsp;Brand 2024</small></div>
            </div>
    </>
}

