import React, { useState } from 'react'
import {Link} from 'react-router-dom'

function RTCJ() {


    const sites = [
        {
            'name': 'NotesPro',
            'url': '/note',
            'image': ['/images/notesPro/notesPro_1.png', '/images/notesPro/notesPro_2.png', '/images/notesPro/notesPro_3.png']
        }

        // ,
        // {
        //     'name': 'Shoesify',
        //     'url': 'Any',
        //     'image': ['/images/shoesify/shoefify_singleProduct.png',
        //              '/images/shoesify/shoesify_app_home.png',
        //              '/images/shoesify/shoesify_cart.webp.avif',
        //              '/images/shoesify/shoesify_home.png',
        //              '/images/shoesify/shoesify_product.png',
        //              '/images/shoesify/singup_shoesify.png']

        // }
        // ,
        // {
        //     'name': 'SmartKart',
        //     'url': 'Any',
        //     'image': ['/images/smartkart/smartkart_home.png',
        //              '/images/smartkart/smartkart_product.png',
        //              '/images/smartkart/smartkartChat.png']
        // }
        // ,
        // {
        //     'name': 'Chat',
        //     'url': 'Any',
        //     'image': ['/images/chat/djanogChatApplication.png']
        // }


    ]




    return (
        <React.Fragment>

            <div className="htc-container m-1 m-md-2 m-lg-3 p-2" style={{ backgroundColor: '#ffffff1f' }}>
                <div className="htc-projects">
                    <div className="row p-0 m-0">
                        {
                            sites.map((el, index) => {
                                return (
                                    <div className="col col-md-6 p-2" key={index}>
                                        {/* <Link to={el.url} style={{ textDecoration: 'none', color: 'unset' }}> */}

                                            <Carousel data={el.image} />

                                        {/* </Link> */}
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



const Carousel = (imagesel) => {
    
    return (
        <div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel">
        <div class="carousel-inner">

        {
            imagesel.data.map((el, index)=>{
                {
                    index == 0 &&
                    <div class="carousel-item active">
                        <img src={el} class="d-block w-100" alt="anything" style={{
                            width:'100px',
                            height:'200px'
                        }}/>
                    </div>
                }

                {
                    index !==0 &&
                    <div class="carousel-item">
                    <img src={el} class="d-block w-100" alt="anything"/>
                  </div>
                }


            })
        }
          
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    )
}


export default RTCJ