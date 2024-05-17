
/* eslint-disable react/prop-types */
export default function ListTodos ({todos}) {
    
    return <div className="row">
        {todos.map((todo, index) => <div key={index} className="col-12 col-md-6 col-lg-4 mb-3">
        <div className="card">
                        <div className="card-body">
                            <div className="row align-items-center">
                                <div>
                                    <div className="mb-2">
                                        <span style={{fontSize: '13px'}} href="#" className="text-capitalize mb-3">{todo.title}</span>
                                        </div>
                                    <div>
                                        <span style={{fontSize: '13px', padding: '5px', paddingRight: '15px', paddingLeft: '10px', borderRadius: '5px'}} className={`text-light ${todo.completed ? 'bg-primary' : 'bg-danger'}`}>{todo.completed ? 'completed' : 'Not completed'}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
        </div>)}
    </div>
}