import asyncRoute from 'lib/asyncRoute';

export const Post = asyncRoute(() => import('./main/posts/Post'));
export const Tag = asyncRoute(() => import('./main/tags/Tag'));
export const WriterHead = asyncRoute(() => import('./write/WriterHead'));
export const WriterContent = asyncRoute(() => import('./write/WriterContent'));
export const Preview = asyncRoute(() => import('./write/Preview'));
export const PostUploadForm = asyncRoute(() =>
   import('./write/PostUploadForm')
);
export const PostViewHeader = asyncRoute(() =>
   import('./main/posts/PostViewHeader')
);
export const PostViewMain = asyncRoute(() =>
   import('./main/posts/PostViewMain')
);
export const PostViewFooter = asyncRoute(() =>
   import('./main/posts/PostViewFooter')
);
