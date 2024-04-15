/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { useParams } from "react-router-dom"


function UsersList ({user}) {

    return <div className="col-12 col-md-6 mb-3">
                <div className="border rounded p-2">
                    <div className="row">
                        <div className="col-3 d-flex flex-column justify-content-center">
                            <div className="text-center bg-secondary-subtle border rounded-circle d-flex justify-content-center align-items-center" style={{width: '65px', height: '65px'}}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="1em" height="1em" fill="currentColor" className="fs-4 text-secondary">
                                <path d="M256 288A144 144 0 1 0 256 0a144 144 0 1 0 0 288zm-94.7 32C72.2 320 0 392.2 0 481.3c0 17 13.8 30.7 30.7 30.7H481.3c17 0 30.7-13.8 30.7-30.7C512 392.2 439.8 320 350.7 320H161.3z"></path>
                                </svg>
                            </div>
                        </div>
                        <div className="col-9">
                            <h4 style={{textDecoration: 'underline'}}>
                                <a href={"/users/" + user.id}>{user.name}</a>
                            </h4>
                            <div className="row">
                                <div className="col"><span className="text-body text-opacity-50">{user.username}</span></div>
                                <div className="col text-end"><span className="text-body text-opacity-50">{user.email}</span></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
}

export default UsersList

