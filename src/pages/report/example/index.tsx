import type { FC } from "react";

const ExampleReportPage: FC = () => {
    return (
        <div className="mx-auto max-w-4xl">
            <h1 className="mb-6 text-3xl font-bold">Пример отчета</h1>
            <div className="rounded-lg bg-white p-6 shadow">
                <p className="text-gray-500">Пример отчета (в разработке)</p>
            </div>
        </div>
    );
};

export const Component = ExampleReportPage;
export default ExampleReportPage;
