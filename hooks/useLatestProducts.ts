import { useEffect, useState } from 'react';
import { getLatestProducts } from '@/Helpers/CallRequestHelper';
import { Product } from '@/types/Product';
import { toast } from 'react-toastify';

interface Filters {
  category?: string;
  size?: string;
  color?: string;
  product_type?: string;
  price_min?: number;
  price_max?: number;
}

const useLatestProducts = (filters: Filters) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchLatestProducts = async () => {
      try {
        const response = await getLatestProducts(filters);
        if (response.status === 200) {
          setProducts(response.data.results);
        } else {
          toast.error(response.data.error || 'Failed to fetch products.');
        }
      } catch (error: any) {
        toast.error(error.response?.data?.error || 'An error occurred while fetching products.');
      } finally {
        setLoading(false);
      }
    };

    fetchLatestProducts();
  }, [filters]);

  return { products, loading };
};

export default useLatestProducts;
