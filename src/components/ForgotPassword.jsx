import { useState } from "react";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";

const ForgotPassword = () => {
  const auth = getAuth();
  const [email, setEmail] = useState("");

  const handleForgotPassword = async () => {
    try {
      await sendPasswordResetEmail(auth, email);
      alert("Parolni tiklash havolasi emailga jo‘natildi!");
    } catch (error) {
      alert("Xatolik: " + error.message);
    }
  };

  return (
    <div>
      <h2>Parolni unutdingizmi?</h2>
      <input
        type="email"
        placeholder="Email kiriting"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button onClick={handleForgotPassword}>Parolni tiklash</button>
    </div>
  );
};

export default ForgotPassword;
