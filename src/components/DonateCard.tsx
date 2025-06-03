import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface DonateCardProps {
  title: string;
  price: number;
  duration: string;
  features: string[];
  isPopular?: boolean;
  color: string;
}

const DonateCard = ({
  title,
  price,
  duration,
  features,
  isPopular,
  color,
}: DonateCardProps) => {
  return (
    <Card
      className={`relative hover:scale-105 transition-transform duration-200 ${isPopular ? "ring-2 ring-amber-400" : ""}`}
    >
      {isPopular && (
        <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-amber-500 text-black font-bold">
          🔥 Популярный
        </Badge>
      )}
      <CardHeader className="text-center">
        <CardTitle className={`text-2xl font-bold ${color}`}>{title}</CardTitle>
        <CardDescription className="text-3xl font-bold text-gray-900">
          {price} ₽ <span className="text-sm text-gray-500">/ {duration}</span>
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center gap-2">
              <span className="text-green-500">✓</span>
              <span className="text-sm">{feature}</span>
            </li>
          ))}
        </ul>
        <Button
          className={`w-full ${
            color.includes("green")
              ? "bg-green-600 hover:bg-green-700"
              : color.includes("blue")
                ? "bg-blue-600 hover:bg-blue-700"
                : color.includes("purple")
                  ? "bg-purple-600 hover:bg-purple-700"
                  : "bg-amber-600 hover:bg-amber-700"
          }`}
        >
          💳 Купить {title}
        </Button>
      </CardContent>
    </Card>
  );
};

export default DonateCard;
