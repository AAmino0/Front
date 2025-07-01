"use client";
import { useState } from "react";
import axiosClient from "../../interceptors/axiosClient";
import { toast } from "react-hot-toast";

const useUpdatePassword = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const updatePassword = async (values) => {
    setLoading(true);
    setError(null);

    try {
      const response = await axiosClient.put("/auth/update-password", values);
      
      toast.success("Password updated successfully!");
      return response.data;
    } catch (err) {
      if (err.response?.data?.errors) {
        setError(err.response.data.errors);
        toast.error("Password update failed. Please check your details.");
      } else {
        setError(err.response?.data?.message || "An error occurred");
        toast.error(err.response?.data?.message || "Password update failed.");
      }
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return { updatePassword, loading, error };
};

export default useUpdatePassword;
