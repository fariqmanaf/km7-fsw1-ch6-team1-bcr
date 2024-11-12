/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

import { createFileRoute } from '@tanstack/react-router'

// Import Routes

import { Route as rootRoute } from './routes/__root'

// Create Virtual Routes

const RegisterLazyImport = createFileRoute('/register')()
const ProfileLazyImport = createFileRoute('/profile')()
const LoginLazyImport = createFileRoute('/login')()
const IndexLazyImport = createFileRoute('/')()
const SpecsIndexLazyImport = createFileRoute('/specs/')()
const SpecscopyIndexLazyImport = createFileRoute('/specs copy/')()
const SpecsCreateLazyImport = createFileRoute('/specs/create')()
const SpecsIdLazyImport = createFileRoute('/specs/$id')()
const SpecscopyCreateLazyImport = createFileRoute('/specs copy/create')()
const SpecscopyIdLazyImport = createFileRoute('/specs copy/$id')()
const SpecsEditIdLazyImport = createFileRoute('/specs/edit/$id')()
const SpecscopyEditIdLazyImport = createFileRoute('/specs copy/edit/$id')()

// Create/Update Routes

const RegisterLazyRoute = RegisterLazyImport.update({
  id: '/register',
  path: '/register',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/register.lazy').then((d) => d.Route))

const ProfileLazyRoute = ProfileLazyImport.update({
  id: '/profile',
  path: '/profile',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/profile.lazy').then((d) => d.Route))

const LoginLazyRoute = LoginLazyImport.update({
  id: '/login',
  path: '/login',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/login.lazy').then((d) => d.Route))

const IndexLazyRoute = IndexLazyImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/index.lazy').then((d) => d.Route))

const SpecsIndexLazyRoute = SpecsIndexLazyImport.update({
  id: '/specs/',
  path: '/specs/',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/specs/index.lazy').then((d) => d.Route))

const SpecscopyIndexLazyRoute = SpecscopyIndexLazyImport.update({
  id: '/specs copy/',
  path: '/specs copy/',
  getParentRoute: () => rootRoute,
} as any).lazy(() =>
  import('./routes/specs copy/index.lazy').then((d) => d.Route),
)

const SpecsCreateLazyRoute = SpecsCreateLazyImport.update({
  id: '/specs/create',
  path: '/specs/create',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/specs/create.lazy').then((d) => d.Route))

const SpecsIdLazyRoute = SpecsIdLazyImport.update({
  id: '/specs/$id',
  path: '/specs/$id',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/specs/$id.lazy').then((d) => d.Route))

const SpecscopyCreateLazyRoute = SpecscopyCreateLazyImport.update({
  id: '/specs copy/create',
  path: '/specs copy/create',
  getParentRoute: () => rootRoute,
} as any).lazy(() =>
  import('./routes/specs copy/create.lazy').then((d) => d.Route),
)

const SpecscopyIdLazyRoute = SpecscopyIdLazyImport.update({
  id: '/specs copy/$id',
  path: '/specs copy/$id',
  getParentRoute: () => rootRoute,
} as any).lazy(() =>
  import('./routes/specs copy/$id.lazy').then((d) => d.Route),
)

const SpecsEditIdLazyRoute = SpecsEditIdLazyImport.update({
  id: '/specs/edit/$id',
  path: '/specs/edit/$id',
  getParentRoute: () => rootRoute,
} as any).lazy(() =>
  import('./routes/specs/edit/$id.lazy').then((d) => d.Route),
)

const SpecscopyEditIdLazyRoute = SpecscopyEditIdLazyImport.update({
  id: '/specs copy/edit/$id',
  path: '/specs copy/edit/$id',
  getParentRoute: () => rootRoute,
} as any).lazy(() =>
  import('./routes/specs copy/edit/$id.lazy').then((d) => d.Route),
)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexLazyImport
      parentRoute: typeof rootRoute
    }
    '/login': {
      id: '/login'
      path: '/login'
      fullPath: '/login'
      preLoaderRoute: typeof LoginLazyImport
      parentRoute: typeof rootRoute
    }
    '/profile': {
      id: '/profile'
      path: '/profile'
      fullPath: '/profile'
      preLoaderRoute: typeof ProfileLazyImport
      parentRoute: typeof rootRoute
    }
    '/register': {
      id: '/register'
      path: '/register'
      fullPath: '/register'
      preLoaderRoute: typeof RegisterLazyImport
      parentRoute: typeof rootRoute
    }
    '/specs copy/$id': {
      id: '/specs copy/$id'
      path: '/specs copy/$id'
      fullPath: '/specs copy/$id'
      preLoaderRoute: typeof SpecscopyIdLazyImport
      parentRoute: typeof rootRoute
    }
    '/specs copy/create': {
      id: '/specs copy/create'
      path: '/specs copy/create'
      fullPath: '/specs copy/create'
      preLoaderRoute: typeof SpecscopyCreateLazyImport
      parentRoute: typeof rootRoute
    }
    '/specs/$id': {
      id: '/specs/$id'
      path: '/specs/$id'
      fullPath: '/specs/$id'
      preLoaderRoute: typeof SpecsIdLazyImport
      parentRoute: typeof rootRoute
    }
    '/specs/create': {
      id: '/specs/create'
      path: '/specs/create'
      fullPath: '/specs/create'
      preLoaderRoute: typeof SpecsCreateLazyImport
      parentRoute: typeof rootRoute
    }
    '/specs copy/': {
      id: '/specs copy/'
      path: '/specs copy'
      fullPath: '/specs copy'
      preLoaderRoute: typeof SpecscopyIndexLazyImport
      parentRoute: typeof rootRoute
    }
    '/specs/': {
      id: '/specs/'
      path: '/specs'
      fullPath: '/specs'
      preLoaderRoute: typeof SpecsIndexLazyImport
      parentRoute: typeof rootRoute
    }
    '/specs copy/edit/$id': {
      id: '/specs copy/edit/$id'
      path: '/specs copy/edit/$id'
      fullPath: '/specs copy/edit/$id'
      preLoaderRoute: typeof SpecscopyEditIdLazyImport
      parentRoute: typeof rootRoute
    }
    '/specs/edit/$id': {
      id: '/specs/edit/$id'
      path: '/specs/edit/$id'
      fullPath: '/specs/edit/$id'
      preLoaderRoute: typeof SpecsEditIdLazyImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export interface FileRoutesByFullPath {
  '/': typeof IndexLazyRoute
  '/login': typeof LoginLazyRoute
  '/profile': typeof ProfileLazyRoute
  '/register': typeof RegisterLazyRoute
  '/specs copy/$id': typeof SpecscopyIdLazyRoute
  '/specs copy/create': typeof SpecscopyCreateLazyRoute
  '/specs/$id': typeof SpecsIdLazyRoute
  '/specs/create': typeof SpecsCreateLazyRoute
  '/specs copy': typeof SpecscopyIndexLazyRoute
  '/specs': typeof SpecsIndexLazyRoute
  '/specs copy/edit/$id': typeof SpecscopyEditIdLazyRoute
  '/specs/edit/$id': typeof SpecsEditIdLazyRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexLazyRoute
  '/login': typeof LoginLazyRoute
  '/profile': typeof ProfileLazyRoute
  '/register': typeof RegisterLazyRoute
  '/specs copy/$id': typeof SpecscopyIdLazyRoute
  '/specs copy/create': typeof SpecscopyCreateLazyRoute
  '/specs/$id': typeof SpecsIdLazyRoute
  '/specs/create': typeof SpecsCreateLazyRoute
  '/specs copy': typeof SpecscopyIndexLazyRoute
  '/specs': typeof SpecsIndexLazyRoute
  '/specs copy/edit/$id': typeof SpecscopyEditIdLazyRoute
  '/specs/edit/$id': typeof SpecsEditIdLazyRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexLazyRoute
  '/login': typeof LoginLazyRoute
  '/profile': typeof ProfileLazyRoute
  '/register': typeof RegisterLazyRoute
  '/specs copy/$id': typeof SpecscopyIdLazyRoute
  '/specs copy/create': typeof SpecscopyCreateLazyRoute
  '/specs/$id': typeof SpecsIdLazyRoute
  '/specs/create': typeof SpecsCreateLazyRoute
  '/specs copy/': typeof SpecscopyIndexLazyRoute
  '/specs/': typeof SpecsIndexLazyRoute
  '/specs copy/edit/$id': typeof SpecscopyEditIdLazyRoute
  '/specs/edit/$id': typeof SpecsEditIdLazyRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths:
    | '/'
    | '/login'
    | '/profile'
    | '/register'
    | '/specs copy/$id'
    | '/specs copy/create'
    | '/specs/$id'
    | '/specs/create'
    | '/specs copy'
    | '/specs'
    | '/specs copy/edit/$id'
    | '/specs/edit/$id'
  fileRoutesByTo: FileRoutesByTo
  to:
    | '/'
    | '/login'
    | '/profile'
    | '/register'
    | '/specs copy/$id'
    | '/specs copy/create'
    | '/specs/$id'
    | '/specs/create'
    | '/specs copy'
    | '/specs'
    | '/specs copy/edit/$id'
    | '/specs/edit/$id'
  id:
    | '__root__'
    | '/'
    | '/login'
    | '/profile'
    | '/register'
    | '/specs copy/$id'
    | '/specs copy/create'
    | '/specs/$id'
    | '/specs/create'
    | '/specs copy/'
    | '/specs/'
    | '/specs copy/edit/$id'
    | '/specs/edit/$id'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexLazyRoute: typeof IndexLazyRoute
  LoginLazyRoute: typeof LoginLazyRoute
  ProfileLazyRoute: typeof ProfileLazyRoute
  RegisterLazyRoute: typeof RegisterLazyRoute
  SpecscopyIdLazyRoute: typeof SpecscopyIdLazyRoute
  SpecscopyCreateLazyRoute: typeof SpecscopyCreateLazyRoute
  SpecsIdLazyRoute: typeof SpecsIdLazyRoute
  SpecsCreateLazyRoute: typeof SpecsCreateLazyRoute
  SpecscopyIndexLazyRoute: typeof SpecscopyIndexLazyRoute
  SpecsIndexLazyRoute: typeof SpecsIndexLazyRoute
  SpecscopyEditIdLazyRoute: typeof SpecscopyEditIdLazyRoute
  SpecsEditIdLazyRoute: typeof SpecsEditIdLazyRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexLazyRoute: IndexLazyRoute,
  LoginLazyRoute: LoginLazyRoute,
  ProfileLazyRoute: ProfileLazyRoute,
  RegisterLazyRoute: RegisterLazyRoute,
  SpecscopyIdLazyRoute: SpecscopyIdLazyRoute,
  SpecscopyCreateLazyRoute: SpecscopyCreateLazyRoute,
  SpecsIdLazyRoute: SpecsIdLazyRoute,
  SpecsCreateLazyRoute: SpecsCreateLazyRoute,
  SpecscopyIndexLazyRoute: SpecscopyIndexLazyRoute,
  SpecsIndexLazyRoute: SpecsIndexLazyRoute,
  SpecscopyEditIdLazyRoute: SpecscopyEditIdLazyRoute,
  SpecsEditIdLazyRoute: SpecsEditIdLazyRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.jsx",
      "children": [
        "/",
        "/login",
        "/profile",
        "/register",
        "/specs copy/$id",
        "/specs copy/create",
        "/specs/$id",
        "/specs/create",
        "/specs copy/",
        "/specs/",
        "/specs copy/edit/$id",
        "/specs/edit/$id"
      ]
    },
    "/": {
      "filePath": "index.lazy.jsx"
    },
    "/login": {
      "filePath": "login.lazy.jsx"
    },
    "/profile": {
      "filePath": "profile.lazy.jsx"
    },
    "/register": {
      "filePath": "register.lazy.jsx"
    },
    "/specs copy/$id": {
      "filePath": "specs copy/$id.lazy.jsx"
    },
    "/specs copy/create": {
      "filePath": "specs copy/create.lazy.jsx"
    },
    "/specs/$id": {
      "filePath": "specs/$id.lazy.jsx"
    },
    "/specs/create": {
      "filePath": "specs/create.lazy.jsx"
    },
    "/specs copy/": {
      "filePath": "specs copy/index.lazy.jsx"
    },
    "/specs/": {
      "filePath": "specs/index.lazy.jsx"
    },
    "/specs copy/edit/$id": {
      "filePath": "specs copy/edit/$id.lazy.jsx"
    },
    "/specs/edit/$id": {
      "filePath": "specs/edit/$id.lazy.jsx"
    }
  }
}
ROUTE_MANIFEST_END */
