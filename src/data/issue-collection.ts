import { Issue } from '../types/issue';

export const issues: Issue[] = [
  {
    id: '1',
    title: 'Erro no login',
    description: 'Usuário não consegue autenticar.',
    status: 'backlog',
    priority: 'high',
    createdAt: '2026-09-16',
  },
  {
    id: '2',
    title: 'Adicionar busca',
    description: 'Permitir busca por título.',
    status: 'in_progress',
    priority: 'medium',
    createdAt: '2026-09-16',
  },
  {
    id: '3',
    title: 'Melhorar performance',
    description: 'Otimizar consulta de dados.',
    status: 'backlog',
    priority: 'low',
    createdAt: '2026-09-16',
  }
];