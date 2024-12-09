'use client';
import { useUserContext } from '@/contexts/userContext';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { toast } from 'react-toastify';

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { userData, token } = useUserContext();
  const router = useRouter();

  useEffect(() => {
    if (!userData || !token) {
      toast.error('You must be logged in to access this page.');
      router.push('/signin');
    }
  }, [userData, token, router]);

  if (!userData || !token) {
    return null; // Or a loading spinner
  }

  return <>{children}</>;
};

export default ProtectedRoute;
