interface AdvantageCardProps {
    title: string;
    description: string;
}

export const AdvantageCard = ({ title, description }: AdvantageCardProps) => {
    return (
        <div className="rounded-lg bg-white p-6 text-center shadow transition-all hover:shadow-lg">
            <div className="mb-4 text-xl font-semibold text-gray-900">
                {title.split("\n").map((line, i) => (
                    <span key={i}>
                        {line}
                        {i < title.split("\n").length - 1 && <br />}
                    </span>
                ))}
            </div>
            <div className="text-sm text-gray-600">{description}</div>
        </div>
    );
};
