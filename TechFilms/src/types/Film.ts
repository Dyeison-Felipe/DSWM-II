/*tipagem dos dados recebidos da api*/
export type Film = {
  id: number;
  original_title: string;
  poster_path: string;
  overview: string;
  vote_average: number;
  release_date: string;
  original_language: string;
}