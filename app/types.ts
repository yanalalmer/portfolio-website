export type ButtonProps = {
  text: string;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
};
export type HamburgerProps = {
  isOpen: boolean;
  toggleMenu: () => void;
  textColor?: string;
};
export type Project = {
  id: number;
  slug: string;
  projectImage: string;
  title: string;
  para: string;
  year: number;
  roleService: string;
  country: string;
  context: string;
  brandingColors: string[];
  backgroundImageUrl: string;
  backgroundTitle: string;
  backgroundPara: string;
  designImage: string;
  liveSiteUrl: string;
};
export type ProjectHeroProps = {
  title: string;
  year: number;
  roleService: string;
  country: string;
  backgroundImageUrl: string;
  context: string;
};
export type ProjectParaProps = {
  para: string;
  liveSiteUrl: string;
};
