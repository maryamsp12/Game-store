

export type gameItem = {
  id: number;
  title: string;
  provider: string;
  image: string;
}
export type gameList = {
  id: number;
  title: string;
  items: gameItem[];
}
export type dataType = {
  description: String;
  lists: gameList[];
  title: string;
}

export const getData = () => {
  return fetch(
    '/api/games/lists.json',
  ).then((r) => r.json());
};