import asyncRoute from 'lib/asyncRoute';

export const Trending = asyncRoute(() => import('./Trending'));
export const Recent = asyncRoute(() => import('./Recent'));
export const Sort = asyncRoute(() => import('./Sort'));
export const Tags = asyncRoute(() => import('./Tags'));
export const PostWriter = asyncRoute(() => import('./PostWriter'));
export const PostView = asyncRoute(() => import('./PostView'));
export const Profile = asyncRoute(() => import('./Profile'));
export const Login = asyncRoute(() => import('./Login'));
