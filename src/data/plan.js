export const HIERARCHY = [
  'Rookie',
  'Officier I',
  'Officier II',
  'Officier III',
  'Senior Lead Officier (SLO)',
  'Sergent',
  'Sergent II',
  'Sergent Chef',
  'Lieutenant I',
  'Lieutenant II',
  'Lieutenant Chef',
  'Capitaine Adjoint',
  'Capitaine',
]

// Tier boundaries used to color/group the ladder visually.
export const HIERARCHY_TIERS = [
  { label: 'Officiers', from: 0, to: 4 },
  { label: 'Sous-officiers', from: 4, to: 8 },
  { label: 'Officiers supérieurs', from: 8, to: 11 },
  { label: 'Commandement', from: 11, to: 13 },
]

export const SPECIALTIES = [
  {
    grade: 'Officier I',
    access: 'Formations de base',
    detail: 'Accès au PPA et aux autres certifications fondamentales.',
  },
  {
    grade: 'Officier II',
    access: 'Spécialités majeures',
    detail: 'Accès aux pôles : SWAT, DOA, HSU/HP, Négociateur, DA.',
  },
  {
    grade: 'Sergent',
    access: 'Lead de pôle',
    detail: "Possibilité de prendre la tête d'un pôle de spécialité.",
  },
  {
    grade: 'SLO et au-dessus',
    access: 'Lead terrain & supervision',
    detail: 'Lead terrain et fonctions de supervision.',
  },
]
