// Ajoute vos types globaux ici

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
}

export enum DeckTypeIcon {
  Colorless = "colorless",
  Dark = "dark",
  Dragon = "dragon",
  Electric = "electrik",
  Fighting = "fighting",
  Fire = "fire",
  Metal = "metal",
  Plant = "plant",
  Psychic = "psychic",
  Water = "water"
}

export const TYPE_ICON_PATH: Record<DeckTypeIcon, string> = {
  [DeckTypeIcon.Colorless]: "/Types/colorless.png",
  [DeckTypeIcon.Dark]: "/Types/dark.png",
  [DeckTypeIcon.Dragon]: "/Types/dragon.png",
  [DeckTypeIcon.Electric]: "/Types/electrik.png",
  [DeckTypeIcon.Fighting]: "/Types/fighting.png",
  [DeckTypeIcon.Fire]: "/Types/fire.png",
  [DeckTypeIcon.Metal]: "/Types/metal.png",
  [DeckTypeIcon.Plant]: "/Types/plant.png",
  [DeckTypeIcon.Psychic]: "/Types/psychic.png",
  [DeckTypeIcon.Water]: "/Types/water.png"
};

const COLOR_TO_ICON: Record<string, DeckTypeIcon> = {
  psychic: DeckTypeIcon.Psychic,
  fighting: DeckTypeIcon.Fighting,
  water: DeckTypeIcon.Water,
  fire: DeckTypeIcon.Fire,
  grass: DeckTypeIcon.Plant,
  plant: DeckTypeIcon.Plant,
  lightning: DeckTypeIcon.Electric,
  electric: DeckTypeIcon.Electric,
  electrik: DeckTypeIcon.Electric,
  dark: DeckTypeIcon.Dark,
  metal: DeckTypeIcon.Metal,
  dragon: DeckTypeIcon.Dragon,
  colorless: DeckTypeIcon.Colorless
};

export const getTypeIconPath = (color: string): string | undefined => {
  const key = color.trim().toLowerCase();
  const icon = COLOR_TO_ICON[key];
  return icon ? TYPE_ICON_PATH[icon] : undefined;
};
