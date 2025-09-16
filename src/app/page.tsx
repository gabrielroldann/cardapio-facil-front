"use client";
import LoginForm from "@/_components/LoginForm";
import { Badge } from "@/_components/ui/badge";
import { Button } from "@/_components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/_components/ui/card";
import {
  ArrowRight,
  BarChart3,
  CheckCircle,
  ChefHat,
  Clock,
  QrCode,
  Shield,
  Smartphone,
  Users,
  Utensils,
  Zap,
} from "lucide-react";
import Link from "next/link";

export default function Home() {
  const handleLogin = () => {};
  return (
    <div className="min-h-screen bg-background">
      <div className="relative overflow-hidden gradient-primary">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative container mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto text-center text-white">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm">
                <Utensils className="w-8 h-8 text-white" />
              </div>
            </div>
            <h1 className="text-5xl font-bold mb-6 leading-tight">
              CardápioFácil
            </h1>
            <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
              A solução completa de cardápio digital para restaurantes modernos.
              Gerencie seu negócio, receba pedidos e acompanhe vendas em tempo
              real.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/dashboard">
                <Button
                  size="lg"
                  className="group bg-white text-primary hover:bg-white shadow-glow"
                >
                  <Zap className="w-5 h-5 mr-2" />
                  Acessar Dashboard
                  <ArrowRight className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                </Button>
              </Link>

              <Button
                size="lg"
                variant="outline"
                className="border-white/30 text-black hover:bg-white/10 backdrop-blur-sm"
              >
                Ver Demonstração
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            Recursos Principais
          </Badge>
          <h2 className="text-3xl font-bold mb-4">
            Tudo que seu restaurante precisa
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Uma plataforma completa para digitalizar e modernizar a gestão do
            seu estabelecimento
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <Card className="hover:shadow-elegant hover:-translate-y-2 transition-all duration-300 group">
            <CardHeader>
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <QrCode className="w-6 h-6 text-primary" />
              </div>
              <CardTitle>QR Code Inteligente</CardTitle>
              <CardDescription>
                Gere QR codes únicos para cada mesa. Clientes acessam o cardápio
                e fazem pedidos direto pelo celular.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <CheckCircle className="w-4 h-4 text-restaurant-green" />
                <span>Setup em 5 minutos</span>
              </div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-elegant hover:-translate-y-2 transition-all duration-300 group">
            <CardHeader>
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <ChefHat className="w-6 h-6 text-primary" />
              </div>
              <CardTitle>Cozinha Digital (KDS)</CardTitle>
              <CardDescription>
                Sistema de display para cozinha com controle de pedidos em tempo
                real e gestão de preparação.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Clock className="w-4 h-4 text-restaurant-orange" />
                <span>Reduz tempo de preparo em 30%</span>
              </div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-elegant hover:-translate-y-2 transition-all duration-300 group">
            <CardHeader>
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <BarChart3 className="w-6 h-6 text-primary" />
              </div>
              <CardTitle>Relatórios Avançados</CardTitle>
              <CardDescription>
                Análise completa de vendas, itens mais vendidos, performance por
                horário e insights do negócio.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <BarChart3 className="w-4 h-4 text-restaurant-blue" />
                <span>Dashboards em tempo real</span>
              </div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-elegant hover:-translate-y-2 transition-all duration-300 group">
            <CardHeader>
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <Smartphone className="w-6 h-6 text-primary" />
              </div>
              <CardTitle>100% Mobile</CardTitle>
              <CardDescription>
                Interface otimizada para celular. Seus clientes navegam no
                cardápio de forma intuitiva e rápida.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Smartphone className="w-4 h-4 text-restaurant-green" />
                <span>Experiência mobile-first</span>
              </div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-elegant hover:-translate-y-2 transition-all duration-300 group">
            <CardHeader>
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <CardTitle>Gestão de Equipe</CardTitle>
              <CardDescription>
                Controle de usuários com diferentes níveis de acesso:
                proprietário, gerente, garçom e cozinha.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Shield className="w-4 h-4 text-restaurant-blue" />
                <span>Permissões personalizadas</span>
              </div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-elegant hover:-translate-y-2 transition-all duration-300 group">
            <CardHeader>
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <Utensils className="w-6 h-6 text-primary" />
              </div>
              <CardTitle>Gestão Completa</CardTitle>
              <CardDescription>
                Cardápio digital, controle de mesas, pedidos, status de
                preparação e checkout integrado.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <CheckCircle className="w-4 h-4 text-restaurant-green" />
                <span>Tudo em uma plataforma</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Login Section */}
      <div className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4">
              Área de Login
            </Badge>
            <h2 className="text-3xl font-bold mb-4">Acesse sua Conta</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Entre com suas credenciais para acessar o sistema de gestão
            </p>
          </div>

          <LoginForm onLogin={handleLogin} />
        </div>
      </div>

      <div className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Pronto para modernizar seu restaurante?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Experimente gratuitamente por 30 dias. Sem compromisso, sem cartão
            de crédito.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="shadow-elegant">
              <Utensils className="w-5 h-5 mr-2" />
              Começar Agora
            </Button>
            <Button size="lg" variant="outline">
              Falar com Vendas
            </Button>
          </div>
          <p className="text-sm text-muted-foreground mt-4">🛡️ Suporte 24/7</p>
        </div>
      </div>
    </div>
  );
}
