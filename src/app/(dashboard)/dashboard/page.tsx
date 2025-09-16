import { Button } from "@/_components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/_components/ui/card";
import {
  TrendingUp,
  TrendingDown,
  DollarSign,
  ShoppingBag,
  Users,
  Star,
  Eye,
  ArrowUpRight,
} from "lucide-react";
import React from "react";
import {
  mockDashboardStats,
  mockOrders,
  mockTopItems,
  mockWeeklySales,
} from "../../../../data/mockData";
import { Badge } from "@/_components/ui/badge";
import StatCard from "@/_components/StatCard";

const DashboardPage = () => {
  const stats = mockDashboardStats;

  return (
    <div className="space-y-6">
      {/* Stats Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatCard
          title="Vendas Hoje"
          value={`R$ ${stats.todaySales.toLocaleString("pt-BR", {
            minimumFractionDigits: 2,
          })}`}
          description="vs. ontem"
          icon={DollarSign}
          trend="up"
          trendValue="+12%"
        />
        <StatCard
          title="Pedidos Hoje"
          value={stats.todayOrders}
          description="pedidos realizados"
          icon={ShoppingBag}
          trend="up"
          trendValue="+8%"
        />
        <StatCard
          title="Ticket Médio"
          value={`R$ ${stats.averageOrderValue.toLocaleString("pt-BR", {
            minimumFractionDigits: 2,
          })}`}
          description="valor médio"
          icon={Users}
          trend="up"
          trendValue="+5%"
        />
        <StatCard
          title="Item Top"
          value={stats.topSellingItem}
          description="mais vendido"
          icon={Star}
        />
      </div>

      {/* Charts Row */}
      <div className="grid gap-6 md:grid-cols-2">
        {/* Weekly Sales Chart */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-primary" />
              Vendas da Semana
            </CardTitle>
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
                  <span className="text-sm font-medium">{day.day}</span>
                  <div className="flex items-center gap-2">
                    <div className="w-24 bg-muted rounded-full h-2">
                      <div
                        className="bg-gradient-primary h-2 rounded-full transition-all duration-300"
                        style={{ width: `${(day.sales / 4100) * 100}%` }}
                      />
                    </div>
                    <span className="text-sm text-muted-foreground w-16 text-right">
                      R$ {day.sales.toLocaleString("pt-BR")}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Top Items Chart */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Star className="h-5 w-5 text-restaurant-yellow" />
              Top Vendas
            </CardTitle>
            <CardDescription>Itens mais vendidos hoje</CardDescription>
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
                        className="bg-gradient-secondary h-2 rounded-full transition-all duration-300"
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

      {/* Recent Orders */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <CardTitle>Pedidos Recentes</CardTitle>
            <CardDescription>
              Últimos pedidos do seu restaurante
            </CardDescription>
          </div>
          <Button variant="outline" size="sm">
            <Eye className="w-4 h-4 mr-2" />
            Ver todos
          </Button>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {mockOrders.slice(0, 3).map((order) => (
              <div
                key={order.id}
                className="flex items-center justify-between p-4 border border-border rounded-lg"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <ShoppingBag className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">
                      Mesa {order.tableNumber} - {order.customerName}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {order.items.length}{" "}
                      {order.items.length === 1 ? "item" : "itens"} •{" "}
                      {order.timestamp.toLocaleTimeString("pt-BR", {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Badge
                    variant={order.status === "ready" ? "default" : "secondary"}
                    className={
                      order.status === "ready"
                        ? "bg-restaurant-green text-white"
                        : ""
                    }
                  >
                    {order.status === "preparing"
                      ? "Preparando"
                      : order.status === "ready"
                      ? "Pronto"
                      : order.status === "pending"
                      ? "Pendente"
                      : "Entregue"}
                  </Badge>
                  <span className="font-medium">
                    R${" "}
                    {order.total.toLocaleString("pt-BR", {
                      minimumFractionDigits: 2,
                    })}
                  </span>
                  <Button variant="ghost" size="icon">
                    <ArrowUpRight className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default DashboardPage;
