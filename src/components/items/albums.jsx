/* eslint-disable react/prop-types */
export default function ListAlbums ({datas}) {
    console.log('gg');
    return <>
        {datas.map((album, i) => <div key={i} className="col-4 col-sm-3 col-md-2 col-lg-2 d-flex flex-column justify-content-center">
                <div style={{height: '170px'}}><a className="link-secondary" style={{textDecoration: 'none'}} href={`/user/albums/photos/${album.id}`}>
                        <div className="bg-body-tertiary border rounded d-flex justify-content-center align-items-center" style={{height: '80%'}}>
                            <svg className="fs-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 -32 576 576" width="1em" height="1em" fill="currentColor">
                                <path d="M160 32c-35.3 0-64 28.7-64 64V320c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H160zM396 138.7l96 144c4.9 7.4 5.4 16.8 1.2 24.6S480.9 320 472 320H328 280 200c-9.2 0-17.6-5.3-21.6-13.6s-2.9-18.2 2.9-25.4l64-80c4.6-5.7 11.4-9 18.7-9s14.2 3.3 18.7 9l17.3 21.6 56-84C360.5 132 368 128 376 128s15.5 4 20 10.7zM192 128a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zM48 120c0-13.3-10.7-24-24-24S0 106.7 0 120V344c0 75.1 60.9 136 136 136H456c13.3 0 24-10.7 24-24s-10.7-24-24-24H136c-48.6 0-88-39.4-88-88V120z"></path>
                            </svg>
                        </div>
                        <p style={{marginBottom: '0px', fontSize: '13px'}} className="text-capitalize">{album.title.length > 15 ? album.title.slice(0,15) + '...' : album.title}</p>
                    </a></div>
            </div>)}
        </>
}