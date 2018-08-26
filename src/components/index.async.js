import asyncRoute from 'lib/asyncRoute';

export const MainHead = asyncRoute(() => import('./main/MainHead'));
export const Tag = asyncRoute(() => import('./main/tags/Tag'));
export const Writer = asyncRoute(() => import('./write/Writer'));
export const Preview = asyncRoute(() => import('./write/Preview'));
