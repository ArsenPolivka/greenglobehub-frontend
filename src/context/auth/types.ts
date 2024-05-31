import { Dispatch, SetStateAction } from "react";

export interface State {
  user: any;
  token: string | null;
}

export type SetState = Dispatch<SetStateAction<State>>;
