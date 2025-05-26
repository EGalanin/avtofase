interface SalesStatisticsCardProps {
    value: number;
    description: string;
    className?: string;
}

export const SalesStatisticsCard = ({
    value,
    description,
    className = "",
}: SalesStatisticsCardProps) => {
    return (
        <div className={`rounded-lg bg-gray-800 p-6 text-center ${className}`}>
            <div className="my-2 text-3xl font-bold text-white">
                {value}
                <span className="text-xl">%</span>
            </div>
            <div className="text-sm text-gray-300">{description}</div>
        </div>
    );
};
