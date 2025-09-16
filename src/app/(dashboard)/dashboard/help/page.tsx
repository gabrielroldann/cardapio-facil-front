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
  HelpCircle,
  MessageCircle,
  Book,
  Video,
  Phone,
  Mail,
  Search,
  ChevronRight,
  Clock,
  CheckCircle,
  Send,
} from "lucide-react";

const HelpPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [chatMessage, setChatMessage] = useState("");
  const [chatMessages, setChatMessages] = useState([
    {
      id: 1,
      type: "bot",
      message: "Olá! Como posso ajudá-lo hoje?",
      timestamp: new Date(Date.now() - 5 * 60000),
    },
  ]);

  const faqItems = [
    {
      question: "Como adicionar um novo item ao cardápio?",
      answer: "Vá para 'Meu Cardápio' > 'Adicionar Item' e preencha as informações.",
      category: "Cardápio",
    },
    {
      question: "Como gerar QR Code para as mesas?",
      answer: "Acesse 'Configurações' > 'QR Codes' e clique em 'Gerar Códigos'.",
      category: "QR Code",
    },
    {
      question: "Como visualizar relatórios de vendas?",
      answer: "Vá para a seção 'Relatórios' no menu lateral.",
      category: "Relatórios",
    },
    {
      question: "Como gerenciar usuários da equipe?",
      answer: "Acesse 'Configurações' > 'Usuários' para adicionar ou remover membros.",
      category: "Usuários",
    },
  ];

  const supportChannels = [
    {
      icon: MessageCircle,
      title: "Chat ao Vivo",
      description: "Resposta em até 5 minutos",
      status: "online",
      action: "Iniciar Chat",
    },
    {
      icon: Phone,
      title: "Telefone",
      description: "(11) 9999-9999",
      status: "available",
      action: "Ligar Agora",
    },
    {
      icon: Mail,
      title: "Email",
      description: "suporte@cardapiofacil.com",
      status: "available",
      action: "Enviar Email",
    },
    {
      icon: Video,
      title: "Videochamada",
      description: "Agendar demonstração",
      status: "schedule",
      action: "Agendar",
    },
  ];

  const handleSendMessage = () => {
    if (!chatMessage.trim()) return;

    const newMessage = {
      id: chatMessages.length + 1,
      type: "user",
      message: chatMessage,
      timestamp: new Date(),
    };

    setChatMessages([...chatMessages, newMessage]);
    setChatMessage("");

    // Simular resposta do bot
    setTimeout(() => {
      const botResponse = {
        id: chatMessages.length + 2,
        type: "bot",
        message: "Obrigado pela sua mensagem! Nossa equipe irá analisá-la e responder em breve.",
        timestamp: new Date(),
      };
      setChatMessages(prev => [...prev, botResponse]);
    }, 1000);
  };

  const filteredFAQ = faqItems.filter(
    item =>
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
          <HelpCircle className="w-5 h-5 text-primary" />
        </div>
        <div>
          <h1 className="text-2xl font-bold">Central de Ajuda</h1>
          <p className="text-muted-foreground">
            Encontre respostas ou entre em contato conosco
          </p>
        </div>
      </div>

      {/* Search */}
      <Card>
        <CardContent className="pt-6">
          <div className="relative">
            <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Pesquisar na central de ajuda..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
        </CardContent>
      </Card>

      <div className="grid gap-6 lg:grid-cols-3">
        {/* FAQ Section */}
        <div className="lg:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Book className="w-5 h-5" />
                Perguntas Frequentes
              </CardTitle>
              <CardDescription>
                Respostas para as dúvidas mais comuns
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {filteredFAQ.map((item, index) => (
                <div
                  key={index}
                  className="border border-border rounded-lg p-4 hover:bg-accent/50 transition-colors cursor-pointer group"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <Badge variant="outline" className="text-xs">
                          {item.category}
                        </Badge>
                      </div>
                      <h3 className="font-medium mb-2 group-hover:text-primary transition-colors">
                        {item.question}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {item.answer}
                      </p>
                    </div>
                    <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Support Channels */}
          <Card>
            <CardHeader>
              <CardTitle>Canais de Suporte</CardTitle>
              <CardDescription>
                Escolha a melhor forma de entrar em contato
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2">
                {supportChannels.map((channel, index) => (
                  <div
                    key={index}
                    className="border border-border rounded-lg p-4 hover:shadow-md transition-all"
                  >
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                        <channel.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="font-medium">{channel.title}</h3>
                          <div
                            className={`w-2 h-2 rounded-full ${
                              channel.status === "online"
                                ? "bg-restaurant-green"
                                : channel.status === "available"
                                ? "bg-restaurant-blue"
                                : "bg-restaurant-yellow"
                            }`}
                          />
                        </div>
                        <p className="text-sm text-muted-foreground mb-3">
                          {channel.description}
                        </p>
                        <Button size="sm" variant="outline" className="w-full">
                          {channel.action}
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Chat Section */}
        <div className="space-y-6">
          <Card className="h-[600px] flex flex-col">
            <CardHeader className="border-b">
              <CardTitle className="flex items-center gap-2">
                <MessageCircle className="w-5 h-5" />
                Chat de Suporte
                <div className="w-2 h-2 bg-restaurant-green rounded-full ml-auto" />
              </CardTitle>
              <CardDescription>
                Nossa equipe está online agora
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-1 flex flex-col p-0">
              {/* Messages */}
              <div className="flex-1 p-4 space-y-4 overflow-y-auto">
                {chatMessages.map((msg) => (
                  <div
                    key={msg.id}
                    className={`flex ${
                      msg.type === "user" ? "justify-end" : "justify-start"
                    }`}
                  >
                    <div
                      className={`max-w-[80%] rounded-lg p-3 ${
                        msg.type === "user"
                          ? "bg-primary text-primary-foreground"
                          : "bg-muted"
                      }`}
                    >
                      <p className="text-sm">{msg.message}</p>
                      <div className="flex items-center gap-1 mt-1">
                        <Clock className="w-3 h-3 opacity-70" />
                        <span className="text-xs opacity-70">
                          {msg.timestamp.toLocaleTimeString("pt-BR", {
                            hour: "2-digit",
                            minute: "2-digit",
                          })}
                        </span>
                        {msg.type === "user" && (
                          <CheckCircle className="w-3 h-3 opacity-70" />
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Input */}
              <div className="border-t p-4">
                <div className="flex gap-2">
                  <Input
                    placeholder="Digite sua mensagem..."
                    value={chatMessage}
                    onChange={(e) => setChatMessage(e.target.value)}
                    onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                  />
                  <Button onClick={handleSendMessage} size="icon">
                    <Send className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default HelpPage;