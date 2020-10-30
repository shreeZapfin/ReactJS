import React from 'react'
import Footer from '../components/footer'
import Header from './../components/header'

const MainLayout = props => {
    return(
        <div className="fullheight">
            <Header/>
            <div className="main">
                {/* The children will be considered as the components inside App.js file which is included inside MainLayout */}
                {props.children}  
            </div>
            <Footer/>
        </div>
    )
}


export default MainLayout