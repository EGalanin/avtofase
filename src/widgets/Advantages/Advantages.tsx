import { Link } from "react-router-dom";
import { Button } from "@/shared/ui/Button";
import { AdvantageCard } from "./AdvantageCard";
import { InfoCard } from "./InfoCard";

const advantages = [
    {
        title: "Надежная\nи стабильная работа",
        description:
            "Тысячи довольных клиентов уже пользуются нашими услугами и остаются довольны.",
    },
    {
        title: "Гарантия возврата\nсредств",
        description:
            "Если Ваш заказ не был выполнен — мы вернем Вам денежные средства в полном объеме.",
    },
    {
        title: "Круглосуточная\nпомощь",
        description: "Поможем в любое время в онлайн чате.",
    },
    {
        title: "Доступный\nи понятный отчёт",
        description: "Даже неопытный водитель сможет оценить реальное состояние авто.",
    },
];

const infoCards = [
    {
        title: "Все отчёты в личном кабинете",
        description: "Вы можете в любой момент получить доступ к вашим отчётам.",
    },
    {
        title: "Удобная мобильная версия",
        description: "В любой момент можно проверить авто",
    },
    {
        title: "Оплата в пару кликов",
        description: "Любой способ оплаты на выбор",
    },
];

export const Advantages = () => {
    return (
        <div className="mt-16 bg-white py-12">
            <div className="mx-auto w-[380px]">
                <h2 className="mb-12 text-center text-2xl font-bold text-gray-900">
                    Работаем на совесть
                </h2>

                <div className="grid gap-8">
                    {advantages.map((advantage, index) => (
                        <AdvantageCard key={index} {...advantage} />
                    ))}
                </div>

                <div className="mt-12 flex flex-col items-center space-y-8">
                    <Button variant="primary" size="lg" as={Link} to="#">
                        Заказать отчет
                    </Button>

                    <div className="space-y-6 text-center">
                        {infoCards.map((info, index) => (
                            <InfoCard key={index} {...info} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};
