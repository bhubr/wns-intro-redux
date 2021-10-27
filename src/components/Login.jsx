const fakeUser = {
  displayName: 'John Doe',
  avatarUrl: 'https://gravatar.com/avatar/1f82b0492a0a938288c2d5b70534a1fb?s=400&d=robohash&r=x'
}

const Login = ({ onLoginSuccess }) => {
  return (
    <div>
      <h1>Login</h1>
      <button type="button" onClick={
        e => onLoginSuccess(fakeUser)
      }>Login</button>
    </div>
  );
}

export default Login;
