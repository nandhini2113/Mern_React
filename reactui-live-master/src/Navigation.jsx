import { BsCart } from 'react-icons/bs';
import { Link } from "react-router-dom";
import { CartContext } from './Features/ContextProvider';
import { useContext } from 'react';


export function Navigation() {

    const logout =() =>{
        localStorage.clear();
        window.location.reload();
    }

    const {cart} = useContext(CartContext);

    return (
        <>
                <nav data-bs-theme="dark" className="navbar navbar-expand-lg bg-body-tertiary">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#"><span>Mini</span> Store</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarText">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav">
                                    <Link className="nav-link" to='/home'>Home</Link>
                                </li>
                                <li className="nav">
                                    <Link className="nav-link" to='/watches'>Watches</Link>
                                </li>
                                <li className="nav">
                                <Link className="nav-link" to='/contactus'>ContactUs</Link>
                                </li>
                            </ul>

                            <span className="navbar-text" >
                            <Link className="nav-cart" to='/cart'><BsCart/>{cart.length}</Link>
                            </span>

                            <span onClick={logout} className="navbar-text">
                                <svg  fill="#ffffff" height="20px" width="20px" viewBox="0 0 384.971 384.971" stroke="#ffffff"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g id="Sign_Out"> <path d="M180.455,360.91H24.061V24.061h156.394c6.641,0,12.03-5.39,12.03-12.03s-5.39-12.03-12.03-12.03H12.03 C5.39,0.001,0,5.39,0,12.031V372.94c0,6.641,5.39,12.03,12.03,12.03h168.424c6.641,0,12.03-5.39,12.03-12.03 C192.485,366.299,187.095,360.91,180.455,360.91z"></path> <path d="M381.481,184.088l-83.009-84.2c-4.704-4.752-12.319-4.74-17.011,0c-4.704,4.74-4.704,12.439,0,17.179l62.558,63.46H96.279 c-6.641,0-12.03,5.438-12.03,12.151c0,6.713,5.39,12.151,12.03,12.151h247.74l-62.558,63.46c-4.704,4.752-4.704,12.439,0,17.179 c4.704,4.752,12.319,4.752,17.011,0l82.997-84.2C386.113,196.588,386.161,188.756,381.481,184.088z"></path> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> </g> </g></svg>
                            </span>
                        </div>
                    </div>
                </nav> 
        </>
    )
}