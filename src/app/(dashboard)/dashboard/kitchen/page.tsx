"use client";

import React, { useState, useEffect } from "react";
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
  ChefHat,
  Clock,
  CheckCircle,
  AlertCircle,
  Timer,
  Users,
  Utensils,
  Play,
  Pause,
  RotateCcw,
} from "lucide-react";
import { mockOrders } from "../../../../../data/mockData";

const KitchenPage = () => {
  const [orders, setOrders] = useState(mockOrders);
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const updateOrderStatus = (orderId: string, newStatus: string) => {
    setOrders(orders.map(order => 
      order.id === orderId ? { ...order, status: newStatus } : order
    ));
  };

  const getElapsedTime = (timestamp: Date) => {
    const elapsed = Math.floor((currentTime.getTime() - timestamp.getTime()) / 1000 / 60);
    return elapsed;
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

  const getPriorityLevel = (elapsedTime: number) => {
    if (elapsedTime > 30) return "high";
    if (elapsedTime > 15) return "medium";
    return "low";
  };

  const activeOrders = orders.filter(order => order.status !== "delivered");
  const pendingOrders = activeOrders.filter(order => order.status === "pending");
  const preparingOrders = activeOrders.filter(order => order.status === "preparing");
  const readyOrders = activeOrders.filter(order => order.status === "ready");

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
            <ChefHat className="w-5 h-5 text-primary" />
          </div>
          <div>
            <h1 className="text-2xl font-bold">Cozinha (KDS)</h1>
            <p className="text-muted-foreground">
              Sistema de Display da Cozinha - {currentTime.toLocaleTimeString("pt-BR")}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-restaurant-yellow">
              {pendingOrders.length}
            </div>
            <div className="text-xs text-muted-foreground">Pendentes</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-restaurant-orange">
              {preparingOrders.length}
            </div>
            <div className="text-xs text-muted-foreground">Preparando</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-restaurant-green">
              {readyOrders.length}
            </div>
            <div className="text-xs text-muted-foreground">Prontos</div>
          </div>
        </div>
      </div>

      {/* Orders Grid */}
      <div className="grid gap-6 lg:grid-cols-3">
        {/* Pending Orders */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <AlertCircle className="w-5 h-5 text-restaurant-yellow" />
            <h2 className="text-lg font-semibold">Pedidos Pendentes</h2>
            <Badge variant="outline" className="ml-auto">
              {pendingOrders.length}
            </Badge>
          </div>

          {pendingOrders.map((order) => {
            const elapsedTime = getElapsedTime(order.timestamp);
            const priority = getPriorityLevel(elapsedTime);

            return (
              <Card
                key={order.id}
                className={`border-l-4 ${
                  priority === "high"
                    ? "border-l-red-500 bg-red-50 dark:bg-red-950/20"
                    : priority === "medium"
                    ? "border-l-yellow-500 bg-yellow-50 dark:bg-yellow-950/20"
                    : "border-l-blue-500"
                }`}
              >
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">
                      Mesa {order.tableNumber}
                    </CardTitle>
                    <div className="flex items-center gap-2">
                      <Timer className="w-4 h-4 text-muted-foreground" />
                      <span className={`text-sm font-medium ${
                        priority === "high" ? "text-red-600" : 
                        priority === "medium" ? "text-yellow-600" : 
                        "text-muted-foreground"
                      }`}>
                        {elapsedTime}min
                      </span>
                    </div>
                  </div>
                  <CardDescription className="flex items-center gap-2">
                    <Users className="w-4 h-4" />
                    {order.customerName}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    {order.items.map((item, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between p-2 bg-background rounded border"
                      >
                        <div>
                          <span className="font-medium">{item.menuItem.name}</span>
                          {item.notes && (
                            <p className="text-xs text-muted-foreground mt-1">
                              Obs: {item.notes}
                            </p>
                          )}
                        </div>
                        <Badge variant="outline" className="ml-2">
                          {item.quantity}x
                        </Badge>
                      </div>
                    ))}
                  </div>

                  <div className="flex gap-2">
                    <Button
                      onClick={() => updateOrderStatus(order.id, "preparing")}
                      className="flex-1"
                      size="sm"
                    >
                      <Play className="w-4 h-4 mr-2" />
                      Iniciar
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Preparing Orders */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <Utensils className="w-5 h-5 text-restaurant-orange" />
            <h2 className="text-lg font-semibold">Em Preparação</h2>
            <Badge variant="outline" className="ml-auto">
              {preparingOrders.length}
            </Badge>
          </div>

          {preparingOrders.map((order) => {
            const elapsedTime = getElapsedTime(order.timestamp);

            return (
              <Card
                key={order.id}
                className="border-l-4 border-l-orange-500 bg-orange-50 dark:bg-orange-950/20"
              >
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">
                      Mesa {order.tableNumber}
                    </CardTitle>
                    <div className="flex items-center gap-2">
                      <Timer className="w-4 h-4 text-orange-600" />
                      <span className="text-sm font-medium text-orange-600">
                        {elapsedTime}min
                      </span>
                    </div>
                  </div>
                  <CardDescription className="flex items-center gap-2">
                    <Users className="w-4 h-4" />
                    {order.customerName}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    {order.items.map((item, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between p-2 bg-background rounded border"
                      >
                        <div>
                          <span className="font-medium">{item.menuItem.name}</span>
                          {item.notes && (
                            <p className="text-xs text-muted-foreground mt-1">
                              Obs: {item.notes}
                            </p>
                          )}
                        </div>
                        <Badge variant="outline" className="ml-2">
                          {item.quantity}x
                        </Badge>
                      </div>
                    ))}
                  </div>

                  <div className="flex gap-2">
                    <Button
                      onClick={() => updateOrderStatus(order.id, "ready")}
                      className="flex-1 bg-restaurant-green hover:bg-restaurant-green/90"
                      size="sm"
                    >
                      <CheckCircle className="w-4 h-4 mr-2" />
                      Finalizar
                    </Button>
                    <Button
                      onClick={() => updateOrderStatus(order.id, "pending")}
                      variant="outline"
                      size="sm"
                    >
                      <RotateCcw className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Ready Orders */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <CheckCircle className="w-5 h-5 text-restaurant-green" />
            <h2 className="text-lg font-semibold">Pedidos Prontos</h2>
            <Badge variant="outline" className="ml-auto">
              {readyOrders.length}
            </Badge>
          </div>

          {readyOrders.map((order) => {
            const elapsedTime = getElapsedTime(order.timestamp);

            return (
              <Card
                key={order.id}
                className="border-l-4 border-l-green-500 bg-green-50 dark:bg-green-950/20"
              >
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">
                      Mesa {order.tableNumber}
                    </CardTitle>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <span className="text-sm font-medium text-green-600">
                        Pronto
                      </span>
                    </div>
                  </div>
                  <CardDescription className="flex items-center gap-2">
                    <Users className="w-4 h-4" />
                    {order.customerName}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    {order.items.map((item, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between p-2 bg-background rounded border"
                      >
                        <div>
                          <span className="font-medium">{item.menuItem.name}</span>
                          {item.notes && (
                            <p className="text-xs text-muted-foreground mt-1">
                              Obs: {item.notes}
                            </p>
                          )}
                        </div>
                        <Badge variant="outline" className="ml-2">
                          {item.quantity}x
                        </Badge>
                      </div>
                    ))}
                  </div>

                  <div className="text-center p-3 bg-green-100 dark:bg-green-900/30 rounded-lg">
                    <p className="text-sm font-medium text-green-700 dark:text-green-300">
                      ✅ Pedido pronto para entrega
                    </p>
                    <p className="text-xs text-green-600 dark:text-green-400 mt-1">
                      Aguardando retirada pelo garçom
                    </p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default KitchenPage;