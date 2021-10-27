const Navbar = ({ user, onLogout }) => (
  <nav style={{ display: 'flex' }}>
    <h1>MaSuperApp</h1>
    {
      user && (
        <div>
          <img
          style={{ width: '50px', borderRadius: '50%'}}
          src={user.avatarUrl}
          alt={user.displayName} />
          <button type="button" onClick={onLogout}>Logout</button>
        </div>
      )
    }

  </nav>
);


export default Navbar;
