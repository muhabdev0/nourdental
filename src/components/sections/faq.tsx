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

type Message = {
  role: "user" | "bot" | "loading";
  content: string;
};

const predefinedQuestions = [
  "هل العلاج مؤلم؟",
  "هل تقبلون التأمين؟",
  "كم تستغرق مدة العلاج؟",
  "كيف يمكنني حجز موعد؟",
];

export function Faq() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollAreaRef.current) {
        // A bit of a hack to scroll to bottom.
        const viewport = scrollAreaRef.current.querySelector('div');
        if (viewport) {
          viewport.scrollTop = viewport.scrollHeight;
        }
    }
  }, [messages]);

  const handleSend = async (question: string) => {
    if (!question.trim()) return;

    setMessages((prev) => [...prev, { role: "user", content: question }]);
    setInput("");
    setMessages((prev) => [...prev, { role: "loading", content: "..." }]);

    const response = await askQuestion(question);

    setMessages((prev) => prev.filter((msg) => msg.role !== "loading"));
    if (response.answer) {
      setMessages((prev) => [...prev, { role: "bot", content: response.answer }]);
    } else {
      setMessages((prev) => [
        ...prev,
        { role: "bot", content: response.error || "عذرًا، حدث خطأ ما." },
      ]);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleSend(input);
  };
  
  return (
    <section id="faq" className="bg-background py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-headline font-bold text-primary">
            أسئلة شائعة
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            لديك سؤال؟ احصل على إجابة فورية من مساعدنا الذكي.
          </p>
        </div>

        <Card className="max-w-3xl mx-auto shadow-lg">
          <CardContent className="p-0">
            <div className="flex flex-col h-[600px]">
              <ScrollArea className="flex-grow p-6" ref={scrollAreaRef}>
                <div className="space-y-6">
                  <div className="flex items-start gap-3">
                    <Avatar className="w-10 h-10 border-2 border-primary">
                      <AvatarFallback><Bot /></AvatarFallback>
                    </Avatar>
                    <div className="bg-secondary rounded-lg p-3 max-w-[80%]">
                      <p className="font-semibold text-primary mb-1">مساعد نور الذكي</p>
                      <p>أهلاً بك! كيف يمكنني مساعدتك اليوم؟</p>
                    </div>
                  </div>
                  {messages.map((message, index) => (
                    <div
                      key={index}
                      className={cn("flex items-start gap-3", message.role === "user" && "justify-end")}
                    >
                      {message.role === "bot" && (
                        <Avatar className="w-10 h-10 border-2 border-primary">
                          <AvatarFallback><Bot /></AvatarFallback>
                        </Avatar>
                      )}
                      <div
                        className={cn(
                          "rounded-lg p-3 max-w-[80%]",
                          message.role === "user" ? "bg-primary text-primary-foreground" : "bg-secondary"
                        )}
                      >
                         {message.role === "user" && <p className="font-semibold text-primary-foreground mb-1">أنت</p>}
                         {message.role === "bot" && <p className="font-semibold text-primary mb-1">مساعد نور الذكي</p>}
                        {message.role === "loading" ? (
                           <div className="flex items-center gap-2">
                            <Loader2 className="h-5 w-5 animate-spin" />
                            <span>...يفكر</span>
                          </div>
                        ) : (
                          <p className="whitespace-pre-wrap">{message.content}</p>
                        )}
                      </div>
                       {message.role === "user" && (
                        <Avatar className="w-10 h-10 border-2 border-muted">
                           <AvatarFallback><User /></AvatarFallback>
                        </Avatar>
                      )}
                    </div>
                  ))}
                </div>
              </ScrollArea>
              
              {messages.length === 0 && (
                <div className="p-6 border-t">
                  <p className="text-sm text-muted-foreground mb-3 text-center">أو اختر سؤالاً شائعاً:</p>
                  <div className="grid grid-cols-2 gap-2">
                    {predefinedQuestions.map(q => (
                       <Button key={q} variant="outline" size="sm" onClick={() => handleSend(q)}>{q}</Button>
                    ))}
                  </div>
                </div>
              )}

              <div className="p-4 border-t bg-secondary/50">
                <form onSubmit={handleSubmit} className="flex gap-2">
                  <Input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="اكتب سؤالك هنا..."
                    className="flex-grow bg-background"
                  />
                  <Button type="submit" size="icon" disabled={!input.trim()}>
                    <Send className="h-5 w-5" />
                  </Button>
                </form>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
