import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Telegram Header Space */}
      <div className="h-12"></div>
      
      {/* Main Content */}
      <div className="flex-1 relative z-10">
        {/* Logo Section */}
        <div className="text-center pt-20 pb-12 space-y-6">
          {/* Logo/Avatar */}
          <div className="mx-auto w-32 h-32 rounded-full bg-gradient-to-br from-purple-600 to-purple-800 border-4 border-yellow-400 flex items-center justify-center shadow-lg">
            <div className="text-5xl">💀</div>
          </div>
          
          {/* Title */}
          <div className="space-y-3">
            <h1 className="text-5xl font-bold bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-500 bg-clip-text text-transparent">
              STARSHUB
            </h1>
            <div className="flex items-center justify-center gap-2 text-gray-400">
              <Icon name="Sparkles" size={16} className="text-yellow-400" />
              <span className="text-lg">Azart Gaming Experience</span>
              <Icon name="Sparkles" size={16} className="text-yellow-400" />
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="px-6 mb-12">
          <div className="flex justify-center">
            <div className="flex bg-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-700/50">
              <div className="px-8 py-4 text-center border-r border-gray-700">
                <div className="text-3xl font-bold text-yellow-400">0</div>
                <div className="text-sm text-gray-400 mt-1">Уровень</div>
              </div>
              <div className="px-8 py-4 text-center border-r border-gray-700">
                <div className="text-3xl font-bold text-yellow-400">0</div>
                <div className="text-sm text-gray-400 mt-1">Звёзды</div>
              </div>
              <div className="px-8 py-4 text-center">
                <div className="text-3xl font-bold text-yellow-400">0</div>
                <div className="text-sm text-gray-400 mt-1">Друзья</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-gray-900/90 backdrop-blur-md border-t border-gray-700/50">
        <div className="flex justify-around py-3">
          <button className="flex flex-col items-center py-2 px-4 text-yellow-400">
            <Icon name="Home" size={22} className="drop-shadow-[0_0_8px_rgba(255,215,0,0.6)]" />
            <span className="text-xs mt-1">Главная</span>
          </button>
          <button 
            onClick={() => navigate('/games')}
            className="flex flex-col items-center py-2 px-4 text-gray-400 hover:text-yellow-400 transition-colors"
          >
            <Icon name="Gamepad2" size={22} />
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
        {Array.from({ length: 15 }).map((_, i) => (
          <div
            key={i}
            className="absolute text-yellow-400/20 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
              fontSize: `${10 + Math.random() * 12}px`
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