"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const GuestRoute = ({ children }) => {
  const router = useRouter();
  const [isGuest, setIsGuest] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Only check localStorage on client side
    const token = localStorage.getItem("token");
    if (token) {
      router.push("/");
    } else {
      setIsGuest(true);
    }
    setIsLoading(false);
  }, [router]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return isGuest ? children : null;
};

export default GuestRoute;
