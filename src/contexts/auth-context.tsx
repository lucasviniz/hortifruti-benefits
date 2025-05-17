import { createContext, useContext, useState, ReactNode } from "react";

type User = {
  name: string;
  email: string;
  password: string;
};

type AuthContextData = {
  user: User | null;
  register: (data: User) => Promise<void>;
  users: User[];
};

const AuthContext = createContext({} as AuthContextData);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [users, setUsers] = useState<User[]>([]); // armazenar contas registradas

  async function register(data: User) {
    const alreadyExists = users.some(u => u.email === data.email);
    if (alreadyExists) {
      throw new Error("Email já cadastrado.");
    }

    setUsers(prev => [...prev, data]);
    setUser(data);
  }

  return (
    <AuthContext.Provider value={{ user, register, users }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
