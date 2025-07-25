import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Index = () => {
  const games = [
    {
      id: 1,
      title: "Слоты",
      description: "Классические игровые автоматы",
      icon: "Zap",
      color: "from-yellow-400 to-orange-500"
    },
    {
      id: 2,
      title: "КНБ",
      description: "Камень, ножницы, бумага",
      icon: "Hand",
      color: "from-purple-400 to-pink-500"
    },
    {
      id: 3,
      title: "Рулетка",
      description: "Классическая рулетка",
      icon: "Circle",
      color: "from-red-400 to-orange-500"
    }
  ];

  const userStats = [
    { label: "Уровень", value: "0" },
    { label: "Звёзды", value: "0" },
    { label: "Друзья", value: "0" }
  ];

  return (
    <div className="min-h-screen bg-background star-pattern relative overflow-hidden">
      {/* Header */}
      <div className="relative z-10 pt-14 pb-8">
        <div className="text-center space-y-4">
          {/* Logo/Avatar */}
          <div className="mx-auto w-24 h-24 rounded-full bg-gradient-to-br from-purple-600 to-purple-800 border-4 border-primary flex items-center justify-center star-shadow">
            <div className="text-4xl">💀</div>
          </div>
          
          {/* Title */}
          <div className="space-y-2">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-orange-400 bg-clip-text text-transparent">
              STARSHUB
            </h1>
            <p className="text-muted-foreground flex items-center justify-center gap-2">
              <Icon name="Sparkles" size={16} className="text-primary" />
              Azart Gaming Experience
              <Icon name="Sparkles" size={16} className="text-primary" />
            </p>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="px-6 mb-8">
        <div className="flex justify-center">
          <div className="flex divide-x divide-border bg-card/50 backdrop-blur-sm rounded-lg border border-border/50">
            {userStats.map((stat, index) => (
              <div key={index} className="px-6 py-3 text-center">
                <div className="text-2xl font-bold text-primary">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Games Section */}
      <div className="px-6 space-y-4">
        <h2 className="text-xl font-semibold text-foreground">Игры</h2>
        
        <div className="space-y-3">
          {games.map((game) => (
            <Card key={game.id} className="game-card-glow bg-card/70 backdrop-blur-sm border-border/50 hover:bg-card/90 transition-all duration-300">
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${game.color} flex items-center justify-center star-shadow`}>
                      <Icon name={game.icon as any} size={24} className="text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">{game.title}</h3>
                      <p className="text-sm text-muted-foreground">{game.description}</p>
                    </div>
                  </div>
                  <Button 
                    size="sm" 
                    className="gold-gradient text-black font-semibold hover:scale-105 transition-transform"
                  >
                    PLAY
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-card/80 backdrop-blur-md border-t border-border/50">
        <div className="flex justify-around py-2">
          {[
            { icon: "Home", label: "Главная", active: false },
            { icon: "Gamepad2", label: "Игры", active: true },
            { icon: "Trophy", label: "Задания", active: false },
            { icon: "User", label: "Профиль", active: false }
          ].map((item, index) => (
            <button
              key={index}
              className={`flex flex-col items-center py-2 px-3 rounded-lg transition-colors ${
                item.active 
                  ? 'text-primary' 
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              <Icon 
                name={item.icon as any} 
                size={20} 
                className={item.active ? 'star-shadow' : ''} 
              />
              <span className="text-xs mt-1">{item.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Floating Stars */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {Array.from({ length: 12 }).map((_, i) => (
          <div
            key={i}
            className="absolute text-primary/30 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              fontSize: `${8 + Math.random() * 8}px`
            }}
          >
            ✦
          </div>
        ))}
      </div>
    </div>
  );
};

export default Index;