export interface FooterLink {
  label: string;
  href: string;
}

export type FooterSocialIcon = "linkedin" | "twitter" | "facebook" | "instagram";

export interface FooterSocialLink extends FooterLink {
  icon: FooterSocialIcon;
}
