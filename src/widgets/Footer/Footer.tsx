import { Link } from "react-router-dom";

export const Footer = () => {
    return (
        <footer className="mt-16 border-t border-gray-200 bg-white">
            <div className="mx-auto w-[380px] py-12">
                <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
                    {/* Меню */}
                    <div>
                        <div className="grid grid-cols-2 gap-4">
                            <Link to="/tariffs" className="text-gray-600 hover:text-gray-900">
                                Тарифы
                            </Link>
                            <Link to="/faq" className="text-gray-600 hover:text-gray-900">
                                Ответы на вопросы
                            </Link>
                            <Link to="/blog" className="text-gray-600 hover:text-gray-900">
                                Блог
                            </Link>
                            <Link to="/contact-us" className="text-gray-600 hover:text-gray-900">
                                Контакты
                            </Link>
                            <Link to="/reviews" className="text-gray-600 hover:text-gray-900">
                                Отзывы
                            </Link>
                            <Link to="/cancel" className="text-gray-600 hover:text-gray-900">
                                Отмена подписки
                            </Link>
                        </div>
                    </div>

                    {/* Поддержка */}
                    <div>
                        <div className="mb-4 font-semibold text-gray-900">Поддержка</div>
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <a
                                    href="mailto:avto.face@yandex.ru"
                                    className="block text-gray-600 hover:text-gray-900"
                                >
                                    avto.face@yandex.ru
                                </a>
                                <span className="text-sm text-gray-500">с 8:00 до 21:00 МСК</span>
                            </div>
                            <div>
                                <span className="block text-sm text-gray-500">Телефон</span>
                                <a
                                    href="tel:+74950661631"
                                    className="text-gray-600 hover:text-gray-900"
                                >
                                    +7 (495) 066 1631
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Правовая информация */}
                    <div>
                        <div className="flex flex-col space-y-3">
                            <Link to="/privacy" className="text-gray-600 hover:text-gray-900">
                                Политика обработки персональных данных
                            </Link>
                            <Link to="/agreement" className="text-gray-600 hover:text-gray-900">
                                Пользовательское/Лицензионное соглашение
                            </Link>
                            <Link to="/cookies" className="text-gray-600 hover:text-gray-900">
                                Политика обработки cookies
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Копирайт */}
            <div className="border-t border-gray-200 py-8">
                <div className="mx-auto w-[380px]">
                    <div className="grid grid-cols-1 text-left text-xs text-gray-400 md:grid-cols-3">
                        <div>
                            ООО "AИСTСOФT"
                            <br /> ИНН: 3307021951 ОГРН: 1173328000328
                        </div>
                        <div>Город Москва, Нахимовский проспект, дом 27, корпус 3</div>
                        <div>© 2025. Все права защищены.</div>
                    </div>
                </div>
            </div>
        </footer>
    );
};
