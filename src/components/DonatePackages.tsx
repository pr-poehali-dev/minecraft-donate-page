import DonateCard from "./DonateCard";

const DonatePackages = () => {
  const packages = [
    {
      title: "VIP",
      price: 199,
      duration: "месяц",
      color: "text-green-600",
      features: [
        "Цветной ник в чате",
        "Доступ к /fly команде",
        "Приватные территории x2",
        "Кит с алмазной броней",
        "Доступ к VIP зонам",
      ],
    },
    {
      title: "PREMIUM",
      price: 399,
      duration: "месяц",
      color: "text-blue-600",
      isPopular: true,
      features: [
        "Все привилегии VIP",
        "Телепортация к игрокам",
        "Собственный дом /sethome",
        "Кит с незеритовой броней",
        "Доступ к Premium аренам",
        "Ускоренная добыча ресурсов",
      ],
    },
    {
      title: "ELITE",
      price: 699,
      duration: "месяц",
      color: "text-purple-600",
      features: [
        "Все привилегии PREMIUM",
        "Креативный режим в своих территориях",
        "Возможность создавать варпы",
        "Эксклюзивные питомцы",
        "Приоритет входа на сервер",
        "Персональная поддержка",
      ],
    },
    {
      title: "LEGEND",
      price: 1299,
      duration: "навсегда",
      color: "text-amber-600",
      features: [
        "Все привилегии ELITE",
        "Пожизненный статус",
        "Уникальные эффекты частиц",
        "Собственный NPC магазин",
        "Модераторские команды",
        "Участие в разработке сервера",
      ],
    },
  ];

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 font-montserrat">
            💎 Выбери свой статус
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Каждый донат поддерживает развитие сервера и дает тебе уникальные
            возможности
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {packages.map((pkg, index) => (
            <DonateCard key={index} {...pkg} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default DonatePackages;
