import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-green-600 via-green-700 to-green-800 text-white py-20 px-4">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="relative max-w-6xl mx-auto text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 font-montserrat">
          🏰 CraftWorld Server
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
          Присоединяйся к лучшему серверу Minecraft! Получи уникальные
          привилегии и стань частью нашего сообщества
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            className="bg-amber-500 hover:bg-amber-600 text-black font-semibold"
          >
            🎯 Выбрать донат
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-white text-white hover:bg-white hover:text-green-700"
          >
            📋 IP: play.craftworld.ru
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
