import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { useNavigate } from "react-router-dom";

const Games = () => {
  const navigate = useNavigate();
  
  const games = [
    {
      id: 1,
      title: "Слоты",
      description: "Классические игровые автоматы",
      icon: "Zap",
      color: "from-yellow-400 to-orange-500",
      emoji: "🎰"
    },
    {
      id: 2,
      title: "КНБ",
      description: "Камень, ножницы, бумага",
      icon: "Hand",
      color: "from-purple-400 to-pink-500",
      emoji: "✂️"
    },
    {
      id: 3,
      title: "Рулетка",
      description: "Классическая рулетка",
      icon: "Circle",
      color: "from-red-400 to-orange-500",
      emoji: "🎯"
    }
  ];

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Telegram Header Space */}
      <div className="h-12"></div>
      
      {/* Header */}
      <div className="pt-8 pb-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-500 bg-clip-text text-transparent">
            ИГРЫ
          </h1>
          <div className="flex items-center justify-center gap-2 text-gray-400">
            <Icon name="Gamepad2" size={16} className="text-yellow-400" />
            <span>Выберите игру для начала</span>
            <Icon name="Gamepad2" size={16} className="text-yellow-400" />
          </div>
        </div>
      </div>

      {/* Games Grid */}
      <div className="px-6 space-y-4 pb-24">
        {games.map((game) => (
          <Card 
            key={game.id} 
            className="bg-gray-900/70 backdrop-blur-sm border-gray-700/50 hover:bg-gray-900/90 transition-all duration-300 hover:scale-[1.02] hover:border-yellow-400/30"
          >
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  {/* Game Icon */}
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${game.color} flex items-center justify-center shadow-lg relative`}>
                    <div className="text-3xl">{game.emoji}</div>
                    <div className="absolute inset-0 rounded-2xl bg-white/10"></div>
                  </div>
                  
                  {/* Game Info */}
                  <div className="space-y-1">
                    <h3 className="text-xl font-bold text-white">{game.title}</h3>
                    <p className="text-gray-400">{game.description}</p>
                    <div className="flex items-center gap-1 text-yellow-400 text-sm">
                      <Icon name="Star" size={14} className="fill-current" />
                      <span>Популярное</span>
                    </div>
                  </div>
                </div>
                
                {/* Play Button */}
                <Button 
                  size="lg"
                  className="bg-gradient-to-r from-yellow-400 to-orange-400 text-black font-bold hover:from-yellow-500 hover:to-orange-500 hover:scale-105 transition-all duration-200 shadow-lg px-8"
                >
                  ИГРАТЬ
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Coming Soon Section */}
      <div className="px-6 mb-24">
        <div className="text-center space-y-4">
          <h2 className="text-2xl font-semibold text-gray-300">Скоро появятся</h2>
          <div className="grid grid-cols-2 gap-4">
            {[
              { name: "Покер", emoji: "🃏" },
              { name: "Блэкджек", emoji: "🎲" },
              { name: "Лотерея", emoji: "🎫" },
              { name: "Кости", emoji: "🎲" }
            ].map((game, index) => (
              <div 
                key={index}
                className="bg-gray-900/30 backdrop-blur-sm border border-gray-700/30 rounded-xl p-4 text-center"
              >
                <div className="text-2xl mb-2">{game.emoji}</div>
                <div className="text-gray-400 text-sm">{game.name}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-gray-900/90 backdrop-blur-md border-t border-gray-700/50">
        <div className="flex justify-around py-3">
          <button 
            onClick={() => navigate('/')}
            className="flex flex-col items-center py-2 px-4 text-gray-400 hover:text-yellow-400 transition-colors"
          >
            <Icon name="Home" size={22} />
            <span className="text-xs mt-1">Главная</span>
          </button>
          <button className="flex flex-col items-center py-2 px-4 text-yellow-400">
            <Icon name="Gamepad2" size={22} className="drop-shadow-[0_0_8px_rgba(255,215,0,0.6)]" />
            <span className="text-xs mt-1">Игры</span>
          </button>
          <button className="flex flex-col items-center py-2 px-4 text-gray-400 hover:text-yellow-400 transition-colors">
            <Icon name="Trophy" size={22} />
            <span className="text-xs mt-1">Задания</span>
          </button>
          <button className="flex flex-col items-center py-2 px-4 text-gray-400 hover:text-yellow-400 transition-colors">
            <Icon name="User" size={22} />
            <span className="text-xs mt-1">Профиль</span>
          </button>
        </div>
      </div>

      {/* Floating Stars */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {Array.from({ length: 12 }).map((_, i) => (
          <div
            key={i}
            className="absolute text-yellow-400/20 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
              fontSize: `${8 + Math.random() * 10}px`
            }}
          >
            ✦
          </div>
        ))}
      </div>
    </div>
  );
};

export default Games;