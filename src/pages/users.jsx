import { useParams } from "react-router-dom";
import UserDatas from "../components/users/user-datas";
import { Place } from "../components/post/json-placeholder";


function Users() {

    let userId = JSON.parse(useParams().id);

    return (<section className="mt-5">
    <div className="container">
        <div className="row flex-column flex-sm-row">
            <div className="col-12 col-sm-6 col-md-4">
                {/* <UserDatas userId={userId} /> */}
                <Place data='users' id={userId} />
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
