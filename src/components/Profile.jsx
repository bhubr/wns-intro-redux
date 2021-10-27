const Profile = ({ user }) => {
  return (
    <div>
      <h1>Profile</h1>
      <form>
        <label htmlFor="displayName">Display name</label>
        <input id="displayName" name="displayName" value={user.displayName} />

        <label htmlFor="avatarUrl">Avatar URL</label>
        <input id="avatarUrl" name="avatarUrl" value={user.avatarUrl} />
      </form>
    </div>
  );
}

export default Profile;
