/* eslint-disable react/prop-types */

export default function ListComments ({comments}) {
    return <>
        {comments.map(comment => (
            <div key={comment.id} className="card mb-3">
                <div className="card-body">
                    <div className="text-body-tertiary d-flex justify-content-between text-capitalize" style={{fontSize: '13px'}}>
                        <span>{comment.name}</span><span>{comment.email}</span></div>
                    <p className="card-text text-capitalize">{comment.body}.</p>
                    </div>
            </div>))}
        </>
}