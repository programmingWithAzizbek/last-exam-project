import { auth } from "../firebase/firebaseConfig";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  updateProfile,
} from "firebase/auth";
import { useDispatch } from "react-redux";
import { loginSuccess, logout } from "../store/authSlice";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const useAuth = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const register = async (displayName, email, password, photoURL) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      await updateProfile(userCredential.user, { displayName, photoURL });

      const user = {
        uid: userCredential.user.uid,
        displayName,
        email,
        photoURL: photoURL || null,
        password, // Store password securely
      };

      dispatch(loginSuccess(user));
      toast.success(`Welcome, ${displayName}`);
      navigate("/");
    } catch (error) {
      toast.error(error.message);
    }
  };

  const login = async (email, password) => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = {
        uid: userCredential.user.uid,
        displayName: userCredential.user.displayName,
        email,
        photoURL: userCredential.user.photoURL || null,
        password, // Store password securely
      };

      dispatch(loginSuccess(user));
      toast.success(`Welcome back, ${user.displayName}`);
      navigate("/");
    } catch (error) {
      toast.error("Login failed: " + error.message);
    }
  };

  const loginWithGoogle = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      const user = {
        uid: result.user.uid,
        displayName: result.user.displayName,
        email: result.user.email,
        photoURL: result.user.photoURL,
        password: null, // No password for Google sign-in
      };

      dispatch(loginSuccess(user));
      toast.success(`Welcome, ${user.displayName}`);
      navigate("/");
    } catch (error) {
      toast.error(error.message);
    }
  };

  const logoutUser = async () => {
    try {
      await signOut(auth);
      dispatch(logout());
      toast.info("Logged out successfully!");
      navigate("/login");
    } catch (error) {
      toast.error(error.message);
    }
  };

  return { register, login, loginWithGoogle, logoutUser };
};

export default useAuth;
