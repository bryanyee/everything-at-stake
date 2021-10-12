import { useState, useEffect } from 'react';

export default function useMountState() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return [isMounted];
}
