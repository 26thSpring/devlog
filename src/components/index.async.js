import asyncRoute from 'lib/asyncRoute';

export const Tag = asyncRoute(() => import('./main/tags/Tag'));
export const WriterHead = asyncRoute(() => import('./write/WriterHead'));
export const WriterContent = asyncRoute(() => import('./write/WriterContent'));
export const Preview = asyncRoute(() => import('./write/Preview'));
