import Image from 'next/image';
import { Container, ContainerAvaliacaoUsuario, ContainerLivro, Overlay } from './style';
import { Rating } from 'react-simple-star-rating';
import { BookmarkSimpleIcon, BookOpenIcon, CheckIcon, XIcon } from '@phosphor-icons/react';
import { CardAvaliacaoUsuario } from '../CardAvaliacaoUsuario';
import { useContext, useEffect, useState } from 'react';
import { BookWiseContext } from '@/contexts/BookWiseContext';
import avatarUsuarioImg from '@/assets/avatar-usuario.png';
import { useSession } from 'next-auth/react';
import { Controller, useForm } from 'react-hook-form';
import z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { api } from '@/lib/axios';
import { IRatingUser } from '@/interface/IRatingUser';

const ratingForm = z.object({
  description: z.string().min(1, 'Escreva sua avaliação'),
  rate: z.int().min(1, 'Dê pelo menos 1 estrela'),
});

type RatingForm = z.infer<typeof ratingForm>;

export function DetalheLivro() {
  const { displayDetails, onDisplayDetails } = useContext(BookWiseContext);
  const { onDisplayRating } = useContext(BookWiseContext);
  const { bookSelected } = useContext(BookWiseContext);
  const [displayRating, setDisplayAvaliaton] = useState(false);
  const [mounted, setMounted] = useState(false);
  const session = useSession();
  const isSignedIn = session.status === 'authenticated';

  const [ratings, setRatings] = useState<IRatingUser[]>(bookSelected?.ratings ?? []);

  const { control, register, handleSubmit, reset } = useForm<RatingForm>({
    resolver: zodResolver(ratingForm),
    defaultValues: {
      rate: 1,
    },
  });

  useEffect(() => {
    if (bookSelected?.ratings) {
      const orderRate = [...bookSelected.ratings].sort(
        (a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
      );

      setRatings(orderRate);
    }
  }, [bookSelected]);

  // Exibir apenas após montagem no cliente
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  function handleAvaliar() {
    if (!isSignedIn) {
      onDisplayRating(true);
    } else {
      setDisplayAvaliaton(true);
    }
  }

  async function handleRating(data: RatingForm) {
    const { description, rate } = data;
    const userId = session.data?.user.id;
    const bookId = bookSelected?.id;

    const response = await api.post('/rating', {
      description,
      rate,
      userId,
      bookId,
    });

    setRatings((state) => [response.data, ...state]);

    setDisplayAvaliaton(false);

    reset();
  }

  return (
    <>
      <Overlay open={displayDetails} onClick={() => onDisplayDetails(false, '')} />
      <Container open={displayDetails} onClick={(e) => e.stopPropagation()}>
        <div className="close">
          <button onClick={() => onDisplayDetails(false, '')}>
            <XIcon size={24} />
          </button>
        </div>

        <ContainerLivro>
          <div className="container-livro">
            {bookSelected?.cover_url && <Image width={172} height={242} src={bookSelected.cover_url} alt="" />}
            <div className="container-livro-info">
              <div>
                <p className="titulo-livro">{bookSelected?.name}</p>
                <span className="autor-livro">{bookSelected?.author}</span>
              </div>

              <div>
                <Rating
                  initialValue={bookSelected?.mediaRate}
                  readonly={true}
                  fillColor="#a78bfa"
                  emptyColor="transparent"
                  SVGstrokeColor="#a78bfa"
                  SVGstorkeWidth={2}
                  size={20}
                />
                <p className="qtd-avaliacao">{`${bookSelected?.ratings.length} ${
                  bookSelected?.ratings.length === 1 ? 'avaliação' : 'avaliações'
                }`}</p>
              </div>
            </div>
          </div>

          <div className="container-info-principal">
            <div className="container-info">
              <BookmarkSimpleIcon size={24} />
              <div>
                <span>Categoria</span>
                <p>{bookSelected?.categories.map((category) => category.name).join(', ')}</p>
              </div>
            </div>

            <div className="container-info">
              <BookOpenIcon size={24} />
              <div>
                <span>Páginas</span>
                <p>{bookSelected?.total_pages}</p>
              </div>
            </div>
          </div>
        </ContainerLivro>

        <ContainerAvaliacaoUsuario>
          <div className="avaliar">
            <span>Avaliações</span>
            {!displayRating && <button onClick={handleAvaliar}>Avaliar</button>}
          </div>

          <div className="container-avaliacoes">
            {displayRating && (
              <div className="container-avaliacao-usuario">
                <form onSubmit={handleSubmit(handleRating)}>
                  <div>
                    <Image width={40} height={40} src={session.data?.user.avatar_url ?? avatarUsuarioImg} alt="" />
                    <p className="nome-usuario">{session.data?.user.name}</p>
                    <Controller
                      name="rate"
                      control={control}
                      render={({ field }) => (
                        <Rating
                          readonly={false}
                          fillColor="#a78bfa"
                          emptyColor="transparent"
                          SVGstrokeColor="#a78bfa"
                          SVGstorkeWidth={2}
                          size={22}
                          onClick={field.onChange}
                          initialValue={field.value}
                        />
                      )}
                    />
                  </div>
                  <div className="container-textarea">
                    <textarea
                      id="description"
                      placeholder="Escreva sua avaliação"
                      {...register('description')}
                    ></textarea>
                  </div>

                  <div>
                    <button type="button" onClick={() => setDisplayAvaliaton(false)}>
                      <XIcon size={24} color="#8381D9" />
                    </button>
                    <button type="submit">
                      <CheckIcon size={24} color="#50B2C0" />
                    </button>
                  </div>
                </form>
              </div>
            )}

            {ratings.map((rating) => (
              <CardAvaliacaoUsuario key={rating.id} {...rating} />
            ))}
          </div>
        </ContainerAvaliacaoUsuario>
      </Container>
    </>
  );
}
