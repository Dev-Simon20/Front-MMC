import { configureStore } from "@reduxjs/toolkit";
import userSliceAdmin from "./users/userSliceAdmin";
import userSliceorg from "./users/userSliceOrg";
import tokenAdmin from "./tokens/tokenAdmin";
import adminAuth from "./estados/adminAuth";
import orgaAuth from "./estados/orgaAuth";
export const store = configureStore({
  reducer: {
    userAdmin: userSliceAdmin,
    userOrg:userSliceorg,
    tokenAdmin:tokenAdmin,
    adminAuth:adminAuth,
    orgaAuth:orgaAuth
  },
});