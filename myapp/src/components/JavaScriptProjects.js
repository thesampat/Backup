import React from 'react'

function JTCP(){

    const sites = [
        {
            'name': 'CollegeLibrary',
            'url':'JAVASCRIPT_PROJECTS/CollegeLibrary/index.html',
            'image': '/images/library.png'
        }
        ,
        {
            'name': 'NoteAdd',
            'url':'JAVASCRIPT_PROJECTS/NoteAdd/index.html',
            'image': '/images/noteadd.png'
        }
        ]


    

    return(
        <React.Fragment>

            <div className="htc-container m-3 py-2" style={{backgroundColor:'#ffffff1f'}}>
                <div className="htc-projects">
                    <div className="row p-0 m-0 justify-content-center">
                        {
                            sites.map((el, index)=>{
                                return(
                                    <div className="col p-2" key={index}>
                            <a href={el.url} style={{textDecoration:'none', color:'unset'}}>
                            <div className="cardPresent d-flex flex-column shadow shadow-5"style={{
                                    width:'100%', 
                                    // maxWidth:'700px',
                                    minWidth:'300px',
                                    height:'300px',
                                    backgroundImage:`url(${el.image})`,
                                    backgroundSize:'100% 100%',
                                    backgroundRepeat:'no-repeat',
                                    }}>
                                <div className="image">
                                    <div style={{width:'100%', height:'150px'}}>
                                        {/* <img src={el.image} height='130px'width='100%' alt="" /> */}
                                    </div>
                                </div>
                                
                            </div>
                            </a>
                        </div>
                                )
                            })
                        }
                    </div>

                </div>
            </div>

        </React.Fragment>
        )


}


export default JTCP