import { useEffect, useState } from 'react';
import { getSizes } from '@/Helpers/CallRequestHelper';
import { Size } from '@/types/Product';
import { toast } from 'react-toastify';

const useSizes = () => {
  const [sizes, setSizes] = useState<Size[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchSizes = async () => {
      try {
        const response = await getSizes();
        if (response.status === 200) {
          setSizes(response.data.results);
        } else {
          toast.error(response.data.error || 'Failed to fetch sizes.');
        }
      } catch (error: any) {
        toast.error(error.response?.data?.error || 'An error occurred while fetching sizes.');
      } finally {
        setLoading(false);
      }
    };

    fetchSizes();
  }, []);

  return { sizes, loading };
};

export default useSizes;
