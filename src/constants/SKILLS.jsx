import grit from '../data/Grit.json';
import discipline from '../data/Discipline.json';
import teamwork from '../data/Teamwork.json';
import selfEsteem from '../data/Self-esteem.json';
import creativity from '../data/Creativity.json';
import memorization from '../data/Memorization.json';
import language from '../data/Language.json';

export const SKILL_NAMES = [
  'Grit',
  'Teamwork',
  'Discipline',
  'Self-esteem',
  'Creativity',
  'Memorization',
  'Language'
];

export const SKILL_DEFINITIONS = [
  ...grit,
  ...teamwork,
  ...discipline,
  ...selfEsteem,
  ...creativity,
  ...memorization,
  ...language
];
