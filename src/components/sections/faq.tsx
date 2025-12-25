"use client";

import { useState, useRef, useEffect } from "react";
import { Send, Bot, User, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { askQuestion } from "@/app/actions";
import { cn } from "@/lib/utils";

interface Message {
  role: "user" | "assistant";
  content: string;
}

export function Faq() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage: Message = { role: "user", content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      const result = await askQuestion(input);
      if (result.answer) {
        const assistantMessage: Message = { role: "assistant", content: result.answer };
        setMessages((prev) => [...prev, assistantMessage]);
      } else if (result.error) {
        const errorMessage: Message = { role: "assistant", content: result.error };
        setMessages((prev) => [...prev, errorMessage]);
      }
    } catch (error) {
      console.error("Failed to get answer:", error);
      const errorMessage: Message = { role: "assistant", content: "عذرًا، حدث خطأ ما. يرجى المحاولة مرة أخرى." };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTo({
        top: scrollAreaRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [messages]);

  return (
    <section id="faq" className="bg-secondary/50 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <Card className="max-w-3xl mx-auto shadow-lg">
          <CardHeader className="text-center">
            <CardTitle className="text-4xl md:text-5xl font-headline font-bold text-primary mb-4">
              اسألنا أي شيء
            </CardTitle>
            <CardDescription className="text-lg mt-8">
              لديك سؤال؟ مساعدنا الذكي جاهز للإجابة على استفساراتك فورًا.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col h-[500px]">
              <ScrollArea className="flex-grow p-4 border rounded-lg mb-4" ref={scrollAreaRef}>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                      <Avatar className="w-8 h-8 border">
                        <AvatarFallback>
                          <Bot className="w-5 h-5 text-primary" />
                        </AvatarFallback>
                      </Avatar>
                      <div className="bg-muted p-3 rounded-lg max-w-[80%]">
                        <p className="text-sm">أهلاً بك في عيادة نور! كيف يمكنني مساعدتك اليوم؟ يمكنك سؤالي عن خدماتنا، أسعارنا، أو كيفية حجز موعد.</p>
                      </div>
                    </div>
                  {messages.map((message, index) => (
                    <div
                      key={index}
                      className={cn(
                        "flex items-start gap-3",
                        message.role === "user" ? "justify-end" : "justify-start"
                      )}
                    >
                      {message.role === "assistant" && (
                        <Avatar className="w-8 h-8 border">
                          <AvatarFallback>
                            <Bot className="w-5 h-5 text-primary" />
                          </AvatarFallback>
                        </Avatar>
                      )}
                      <div
                        className={cn(
                          "p-3 rounded-lg max-w-[80%]",
                          message.role === "user"
                            ? "bg-primary text-primary-foreground"
                            : "bg-muted"
                        )}
                      >
                        <p className="text-sm" style={{ whiteSpace: 'pre-wrap' }}>{message.content}</p>
                      </div>
                      {message.role === "user" && (
                         <Avatar className="w-8 h-8 border">
                            <AvatarFallback>
                                <User className="w-5 h-5 text-primary" />
                            </AvatarFallback>
                        </Avatar>
                      )}
                    </div>
                  ))}
                   {isLoading && (
                    <div className="flex items-start gap-3">
                       <Avatar className="w-8 h-8 border">
                        <AvatarFallback>
                          <Bot className="w-5 h-5 text-primary" />
                        </AvatarFallback>
                      </Avatar>
                      <div className="bg-muted p-3 rounded-lg max-w-[80%] flex items-center">
                        <Loader2 className="w-5 h-5 animate-spin text-primary" />
                      </div>
                    </div>
                  )}
                </div>
              </ScrollArea>
              <form onSubmit={handleSendMessage} className="flex gap-2">
                <Input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="اكتب سؤالك هنا..."
                  className="flex-grow"
                  disabled={isLoading}
                />
                <Button type="submit" size="icon" disabled={isLoading || !input.trim()}>
                  {isLoading ? (
                    <Loader2 className="w-5 h-5 animate-spin" />
                  ) : (
                    <Send className="w-5 h-5" />
                  )}
                  <span className="sr-only">إرسال</span>
                </Button>
              </form>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
