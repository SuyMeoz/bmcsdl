const AuthModal = ({show, onClose, activeTab, setActiveTab}) => {
    if (!show) return null;

      // Style overlay full màn hình, căn giữa modal
    const overlayStyle = {
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        backgroundColor: 'rgba(0,0,0,0.5)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1050,
    };

    const modalContentStyle = {
        background: '#fff',
        borderRadius: '18px',
        boxShadow: '0 8px 32px rgba(0,0,0,0.18)',
        padding: '32px 28px 24px 28px',
        minWidth: '350px',
        maxWidth: '90vw',
        width: '400px',
        position: 'relative',
        animation: 'fadeInModal 0.25s',
    };

    const closeBtnStyle = {
        position: 'absolute',
        top: '18px',
        right: '18px',
        background: '#f2f2f2',
        border: 'none',
        borderRadius: '50%',
        width: '32px',
        height: '32px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '18px',
        cursor: 'pointer',
        transition: 'background 0.2s',
    };

    const activeTabStyle = {
        fontWeight: 'bold',
        color: '#0d6efd',
        background: '#e7f1ff',
        borderRadius: '8px 8px 0 0',
    };

    const tabStyle = {
        border: 'none',
        background: 'none',
        color: '#888',
        padding: '8px 20px',
        fontSize: '16px',
        borderRadius: '8px 8px 0 0',
        marginRight: '4px',
        cursor: 'pointer',
        transition: 'background 0.2s',
    };

    const inputStyle = {
        borderRadius: '8px',
        border: '1px solid #e0e0e0',
        padding: '10px',
        fontSize: '15px',
        marginBottom: '8px',
    };

    const submitBtnStyle = {
        borderRadius: '8px',
        padding: '10px',
        fontWeight: 'bold',
        fontSize: '16px',
        marginTop: '8px',
        background: 'linear-gradient(90deg, #0d6efd 60%, #3b82f6 100%)',
        border: 'none',
        color: '#fff',
        boxShadow: '0 2px 8px rgba(13,110,253,0.08)',
        cursor: 'pointer',
        width: '100%',
        transition: 'background 0.2s',
    };

    return(
        <div style={overlayStyle} className="auth-modal" tabIndex={-1} onClick={onClose}>
            <style>{`
                @keyframes fadeInModal {
                    from { opacity: 0; transform: translateY(30px); }
                    to { opacity: 1; transform: translateY(0); }
                }
            `}</style>
            <div className="auth-modal-content" style={modalContentStyle} onClick={e => e.stopPropagation()}>
                {/*----- Modal Header -----*/}
                <div className="auth-modal-header" style={{display:'flex', alignItems:'center', justifyContent:'center', position:'relative', marginBottom:'18px'}}>
                    <h5 style={{fontWeight:'bold', fontSize:'1.35rem', margin:'0 auto', color:'#222'}}>
                        {activeTab === 'login' ? 'Login' : 'Register'}
                    </h5>
                    <button type="button" aria-label="Close" onClick={onClose} style={closeBtnStyle} title="Close">
                        <span style={{fontSize:'20px', color:'#888'}}>&times;</span>
                    </button>
                </div>

                {/*------ Modal Body ------*/}
                <div className="auth-modal-body">

                    {/*----- Tabs -----*/}
                    <div style={{display:'flex', justifyContent:'center', marginBottom:'18px'}}>
                        <button
                            style={activeTab === 'login' ? {...tabStyle, ...activeTabStyle} : tabStyle}
                            onClick={() => setActiveTab('login')}
                        >
                            Login
                        </button>
                        <button
                            style={activeTab === 'register' ? {...tabStyle, ...activeTabStyle} : tabStyle}
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
                                <input type="email" style={inputStyle} className="form-control" id="loginEmail" placeholder="name@example.com"/>
                            </div>

                            {/*----- Password -----*/}
                            <div style={{marginBottom:'16px'}}>
                                <label htmlFor="loginPassword" className="form-label" style={{fontWeight:'500', color:'#444', marginBottom:'6px', display:'block'}}>
                                    Password
                                </label>
                                <input type="password" style={inputStyle} className="form-control" id="loginPassword" placeholder="Password"/>
                            </div>

                            <button type="submit" style={submitBtnStyle}>
                                Login
                            </button>
                        </form>
                    ) : (
                        <form>
                            {/*----- Username -----*/}
                            <div style={{marginBottom:'16px'}}>
                                <label htmlFor="registerUsername" className="form-label" style={{fontWeight:'500', color:'#444', marginBottom:'6px', display:'block'}}>
                                    Username
                                </label>
                                <input type="text" style={inputStyle} className="form-control" id="registerUsername" placeholder="Username"/>
                            </div>

                            {/*----- Email -----*/}
                            <div style={{marginBottom:'16px'}}>
                                <label htmlFor="registerEmail" className="form-label" style={{fontWeight:'500', color:'#444', marginBottom:'6px', display:'block'}}>
                                    Email address
                                </label>
                                <input type="email" style={inputStyle} className="form-control" id="registerEmail" placeholder="name@example.com"/>
                            </div>

                            {/*----- Password -----*/}
                            <div style={{marginBottom:'16px'}}>
                                <label htmlFor="registerPassword" className="form-label" style={{fontWeight:'500', color:'#444', marginBottom:'6px', display:'block'}}>
                                    Password
                                </label>
                                <input type="password" style={inputStyle} className="form-control" id="registerPassword" placeholder="Password"/>
                            </div>

                            <button type="submit" style={submitBtnStyle}>
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