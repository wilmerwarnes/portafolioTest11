export interface TranslationMap {
  title: string;
  start_btn: string;
  nav_home: string;
  nav_about: string;
  nav_projects: string;
  nav_contact: string;
  audio_title: string;
  audio_status: string;
  audio_play: string;
  audio_pause: string;
  audio_track: string;
  audio_vol_music: string;
  audio_vol_sfx: string;
  audio_sfx: string;
  glow_label: string;
  instructions: string;
  modal_back: string;
  music_choice_on: string;
  music_choice_off: string;
  loader_lang_label: string;
  hero_name: string;
  hero_role: string;
  about_role: string;
  about_desc: string;
  skill_1: string;
  skill_2: string;
  skill_3: string;
  skill_4: string;
  contact_sub: string;
  social_email: string;
  profile_hero_title: string;
  contact_hero_title: string;
  card_title_3d: string;
  card_title_diseno: string;
  card_title_edicion: string;
  card_sub_3d: string;
  card_sub_diseno: string;
  card_sub_edicion: string;
  gallery_title_3d: string;
  gallery_title_diseno: string;
  gallery_title_edicion: string;
  scroll_hint_start: string;
  scroll_hint_mid: string;
  scroll_hint_end: string;
  scroll_hint_desktop_start: string;
  scroll_hint_desktop_end: string;
}

export interface Translations {
  es: TranslationMap;
  en: TranslationMap;
}

export interface ProjectBlock {
  type: 'text' | 'image' | 'video' | 'gif' | 'grid';
  body?: string;
  src?: string;
  poster?: string;
  images?: string[];
}

export interface Project {
  id: number;
  name: string;
  desc: string;
  img: string;
  gallery: string[];
  blocks?: ProjectBlock[];
}

export interface CategoryData {
  title: string;
  projects: Project[];
}

export interface PortfolioData {
  '3d': CategoryData;
  diseno: CategoryData;
  edicion: CategoryData;
}

export interface SFXPreset {
  start: number;
  end: number;
  dur: number;
  wave: OscillatorType;
  noise?: boolean;
  noiseFreq?: number;
  level: number;
}

declare global {
  interface Window {
    goToGalleryIndex: (index: number) => void;
    closeGallery: () => void;
    goToCategoryIndex: (index: number) => void;
    openLightbox: (cat: string, id: number) => void;
    closeLightbox: () => void;
    goToBrandHome: () => void;
    jumpToSection: (sectionIndex: number) => void;
  }
}