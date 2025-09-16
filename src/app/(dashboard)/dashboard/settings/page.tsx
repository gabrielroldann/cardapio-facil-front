"use client";

import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/_components/ui/card";
import { Button } from "@/_components/ui/button";
import { Input } from "@/_components/ui/input";
import { Label } from "@/_components/ui/label";
import { Badge } from "@/_components/ui/badge";
import {
  Settings,
  User,
  Bell,
  Shield,
  CreditCard,
  QrCode,
  Palette,
  Globe,
  Smartphone,
  Mail,
  Phone,
  MapPin,
  Clock,
  DollarSign,
  Users,
  Eye,
  EyeOff,
  Save,
  Download,
  Upload,
  Trash2,
  Plus,
} from "lucide-react";

const SettingsPage = () => {
  const [activeTab, setActiveTab] = useState("general");
  const [showPassword, setShowPassword] = useState(false);

  const tabs = [
    { id: "general", label: "Geral", icon: Settings },
    { id: "profile", label: "Perfil", icon: User },
    { id: "notifications", label: "Notificações", icon: Bell },
    { id: "users", label: "Usuários", icon: Users },
    { id: "payment", label: "Pagamento", icon: CreditCard },
    { id: "qrcode", label: "QR Codes", icon: QrCode },
    { id: "appearance", label: "Aparência", icon: Palette },
  ];

  const [settings, setSettings] = useState({
    restaurantName: "Restaurante Demo",
    email: "admin@restaurante.com",
    phone: "(11) 9999-9999",
    address: "Rua das Flores, 123 - São Paulo, SP",
    openingHours: "18:00 - 23:00",
    currency: "BRL",
    language: "pt-BR",
    timezone: "America/Sao_Paulo",
    notifications: {
      newOrders: true,
      orderReady: true,
      lowStock: false,
      dailyReport: true,
    },
    theme: "light",
    primaryColor: "#ff6b35",
  });

  const users = [
    {
      id: "1",
      name: "Roberto Oliveira",
      email: "roberto@restaurante.com",
      role: "owner",
      status: "active",
      lastLogin: "2024-01-15 14:30",
    },
    {
      id: "2",
      name: "Ana Costa",
      email: "ana@restaurante.com",
      role: "waiter",
      status: "active",
      lastLogin: "2024-01-15 12:15",
    },
    {
      id: "3",
      name: "Carlos Chef",
      email: "carlos@restaurante.com",
      role: "chef",
      status: "inactive",
      lastLogin: "2024-01-14 20:45",
    },
  ];

  const handleSave = () => {
    // Simulate save
    console.log("Settings saved:", settings);
  };

  const renderGeneralSettings = () => (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Informações do Restaurante</CardTitle>
          <CardDescription>
            Configure as informações básicas do seu estabelecimento
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <Label htmlFor="restaurantName">Nome do Restaurante</Label>
              <Input
                id="restaurantName"
                value={settings.restaurantName}
                onChange={(e) =>
                  setSettings({ ...settings, restaurantName: e.target.value })
                }
              />
            </div>
            <div>
              <Label htmlFor="phone">Telefone</Label>
              <Input
                id="phone"
                value={settings.phone}
                onChange={(e) =>
                  setSettings({ ...settings, phone: e.target.value })
                }
              />
            </div>
          </div>
          <div>
            <Label htmlFor="address">Endereço</Label>
            <Input
              id="address"
              value={settings.address}
              onChange={(e) =>
                setSettings({ ...settings, address: e.target.value })
              }
            />
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <Label htmlFor="openingHours">Horário de Funcionamento</Label>
              <Input
                id="openingHours"
                value={settings.openingHours}
                onChange={(e) =>
                  setSettings({ ...settings, openingHours: e.target.value })
                }
              />
            </div>
            <div>
              <Label htmlFor="currency">Moeda</Label>
              <select
                id="currency"
                value={settings.currency}
                onChange={(e) =>
                  setSettings({ ...settings, currency: e.target.value })
                }
                className="w-full px-3 py-2 border border-border rounded-md bg-background"
              >
                <option value="BRL">Real (R$)</option>
                <option value="USD">Dólar ($)</option>
                <option value="EUR">Euro (€)</option>
              </select>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Configurações Regionais</CardTitle>
          <CardDescription>
            Defina idioma, fuso horário e outras preferências regionais
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <Label htmlFor="language">Idioma</Label>
              <select
                id="language"
                value={settings.language}
                onChange={(e) =>
                  setSettings({ ...settings, language: e.target.value })
                }
                className="w-full px-3 py-2 border border-border rounded-md bg-background"
              >
                <option value="pt-BR">Português (Brasil)</option>
                <option value="en-US">English (US)</option>
                <option value="es-ES">Español</option>
              </select>
            </div>
            <div>
              <Label htmlFor="timezone">Fuso Horário</Label>
              <select
                id="timezone"
                value={settings.timezone}
                onChange={(e) =>
                  setSettings({ ...settings, timezone: e.target.value })
                }
                className="w-full px-3 py-2 border border-border rounded-md bg-background"
              >
                <option value="America/Sao_Paulo">São Paulo (GMT-3)</option>
                <option value="America/New_York">New York (GMT-5)</option>
                <option value="Europe/London">London (GMT+0)</option>
              </select>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );

  const renderProfileSettings = () => (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Informações Pessoais</CardTitle>
          <CardDescription>
            Gerencie suas informações de perfil e conta
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center gap-4">
            <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center">
              <User className="w-8 h-8 text-primary" />
            </div>
            <div className="space-y-2">
              <Button variant="outline" size="sm">
                <Upload className="w-4 h-4 mr-2" />
                Alterar Foto
              </Button>
              <p className="text-xs text-muted-foreground">
                JPG, PNG ou GIF. Máximo 2MB.
              </p>
            </div>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <Label htmlFor="name">Nome Completo</Label>
              <Input id="name" defaultValue="Roberto Oliveira" />
            </div>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                value={settings.email}
                onChange={(e) =>
                  setSettings({ ...settings, email: e.target.value })
                }
              />
            </div>
          </div>
          <div>
            <Label htmlFor="currentPassword">Senha Atual</Label>
            <div className="relative">
              <Input
                id="currentPassword"
                type={showPassword ? "text" : "password"}
                placeholder="Digite sua senha atual"
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
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <Label htmlFor="newPassword">Nova Senha</Label>
              <Input
                id="newPassword"
                type="password"
                placeholder="Digite a nova senha"
              />
            </div>
            <div>
              <Label htmlFor="confirmPassword">Confirmar Senha</Label>
              <Input
                id="confirmPassword"
                type="password"
                placeholder="Confirme a nova senha"
              />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );

  const renderNotificationSettings = () => (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Preferências de Notificação</CardTitle>
          <CardDescription>
            Configure quando e como você deseja receber notificações
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {Object.entries(settings.notifications).map(([key, value]) => (
            <div key={key} className="flex items-center justify-between">
              <div>
                <h4 className="font-medium">
                  {key === "newOrders"
                    ? "Novos Pedidos"
                    : key === "orderReady"
                    ? "Pedidos Prontos"
                    : key === "lowStock"
                    ? "Estoque Baixo"
                    : "Relatório Diário"}
                </h4>
                <p className="text-sm text-muted-foreground">
                  {key === "newOrders"
                    ? "Receba notificações quando novos pedidos chegarem"
                    : key === "orderReady"
                    ? "Seja notificado quando pedidos estiverem prontos"
                    : key === "lowStock"
                    ? "Alertas quando itens estiverem com estoque baixo"
                    : "Receba um resumo diário das vendas"}
                </p>
              </div>
              <Button
                variant={value ? "default" : "outline"}
                size="sm"
                onClick={() =>
                  setSettings({
                    ...settings,
                    notifications: {
                      ...settings.notifications,
                      [key]: !value,
                    },
                  })
                }
              >
                {value ? "Ativo" : "Inativo"}
              </Button>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );

  const renderUserSettings = () => (
    <div className="space-y-6">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <CardTitle>Gerenciar Usuários</CardTitle>
            <CardDescription>
              Adicione e gerencie usuários da sua equipe
            </CardDescription>
          </div>
          <Button size="sm">
            <Plus className="w-4 h-4 mr-2" />
            Novo Usuário
          </Button>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {users.map((user) => (
              <div
                key={user.id}
                className="flex items-center justify-between p-4 border border-border rounded-lg"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <User className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium">{user.name}</h4>
                    <p className="text-sm text-muted-foreground">{user.email}</p>
                    <div className="flex items-center gap-2 mt-1">
                      <Badge
                        variant={
                          user.role === "owner"
                            ? "default"
                            : user.role === "waiter"
                            ? "secondary"
                            : "outline"
                        }
                      >
                        {user.role === "owner"
                          ? "Proprietário"
                          : user.role === "waiter"
                          ? "Garçom"
                          : "Chef"}
                      </Badge>
                      <Badge
                        variant={user.status === "active" ? "default" : "secondary"}
                        className={
                          user.status === "active"
                            ? "bg-restaurant-green text-white"
                            : ""
                        }
                      >
                        {user.status === "active" ? "Ativo" : "Inativo"}
                      </Badge>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="text-right text-sm text-muted-foreground">
                    <p>Último acesso:</p>
                    <p>{user.lastLogin}</p>
                  </div>
                  <Button variant="outline" size="sm">
                    Editar
                  </Button>
                  <Button variant="outline" size="sm" className="text-destructive">
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );

  const renderQRCodeSettings = () => (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>QR Codes das Mesas</CardTitle>
          <CardDescription>
            Gere e gerencie QR codes para suas mesas
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <Label htmlFor="qrStyle">Estilo do QR Code</Label>
              <select
                id="qrStyle"
                className="w-full px-3 py-2 border border-border rounded-md bg-background"
              >
                <option value="square">Quadrado</option>
                <option value="rounded">Arredondado</option>
                <option value="dots">Pontos</option>
              </select>
            </div>
            <div>
              <Label htmlFor="qrColor">Cor Principal</Label>
              <Input
                id="qrColor"
                type="color"
                value={settings.primaryColor}
                onChange={(e) =>
                  setSettings({ ...settings, primaryColor: e.target.value })
                }
              />
            </div>
          </div>
          <div className="flex gap-2">
            <Button>
              <Download className="w-4 h-4 mr-2" />
              Baixar Todos
            </Button>
            <Button variant="outline">
              <QrCode className="w-4 h-4 mr-2" />
              Gerar Novos
            </Button>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>QR Codes Gerados</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-4">
            {Array.from({ length: 8 }, (_, i) => (
              <div
                key={i}
                className="border border-border rounded-lg p-4 text-center"
              >
                <div className="w-24 h-24 bg-muted rounded-lg mx-auto mb-2 flex items-center justify-center">
                  <QrCode className="w-12 h-12 text-muted-foreground" />
                </div>
                <p className="font-medium">Mesa {i + 1}</p>
                <div className="flex gap-1 mt-2">
                  <Button variant="outline" size="sm" className="flex-1">
                    <Download className="w-3 h-3" />
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1">
                    <Eye className="w-3 h-3" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );

  const renderAppearanceSettings = () => (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Personalização Visual</CardTitle>
          <CardDescription>
            Customize a aparência do seu cardápio digital
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label htmlFor="theme">Tema</Label>
            <div className="flex gap-2 mt-2">
              <Button
                variant={settings.theme === "light" ? "default" : "outline"}
                size="sm"
                onClick={() => setSettings({ ...settings, theme: "light" })}
              >
                Claro
              </Button>
              <Button
                variant={settings.theme === "dark" ? "default" : "outline"}
                size="sm"
                onClick={() => setSettings({ ...settings, theme: "dark" })}
              >
                Escuro
              </Button>
              <Button
                variant={settings.theme === "auto" ? "default" : "outline"}
                size="sm"
                onClick={() => setSettings({ ...settings, theme: "auto" })}
              >
                Automático
              </Button>
            </div>
          </div>
          <div>
            <Label htmlFor="primaryColor">Cor Principal</Label>
            <div className="flex items-center gap-4 mt-2">
              <Input
                id="primaryColor"
                type="color"
                value={settings.primaryColor}
                onChange={(e) =>
                  setSettings({ ...settings, primaryColor: e.target.value })
                }
                className="w-20 h-10"
              />
              <Input
                value={settings.primaryColor}
                onChange={(e) =>
                  setSettings({ ...settings, primaryColor: e.target.value })
                }
                placeholder="#ff6b35"
              />
            </div>
          </div>
          <div>
            <Label>Cores Predefinidas</Label>
            <div className="flex gap-2 mt-2">
              {["#ff6b35", "#4f46e5", "#059669", "#dc2626", "#7c3aed"].map(
                (color) => (
                  <button
                    key={color}
                    onClick={() =>
                      setSettings({ ...settings, primaryColor: color })
                    }
                    className="w-8 h-8 rounded-full border-2 border-border hover:scale-110 transition-transform"
                    style={{ backgroundColor: color }}
                  />
                )
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
            <Settings className="w-5 h-5 text-primary" />
          </div>
          <div>
            <h1 className="text-2xl font-bold">Configurações</h1>
            <p className="text-muted-foreground">
              Gerencie as configurações do seu sistema
            </p>
          </div>
        </div>

        <Button onClick={handleSave}>
          <Save className="w-4 h-4 mr-2" />
          Salvar Alterações
        </Button>
      </div>

      <div className="grid gap-6 lg:grid-cols-4">
        {/* Sidebar */}
        <Card className="lg:col-span-1">
          <CardContent className="pt-6">
            <nav className="space-y-2">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-left transition-colors ${
                    activeTab === tab.id
                      ? "bg-primary text-primary-foreground"
                      : "hover:bg-accent hover:text-accent-foreground"
                  }`}
                >
                  <tab.icon className="w-4 h-4" />
                  {tab.label}
                </button>
              ))}
            </nav>
          </CardContent>
        </Card>

        {/* Content */}
        <div className="lg:col-span-3">
          {activeTab === "general" && renderGeneralSettings()}
          {activeTab === "profile" && renderProfileSettings()}
          {activeTab === "notifications" && renderNotificationSettings()}
          {activeTab === "users" && renderUserSettings()}
          {activeTab === "qrcode" && renderQRCodeSettings()}
          {activeTab === "appearance" && renderAppearanceSettings()}
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;