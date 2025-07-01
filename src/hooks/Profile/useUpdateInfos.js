"use client";
import { useState } from "react";
import axiosClient from "../../interceptors/axiosClient";
import { toast } from "react-hot-toast";

const useUpdateInfos = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const updateInfos = async (values) => {
    setLoading(true);
    setError(null);

    try {
      const response = await axiosClient.put("/auth/update-profile", values);
      
      // ✅ Update user data in localStorage
      const currentUser = JSON.parse(localStorage.getItem("user") || "{}");
      const updatedUser = { ...currentUser, ...response.data.user };
      localStorage.setItem("user", JSON.stringify(updatedUser));
      
      toast.success("Profile updated successfully!");

      return response.data;
    } catch (err) {
      if (err.response?.data?.errors) {
        setError(err.response.data.errors);
        toast.error("Update failed. Please check your details.");
      } else {
        setError(err.response?.data?.message || "An error occurred");
        toast.error(err.response?.data?.message || "Update failed.");
      }
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return { updateInfos, loading, error };
};

export default useUpdateInfos;
