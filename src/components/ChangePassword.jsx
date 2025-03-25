import { getAuth, updatePassword } from "firebase/auth";
import { useState } from "react";
import { toast } from "react-toastify";

const ChangePassword = () => {
  const auth = getAuth();
  const user = auth.currentUser;
  const [newPassword, setNewPassword] = useState("");

  const handleChangePassword = async () => {
    if (!user) {
      toast.warn("Siz tizimga kirishingiz kerak!");
      return;
    }

    try {
      await updatePassword(user, newPassword);
      toast.success("Parolingiz muvaffaqiyatli o‘zgartirildi!");
    } catch (error) {
      toast.error("Xatolik: " + error.message);
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
