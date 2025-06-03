import { Button } from "@/components/ui/button";

const CallToAction = () => {
  return (
    <section className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6 font-montserrat">
          🚀 Готов начать свое приключение?
        </h2>
        <p className="text-xl mb-8 opacity-90">
          Присоединяйся к нам прямо сейчас и получи приветственный бонус!
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <Button
            size="lg"
            className="bg-white text-green-700 hover:bg-gray-100 font-semibold"
          >
            💎 Купить донат
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-white text-white hover:bg-white hover:text-green-700"
          >
            💬 Связаться с поддержкой
          </Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div>
            <div className="text-3xl font-bold">5000+</div>
            <div className="text-sm opacity-80">Активных игроков</div>
          </div>
          <div>
            <div className="text-3xl font-bold">99.9%</div>
            <div className="text-sm opacity-80">Время работы сервера</div>
          </div>
          <div>
            <div className="text-3xl font-bold">3 года</div>
            <div className="text-sm opacity-80">Стабильной работы</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
