import { useState, useEffect } from "react";

const useOrigin = () => {
  const [mounted, setMounted] = useState(false);
  //checking if window is available and use window location origin
  const origin =
    typeof window !== "undefined" && window.location.origin
      ? window.location.origin
      : "";
  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) {
    return null;
  }
  return origin;
};

export { useOrigin };
