export interface Image {
  url: string;
  related_images: string[];
  gif: string;
  name: string;
  categories: string[];
  description: string;
  published: boolean;
  width: number;
  height: number;
  materials?: string[]; // Nouveau champ : matériaux
  size?: string; // Nouveau champ : taille
  price?: number; // Nouveau champ : prix
}

export interface Photo {
  url: string;
  width: number;
  height: number;
  name?: string;
  description?: string;
  related_images?: string[];
  gif?: string;
  materials?: string[];
  size?: string;
  price?: number;
}