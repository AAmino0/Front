"use client";
import { useRouter } from "next/navigation";
import axiosClient from "../../interceptors/axiosClient";
import { toast } from "react-hot-toast";

const useLogout = () => {
  const router = useRouter();

  const logout = async () => {
    try {
      await axiosClient.post("/auth/logout");
      
      // ✅ Clear local storage
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      
      toast.success("Logged out successfully!");
      
      // ✅ Redirect to login
      setTimeout(() => {
        router.push("/auth/login");
      }, 1000);
    } catch (error) {
      console.error("Logout error:", error);
      // Even if API call fails, clear local storage
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      router.push("/auth/login");
    }
  };

  return { logout };
};

export default useLogout;
