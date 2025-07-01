"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import axiosClient from "../../interceptors/axiosClient";
import { toast } from "react-hot-toast";

const useLogin = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const router = useRouter();

  const login = async (email, password) => {
    setLoading(true);
    setError(null);

    try {
      const response = await axiosClient.post("/auth/login", { email, password });

      // ✅ Success: Save token & redirect
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("user", JSON.stringify(response.data.user));
      toast.success("Login successful! Redirecting...");

      setTimeout(() => {
        router.push("/");
      }, 1500);
    } catch (err) {
      // ✅ Handle backend validation errors
      if (err.response?.data?.errors) {
        setError(err.response.data.errors);
        toast.error("Login failed. Please check your credentials.");
      } else {
        setError(err.response?.data?.message || "An error occurred");
        toast.error(err.response?.data?.message || "Login failed.");
      }
    } finally {
      setLoading(false);
    }
  };

  return { login, loading, error };
};

export default useLogin;
