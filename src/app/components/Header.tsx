"use client"
import { useSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";


export function Header() {

    const { data: session, status } = useSession();

    return (
        <header className="w-full h-20 bg-black flex justify-center items-center">
            <section className="px-5 w-full max-w-5xl flex justify-between items-center">
                <nav className="flex items-center ">
                    <Link href="/">
                        <h2 className="text-4xl font-bold">
                            Tarefas
                            <span className="text-red-500">+</span>
                        </h2>
                    </Link>
                    <Link href="/dashboard" className="bg-white p-1 px-4 rounded text-black ml-1">
                        Meu painel
                    </Link>
                </nav>
                {status === "loading" ? (
                    <>
                    </>
                ) : session ? (
                    <button className="py-2 px-8 rounded-3xl border-white border-solid border-[1px] transition-transform duration-[0.2s] hover:scale-[1.08] hover:bg-white hover:text-black"
                        onClick={() => signOut()}>
                        Olá {session?.user?.name}
                    </button>
                ) : (
                    <button className="py-2 px-8 rounded-3xl border-white border-solid border-[1px] transition-transform duration-[0.2s] hover:scale-[1.08] hover:bg-white hover:text-black"
                        onClick={() => signIn("google")}>
                        Acessar
                    </button>
                )}
            </section>
        </header>
    )
}