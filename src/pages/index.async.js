import asyncRoute from 'lib/asyncRoute';

export const Home = asyncRoute(() => import('./Home'));
export const About = asyncRoute(() => import('./About'));
export const Trending = asyncRoute(() => import('./Trending'));
export const Recent = asyncRoute(() => import('./Recent'));
export const Sort = asyncRoute(() => import('./Sort'));
export const Tags = asyncRoute(() => import('./Tags'));
