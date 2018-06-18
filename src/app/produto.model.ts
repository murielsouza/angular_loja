export class Produto {
    id: number;
    nome: string;
    categoriaId: number;
    foto: string;
    preco: number;

    constructor(id: number, nome: string, categoriaId: number , preco: number, foto?: string) {
        this.id = id;
        this.nome = nome;
        this.categoriaId = categoriaId;
        this.foto = foto;
        this.preco = preco;
    }
}
