import asyncRoute from 'lib/asyncRoute';

export const MainHead = asyncRoute(() => import('./main/MainHead'));
export const Tag = asyncRoute(() => import('./main/tags/Tag'));
