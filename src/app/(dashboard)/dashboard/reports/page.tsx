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
import { Badge } from "@/_components/ui/badge";
import {
  BarChart3,
  TrendingUp,
  TrendingDown,
  DollarSign,
  ShoppingBag,
  Users,
  Clock,
  Calendar,
  Download,
  Filter,
  Eye,
  Star,
  Target,
} from "lucide-react";
import {
  mockWeeklySales,
  mockTopItems,
  mockDashboardStats,
} from "../../../../../data/mockData";

const ReportsPage = () => {
  const [selectedPeriod, setSelectedPeriod] = useState("week");
  const [selectedMetric, setSelectedMetric] = useState("sales");

  const periods = [
    { value: "today", label: "Hoje" },
    { value: "week", label: "Esta Semana" },
    { value: "month", label: "Este Mês" },
    { value: "quarter", label: "Trimestre" },
    { value: "year", label: "Ano" },
  ];

  const metrics = [
    { value: "sales", label: "Vendas", icon: DollarSign },
    { value: "orders", label: "Pedidos", icon: ShoppingBag },
    { value: "customers", label: "Clientes", icon: Users },
    { value: "items", label: "Itens", icon: Star },
  ];

  // Mock data for different periods
  const salesData = {
    today: { value: 2350.8, change: 12.5, trend: "up" },
    week: { value: 16456.2, change: 8.3, trend: "up" },
    month: { value: 68420.5, change: -2.1, trend: "down" },
    quarter: { value: 195680.3, change: 15.7, trend: "up" },
    year: { value: 742350.8, change: 22.4, trend: "up" },
  };

  const ordersData = {
    today: { value: 47, change: 8.0, trend: "up" },
    week: { value: 329, change: 12.5, trend: "up" },
    month: { value: 1456, change: -5.2, trend: "down" },
    quarter: { value: 4287, change: 18.9, trend: "up" },
    year: { value: 16834, change: 25.1, trend: "up" },
  };

  const insights = [
    {
      title: "Pico de Vendas",
      description: "Sexta-feira às 20h é o horário de maior movimento",
      impact: "high",
      icon: TrendingUp,
      color: "text-restaurant-green",
    },
    {
      title: "Item em Alta",
      description: "Picanha Grelhada teve 35% de aumento nas vendas",
      impact: "medium",
      icon: Star,
      color: "text-restaurant-yellow",
    },
    {
      title: "Tempo de Preparo",
      description: "Tempo médio reduziu para 18 minutos (-15%)",
      impact: "high",
      icon: Clock,
      color: "text-restaurant-green",
    },
    {
      title: "Mesa Mais Produtiva",
      description: "Mesa 5 gerou R$ 1.250 esta semana",
      impact: "medium",
      icon: Target,
      color: "text-restaurant-blue",
    },
  ];

  const hourlyData = [
    { hour: "08h", sales: 120, orders: 8 },
    { hour: "09h", sales: 180, orders: 12 },
    { hour: "10h", sales: 240, orders: 16 },
    { hour: "11h", sales: 380, orders: 24 },
    { hour: "12h", sales: 650, orders: 42 },
    { hour: "13h", sales: 720, orders: 48 },
    { hour: "14h", sales: 580, orders: 38 },
    { hour: "15h", sales: 320, orders: 22 },
    { hour: "16h", sales: 280, orders: 18 },
    { hour: "17h", sales: 420, orders: 28 },
    { hour: "18h", sales: 680, orders: 45 },
    { hour: "19h", sales: 850, orders: 56 },
    { hour: "20h", sales: 920, orders: 62 },
    { hour: "21h", sales: 780, orders: 52 },
    { hour: "22h", sales: 450, orders: 30 },
  ];

  const getCurrentData = () => {
    switch (selectedMetric) {
      case "sales":
        return salesData[selectedPeriod];
      case "orders":
        return ordersData[selectedPeriod];
      default:
        return salesData[selectedPeriod];
    }
  };

  const currentData = getCurrentData();

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
            <BarChart3 className="w-5 h-5 text-primary" />
          </div>
          <div>
            <h1 className="text-2xl font-bold">Relatórios</h1>
            <p className="text-muted-foreground">
              Análises e insights do seu negócio
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm">
            <Filter className="w-4 h-4 mr-2" />
            Filtros
          </Button>
          <Button variant="outline" size="sm">
            <Download className="w-4 h-4 mr-2" />
            Exportar
          </Button>
          <Button size="sm">
            <Eye className="w-4 h-4 mr-2" />
            Dashboard
          </Button>
        </div>
      </div>

      {/* Period and Metric Selectors */}
      <div className="flex flex-col sm:flex-row gap-4">
        <Card className="flex-1">
          <CardContent className="pt-6">
            <div className="flex items-center gap-2 mb-3">
              <Calendar className="w-4 h-4 text-muted-foreground" />
              <span className="text-sm font-medium">Período</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {periods.map((period) => (
                <Button
                  key={period.value}
                  variant={selectedPeriod === period.value ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedPeriod(period.value)}
                >
                  {period.label}
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="flex-1">
          <CardContent className="pt-6">
            <div className="flex items-center gap-2 mb-3">
              <BarChart3 className="w-4 h-4 text-muted-foreground" />
              <span className="text-sm font-medium">Métrica</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {metrics.map((metric) => (
                <Button
                  key={metric.value}
                  variant={selectedMetric === metric.value ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedMetric(metric.value)}
                >
                  <metric.icon className="w-4 h-4 mr-2" />
                  {metric.label}
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Main Metrics */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">
                  Vendas {periods.find(p => p.value === selectedPeriod)?.label}
                </p>
                <div className="text-2xl font-bold">
                  R$ {salesData[selectedPeriod].value.toLocaleString("pt-BR")}
                </div>
                <div className="flex items-center gap-1 text-sm">
                  {salesData[selectedPeriod].trend === "up" ? (
                    <TrendingUp className="w-4 h-4 text-restaurant-green" />
                  ) : (
                    <TrendingDown className="w-4 h-4 text-red-500" />
                  )}
                  <span
                    className={
                      salesData[selectedPeriod].trend === "up"
                        ? "text-restaurant-green"
                        : "text-red-500"
                    }
                  >
                    {salesData[selectedPeriod].change > 0 ? "+" : ""}
                    {salesData[selectedPeriod].change}%
                  </span>
                  <span className="text-muted-foreground">vs período anterior</span>
                </div>
              </div>
              <DollarSign className="w-8 h-8 text-muted-foreground" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">
                  Pedidos {periods.find(p => p.value === selectedPeriod)?.label}
                </p>
                <div className="text-2xl font-bold">
                  {ordersData[selectedPeriod].value.toLocaleString("pt-BR")}
                </div>
                <div className="flex items-center gap-1 text-sm">
                  {ordersData[selectedPeriod].trend === "up" ? (
                    <TrendingUp className="w-4 h-4 text-restaurant-green" />
                  ) : (
                    <TrendingDown className="w-4 h-4 text-red-500" />
                  )}
                  <span
                    className={
                      ordersData[selectedPeriod].trend === "up"
                        ? "text-restaurant-green"
                        : "text-red-500"
                    }
                  >
                    {ordersData[selectedPeriod].change > 0 ? "+" : ""}
                    {ordersData[selectedPeriod].change}%
                  </span>
                  <span className="text-muted-foreground">vs período anterior</span>
                </div>
              </div>
              <ShoppingBag className="w-8 h-8 text-muted-foreground" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">
                  Ticket Médio
                </p>
                <div className="text-2xl font-bold">
                  R$ {(salesData[selectedPeriod].value / ordersData[selectedPeriod].value).toFixed(2)}
                </div>
                <div className="flex items-center gap-1 text-sm">
                  <TrendingUp className="w-4 h-4 text-restaurant-green" />
                  <span className="text-restaurant-green">+5.2%</span>
                  <span className="text-muted-foreground">vs período anterior</span>
                </div>
              </div>
              <Users className="w-8 h-8 text-muted-foreground" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">
                  Tempo Médio
                </p>
                <div className="text-2xl font-bold">18min</div>
                <div className="flex items-center gap-1 text-sm">
                  <TrendingDown className="w-4 h-4 text-restaurant-green" />
                  <span className="text-restaurant-green">-15%</span>
                  <span className="text-muted-foreground">vs período anterior</span>
                </div>
              </div>
              <Clock className="w-8 h-8 text-muted-foreground" />
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {/* Sales Chart */}
        <div className="lg:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Vendas por Horário</CardTitle>
              <CardDescription>
                Distribuição das vendas ao longo do dia
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {hourlyData.map((data, index) => (
                  <div
                    key={data.hour}
                    className="flex items-center justify-between"
                  >
                    <span className="text-sm font-medium w-12">{data.hour}</span>
                    <div className="flex items-center gap-2 flex-1">
                      <div className="w-full bg-muted rounded-full h-2">
                        <div
                          className="bg-gradient-primary h-2 rounded-full transition-all duration-300"
                          style={{ width: `${(data.sales / 920) * 100}%` }}
                        />
                      </div>
                      <span className="text-sm text-muted-foreground w-20 text-right">
                        R$ {data.sales}
                      </span>
                      <span className="text-xs text-muted-foreground w-12 text-right">
                        {data.orders} ped.
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Vendas da Semana</CardTitle>
              <CardDescription>
                Evolução das vendas nos últimos 7 dias
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {mockWeeklySales.map((day, index) => (
                  <div
                    key={day.day}
                    className="flex items-center justify-between"
                  >
                    <span className="text-sm font-medium w-12">{day.day}</span>
                    <div className="flex items-center gap-2 flex-1">
                      <div className="w-full bg-muted rounded-full h-3">
                        <div
                          className="bg-gradient-secondary h-3 rounded-full transition-all duration-300"
                          style={{ width: `${(day.sales / 4100) * 100}%` }}
                        />
                      </div>
                      <span className="text-sm text-muted-foreground w-24 text-right">
                        R$ {day.sales.toLocaleString("pt-BR")}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Insights and Top Items */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Star className="w-5 h-5 text-restaurant-yellow" />
                Insights
              </CardTitle>
              <CardDescription>
                Descobertas importantes sobre seu negócio
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {insights.map((insight, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-3 border border-border rounded-lg hover:bg-accent/50 transition-colors"
                >
                  <div className={`w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center`}>
                    <insight.icon className={`w-4 h-4 ${insight.color}`} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h4 className="font-medium text-sm">{insight.title}</h4>
                      <Badge
                        variant="outline"
                        className={`text-xs ${
                          insight.impact === "high"
                            ? "border-restaurant-green text-restaurant-green"
                            : "border-restaurant-yellow text-restaurant-yellow"
                        }`}
                      >
                        {insight.impact === "high" ? "Alto" : "Médio"}
                      </Badge>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      {insight.description}
                    </p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Top Itens</CardTitle>
              <CardDescription>
                Itens mais vendidos no período
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {mockTopItems.map((item, index) => (
                  <div
                    key={item.name}
                    className="flex items-center justify-between"
                  >
                    <div className="flex items-center gap-2">
                      <Badge
                        variant="outline"
                        className="w-6 h-6 p-0 flex items-center justify-center text-xs"
                      >
                        {index + 1}
                      </Badge>
                      <span className="text-sm font-medium">{item.name}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-16 bg-muted rounded-full h-2">
                        <div
                          className="bg-gradient-success h-2 rounded-full transition-all duration-300"
                          style={{ width: `${(item.quantity / 23) * 100}%` }}
                        />
                      </div>
                      <span className="text-sm text-muted-foreground w-8 text-right">
                        {item.quantity}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ReportsPage;