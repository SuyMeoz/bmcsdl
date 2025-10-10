import { useState } from "react";
import AuthModal from "./authmodal";

const Header = () => {
  
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [activeTab, setActiveTab] = useState("login");

  const openAuthModal = () => {
    setShowAuthModal(true);
  };

  const closeAuthModal = () => {
    setShowAuthModal(false);
  };

  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          {/* Logo */}
          <a className="navbar-brand fw-bold" href="/">
            CatWare
          </a>

          {/* Toggle button cho mobile */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Menu */}
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/software">
                  Software
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/games">
                  Games
                </a>
              </li>
            </ul>

            {/* Nút đăng nhập */}
            <div className="d-flex">
              <button className="btn btn-outline-light" type="button" onClick={openAuthModal}>
                Login
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Auth Modal */}
      <AuthModal
        show={showAuthModal}
        onClose={closeAuthModal}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
    </header>
  );
};

export default Header;
