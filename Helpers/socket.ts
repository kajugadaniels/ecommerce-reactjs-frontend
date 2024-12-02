import { io } from 'socket.io-client';
const baseURL: any =
  !process.env.NODE_ENV || process.env.NODE_ENV === 'development'
    ? process.env.NEXT_PUBLIC_BASE_URL
    : process.env.NEXT_PUBLIC_BASE_URL;
const socketUrl = baseURL.slice(0, -7);
export const socket = io(socketUrl, {
  autoConnect: false,
});
