import React from 'react'
import Header from './../components/Header'
import Footer from './../components/Footer'

const HomepageLayout = props => {
    return(
        <div className="fullheight">
            <Header/>
                {/* The children will be considered as the components inside App.js file which is included inside MainLayout */}
                {props.children}  
            <Footer/>
        </div>
    )
}


export default HomepageLayout