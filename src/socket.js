import { io } from "socket.io-client";
const URL = process.env.NODE_ENV === 'production' ? 'https://sketchbook-server-qlx9.onrender.com' : 'http://localhost:3002'
export const socket = io(URL);