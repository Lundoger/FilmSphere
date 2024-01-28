/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export interface ExternalId {
  /**
   * ID из kinopoisk HD
   * @example "48e8d0acb0f62d8585101798eaeceec5"
   */
  kpHD?: string | null;
  /** @example "tt0232500" */
  imdb?: string | null;
  /** @example 9799 */
  tmdb?: number | null;
}

export interface Name {
  name?: string;
  language?: string | null;
  type?: string | null;
}

export interface Rating {
  /**
   * Рейтинг кинопоиска
   * @example 6.2
   */
  kp?: number | null;
  /**
   * Рейтинг IMDB
   * @example 8.4
   */
  imdb?: number | null;
  /**
   * Рейтинг TMDB
   * @example 3.2
   */
  tmdb?: number | null;
  /**
   * Рейтинг кинокритиков
   * @example 10
   */
  filmCritics?: number | null;
  /**
   * Рейтинг кинокритиков из РФ
   * @example 5.1
   */
  russianFilmCritics?: number | null;
  /**
   * Рейтинг основанный на ожиданиях пользователей
   * @example 6.1
   */
  await?: number | null;
}

export interface Votes {
  /** @example 60000 */
  kp?: string | null;
  /** @example 50000 */
  imdb?: number | null;
  /** @example 10000 */
  tmdb?: number | null;
  /**
   * Количество голосов кинокритиков
   * @example 10000
   */
  filmCritics?: number | null;
  /**
   * Количество голосов кинокритиков из РФ
   * @example 4000
   */
  russianFilmCritics?: number | null;
  /**
   * Количество ожидающих выхода
   * @example 34000
   */
  await?: number | null;
}

export interface Logo {
  /** Чтобы найти фильмы с этим полем, используйте: `!null` */
  url?: string | null;
}

export interface ShortImage {
  /** Чтобы найти фильмы с этим полем, используйте: `!null` */
  url?: string | null;
  /** Чтобы найти фильмы с этим полем, используйте: `!null` */
  previewUrl?: string | null;
}

export interface Video {
  /**
   * Url трейлера
   * @example "https://www.youtube.com/embed/ZsJz2TJAPjw"
   */
  url?: string | null;
  /** @example "Official Trailer" */
  name?: string | null;
  /** @example "youtube" */
  site?: string | null;
  /** @example "TRAILER" */
  type?: string | null;
  size: number;
}

export interface VideoTypes {
  trailers?: Video[];
  teasers: Video[];
}

export interface ItemName {
  name?: string;
}

export interface PersonInMovie {
  /**
   * Id персоны с кинопоиска
   * @example 6317
   */
  id?: number | null;
  /** @example "https://st.kp.yandex.net/images/actor_iphone/iphone360_6317.jpg" */
  photo?: string | null;
  /** @example "Пол Уокер" */
  name?: string | null;
  /** @example "Paul Walker" */
  enName?: string | null;
  description: string;
  profession: string;
  enProfession: string;
}

export interface ReviewInfo {
  count?: number | null;
  positiveCount?: number | null;
  percentage?: string | null;
}

export interface SeasonInfo {
  number?: number | null;
  episodesCount?: number | null;
}

export interface CurrencyValue {
  /**
   * Сумма
   * @example 207283
   */
  value?: number | null;
  /**
   * Валюта
   * @example "€"
   */
  currency?: string | null;
}

export interface Fees {
  world?: CurrencyValue;
  russia?: CurrencyValue;
  usa?: CurrencyValue;
}

export interface Premiere {
  /** @example "США" */
  country?: string | null;
  /**
   * Для более релевантного поиска, используйте интервал дат 01.02.2022-01.02.2023
   * @format date-time
   * @example "2023-02-25T02:44:39.359Z"
   */
  world?: string | null;
  /**
   * Для более релевантного поиска, используйте интервал дат 01.02.2022-01.02.2023
   * @format date-time
   * @example "2023-02-25T02:44:39.359Z"
   */
  russia?: string | null;
  digital?: string | null;
  /**
   * Для более релевантного поиска, используйте интервал дат 01.02.2022-01.02.2023
   * @format date-time
   * @example "2023-02-25T02:44:39.359Z"
   */
  cinema?: string | null;
  bluray: string;
  dvd: string;
}

export interface LinkedMovieV14 {
  id?: number | null;
  rating: Rating;
  /** @example 2021 */
  year: number;
  name: string;
  enName: string;
  alternativeName: string;
  type?: string;
  poster: ShortImage;
}

export interface WatchabilityItem {
  name?: string | null;
  logo: Logo;
  url: string;
}

export interface Watchability {
  items?: WatchabilityItem[];
}

export interface YearRange {
  /**
   * Год начала
   * @example 2022
   */
  start?: number | null;
  /**
   * Год окончания
   * @example 2023
   */
  end?: number | null;
}

export interface Audience {
  /**
   * Количество просмотров в кино
   * @example 1000
   */
  count: number;
  /**
   * Страна в которой проходил показ
   * @example "Россия"
   */
  country: string;
}

export interface NetworkItemV14 {
  /** @example "Netflix" */
  name: string;
  logo: Logo;
}

export interface NetworksV14 {
  items: NetworkItemV14[];
}

export interface FactInMovie {
  value: string;
  type: string;
  spoiler: boolean;
}

export interface Images {
  postersCount: number;
  backdropsCount: number;
  framesCount: number;
}

export interface MovieDtoV14 {
  /**
   * Id фильма с кинопоиска
   * @example 666
   */
  id: number;
  externalId: ExternalId;
  /** @example "Человек паук" */
  name?: string | null;
  /** @example "Spider man" */
  alternativeName?: string | null;
  /** @example "Spider man" */
  enName?: string | null;
  names: Name[];
  /**
   * Тип тайтла. Доступны: movie | tv-series | cartoon | anime | animated-series | tv-show
   * @example "movie"
   */
  type: string;
  /**
   * Тип тайтла в числовом обозначении. Доступны: 1 (movie) | 2 (tv-series) | 3 (cartoon) | 4 (anime) | 5 (animated-series) | 6 (tv-show)
   * @example 1
   */
  typeNumber: number;
  /**
   * Год премьеры. При поиске по этому полю, можно использовать интервалы 1860-2030
   * @example 2023
   */
  year?: number | null;
  /** Описание тайтла */
  description?: string | null;
  /** Сокращенное описание */
  shortDescription?: string | null;
  /** Слоган */
  slogan?: string | null;
  /**
   * Статус релиза тайтла. Доступные значения: filming | pre-production | completed | announced | post-production
   * @example "completed"
   */
  status?: string | null;
  rating?: Rating;
  votes?: Votes;
  /**
   * Продолжительность фильма
   * @example 120
   */
  movieLength?: number | null;
  /**
   * Возрастной рейтинг по MPAA
   * @example "pg13"
   */
  ratingMpaa?: string | null;
  /**
   * Возрастной рейтинг
   * @example "16"
   */
  ageRating?: number | null;
  logo?: Logo;
  poster?: ShortImage;
  backdrop?: ShortImage;
  videos?: VideoTypes;
  genres?: ItemName[];
  countries?: ItemName[];
  persons?: PersonInMovie[];
  reviewInfo?: ReviewInfo;
  seasonsInfo?: SeasonInfo[];
  budget?: CurrencyValue;
  fees?: Fees;
  premiere?: Premiere;
  similarMovies?: LinkedMovieV14[];
  sequelsAndPrequels?: LinkedMovieV14[];
  watchability?: Watchability;
  releaseYears?: YearRange[];
  /**
   * Позиция тайтла в топ 10. Чтобы найти фильмы участвующие в рейтинге используйте: `!null`
   * @example 1
   */
  top10?: number | null;
  /**
   * Позиция тайтла в топ 250. Чтобы найти фильмы участвующие в рейтинге используйте: `!null`
   * @example 200
   */
  top250?: number | null;
  /**
   * Признак того, что тайтл находится в прокате
   * @example true
   */
  ticketsOnSale?: boolean | null;
  /**
   * Продолжительность всех серий
   * @example 155
   */
  totalSeriesLength?: number | null;
  /**
   * Средняя продолжительность серии
   * @example 20
   */
  seriesLength?: number | null;
  /**
   * Признак сериала
   * @example true
   */
  isSeries: boolean;
  audience?: Audience[] | null;
  /**
   * Список коллекций, в которых находится тайтл.
   * @example ["250 лучших сериалов"]
   */
  lists?: string[] | null;
  networks: NetworksV14[];
  /** @format date-time */
  updatedAt: string;
  /** @format date-time */
  createdAt: string;
  facts: FactInMovie[];
  imagesInfo: Images;
}

export interface UnauthorizedErrorResponseDto {
  /** @example 401 */
  statusCode: number;
  /** @example "В запросе не указан токен!" */
  message: string;
  /** @example "Unauthorized" */
  error: string;
}

export interface ForbiddenErrorResponseDto {
  /** @example 403 */
  statusCode: number;
  /** @example "Превышен дневной лимит!" */
  message: string;
  /** @example "Forbidden" */
  error: string;
}

export interface ErrorResponseDto {
  statusCode: number;
  message: string;
  error: string;
}

export interface MovieDocsResponseDtoV14 {
  docs: MovieDtoV14[];
  /** Общее количество результатов */
  total: number;
  /** Количество результатов на странице */
  limit: number;
  /** Текущая страница */
  page: number;
  /** Сколько страниц всего */
  pages: number;
}

export interface SearchMovieDtoV14 {
  id: number;
  name: string;
  alternativeName: string;
  enName: string;
  type: string;
  year: number;
  description: string;
  shortDescription: string;
  movieLength: number;
  names: Name[];
  externalId?: ExternalId | null;
  logo?: Logo;
  poster?: ShortImage;
  backdrop?: ShortImage;
  rating?: Rating;
  votes?: Votes;
  genres?: ItemName[];
  countries?: ItemName[];
  releaseYears?: YearRange[];
  isSeries: boolean;
  ticketsOnSale: boolean;
  totalSeriesLength: number;
  seriesLength: number;
  ratingMpaa: string;
  ageRating: number;
  top10?: number | null;
  top250?: number | null;
  typeNumber: number;
  status: string;
  internalNames: string[];
  internalRating: number;
  internalVotes: number;
}

export interface SearchMovieResponseDtoV14 {
  docs: SearchMovieDtoV14[];
  /** Общее количество результатов */
  total: number;
  /** Количество результатов на странице */
  limit: number;
  /** Текущая страница */
  page: number;
  /** Сколько страниц всего */
  pages: number;
}

export interface NominationAward {
  title: string;
  year: number;
}

export interface Nomination {
  award: NominationAward;
  title: string;
}

export interface PartialTypeClass {
  nomination?: Nomination;
  winning?: boolean;
  /** @format date-time */
  updatedAt?: string;
  /** @format date-time */
  createdAt?: string;
  movieId?: number;
}

export interface MovieAwardDocsResponseDto {
  docs: PartialTypeClass[];
  /** Общее количество результатов */
  total: number;
  /** Количество результатов на странице */
  limit: number;
  /** Текущая страница */
  page: number;
  /** Сколько страниц всего */
  pages: number;
}

export interface PossibleValueDto {
  /** Значение по которому нужно делать запрос в базу данных */
  name: string;
  /** Вспомогательное значение */
  slug: string;
}

export interface EpisodeV14 {
  number?: number;
  name?: string;
  enName?: string;
  /** @deprecated */
  date?: string;
  description?: string;
  still?: ShortImage;
  airDate?: string;
  enDescription?: string;
}

export interface SeasonV14 {
  movieId?: number;
  number?: number;
  episodesCount?: number;
  episodes?: EpisodeV14[];
  poster?: ShortImage;
  name?: string;
  enName?: string;
  duration?: number;
  description?: string;
  enDescription?: string;
  airDate?: string;
  /** @format date-time */
  updatedAt: string;
  /** @format date-time */
  createdAt: string;
}

export interface SeasonDocsResponseDtoV14 {
  docs: SeasonV14[];
  /** Общее количество результатов */
  total: number;
  /** Количество результатов на странице */
  limit: number;
  /** Текущая страница */
  page: number;
  /** Сколько страниц всего */
  pages: number;
}

export interface Review {
  id?: number;
  movieId?: number;
  title?: string;
  type?: string;
  review?: string;
  date?: string;
  author?: string;
  authorId?: number;
  userRating: number;
  /** @format date-time */
  updatedAt: string;
  /** @format date-time */
  createdAt: string;
}

export interface ReviewDocsResponseDtoV14 {
  docs: Review[];
  /** Общее количество результатов */
  total: number;
  /** Количество результатов на странице */
  limit: number;
  /** Текущая страница */
  page: number;
  /** Сколько страниц всего */
  pages: number;
}

export interface BirthPlace {
  value?: string;
}

export interface DeathPlace {
  value?: string;
}

export interface Spouses {
  id?: number;
  name?: string;
  divorced?: boolean;
  divorcedReason?: string;
  sex?: string;
  children?: number;
  relation?: string;
}

export interface Profession {
  value?: string;
}

export interface FactInPerson {
  value?: string;
}

export interface MovieInPerson {
  id: number;
  name?: string | null;
  alternativeName?: string | null;
  rating?: number | null;
  general?: boolean | null;
  description?: string | null;
  enProfession?: string | null;
}

export interface Person {
  id: number;
  name?: string | null;
  enName?: string | null;
  photo?: string | null;
  sex?: string | null;
  growth?: number | null;
  birthday?: string | null;
  death?: string | null;
  age?: number | null;
  birthPlace?: BirthPlace[];
  deathPlace?: DeathPlace[];
  spouses?: Spouses;
  countAwards?: number;
  profession?: Profession[];
  facts?: FactInPerson[];
  movies?: MovieInPerson[];
  /** @format date-time */
  updatedAt: string;
  /** @format date-time */
  createdAt: string;
}

export interface PersonDocsResponseDtoV14 {
  docs: Person[];
  /** Общее количество результатов */
  total: number;
  /** Количество результатов на странице */
  limit: number;
  /** Текущая страница */
  page: number;
  /** Сколько страниц всего */
  pages: number;
}

export interface MeiliPersonEntityV14 {
  "1": object;
  id: number;
  name: string;
  enName: string;
  photo: string;
  sex: string;
  birthday: string;
  death: string;
  age: number;
  birthPlace?: BirthPlace[];
  deathPlace?: DeathPlace[];
  profession?: Profession[];
  growth: number;
}

export interface SearchPersonResponseDtoV14 {
  docs: MeiliPersonEntityV14[];
  /** Общее количество результатов */
  total: number;
  /** Количество результатов на странице */
  limit: number;
  /** Текущая страница */
  page: number;
  /** Сколько страниц всего */
  pages: number;
}

export interface Movie {
  id: number;
  name: string;
  rating: number;
}

export interface PersonAward {
  nomination: Nomination;
  winning: boolean;
  /** @format date-time */
  updatedAt: string;
  /** @format date-time */
  createdAt: string;
  personId: number;
  movie: Movie;
}

export interface PersonAwardDocsResponseDto {
  docs: PersonAward[];
  /** Общее количество результатов */
  total: number;
  /** Количество результатов на странице */
  limit: number;
  /** Текущая страница */
  page: number;
  /** Сколько страниц всего */
  pages: number;
}

export interface MovieFromStudio {
  id?: number;
}

export interface Studio {
  id: string;
  subType: string;
  title: string;
  type?: "Производство" | "Спецэффекты" | "Прокат" | "Студия дубляжа";
  movies?: MovieFromStudio;
  /** @format date-time */
  updatedAt: string;
  /** @format date-time */
  createdAt: string;
}

export interface StudioDocsResponseDtoV14 {
  docs: Studio[];
  /** Общее количество результатов */
  total: number;
  /** Количество результатов на странице */
  limit: number;
  /** Текущая страница */
  page: number;
  /** Сколько страниц всего */
  pages: number;
}

export interface MovieFromKeyword {
  id?: number;
}

export interface Keyword {
  id: number;
  title: string;
  movies?: MovieFromKeyword;
  /** @format date-time */
  updatedAt: string;
  /** @format date-time */
  createdAt: string;
}

export interface KeywordDocsResponseDtoV14 {
  docs: Keyword[];
  /** Общее количество результатов */
  total: number;
  /** Количество результатов на странице */
  limit: number;
  /** Текущая страница */
  page: number;
  /** Сколько страниц всего */
  pages: number;
}

export interface Image {
  movieId: number;
  type?: string;
  language?: string;
  url?: string;
  previewUrl?: string;
  height?: number;
  width?: number;
  /** @format date-time */
  updatedAt: string;
  /** @format date-time */
  createdAt: string;
}

export interface ImageDocsResponseDtoV14 {
  docs: Image[];
  /** Общее количество результатов */
  total: number;
  /** Количество результатов на странице */
  limit: number;
  /** Текущая страница */
  page: number;
  /** Сколько страниц всего */
  pages: number;
}

export interface List {
  category: string;
  slug: string;
  moviesCount: number;
  cover: ShortImage;
  name: string;
  /** @format date-time */
  updatedAt: string;
  /** @format date-time */
  createdAt: string;
}