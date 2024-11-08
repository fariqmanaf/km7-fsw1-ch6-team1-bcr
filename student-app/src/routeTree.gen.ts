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

const SpecsLazyImport = createFileRoute('/specs')()
const RegisterLazyImport = createFileRoute('/register')()
const ProfileLazyImport = createFileRoute('/profile')()
const LoginLazyImport = createFileRoute('/login')()
const IndexLazyImport = createFileRoute('/')()
const SpecsIndexLazyImport = createFileRoute('/specs/')()
const ManufacturesIndexLazyImport = createFileRoute('/manufactures/')()
const SpecsCreateLazyImport = createFileRoute('/specs/create')()
const SpecsIdLazyImport = createFileRoute('/specs/$id')()
const SpecsEditIdLazyImport = createFileRoute('/specs/edit/$id')()

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

const ManufacturesIndexLazyRoute = ManufacturesIndexLazyImport.update({
  id: '/manufactures/',
  path: '/manufactures/',
  getParentRoute: () => rootRoute,
} as any).lazy(() =>
  import('./routes/manufactures/index.lazy').then((d) => d.Route),
)
const SpecsIndexLazyRoute = SpecsIndexLazyImport.update({
  id: '/specs/',
  path: '/specs/',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/specs/index.lazy').then((d) => d.Route))

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

const SpecsEditIdLazyRoute = SpecsEditIdLazyImport.update({
  id: '/specs/edit/$id',
  path: '/specs/edit/$id',
  getParentRoute: () => rootRoute,
} as any).lazy(() =>
  import('./routes/specs/edit/$id.lazy').then((d) => d.Route),
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
    '/specs/': {
      id: '/specs/'
      path: '/specs'
      fullPath: '/specs'
      preLoaderRoute: typeof SpecsIndexLazyImport
      parentRoute: typeof rootRoute
    }
    '/manufactures/': {
      id: '/manufactures/'
      path: '/manufactures'
      fullPath: '/manufactures'
      preLoaderRoute: typeof ManufacturesIndexLazyImport
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
  '/specs/$id': typeof SpecsIdLazyRoute
  '/specs/create': typeof SpecsCreateLazyRoute
  '/manufactures': typeof ManufacturesIndexLazyRoute
  '/specs': typeof SpecsIndexLazyRoute
  '/specs/edit/$id': typeof SpecsEditIdLazyRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexLazyRoute
  '/login': typeof LoginLazyRoute
  '/profile': typeof ProfileLazyRoute
  '/register': typeof RegisterLazyRoute
  '/specs/$id': typeof SpecsIdLazyRoute
  '/specs/create': typeof SpecsCreateLazyRoute
  '/manufactures': typeof ManufacturesIndexLazyRoute
  '/specs': typeof SpecsIndexLazyRoute
  '/specs/edit/$id': typeof SpecsEditIdLazyRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexLazyRoute
  '/login': typeof LoginLazyRoute
  '/profile': typeof ProfileLazyRoute
  '/register': typeof RegisterLazyRoute
  '/specs/$id': typeof SpecsIdLazyRoute
  '/specs/create': typeof SpecsCreateLazyRoute
  '/manufactures/': typeof ManufacturesIndexLazyRoute
  '/specs/': typeof SpecsIndexLazyRoute
  '/specs/edit/$id': typeof SpecsEditIdLazyRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths:
    | '/'
    | '/login'
    | '/profile'
    | '/register'
    | '/specs/$id'
    | '/specs/create'
    | '/manufactures'
    | '/specs'
    | '/specs/edit/$id'
  fileRoutesByTo: FileRoutesByTo
  to:
    | '/'
    | '/login'
    | '/profile'
    | '/register'
    | '/specs/$id'
    | '/specs/create'
    | '/manufactures'
    | '/specs'
    | '/specs/edit/$id'
  id:
    | '__root__'
    | '/'
    | '/login'
    | '/profile'
    | '/register'
    | '/specs/$id'
    | '/specs/create'
    | '/manufactures/'
    | '/specs/'
    | '/specs/edit/$id'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexLazyRoute: typeof IndexLazyRoute
  LoginLazyRoute: typeof LoginLazyRoute
  ProfileLazyRoute: typeof ProfileLazyRoute
  RegisterLazyRoute: typeof RegisterLazyRoute
  SpecsLazyRoute: typeof SpecsLazyRouteWithChildren
  ManufacturesIndexLazyRoute: typeof ManufacturesIndexLazyRoute
  SpecsIdLazyRoute: typeof SpecsIdLazyRoute
  SpecsCreateLazyRoute: typeof SpecsCreateLazyRoute
  SpecsIndexLazyRoute: typeof SpecsIndexLazyRoute
  SpecsEditIdLazyRoute: typeof SpecsEditIdLazyRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexLazyRoute: IndexLazyRoute,
  LoginLazyRoute: LoginLazyRoute,
  ProfileLazyRoute: ProfileLazyRoute,
  RegisterLazyRoute: RegisterLazyRoute,
  SpecsLazyRoute: SpecsLazyRouteWithChildren,
  ManufacturesIndexLazyRoute: ManufacturesIndexLazyRoute,
  SpecsIdLazyRoute: SpecsIdLazyRoute,
  SpecsCreateLazyRoute: SpecsCreateLazyRoute,
  SpecsIndexLazyRoute: SpecsIndexLazyRoute,
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
        "/specs",
        "/manufactures/"
        "/specs/$id",
        "/specs/create",
        "/specs/",
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
    "/specs/$id": {
      "filePath": "specs/$id.lazy.jsx"
    },
    "/specs/create": {
      "filePath": "specs/create.lazy.jsx"
    },
    "/specs/": {
      "filePath": "specs/index.lazy.jsx"
    },
    "/manufactures/": {
      "filePath": "manufactures/index.lazy.jsx"
    },
    "/specs/edit/$id": {
      "filePath": "specs/edit/$id.lazy.jsx"
    }
  }
}
ROUTE_MANIFEST_END */
