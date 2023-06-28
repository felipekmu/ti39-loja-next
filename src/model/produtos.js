import supabase from "./supabase";

 export async function buscaTodos(){
    const resposta = await supabase.from("produtos").select();
    return resposta;
}

export async function busca( id ){
    return supabase.from("produtos").select().eq("id", id);
}

export async function buscaLista( lista_id ){
    return await supabase.from("produtos").select().in("id", lista_id );
}