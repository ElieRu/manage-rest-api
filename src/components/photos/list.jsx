/* eslint-disable react/prop-types */
export default function ListPhotos ({datas}) {
    return <>
    {datas.map((photo, i) => <div key={i} className="col-4 col-sm-3 col-md-2 col-lg-2 d-flex flex-column justify-content-center">
            <div style={{height: '170px'}}><a className="link-secondary">
                    <div className="border rounded" style={{height: '80%', overflow: 'hidden'}}>
                        <img width={'100%'} height={'100%'} src={photo.thumbnailUrl} />
                    </div>
                </a></div>
        </div>)}
    </>
}