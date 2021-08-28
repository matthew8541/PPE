import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  id: "",
  isLogin: false,
  username: null,
  email: null,
  hospital: "Emory_Midtown"
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login(state, action) {
      const { _id } = action.payload;
      state.id = _id;
      state.isLogin = true;
    },
    logout(state) {
      state.id = "";
      state.isLogin = false;
      state.username = null;
      state.email = null;
      state.hospital = ""
      localStorage.clear();
    },
    register(state, action) {
      const { username, email } = action.payload;
      state.username = username;
      state.email = email;
      state.isLogin = true;
    }
  }
})

export const {
  login,
  logout,
  register,
} = authSlice.actions

export default authSlice.reducer