import type { FC } from "react";
import { useParams } from "react-router-dom";

const ReportViewPage: FC = () => {
    const { id } = useParams();

    return (
        <div className="mx-auto max-w-4xl">
            <h1 className="mb-6 text-3xl font-bold">Отчет #{id}</h1>
            <div className="rounded-lg bg-white p-6 shadow">
                <p className="text-gray-500">Просмотр отчета (в разработке)</p>
            </div>
        </div>
    );
};

export const Component = ReportViewPage;
export default ReportViewPage;
