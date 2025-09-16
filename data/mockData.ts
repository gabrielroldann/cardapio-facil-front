import Bruschetta_Italiana from "../public/Bruschetta_Italiana.jpg";
import Tabua_Queijos from "../public/Tabua_Queijos.jpg";
import Risotto_Camarao from "../public/Tabua_Queijos.jpg";
import Picanha_Grelhada from "../public/Picanha_Grelhada.jpg";
import Tiramisù from "../public/Tiramisù.jpg";

// Mock data for the CardápioFácil SaaS
export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
  available: boolean;
  preparationTime: number;
}

export interface Category {
  id: string;
  name: string;
  description: string;
  icon: string;
  items: MenuItem[];
}

export interface Order {
  id: string;
  tableNumber: number;
  customerName: string;
  items: {
    menuItem: MenuItem;
    quantity: number;
    notes?: string;
  }[];
  status: "pending" | "preparing" | "ready" | "delivered";
  timestamp: Date;
  total: number;
}

export interface Table {
  id: string;
  number: number;
  capacity: number;
  status: "available" | "occupied" | "cleaning";
  currentOrder?: Order;
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: "owner" | "waiter" | "chef" | "manager";
  avatar: string;
  active: boolean;
}

export interface DashboardStats {
  todaySales: number;
  todayOrders: number;
  averageOrderValue: number;
  topSellingItem: string;
  weeklyGrowth: number;
}

// Mock Categories and Menu Items
export const mockCategories: Category[] = [
  {
    id: "1",
    name: "Entradas",
    description: "Deliciosas opções para começar",
    icon: "🥗",
    items: [
      {
        id: "1",
        name: "Bruschetta Italiana",
        description: "Pão italiano com tomate fresco, manjericão e azeite",
        price: 18.9,
        category: "Entradas",
        image: `${Bruschetta_Italiana}`,
        available: true,
        preparationTime: 10,
      },
      {
        id: "2",
        name: "Tábua de Queijos",
        description: "Seleção especial de queijos com geleias e pães",
        price: 45.9,
        category: "Entradas",
        image: `${Tabua_Queijos}`,
        available: true,
        preparationTime: 5,
      },
    ],
  },
  {
    id: "2",
    name: "Pratos Principais",
    description: "Nossos pratos especiais",
    icon: "🍝",
    items: [
      {
        id: "3",
        name: "Risotto de Camarão",
        description: "Risotto cremoso com camarões frescos e aspargos",
        price: 68.9,
        category: "Pratos Principais",
        image: `${Risotto_Camarao}`,
        available: true,
        preparationTime: 25,
      },
      {
        id: "4",
        name: "Picanha Grelhada",
        description: "Picanha argentina com acompanhamentos",
        price: 89.9,
        category: "Pratos Principais",
        image: `${Picanha_Grelhada}`,
        available: true,
        preparationTime: 30,
      },
    ],
  },
  {
    id: "3",
    name: "Sobremesas",
    description: "Finalize com doçura",
    icon: "🍰",
    items: [
      {
        id: "5",
        name: "Tiramisù",
        description: "Clássico italiano com café e mascarpone",
        price: 24.9,
        category: "Sobremesas",
        image: `${Tiramisù}`,
        available: true,
        preparationTime: 5,
      },
    ],
  },
];

// Mock Orders
export const mockOrders: Order[] = [
  {
    id: "1",
    tableNumber: 5,
    customerName: "João Silva",
    items: [
      { menuItem: mockCategories[0].items[0], quantity: 2 },
      { menuItem: mockCategories[1].items[0], quantity: 1 },
    ],
    status: "preparing",
    timestamp: new Date(Date.now() - 15 * 60000),
    total: 106.7,
  },
  {
    id: "2",
    tableNumber: 3,
    customerName: "Maria Santos",
    items: [
      {
        menuItem: mockCategories[1].items[1],
        quantity: 1,
        notes: "Mal passada",
      },
    ],
    status: "ready",
    timestamp: new Date(Date.now() - 30 * 60000),
    total: 89.9,
  },
];

// Mock Tables
export const mockTables: Table[] = [
  { id: "1", number: 1, capacity: 4, status: "available" },
  { id: "2", number: 2, capacity: 2, status: "available" },
  {
    id: "3",
    number: 3,
    capacity: 4,
    status: "occupied",
    currentOrder: mockOrders[1],
  },
  { id: "4", number: 4, capacity: 6, status: "cleaning" },
  {
    id: "5",
    number: 5,
    capacity: 4,
    status: "occupied",
    currentOrder: mockOrders[0],
  },
  { id: "6", number: 6, capacity: 2, status: "available" },
];

// Mock Users
export const mockUsers: User[] = [
  {
    id: "1",
    name: "Roberto Oliveira",
    email: "roberto@restaurante.com",
    role: "owner",
    avatar: "/api/placeholder/40/40",
    active: true,
  },
  {
    id: "2",
    name: "Ana Costa",
    email: "ana@restaurante.com",
    role: "waiter",
    avatar: "/api/placeholder/40/40",
    active: true,
  },
  {
    id: "3",
    name: "Carlos Chef",
    email: "carlos@restaurante.com",
    role: "chef",
    avatar: "/api/placeholder/40/40",
    active: true,
  },
];

// Mock Dashboard Stats
export const mockDashboardStats: DashboardStats = {
  todaySales: 2350.8,
  todayOrders: 47,
  averageOrderValue: 50.02,
  topSellingItem: "Picanha Grelhada",
  weeklyGrowth: 12.5,
};

// Mock weekly sales data for charts
export const mockWeeklySales = [
  { day: "Seg", sales: 1200 },
  { day: "Ter", sales: 1890 },
  { day: "Qua", sales: 2300 },
  { day: "Qui", sales: 2100 },
  { day: "Sex", sales: 3200 },
  { day: "Sab", sales: 4100 },
  { day: "Dom", sales: 3500 },
];

// Mock top selling items for charts
export const mockTopItems = [
  { name: "Picanha Grelhada", quantity: 23 },
  { name: "Risotto de Camarão", quantity: 18 },
  { name: "Bruschetta Italiana", quantity: 15 },
  { name: "Tiramisù", quantity: 12 },
  { name: "Tábua de Queijos", quantity: 8 },
];
