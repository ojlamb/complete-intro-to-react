<<<<<<< HEAD
// @flow

declare var module: {
  hot: {
    accept(path: string, callback: () => void): void
  }
};
=======
//@flow
>>>>>>> v3-11

export type Show = {
  title: string,
  description: string,
  year: string,
  imdbID: string,
<<<<<<< HEAD
  poster: string,
  trailer: string,
  rating?: string
};

export type State = {
  searchTerm: string,
  apiData: {
    [imdbID: string]: Show
=======
  trailer: string,
  poster: string,
  rating?: string
};

declare var module: {
  hot: {
    accept(path: string, callback: () => void): void
>>>>>>> v3-11
  }
};

declare type ActionType = 'SET_SEARCH_TERM' | 'ADD_API_DATA';

declare type ActionT<A: ActionType, P> = {|
  type: A,
  payload: P
|};

export type Action = ActionT<'SET_SEARCH_TERM', string> | ActionT<'ADD_API_DATA', Show>;
