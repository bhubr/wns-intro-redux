import { createStore } from 'redux';

const initialState = {
  currentUser: null
};

// Une action c'est un objet
// contenant TOUJOURS un champ type

// Action pour passer de l'état non-authentifié à l'état authentifié
const loginAction = {
  type: 'LOGIN',
  user: {
    id: 1,
    displayName: 'John Doe',
    avatarUrl: 'https://gravatar.com/avatar/1f82b0492a0a938288c2d5b70534a1fb?s=400&d=robohash&r=x'
  }
}

// Action pour passer de l'état authentifié à l'état non-authentifié
const logoutAction = {
  type: 'LOGOUT'
}

function authReducer(state = initialState, action) {
  switch (action.type) {
    case 'LOGIN':
      return { currentUser: action.user };
    case 'LOGOUT':
      return { currentUser: null };
    default:
      return state;
  }
}

const store = createStore(authReducer);

