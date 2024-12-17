export interface User {
    id: number;
    name: string;
    email: string;
    // Add other user fields as necessary
}

export const getUser = (): User | null => {
    if (typeof window === 'undefined') return null;
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : null;
};
