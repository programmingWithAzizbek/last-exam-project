import { getAuth, updatePassword } from "firebase/auth";
import { useState } from "react";

const ChangePassword = () => {
  const auth = getAuth();
  const user = auth.currentUser;
  const [newPassword, setNewPassword] = useState("");

  const handleChangePassword = async () => {
    if (!user) {
      alert("Siz tizimga kirishingiz kerak!");
      return;
    }

    try {
      await updatePassword(user, newPassword);
      alert("Parolingiz muvaffaqiyatli o‘zgartirildi!");
    } catch (error) {
      alert("Xatolik: " + error.message);
    }
  };

  return (
    <div>
      <h2>Parolni o‘zgartirish</h2>
      <input
        type="password"
        placeholder="Yangi parol"
        value={newPassword}
        onChange={(e) => setNewPassword(e.target.value)}
      />
      <button onClick={handleChangePassword}>Parolni o‘zgartirish</button>
    </div>
  );
};

export default ChangePassword;
