
/* eslint-disable react/prop-types */
export default function ListTodos ({datas}) {
    
    return <div className="row">
        {datas.map((data, index) => <div key={index} className="col-12 col-md-6 col-lg-4 mb-3">
        <div className="card">
                        <div className="card-body">
                            <div className="row align-items-center">
                                <div>
                                    <div className="mb-2"><a href="#" className="text-capitalize mb-3">{data.title}</a></div>
                                    <div>
                                    <span style={{fontSize: '13px', padding: '5px', paddingRight: '15px', paddingLeft: '10px', borderRadius: '5px'}} className={`text-light ${data.completed ? 'bg-primary' : 'bg-danger'}`}>{data.completed ? 'completed' : 'Not completed'}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
        </div>)}
    </div>
}