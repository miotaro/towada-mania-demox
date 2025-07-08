import { Article } from "../types/article";

export async function fetchArticles(): Promise<Article[]> {
  const res = await fetch('http://localhost:1337/api/articles?populate[tags]=true&populate[author]');
  const json = await res.json();

  return json.data;
}
