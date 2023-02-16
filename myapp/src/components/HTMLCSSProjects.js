import React from 'react'

function HTCP(){



    // const sites = [
    //     'HTML_CSS_PROJECTS/FoodSite/index.html',
    //     'HTML_CSS_PROJECTS/MusicVideoSite/index.html',
    //     'HTML_CSS_PROJECTS/ParallaxWebsite/index.html' ,                 
    //     'HTML_CSS_PROJECTS/RegForm/HTMLCSS/Registration Form/index.html',
    //     'HTML_CSS_PROJECTS/WorkSite/index.html',
    //     'HTML_CSS_PROJECTS/Youtube_Copy/index2.html'
    // ]


    const sites = [

        {
            'name': 'FoodSite',
            'url':'HTML_CSS_PROJECTS/FoodSite/index.html',
            'image': 'HTML_CSS_PROJECTS/Images_alt/FoodSite.png'
        }
        ,
        {
            'name': 'MusicVideo Site',
            'url':'HTML_CSS_PROJECTS/MusicVideoSite/index.html',
            'image': 'HTML_CSS_PROJECTS/Images_alt/musicSite.png'
        }
        ,
        {
            'name': 'Parallax Site',
            'url':'HTML_CSS_PROJECTS/ParallaxWebsite/index.html',
            'image': 'HTML_CSS_PROJECTS/Images_alt/ParallaxWebsite.png'
        }
        ,
        ,
        {
            'name': 'Work Site',
            'url':'HTML_CSS_PROJECTS/WorkSite/index.html',
            'image': 'HTML_CSS_PROJECTS/Images_alt/worksite.png'
        }
        ,
        {
            'name': 'Youtube Clone',
            'url':'HTML_CSS_PROJECTS/Youtube_Copy/index.html',
            'image': 'HTML_CSS_PROJECTS/Images_alt/Youtube.png'
        }
        ]


    

    return(
        <React.Fragment>

            <div className="htc-container m-1 m-md-2 m-lg-3 p-0 p-md-1 p-lg-2" style={{backgroundColor:'#ffffff1f'}}>
                {/* <div className='text-start fs-3 fw-bold text-light text-dark'>HTML, CSS Projects</div> */}

                <div className="htc-projects">
                    <div className="row p-0 m-0">
                        {
                            sites.map((el, index)=>{
                                return(
                                    <div className="col p-2" key={index}>
                            <a href={el.url} style={{textDecoration:'none', color:'unset'}}>
                            <div className="cardPresent d-flex flex-column p-2 mx-auto shadow shadow-5" style={{
                                    width:'100%', 
                                    height:'250px',
                                    maxWidth:'600px',
                                    minWidth:'300px',
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


        // <a href="/HTML_CSS_PROJECTS/FoodSite/index.html">FoodSite</a>

}


export default HTCP