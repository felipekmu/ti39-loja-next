'use client'
import { busca } from "@/model/produtos";
import { useEffect, useState } from "react"

export default function ProdutoID( props ){
    const id = props.params.id
    const [ quantidade, alteraQuantidade ] = useState( 1 );
    const [ produto, alteraProduto ] = useState( null );
    function addCarrinho(){
        let carrinho = localStorage.getItem("carrinho");
        carrinho = JSON.parse( carrinho );

        let objeto = { id: id, quantidade: quantidade }
        
        carrinho.push(objeto);
        carrinho = JSON.stringify( carrinho )
        
        localStorage.setItem("carrinho", objeto)
    }
    useEffect( ()=> {
        async function data(){
            const resposta = await busca( id ); 
            if(resposta.status == 200){
                alteraProduto( resposta.data[0] )
            }
            alteraProduto ( resposta.data [0] )
        }
    data();
    }, [] );

    return(
        produto == null ? <p> Produto não encontrado... </p>:
        <div>
            <h1> { produto.nome } </h1>
            <p> { produto.descricao } </p>
            <p> R$ { produto.preco }</p>
            <img src={ produto.imagem } />
            <label>
                Quantidade:
                <input type="number" onChange={(e)=>alteraQuantidade(e.target.value)} />
            </label>

            <button onClick={ ()=> addCarrinho() } > Adicionar ao carrinho </button>
        </div>
    )
}