import { ArticleT } from "@/utils/types";
import { Dispatch, SetStateAction } from "react";

export interface State {
  articles: ArticleT[];
  currentArticle: ArticleT | null;
}

export type SetState = Dispatch<SetStateAction<State>>;
