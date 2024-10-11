export interface SectionModel {
  title: string | undefined;
  subTitle?: string | undefined;
  text?: string | undefined;
  textBottom?: string | undefined;
  imageDesktop: string;
  imageMobileSmall: string;
  imageMobileMedium: string;
  dimBackground: boolean | undefined;
  buttonText?: string | undefined;
  buttonLink?: string | undefined;
}
