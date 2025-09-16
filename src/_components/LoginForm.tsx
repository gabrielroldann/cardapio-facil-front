"use client";

import { useState } from "react";
import { LogIn, User, Lock, Eye, EyeOff } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Button } from "./ui/button";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { toast } from "sonner";

interface LoginFormProps {
  onLogin: () => void;
}

const LoginForm = ({ onLogin }: LoginFormProps) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Dados mockados para login
  const mockUsers = [
    {
      email: "admin@restaurante.com",
      password: "admin123",
      name: "Admin",
      role: "Administrador",
    },
    {
      email: "gerente@restaurante.com",
      password: "gerente123",
      name: "João Silva",
      role: "Gerente",
    },
    {
      email: "garcom@restaurante.com",
      password: "garcom123",
      name: "Maria Santos",
      role: "Garçom",
    },
    {
      email: "cozinha@restaurante.com",
      password: "cozinha123",
      name: "Carlos Pereira",
      role: "Cozinha",
    },
  ];

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast.success("Login realizado com sucesso!");

    setIsLoading(false);
  };

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader className="text-center">
        <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
          <LogIn className="w-8 h-8 text-primary" />
        </div>
        <CardTitle className="text-2xl">Fazer Login</CardTitle>
        <CardDescription>
          Entre com suas credenciais para acessar o sistema
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleLogin} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <div className="relative">
              <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                id="email"
                type="email"
                placeholder="seu@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="pl-10"
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="password">Senha</Label>
            <div className="relative">
              <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="sua senha"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="pl-10 pr-10"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-3 h-4 w-4 text-muted-foreground hover:text-foreground"
              >
                {showPassword ? (
                  <EyeOff className="h-4 w-4" />
                ) : (
                  <Eye className="h-4 w-4" />
                )}
              </button>
            </div>
          </div>

          <Button type="submit" className="w-full" disabled={isLoading}>
            {isLoading ? "Entrando..." : "Entrar"}
          </Button>
        </form>

        <div className="mt-6 p-4 bg-muted rounded-lg">
          <p className="text-sm font-medium mb-2">Credenciais de teste:</p>
          <div className="text-xs text-muted-foreground space-y-1">
            <p>
              <strong>Admin:</strong> admin@restaurante.com / admin123
            </p>
            <p>
              <strong>Gerente:</strong> gerente@restaurante.com / gerente123
            </p>
            <p>
              <strong>Garçom:</strong> garcom@restaurante.com / garcom123
            </p>
            <p>
              <strong>Cozinha:</strong> cozinha@restaurante.com / cozinha123
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default LoginForm;
