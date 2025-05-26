import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/shared/ui/Button";
import { MobileMenu } from "./MobileMenu";

export const Header: React.FC = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }

        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isMobileMenuOpen]);

    return (
        <>
            <header className="w-full shadow-sm">
                <div className="flex justify-center px-4">
                    <div className="flex w-[380px] flex-col bg-white">
                        <div className="flex h-[62px] items-center justify-between">
                            {/* Logo */}
                            <Button
                                as={Link}
                                to="/"
                                variant="ghost"
                                className="p-2 text-3xl font-bold text-black hover:bg-green-600 hover:text-white"
                            >
                                AvtoFace
                            </Button>

                            <Button
                                variant="ghost"
                                size="sm"
                                className="text-xl"
                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            >
                                {isMobileMenuOpen ? "✕" : "☰"}
                            </Button>
                        </div>
                        <div className="w-full border-b border-gray-200"></div>
                    </div>
                </div>

                <div className="flex justify-center">
                    <div className="flex h-[62px] w-full max-w-[380px] items-center justify-between text-sm">
                        <Button as={Link} to="/auth/login" variant="ghost" size="sm">
                            Войти
                        </Button>
                        <Button as={Link} to="/auth/register" variant="primary" size="sm">
                            Создать аккаунт
                        </Button>
                    </div>
                </div>
            </header>

            <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
        </>
    );
};
