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
import { Badge } from "@/_components/ui/badge";
import {
  ShoppingBag,
  Search,
  Filter,
  Eye,
  Clock,
  Users,
  MapPin,
  Phone,
  CheckCircle,
  AlertCircle,
  Timer,
  DollarSign,
  Calendar,
  MoreHorizontal,
} from "lucide-react";
import { mockOrders, mockTables } from "../../../../../data/mockData";

const OrdersPage = () => {
  const [orders, setOrders] = useState(mockOrders);
  const [tables, setTables] = useState(mockTables);
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [selectedOrder, setSelectedOrder] = useState(null);

  const updateOrderStatus = (orderId: string, newStatus: string) => {
    setOrders(orders.map(order => 
      order.id === orderId ? { ...order, status: newStatus } : order
    ));
  };

  const updateTableStatus = (tableId: string, newStatus: string) => {
    setTables(tables.map(table => 
      table.id === tableId ? { ...table, status: newStatus } : table
    ));
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "pending":
        return "bg-restaurant-yellow text-black";
      case "preparing":
        return "bg-restaurant-orange text-white";
      case "ready":
        return "bg-restaurant-green text-white";
      case "delivered":
        return "bg-muted text-muted-foreground";
      default:
        return "bg-muted";
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case "pending":
        return "Pendente";
      case "preparing":
        return "Preparando";
      case "ready":
        return "Pronto";
      case "delivered":
        return "Entregue";
      default:
        return status;
    }
  };

  const getTableStatusColor = (status: string) => {
    switch (status) {
      case "available":
        return "bg-restaurant-green text-white";
      case "occupied":
        return "bg-restaurant-orange text-white";
      case "cleaning":
        return "bg-restaurant-blue text-white";
      default:
        return "bg-muted";
    }
  };

  const getTableStatusText = (status: string) => {
    switch (status) {
      case "available":
        return "Disponível";
      case "occupied":
        return "Ocupada";
      case "cleaning":
        return "Limpeza";
      default:
        return status;
    }
  };

  const filteredOrders = orders.filter(order => {
    const matchesSearch = order.customerName.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         order.tableNumber.toString().includes(searchQuery);
    const matchesStatus = statusFilter === "all" || order.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const orderStats = {
    total: orders.length,
    pending: orders.filter(o => o.status === "pending").length,
    preparing: orders.filter(o => o.status === "preparing").length,
    ready: orders.filter(o => o.status === "ready").length,
    delivered: orders.filter(o => o.status === "delivered").length,
  };

  const tableStats = {
    total: tables.length,
    available: tables.filter(t => t.status === "available").length,
    occupied: tables.filter(t => t.status === "occupied").length,
    cleaning: tables.filter(t => t.status === "cleaning").length,
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
            <ShoppingBag className="w-5 h-5 text-primary" />
          </div>
          <div>
            <h1 className="text-2xl font-bold">Pedidos & Mesas</h1>
            <p className="text-muted-foreground">
              Gerencie pedidos e controle de mesas em tempo real
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm">
            <Calendar className="w-4 h-4 mr-2" />
            Hoje
          </Button>
          <Button size="sm">
            <Eye className="w-4 h-4 mr-2" />
            Relatório
          </Button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-2xl font-bold">{orderStats.total}</div>
                <p className="text-xs text-muted-foreground">Total de Pedidos</p>
              </div>
              <ShoppingBag className="w-8 h-8 text-muted-foreground" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-2xl font-bold text-restaurant-orange">
                  {orderStats.preparing}
                </div>
                <p className="text-xs text-muted-foreground">Em Preparação</p>
              </div>
              <Timer className="w-8 h-8 text-restaurant-orange" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-2xl font-bold text-restaurant-green">
                  {orderStats.ready}
                </div>
                <p className="text-xs text-muted-foreground">Prontos</p>
              </div>
              <CheckCircle className="w-8 h-8 text-restaurant-green" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-2xl font-bold text-restaurant-blue">
                  {tableStats.occupied}
                </div>
                <p className="text-xs text-muted-foreground">Mesas Ocupadas</p>
              </div>
              <Users className="w-8 h-8 text-restaurant-blue" />
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {/* Orders Section */}
        <div className="lg:col-span-2 space-y-6">
          {/* Filters */}
          <Card>
            <CardContent className="pt-6">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Pesquisar por cliente ou mesa..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10"
                  />
                </div>
                <div className="flex items-center gap-2">
                  <Filter className="w-4 h-4 text-muted-foreground" />
                  <select
                    value={statusFilter}
                    onChange={(e) => setStatusFilter(e.target.value)}
                    className="px-3 py-2 border border-border rounded-md bg-background"
                  >
                    <option value="all">Todos os status</option>
                    <option value="pending">Pendente</option>
                    <option value="preparing">Preparando</option>
                    <option value="ready">Pronto</option>
                    <option value="delivered">Entregue</option>
                  </select>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Orders List */}
          <div className="space-y-4">
            {filteredOrders.map((order) => (
              <Card key={order.id} className="hover:shadow-md transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                        <ShoppingBag className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="font-semibold">Mesa {order.tableNumber}</h3>
                          <Badge className={getStatusColor(order.status)}>
                            {getStatusText(order.status)}
                          </Badge>
                        </div>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Users className="w-4 h-4" />
                            {order.customerName}
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            {order.timestamp.toLocaleTimeString("pt-BR", {
                              hour: "2-digit",
                              minute: "2-digit",
                            })}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center gap-1 text-lg font-bold text-restaurant-green">
                        <DollarSign className="w-5 h-5" />
                        {order.total.toLocaleString("pt-BR", {
                          minimumFractionDigits: 2,
                        })}
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {order.items.length} {order.items.length === 1 ? "item" : "itens"}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-2 mb-4">
                    {order.items.map((item, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between p-2 bg-muted/50 rounded"
                      >
                        <div>
                          <span className="font-medium">{item.menuItem.name}</span>
                          {item.notes && (
                            <p className="text-xs text-muted-foreground mt-1">
                              Obs: {item.notes}
                            </p>
                          )}
                        </div>
                        <div className="flex items-center gap-2">
                          <Badge variant="outline">{item.quantity}x</Badge>
                          <span className="text-sm font-medium">
                            R$ {(item.menuItem.price * item.quantity).toFixed(2)}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="flex gap-2">
                    {order.status === "pending" && (
                      <Button
                        size="sm"
                        onClick={() => updateOrderStatus(order.id, "preparing")}
                      >
                        Iniciar Preparo
                      </Button>
                    )}
                    {order.status === "preparing" && (
                      <Button
                        size="sm"
                        className="bg-restaurant-green hover:bg-restaurant-green/90"
                        onClick={() => updateOrderStatus(order.id, "ready")}
                      >
                        Marcar como Pronto
                      </Button>
                    )}
                    {order.status === "ready" && (
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => updateOrderStatus(order.id, "delivered")}
                      >
                        Marcar como Entregue
                      </Button>
                    )}
                    <Button variant="outline" size="sm">
                      <Eye className="w-4 h-4 mr-2" />
                      Detalhes
                    </Button>
                    <Button variant="outline" size="sm">
                      <MoreHorizontal className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Tables Section */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MapPin className="w-5 h-5" />
                Controle de Mesas
              </CardTitle>
              <CardDescription>
                Status atual das mesas do restaurante
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-3">
                {tables.map((table) => (
                  <div
                    key={table.id}
                    className="flex items-center justify-between p-3 border border-border rounded-lg hover:bg-accent/50 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                        <span className="font-bold text-primary">
                          {table.number}
                        </span>
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-medium">Mesa {table.number}</span>
                          <Badge className={getTableStatusColor(table.status)}>
                            {getTableStatusText(table.status)}
                          </Badge>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Users className="w-4 h-4" />
                          {table.capacity} lugares
                          {table.currentOrder && (
                            <>
                              <span>•</span>
                              <span>{table.currentOrder.customerName}</span>
                            </>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-1">
                      {table.status === "occupied" && (
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => updateTableStatus(table.id, "cleaning")}
                        >
                          Limpar
                        </Button>
                      )}
                      {table.status === "cleaning" && (
                        <Button
                          size="sm"
                          onClick={() => updateTableStatus(table.id, "available")}
                        >
                          Liberar
                        </Button>
                      )}
                      {table.status === "available" && (
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => updateTableStatus(table.id, "occupied")}
                        >
                          Ocupar
                        </Button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <Card>
            <CardHeader>
              <CardTitle>Ações Rápidas</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button className="w-full justify-start" variant="outline">
                <Phone className="w-4 h-4 mr-2" />
                Novo Pedido por Telefone
              </Button>
              <Button className="w-full justify-start" variant="outline">
                <Users className="w-4 h-4 mr-2" />
                Reservar Mesa
              </Button>
              <Button className="w-full justify-start" variant="outline">
                <AlertCircle className="w-4 h-4 mr-2" />
                Reportar Problema
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default OrdersPage;