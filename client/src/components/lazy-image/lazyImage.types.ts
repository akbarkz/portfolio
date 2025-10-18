export interface ILazyImage {
  image: string;
  smallImage?: string;
  onClick: (image: string) => () => void;
}
