interface InfoCardProps {
    title: string;
    description: string;
}

export const InfoCard = ({ title, description }: InfoCardProps) => {
    return (
        <div>
            <div className="text-lg font-semibold text-gray-900">{title}</div>
            <div className="text-sm text-gray-600">{description}</div>
        </div>
    );
};
