import type { CardInterface } from "./CardInterface";

export interface DrawnCardInterface {
  success: boolean;
  deck_id: string;
  cards: CardInterface[],
  remaining: number;
}