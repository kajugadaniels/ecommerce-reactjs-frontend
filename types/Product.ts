import { Category } from './Category';
import { Size } from './Size';
import { ProductImage } from './ProductImage';

export interface Product {
    id: number;
    title: string;
    slug: string;
    price: string;
    category: Category;
    product_sizes: Size[];
    image: string;
    color: string;
    product_type: string;
    description: string;
    created_at: string;
    updated_at: string;
    images: ProductImage[];
}
