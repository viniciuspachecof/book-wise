import { ExplorarCardLivro } from '@/components/ExplorarCardLivro';
import { Container } from './style';
import { BinocularsIcon } from '@phosphor-icons/react';

export default function Explorar() {
  return (
    <Container>
      <div className="container-busca">
        <div className="titulo-pagina">
          <BinocularsIcon size={32} /> <h1>Explorar</h1>
        </div>
        <input name="buscar-livro" type="text" placeholder="Buscar livro ou autor" />
      </div>

      <div className="container-categorias">
        <button>Tudo</button>
        <button>Computação</button>
        <button>Educação</button>
        <button>Fantasia</button>
        <button>Ficção científica</button>
        <button>Horror</button>
        <button>HQs</button>
        <button>Suspense</button>
      </div>

      <div className="container-livros">
        <ExplorarCardLivro />
        <ExplorarCardLivro />
        <ExplorarCardLivro />
        <ExplorarCardLivro />
      </div>
    </Container>
  );
}
