export interface Category {
    id: number;
    name: string;
    slug: string;
    created_at: string;
    updated_at: string;
}

export interface Size {
    id: number;
    name: string;
    slug: string;
    created_at: string;
    updated_at: string;
}

export interface ProductImage {
    id: number;
    image: string;
    created_at: string;
}

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
