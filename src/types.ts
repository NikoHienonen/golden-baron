export interface SpellResult {
  index: string;
  name: string;
  level: number;
  url: string;
}

export interface SpellsResponse {
  count: number;
  results: SpellResult[];
}

export interface Spell {
  index: string;
  name: string;
  desc: string[];
  higher_level: string[];
  range: string;
  components: string[];
  material: string;
  ritual: boolean;
  duration: string;
  concentration: boolean;
  casting_time: string;
  level: number;
  damage?: Damage;
  dc?: {
    dc_type: BasicInfo;
    dc_success: string;
  };
  area_of_effect: {
    type: string;
    size: number;
  };
  school: BasicInfo;
  classes: BasicInfo[];
  subclasses: BasicInfo[];
}

interface BasicInfo {
  index: string;
  name: string;
  url: string;
}

interface Damage {
  damage_type: BasicInfo;
  damage_at_slot_level?: {
    1?: string;
    2?: string;
    3?: string;
    4?: string;
    5?: string;
    6?: string;
    7?: string;
    8?: string;
    9?: string;
  };
}
