
export const Navbar = () => {

    return <div style={{ minWidth: '50px', height: 'auto', backgroundColor: '#000', position: 'fixed', left: 0, top: 0, zIndex: 1, display: 'flex', flexDirection: 'column', borderBottomRightRadius: '200px', borderBottomLeftRadius: '200px' }}>
        <div style={{ marginTop: '0.45vh', display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingRight: '24px' }}>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', flexGrow: 1 }}>
            <a href="" style={{ width: '40%', display: 'flex', alignItems: 'center', backgroundColor: '#fff', textDecoration: 'none', border: '1px solid white', padding: '5px', marginBlock: '1.5vh', borderRadius: '1000px' }}>
                🏠
            </a>
            <a href="#/profile" style={{ width: '40%', display: 'flex', alignItems: 'center', backgroundColor: '#fff', textDecoration: 'none', border: '1px solid white', padding: '5px', marginBlock: '1.5vh', borderRadius: '1000px', position: 'relative' }}>
                <span style={{ position: 'relative', transform: 'translate(-20%, -20%) translateY(-2px)'}}>
                    👥
                </span>
                <span
                    style={{position: 'absolute', content: '""', width: '100%', height: '100%', top: '80%', left: '80%', borderRadius: '1000px', transform: 'translate(-50%, -50%) translateY(-2px)'}}>🔖
                </span>
            </a>
            <a style={{ width: '40%', display: 'flex', alignItems: 'center', backgroundColor: '#fff', textDecoration: 'none', border: '1px solid white', padding: '5px', marginBlock: '1.5vh', borderRadius: '1000px' }}
            onClick={localStorage.removeItem("dd_token")}>
                🚪
            </a>
        </div>
    </div>

}