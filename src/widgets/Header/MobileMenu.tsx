import type { FC } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/shared/ui/Button";

interface MobileMenuProps {
    isOpen: boolean;
    onClose: () => void;
}

export const MobileMenu: FC<MobileMenuProps> = ({ isOpen, onClose }) => {
    return (
        <div
            className={`fixed inset-0 z-50 transform transition-all duration-300 ${isOpen ? "visible opacity-100" : "invisible opacity-0"}`}
        >
            {/* Overlay */}
            <div
                className="absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300"
                onClick={onClose}
            />

            {/* Menu Content */}
            <div
                className={`absolute bottom-0 left-0 right-0 h-[40%] transform rounded-t-3xl bg-white shadow-xl transition-transform duration-300 ease-out ${isOpen ? "translate-y-0" : "translate-y-full"}`}
            >
                <div className="flex h-[62px] items-center justify-between border-b border-gray-200 px-4">
                    <span className="text-lg font-semibold">Меню</span>
                    <Button variant="ghost" size="sm" className="text-xl" onClick={onClose}>
                        ✕
                    </Button>
                </div>

                <div className="top-menu pb-safe h-[calc(100%-62px)] overflow-y-auto">
                    <div className="inner flex flex-col p-3">
                        <Link
                            to="/tariffs"
                            className="top-link mb-2 text-base text-gray-700 transition-colors hover:text-green-600"
                            onClick={onClose}
                        >
                            Тарифы
                        </Link>
                        <Link
                            to="/reviews"
                            className="top-link mb-2 text-base text-gray-700 transition-colors hover:text-green-600"
                            onClick={onClose}
                        >
                            Отзывы
                        </Link>
                        <Link
                            to="/blog"
                            className="top-link mb-2 text-base text-gray-700 transition-colors hover:text-green-600"
                            onClick={onClose}
                        >
                            Блог
                        </Link>
                        <Link
                            to="/faq"
                            className="top-link mb-2 text-base text-gray-700 transition-colors hover:text-green-600"
                            onClick={onClose}
                        >
                            Ответы на вопросы
                        </Link>
                        <Link
                            to="/contact-us"
                            className="top-link mb-2 text-base text-gray-700 transition-colors hover:text-green-600"
                            onClick={onClose}
                        >
                            Контакты
                        </Link>

                        <div className="mt-2 space-y-2 border-t border-gray-200 pt-2">
                            <Link
                                to="/privacy"
                                className="for-mob block text-xs text-gray-500 transition-colors hover:text-green-600"
                                onClick={onClose}
                            >
                                Политика обработки персональных данных
                            </Link>
                            <Link
                                to="/agreement"
                                className="for-mob block text-xs text-gray-500 transition-colors hover:text-green-600"
                                onClick={onClose}
                            >
                                Лицензионное соглашение
                            </Link>
                            <a
                                href="tel:+74950661631"
                                className="top-link mt-2 block text-base font-medium text-green-600 transition-colors hover:text-green-700"
                                onClick={onClose}
                            >
                                +7 (495) 066 1631
                            </a>
                            <span className="cube mt-2 block h-1 w-1 bg-green-600"></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
