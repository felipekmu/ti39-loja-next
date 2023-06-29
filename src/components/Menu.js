import Link from 'next/link'

export default function Menu(){
    return(
        <nav className="bg-sky-600 text-white p-5 text-base" > 
            <h1 className="bg-sky-500 text-center font-bold"> Felipe Store </h1>
            <ul className="flex gap-10 justify-center">
                <li className="border border-sky-500 p-2 hover:bg-sky-500 transition-all"> <Link href="/"> Início </Link></li>
                <li className="border border-sky-500 p-2 hover:bg-sky-500 transition-all"> <Link href="/carrinho"> Carrinho </Link></li>
                <li className="border border-sky-500 p-2 hover:bg-sky-500 transition-all"> <Link href="/cadastro"> Cadastro </Link></li>
                <li className="border border-sky-500 p-2 hover:bg-sky-500 transition-all"> <Link href="/login"> Login </Link></li>
            </ul>
        </nav>
    )
}