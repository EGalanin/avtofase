import { SalesStatisticsCard } from "./SalesStatisticsCard";

const statistics = [
    { value: 33, description: "Машина отечественного производства" },
    { value: 67, description: "Иномарки" },
    {
        value: 17.9,
        description: "Автомобилей на момент продажи имели одного или двух владельцев",
        className: "col-span-2",
    },
];

export const UsedCarsSales = () => {
    return (
        <div className="mt-16 bg-gray-900 py-12">
            <div className="mx-auto w-[380px]">
                <h2 className="mb-8 text-center text-2xl font-bold text-white">
                    <span>Продажа</span>
                    <br /> подержанных авто
                </h2>

                <div className="space-y-8">
                    <div className="text-gray-300">
                        <p>
                            Высокие цены на новые автомобили заставляют людей обратить внимание на
                            рынок вторичных автомобилей, который пользуется огромной популярностью.
                            Покупка автомобиля с пробегом часто является выгодным решением, но есть
                            большая вероятность столкнуться с недобросовестным продавцом.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 gap-6">
                        {statistics.map((stat, index) => (
                            <SalesStatisticsCard key={index} {...stat} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};
