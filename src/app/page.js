'use client'
import { buscaTodos } from "@/model/produtos"
import Link from "next/link"
import { useEffect, useState } from "react"

export default function Home() {
  const [ produtos, alteraProdutos ] = useState([])

  useEffect (()=> {
    async function dados(){
      const resposta = await buscaTodos();
      alteraProdutos(resposta.data)
    }
    dados();
  }, [])
  
  return (
    <div> 
      <h1> Felipe Store </h1>
      <p> Confira nossos produtos: </p>
      {
        produtos == 0 ? <p> Carregando... </p> :
        produtos.map( produto =>
          <Link href={ "/produto/"+produto.id } >
            <div key={ produto.id }> 
              <p> { produto.nome }</p>
              <p> { produto.preco } </p>
              <img src={ produto.imagem } />
              <hr/>
            </div>
          </Link>
          )
      }

    </div>
      )
}
