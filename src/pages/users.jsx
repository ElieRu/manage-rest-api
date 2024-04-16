import { useParams } from "react-router-dom";


function Users() {

    let user = JSON.parse(useParams().user);

    return (<section className="mt-5">
                <div className="container">
                    <div className="row flex-column flex-sm-row">
                        <div className="col-12 col-sm-6 col-md-4">
                            <div className="bg-secondary-subtle border rounded border-0 shadow d-flex flex-column justify-content-center align-items-center p-2">
                                <div className="d-flex justify-content-center align-items-center" style={{width: '150px',height: '150px',marginTop: '20px',marginBottom: '20px'}}>
                                    <img className="rounded-circle border-0 shadow" style={{width: '150px',height: '150px'}} src="../src/assets/img/profile.png" />
                                    {/*  */}
                                    {/* <input type="file" id="img" style={{display: 'none'}} accept="image/*" > */}
                                    <label className="form-label bg-primary-subtle border rounded-circle border-0 shadow-sm" style={{padding: '8px',paddingTop: '4px',paddingBottom: '6px',position: 'absolute',marginTop: '100px',marginLeft: '105px'}} forHtml="img">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="1em" height="1em" fill="currentColor">
                                        <path d="M149.1 64.8L138.7 96H64C28.7 96 0 124.7 0 160V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H373.3L362.9 64.8C356.4 45.2 338.1 32 317.4 32H194.6c-20.7 0-39 13.2-45.5 32.8zM256 192a96 96 0 1 1 0 192 96 96 0 1 1 0-192z"></path></svg>
                                    </label>
                                </div>
                                <div style={{width: '90%'}}>
                                    <div className="row">
                                        <div className="col" style={{fontSize: '13px'}}>
                                            <div className="row">
                                                <div className="col"><span>Name</span></div>
                                                <div className="col text-end"><span className="text-primary">{user.name}</span></div>
                                            </div>
                                            <div className="row">
                                                <div className="col"><span>Username</span></div>
                                                <div className="col text-end"><span className="text-primary">{user.username}</span></div>
                                            </div>
                                            <div className="row">
                                                <div className="col"><span>Email</span></div>
                                                <div className="col text-end"><span className="text-primary">{user.email}</span></div>
                                            </div>
                                            <div className="row">
                                                <div className="col"><span>Phone</span></div>
                                                <div className="col text-end"><span className="text-primary">{user.phone}</span></div>
                                            </div>
                                            <div className="row">
                                                <div className="col"><span>Website</span></div>
                                                <div className="col text-end"><span className="text-primary">{user.website}</span></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {user.address ? <div className="d-flex flex-column" style={{fontSize: '13px',marginTop: '15px',width: '90%'}}>
                                    <span className="text-primary-emphasis">Adresse&nbsp;</span>
                                    <span className="text-primary">{}</span>
                                </div> : null}
                                {user.company ? <div className="d-flex flex-column" style={{marginTop: '15px',width: '90%',marginBottom: '15px',fontSize: '13px'}}>
                                    <span className="text-primary-emphasis">Company&nbsp;</span>
                                    <span className="text-primary" style={{color: '#717171'}}>bin</span>
                                </div> : null}
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-md-8">
                            <div className="border rounded p-2"></div>
                        </div>
                    </div>
                </div>
            </section>
        );
}

export default Users;
