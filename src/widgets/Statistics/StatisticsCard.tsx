interface StatisticsCardProps {
    prefix?: string;
    value: number;
    description: string;
}

export const StatisticsCard = ({ prefix, value, description }: StatisticsCardProps) => {
    return (
        <div className="rounded-lg bg-white p-6 text-center shadow">
            {prefix && <div className="text-sm text-gray-600">{prefix}</div>}
            <div className="my-2 text-3xl font-bold text-gray-900">
                {value}
                <span className="text-xl">%</span>
            </div>
            <div className="text-sm text-gray-600">{description}</div>
        </div>
    );
};
