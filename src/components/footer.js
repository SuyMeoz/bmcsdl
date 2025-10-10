const Footer = () => {

    return(
        <footer>
            <div className="bg-dark">
                <div className="container text-white py-3">
                    <h4 className="py-3 text-center">&copy; 2024 CatWare. All rights reserved.</h4>

                    <div className="row">
                        <div className="col col-4">
                            <h5 className="text-center">Contact Us</h5>
                            <p>Email:</p>
                            <p>Phone:</p>
                            <p>Address:</p>
                        </div>

                        <div className="col col-4">
                            <h5 className="text-center">Follow Us</h5>
                            <p>Facebook</p>
                            <p>Twitter</p>
                            <p>Instagram</p>
                        </div>

                        <div className="col col-4">
                            <h5 className="text-center">About CatWare</h5>
                            <p>CatWare is a leading software distribution platform, providing a wide range of applications for various needs.</p>
                        </div>

                    </div>
                    
                </div>
            </div>
        </footer>
    );
}

export default Footer;