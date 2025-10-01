import './style/authmodal.css';

const AuthModal = ({show, onClose, activeTab, setActiveTab}) => {
    if (!show) return null;

      // Style overlay full màn hình, căn giữa modal

    return(
        <div className="auth-modal" tabIndex={-1} onClick={onClose}>
            <div className="auth-modal-content" onClick={e => e.stopPropagation()}>
                {/*----- Modal Header -----*/}
                <div className="auth-modal-header">
                    <h5 style={{fontWeight:'bold', fontSize:'1.35rem', margin:'0 auto', color:'#222'}}>
                        {activeTab === 'login' ? 'Login' : 'Register'}
                    </h5>
                    <button type="button" aria-label="Close" onClick={onClose} className="auth-modal-close-btn" title="Close">
                        <span style={{fontSize:'20px', color:'#888'}}>&times;</span>
                    </button>
                </div>

                {/*------ Modal Body ------*/}
                <div className="auth-modal-body">

                    {/*----- Tabs -----*/}
                    <div className="auth-modal-tabs">
                        <button
                            className={`auth-modal-tab${activeTab === 'login' ? ' active' : ''}`}
                            onClick={() => setActiveTab('login')}
                        >
                            Login
                        </button>
                        <button
                            className={`auth-modal-tab${activeTab === 'register' ? ' active' : ''}`}
                            onClick={() => setActiveTab('register')}
                        >
                            Register
                        </button>
                    </div>

                    {/*----- Form -----*/}
                    {activeTab === 'login' ? (
                        <form>
                            {/*----- Email -----*/}
                            <div style={{marginBottom:'16px'}}>
                                <label htmlFor="loginEmail" className="form-label" style={{fontWeight:'500', color:'#444', marginBottom:'6px', display:'block'}}>
                                    Email address
                                </label>
                                <input type="email" className="auth-modal-input form-control" id="loginEmail" placeholder="name@example.com"/>
                            </div>

                            {/*----- Password -----*/}
                            <div style={{marginBottom:'16px'}}>
                                <label htmlFor="loginPassword" className="form-label" style={{fontWeight:'500', color:'#444', marginBottom:'6px', display:'block'}}>
                                    Password
                                </label>
                                <input type="password" className="auth-modal-input form-control" id="loginPassword" placeholder="Password"/>
                            </div>

                            <button type="submit" className="auth-modal-submit-btn">
                                Login
                            </button>
                        </form>
                    ) : (
                        <form onSubmit={async (e) => {
                            e.preventDefault();
                            const username = document.getElementById('registerUsername').value;
                            const email = document.getElementById('registerEmail').value;
                            const password = document.getElementById('registerPassword').value;
                            await fetch('/register', {
                                method: 'POST',
                                headers: { 'Content-Type': 'application/json' },
                                body: JSON.stringify({ username, email, password })
                            });
                        }}>
                            {/*----- Username -----*/}
                            <div style={{marginBottom:'16px'}}>
                                <label htmlFor="registerUsername" className="form-label" style={{fontWeight:'500', color:'#444', marginBottom:'6px', display:'block'}}>
                                    Username
                                </label>
                                <input type="text" className="auth-modal-input form-control" id="registerUsername" placeholder="Username"/>
                            </div>

                            {/*----- Email -----*/}
                            <div style={{marginBottom:'16px'}}>
                                <label htmlFor="registerEmail" className="form-label" style={{fontWeight:'500', color:'#444', marginBottom:'6px', display:'block'}}>
                                    Email address
                                </label>
                                <input type="email" className="auth-modal-input form-control" id="registerEmail" placeholder="name@example.com"/>
                            </div>

                            {/*----- Password -----*/}
                            <div style={{marginBottom:'16px'}}>
                                <label htmlFor="registerPassword" className="form-label" style={{fontWeight:'500', color:'#444', marginBottom:'6px', display:'block'}}>
                                    Password
                                </label>
                                <input type="password" className="auth-modal-input form-control" id="registerPassword" placeholder="Password"/>
                            </div>

                            <button type="submit" className="auth-modal-submit-btn">
                                Register
                            </button>
                        </form>
                    )}
                </div>
            </div>
        </div>
    )
}

export default AuthModal;