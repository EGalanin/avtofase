import { useState } from "react";
import { Link } from "react-router-dom";
import type { FC } from "react";
import { Button } from "@/shared/ui/Button";

const LoginPage: FC = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({
        email: "",
        password: "",
        rememberMe: false,
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Form submitted:", formData);
    };

    return (
        <section className="min-h-[355px] px-4">
            <div className="mx-auto max-w-md">
                <div className="rounded-lg bg-white p-6 shadow-lg">
                    <h1 className="mb-6 text-center text-2xl font-semibold text-gray-900">Вход</h1>

                    <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                        <div className="w-full">
                            <label className="mb-1 block text-sm text-gray-600">E-mail</label>
                            <input
                                type="email"
                                name="email"
                                placeholder="Ваш E-mail"
                                required
                                className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-green-500 focus:outline-none"
                                value={formData.email}
                                onChange={(e) =>
                                    setFormData({ ...formData, email: e.target.value })
                                }
                            />
                        </div>

                        <div className="w-full">
                            <label className="mb-1 block text-sm text-gray-600">Пароль</label>
                            <div className="relative">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    name="password"
                                    placeholder="Ваш пароль"
                                    required
                                    className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-green-500 focus:outline-none"
                                    value={formData.password}
                                    onChange={(e) =>
                                        setFormData({ ...formData, password: e.target.value })
                                    }
                                />
                                <Button
                                    type="button"
                                    variant="ghost"
                                    size="sm"
                                    className="absolute right-3 top-1/2 -translate-y-1/2 !p-0 text-gray-400 hover:text-gray-600"
                                    onClick={() => setShowPassword(!showPassword)}
                                >
                                    <svg
                                        className="h-5 w-5"
                                        viewBox="0 0 12 9"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M6 3.16181C5.31905 3.16181 4.76687 3.62503 4.76687 4.19694C4.76687 4.76849 5.31913 5.23207 6 5.23207C6.68087 5.23207 7.23313 4.76849 7.23313 4.19694C7.23313 3.62503 6.68095 3.16181 6 3.16181ZM4 4.19694C4 3.26937 4.89568 2.51807 6 2.51807C7.10433 2.51807 8 3.26937 8 4.19694C8 5.12402 7.1044 5.87581 6 5.87581C4.8956 5.87581 4 5.12402 4 4.19694Z"
                                            fill="currentColor"
                                        />
                                        <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M1.78496 1.35437C2.86138 0.563576 4.34957 0 6 0C7.65005 0 9.13822 0.563135 10.2148 1.35374C11.2796 2.13573 12 3.187 12 4.19718C12 5.20736 11.2796 6.25863 10.2148 7.04062C9.13822 7.83123 7.65005 8.39436 6 8.39436C4.34957 8.39436 2.86138 7.83079 1.78496 7.03999C0.720302 6.25785 0 5.2066 0 4.19718C0 3.18777 0.720302 2.13652 1.78496 1.35437ZM2.36591 1.95146C1.42187 2.645 0.89982 3.49687 0.89982 4.19718C0.89982 4.8975 1.42187 5.74937 2.36591 6.4429C3.29818 7.1278 4.58504 7.61247 6 7.61247C7.41474 7.61247 8.70161 7.12814 9.63392 6.44345C10.578 5.75015 11.1002 4.89829 11.1002 4.19718C11.1002 3.49607 10.578 2.64422 9.63392 1.95091C8.70161 1.26622 7.41474 0.781889 6 0.781889C4.58504 0.781889 3.29818 1.26657 2.36591 1.95146Z"
                                            fill="currentColor"
                                        />
                                    </svg>
                                </Button>
                            </div>
                        </div>

                        <div className="flex items-center justify-between">
                            <label className="flex items-center">
                                <input
                                    type="checkbox"
                                    name="remember_me"
                                    className="mr-2 h-4 w-4 rounded border-gray-300 text-green-600 focus:ring-green-500"
                                    checked={formData.rememberMe}
                                    onChange={(e) =>
                                        setFormData({ ...formData, rememberMe: e.target.checked })
                                    }
                                />
                                <span className="text-sm text-gray-600">Запомнить меня</span>
                            </label>
                            <Link
                                to="/reset"
                                className="text-sm text-green-600 hover:text-green-700"
                            >
                                Забыли пароль?
                            </Link>
                        </div>

                        <Button
                            type="submit"
                            variant="primary"
                            className="w-full justify-center bg-green-300"
                            disabled={!formData.email || !formData.password}
                        >
                            Войти
                        </Button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export const Component = LoginPage;
export default LoginPage;
