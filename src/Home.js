import React from 'react'
import './Banner.css'
import Product from './Product'

function Home() {
    return (
        <>
        <div className="banner">
            <img className='banner__image' src='https://images-eu.ssl-images-amazon.com/images/G/31/AmazonVideo/2021/X-site/Multititle/Feb/EN/1500x600_Hero-Tall_01_FT._CB657651956_.jpg' alt=''/>
        </div>
        <div className='home_container'>
        <div className='home_row'>
            <Product
            id='1'
            title='Apple'
            price={90000}
            image='https://www.iphonehacks.com/wp-content/uploads/2020/11/iphone-12-mini-feature-866x1024.jpeg' 
            />
            <Product 
            id='2'
            title='Oneplus'
            price={45000}
            image='https://img.talkandroid.com/uploads/2018/10/oneplus-6t-angled-screen-857x950.png'
            />
        </div>
        <div className='home_row'>
            <Product
            id='3'
            title='google pixel'
            price={60000}
            image ='https://s.yimg.com/ny/api/res/1.2/Mq8Gkn02baDCfNbamTtPyQ--/YXBwaWQ9aGlnaGxhbmRlcjt3PTk2MDtoPTk2MA--/https://media-mbst-pub-ue1.s3.amazonaws.com/creatr-uploaded-images/2020-11/d6db2970-283f-11eb-b2fd-95e207753aea'
            />

            <Product
            id='4'
            title='google pixel'
            price={60000}
            image ='https://unlockedspot.com/wp-content/uploads/2018/11/61xWhrLIa-L._SL1000_.jpg'
            />
            <Product
            id='5'
            title='google pixel'
            price={60000}
            image ='https://s.yimg.com/ny/api/res/1.2/Mq8Gkn02baDCfNbamTtPyQ--/YXBwaWQ9aGlnaGxhbmRlcjt3PTk2MDtoPTk2MA--/https://media-mbst-pub-ue1.s3.amazonaws.com/creatr-uploaded-images/2020-11/d6db2970-283f-11eb-b2fd-95e207753aea'
            />

        </div>
        </div>
        </>
    )
}

export default Home
