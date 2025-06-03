import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Features = () => {
  const features = [
    {
      icon: "🏰",
      title: "Постройки мечты",
      description:
        "Создавай невероятные сооружения с расширенными возможностями строительства",
    },
    {
      icon: "⚔️",
      title: "PvP арены",
      description:
        "Сражайся с другими игроками в специально созданных аренах с уникальными наградами",
    },
    {
      icon: "🎁",
      title: "Ежедневные награды",
      description: "Получай бонусы за активность и участие в жизни сервера",
    },
    {
      icon: "🌟",
      title: "Эксклюзивный контент",
      description:
        "Доступ к уникальным предметам, мобам и локациям только для донатеров",
    },
    {
      icon: "🛡️",
      title: "Защита территорий",
      description: "Надежная система защиты твоих построек и ресурсов",
    },
    {
      icon: "👥",
      title: "Активное сообщество",
      description:
        "Присоединяйся к дружному комьюнити из 5000+ активных игроков",
    },
  ];

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 font-montserrat">
            🎮 Почему NezerMine?
          </h2>
          <p className="text-xl text-gray-600">
            Мы создали идеальную среду для твоего творчества
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="hover:shadow-lg transition-shadow duration-200"
            >
              <CardHeader className="text-center">
                <div className="text-4xl mb-2">{feature.icon}</div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
