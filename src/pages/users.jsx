import { useParams } from "react-router-dom";


function Users() {

    let id = JSON.parse(useParams().id);


    return (<section className="mt-5">
                <div className="container">
                    <div className="row flex-column flex-sm-row">
                        {id}
                    </div>
                </div>
            </section>
        );
}

export default Users;
