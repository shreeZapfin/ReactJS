import React from 'react'
import './style.scss'
import Button from './../Forms/Button'

const SingIn = () => {
    return(
        <div className='signin'>
            <div className="wrap">
                <h2>
                    Login
                </h2>
                <div className="fromWrap">
                    <form>
                        <div className="socialSignin">
                            <div className="row">
                                <Button>
                                    SignIn with Google
                                </Button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default SingIn