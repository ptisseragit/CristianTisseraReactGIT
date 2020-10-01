import React from 'react'
import raton from '../Resources/computer_mouse_dribble_2.gif'
const Header = () => {
    return (
        <header className="bg-info py-5 mb-5 text-left">
            <div className="container h-100">
                <div className="row h-100 align-items-center">
                    <div className="col-lg-6">
                        <h1 className="display-4 text-white mt-5 mb-2">Cristian Tissera</h1>
                        <p className="lead mb-1 text-white-50">Futuro Full Stack Developer.</p>
                    </div>
                    <div className="col-lg-6 image-parent">
                        <img src={raton} className="img-fluid rounded-circle w-50 h-50 mt-5 mb-2" alt="Sheep"/>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header