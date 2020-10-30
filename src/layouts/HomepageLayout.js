import React from 'react'
import Header from './../components/header'
import Footer from './../components/footer'

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