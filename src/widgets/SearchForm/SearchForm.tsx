import { Button } from "@/shared/ui/Button";

export const SearchForm = () => {
    return (
        <div className="rounded-lg bg-white p-6 shadow">
            <div className="flex flex-col">
                <div className="mb-6 grid grid-cols-3 gap-4">
                    <Button
                        variant="primary"
                        size="lg"
                        className="bg-gray-100 hover:bg-amber-50 focus:bg-amber-50"
                    >
                        ГОС-номер
                    </Button>

                    <Button
                        variant="primary"
                        size="lg"
                        className="bg-gray-100 hover:bg-amber-50 focus:bg-amber-50"
                    >
                        VIN
                    </Button>

                    <Button
                        variant="primary"
                        size="lg"
                        className="bg-gray-100 hover:bg-amber-50 focus:bg-amber-50"
                    >
                        Hомер кузова
                    </Button>
                </div>

                <input
                    className="mb-6 block h-[52px] w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5"
                    placeholder={"Укажите ГОС-номер"}
                />

                <Button
                    variant="ghost"
                    className="mb-6 h-[52px] w-full justify-center bg-green-300 text-white"
                >
                    Проверить
                </Button>

                <div className="mt-4 flex h-[200px] items-center justify-center rounded-lg bg-gray-100 text-sm text-gray-500">
                    Виджет
                </div>
            </div>
        </div>
    );
};
