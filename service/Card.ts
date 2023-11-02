import type { Ref } from "vue";
import api from "~/api";
import { useDeck } from "~/store/deck";
import type { CardInterface } from "~/types/CardInterface";
import type { DeckInterface } from "~/types/DeckInterface";
import type { DrawnCardInterface } from "~/types/DrawnCardInterface";

export default class Deck {
  private deck: Ref<DeckInterface> = useDeck();
  private card?: CardInterface[];

  public constructor(deckCount?: number) {
    api
      .post<DeckInterface>("/deck/new/shuffle", {
        deck_count: (deckCount ? deckCount : 1)
      })
      .then(({ data }) => {
        this.deck.value = data;
      });
  }

  public getDeck = () => this.deck;

  public drawCard = async (count: number) => {
    const { data } = await api.get<DrawnCardInterface>(`/deck/${this.deck.value.deck_id}/draw/?count=${count}`);

    this.card = data.cards;
  };

  public reshuffleDeck = async (remaining: boolean) => {
    const { data } = await api.get<DeckInterface>(`/deck/${this.deck.value.deck_id}/shuffle/?remaining=${remaining}`);

    console.log(data);

    return data;
  };
}