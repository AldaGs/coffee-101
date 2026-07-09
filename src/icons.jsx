// Central icon system — colored Material Design icons (react-icons/md),
// bundled into the build so the PWA stays fully offline.
import {
  MdWaterDrop, MdBolt, MdLocalFireDepartment, MdEco, MdSpa, MdHistoryEdu, MdLocalCafe,
  MdSchool, MdFitnessCenter, MdScience, MdPerson,
  MdCheckCircle, MdStar, MdLock, MdStyle, MdCelebration, MdChevronRight,
  MdEmojiEvents, MdMilitaryTech, MdWorkspacePremium, MdWhatshot, MdCoffee, MdShowChart,
} from 'react-icons/md';

// ── Subjects ─────────────────────────────────────────────
// Each subject gets a distinct hue echoing its course theme.
export const SUBJECT_ICONS = {
  brewing:  { Icon: MdWaterDrop,           color: '#2E86C1' },
  espresso: { Icon: MdBolt,                color: '#E0A11B' },
  roasting: { Icon: MdLocalFireDepartment, color: '#D2622E' },
  agronomy: { Icon: MdEco,                 color: '#4A9D5B' },
  sensory:  { Icon: MdSpa,                 color: '#9A5BA1' },
  history:  { Icon: MdHistoryEdu,          color: '#B0863B' },
  barista:  { Icon: MdLocalCafe,           color: '#4E7396' },
};

export function SubjectIcon({ id, size = 24, color }) {
  const entry = SUBJECT_ICONS[id];
  if (!entry) return null;
  const { Icon, color: c } = entry;
  return <Icon size={size} color={color || c} />;
}

// ── Achievement badges ───────────────────────────────────
export const BADGE_ICONS = {
  first_review:    { Icon: MdSchool,            color: '#4E7396' },
  streak_3:        { Icon: MdLocalFireDepartment, color: '#E8833A' },
  streak_7:        { Icon: MdWhatshot,          color: '#D2622E' },
  streak_30:       { Icon: MdStar,              color: '#E0B21B' },
  xp_100:          { Icon: MdCoffee,            color: '#8A5A3B' },
  xp_500:          { Icon: MdEco,               color: '#4A9D5B' },
  xp_1000:         { Icon: MdMilitaryTech,      color: '#C08A2E' },
  xp_2000:         { Icon: MdEmojiEvents,       color: '#D4A72C' },
  first_challenge: { Icon: MdShowChart,         color: '#3E6E5C' },
  roast_master:    { Icon: MdLocalFireDepartment, color: '#D2622E' },
  gold_cup:        { Icon: MdWorkspacePremium,  color: '#C9A227' },
  espresso_ace:    { Icon: MdBolt,              color: '#E0A11B' },
};

export function BadgeIcon({ id, size = 22, muted = false }) {
  const entry = BADGE_ICONS[id];
  const Icon = entry?.Icon || MdStar;
  return <Icon size={size} color={muted ? 'currentColor' : (entry?.color || 'currentColor')} />;
}

// ── Gamification stats ───────────────────────────────────
export const StreakIcon = (p) => <MdLocalFireDepartment color="#E8833A" {...p} />;
export const XpIcon     = (p) => <MdBolt color="#E0A11B" {...p} />;
export const CardsIcon  = (p) => <MdStyle color="#7C8A99" {...p} />;

// ── Path node states (inherit the node's text color) ─────
export const CompleteIcon = MdCheckCircle;
export const CurrentIcon  = MdStar;
export const LockIcon     = MdLock;
export const TrophyIcon   = MdEmojiEvents;
export const CelebrateIcon = MdCelebration;
export const ChevronIcon  = MdChevronRight;

// ── Bottom-nav tabs (monochrome; color comes from active state) ─
export const TAB_ICONS = {
  learn:      MdSchool,
  practice:   MdFitnessCenter,
  simulators: MdScience,
  profile:    MdPerson,
};

// ── Simulator hub icons ──────────────────────────────────
export const SIM_ICONS = {
  roasting: MdLocalFireDepartment,
  brew:     MdWaterDrop,
  espresso: MdBolt,
};
