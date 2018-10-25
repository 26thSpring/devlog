import asyncRoute from 'lib/asyncRoute';

export const PostWriterContainer = asyncRoute(() =>
   import('./PostWriterContainer')
);
export const PostViewContainer = asyncRoute(() =>
   import('./PostViewContainer')
);
export const PostListContainer = asyncRoute(() =>
   import('./PostListContainer')
);
export const ProfileContainer = asyncRoute(() => import('./ProfileContainer'));
