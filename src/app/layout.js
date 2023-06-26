import "@/app/globals.css"
import Menu from "@/components/Menu"
import Rodape from "@/components/Rodape"
export const metadata = {
  title: 'Felipe Store',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>
        <Menu />
        {children}
        <Rodape />
      </body>
    </html>
  )
}
