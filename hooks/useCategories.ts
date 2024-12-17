import { useEffect, useState } from 'react';
import { getCategories } from '@/Helpers/CallRequestHelper';
import { Category } from '@/types/Product';
import { toast } from 'react-toastify';

const useCategories = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await getCategories();
        if (response.status === 200) {
          setCategories(response.data.results);
        } else {
          toast.error(response.data.error || 'Failed to fetch categories.');
        }
      } catch (error: any) {
        toast.error(error.response?.data?.error || 'An error occurred while fetching categories.');
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  return { categories, loading };
};

export default useCategories;
