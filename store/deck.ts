import type { DeckInterface } from "~/types/DeckInterface";

export const useDeck = () => useState<DeckInterface>("deck", () => {
  return {
    success: false,
    deck_id: "",
    shuffled: false,
    remaining: 0,
  };
});