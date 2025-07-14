import { Article } from "../types/article";

export async function fetchArticles(): Promise<Article[]> {
  const res = await fetch('http://localhost:1337/api/articles');
  //JSON形式に変換
  const json = await res.json();
  //data部分のみ返す
  return json.data;
}
