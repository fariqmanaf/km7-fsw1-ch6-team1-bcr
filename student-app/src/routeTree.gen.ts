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
const OptionsIndexLazyImport = createFileRoute('/options/')()
const ManufacturesIndexLazyImport = createFileRoute('/manufactures/')()
const CarsIndexLazyImport = createFileRoute('/cars/')()
const SpecsCreateLazyImport = createFileRoute('/specs/create')()
const SpecsIdLazyImport = createFileRoute('/specs/$id')()
const OptionsCreateLazyImport = createFileRoute('/options/create')()
const OptionsIdLazyImport = createFileRoute('/options/$id')()
const ManufacturesCreateLazyImport = createFileRoute('/manufactures/create')()
const ManufacturesIdLazyImport = createFileRoute('/manufactures/$id')()
const SpecsEditIdLazyImport = createFileRoute('/specs/edit/$id')()
const OptionsEditIdLazyImport = createFileRoute('/options/edit/$id')()
const ManufacturesEditIdLazyImport = createFileRoute('/manufactures/edit/$id')()

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

const OptionsIndexLazyRoute = OptionsIndexLazyImport.update({
  id: '/options/',
  path: '/options/',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/options/index.lazy').then((d) => d.Route))

const ManufacturesIndexLazyRoute = ManufacturesIndexLazyImport.update({
  id: '/manufactures/',
  path: '/manufactures/',
  getParentRoute: () => rootRoute,
} as any).lazy(() =>
  import('./routes/manufactures/index.lazy').then((d) => d.Route),
)

const CarsIndexLazyRoute = CarsIndexLazyImport.update({
  id: '/cars/',
  path: '/cars/',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/cars/index.lazy').then((d) => d.Route))

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

const OptionsCreateLazyRoute = OptionsCreateLazyImport.update({
  id: '/options/create',
  path: '/options/create',
  getParentRoute: () => rootRoute,
} as any).lazy(() =>
  import('./routes/options/create.lazy').then((d) => d.Route),
)

const OptionsIdLazyRoute = OptionsIdLazyImport.update({
  id: '/options/$id',
  path: '/options/$id',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/options/$id.lazy').then((d) => d.Route))

const ManufacturesCreateLazyRoute = ManufacturesCreateLazyImport.update({
  id: '/manufactures/create',
  path: '/manufactures/create',
  getParentRoute: () => rootRoute,
} as any).lazy(() =>
  import('./routes/manufactures/create.lazy').then((d) => d.Route),
)

const ManufacturesIdLazyRoute = ManufacturesIdLazyImport.update({
  id: '/manufactures/$id',
  path: '/manufactures/$id',
  getParentRoute: () => rootRoute,
} as any).lazy(() =>
  import('./routes/manufactures/$id.lazy').then((d) => d.Route),
)

const SpecsEditIdLazyRoute = SpecsEditIdLazyImport.update({
  id: '/specs/edit/$id',
  path: '/specs/edit/$id',
  getParentRoute: () => rootRoute,
} as any).lazy(() =>
  import('./routes/specs/edit/$id.lazy').then((d) => d.Route),
)

const OptionsEditIdLazyRoute = OptionsEditIdLazyImport.update({
  id: '/options/edit/$id',
  path: '/options/edit/$id',
  getParentRoute: () => rootRoute,
} as any).lazy(() =>
  import('./routes/options/edit/$id.lazy').then((d) => d.Route),
)

const ManufacturesEditIdLazyRoute = ManufacturesEditIdLazyImport.update({
  id: '/manufactures/edit/$id',
  path: '/manufactures/edit/$id',
  getParentRoute: () => rootRoute,
} as any).lazy(() =>
  import('./routes/manufactures/edit/$id.lazy').then((d) => d.Route),
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
    '/manufactures/$id': {
      id: '/manufactures/$id'
      path: '/manufactures/$id'
      fullPath: '/manufactures/$id'
      preLoaderRoute: typeof ManufacturesIdLazyImport
      parentRoute: typeof rootRoute
    }
    '/manufactures/create': {
      id: '/manufactures/create'
      path: '/manufactures/create'
      fullPath: '/manufactures/create'
      preLoaderRoute: typeof ManufacturesCreateLazyImport
      parentRoute: typeof rootRoute
    }
    '/options/$id': {
      id: '/options/$id'
      path: '/options/$id'
      fullPath: '/options/$id'
      preLoaderRoute: typeof OptionsIdLazyImport
      parentRoute: typeof rootRoute
    }
    '/options/create': {
      id: '/options/create'
      path: '/options/create'
      fullPath: '/options/create'
      preLoaderRoute: typeof OptionsCreateLazyImport
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
    '/cars/': {
      id: '/cars/'
      path: '/cars'
      fullPath: '/cars'
      preLoaderRoute: typeof CarsIndexLazyImport
      parentRoute: typeof rootRoute
    }
    '/manufactures/': {
      id: '/manufactures/'
      path: '/manufactures'
      fullPath: '/manufactures'
      preLoaderRoute: typeof ManufacturesIndexLazyImport
      parentRoute: typeof rootRoute
    }
    '/options/': {
      id: '/options/'
      path: '/options'
      fullPath: '/options'
      preLoaderRoute: typeof OptionsIndexLazyImport
      parentRoute: typeof rootRoute
    }
    '/specs/': {
      id: '/specs/'
      path: '/specs'
      fullPath: '/specs'
      preLoaderRoute: typeof SpecsIndexLazyImport
      parentRoute: typeof rootRoute
    }
    '/manufactures/edit/$id': {
      id: '/manufactures/edit/$id'
      path: '/manufactures/edit/$id'
      fullPath: '/manufactures/edit/$id'
      preLoaderRoute: typeof ManufacturesEditIdLazyImport
      parentRoute: typeof rootRoute
    }
    '/options/edit/$id': {
      id: '/options/edit/$id'
      path: '/options/edit/$id'
      fullPath: '/options/edit/$id'
      preLoaderRoute: typeof OptionsEditIdLazyImport
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
  '/manufactures/$id': typeof ManufacturesIdLazyRoute
  '/manufactures/create': typeof ManufacturesCreateLazyRoute
  '/options/$id': typeof OptionsIdLazyRoute
  '/options/create': typeof OptionsCreateLazyRoute
  '/specs/$id': typeof SpecsIdLazyRoute
  '/specs/create': typeof SpecsCreateLazyRoute
  '/cars': typeof CarsIndexLazyRoute
  '/manufactures': typeof ManufacturesIndexLazyRoute
  '/options': typeof OptionsIndexLazyRoute
  '/specs': typeof SpecsIndexLazyRoute
  '/manufactures/edit/$id': typeof ManufacturesEditIdLazyRoute
  '/options/edit/$id': typeof OptionsEditIdLazyRoute
  '/specs/edit/$id': typeof SpecsEditIdLazyRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexLazyRoute
  '/login': typeof LoginLazyRoute
  '/profile': typeof ProfileLazyRoute
  '/register': typeof RegisterLazyRoute
  '/manufactures/$id': typeof ManufacturesIdLazyRoute
  '/manufactures/create': typeof ManufacturesCreateLazyRoute
  '/options/$id': typeof OptionsIdLazyRoute
  '/options/create': typeof OptionsCreateLazyRoute
  '/specs/$id': typeof SpecsIdLazyRoute
  '/specs/create': typeof SpecsCreateLazyRoute
  '/cars': typeof CarsIndexLazyRoute
  '/manufactures': typeof ManufacturesIndexLazyRoute
  '/options': typeof OptionsIndexLazyRoute
  '/specs': typeof SpecsIndexLazyRoute
  '/manufactures/edit/$id': typeof ManufacturesEditIdLazyRoute
  '/options/edit/$id': typeof OptionsEditIdLazyRoute
  '/specs/edit/$id': typeof SpecsEditIdLazyRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexLazyRoute
  '/login': typeof LoginLazyRoute
  '/profile': typeof ProfileLazyRoute
  '/register': typeof RegisterLazyRoute
  '/manufactures/$id': typeof ManufacturesIdLazyRoute
  '/manufactures/create': typeof ManufacturesCreateLazyRoute
  '/options/$id': typeof OptionsIdLazyRoute
  '/options/create': typeof OptionsCreateLazyRoute
  '/specs/$id': typeof SpecsIdLazyRoute
  '/specs/create': typeof SpecsCreateLazyRoute
  '/cars/': typeof CarsIndexLazyRoute
  '/manufactures/': typeof ManufacturesIndexLazyRoute
  '/options/': typeof OptionsIndexLazyRoute
  '/specs/': typeof SpecsIndexLazyRoute
  '/manufactures/edit/$id': typeof ManufacturesEditIdLazyRoute
  '/options/edit/$id': typeof OptionsEditIdLazyRoute
  '/specs/edit/$id': typeof SpecsEditIdLazyRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths:
    | '/'
    | '/login'
    | '/profile'
    | '/register'
    | '/manufactures/$id'
    | '/manufactures/create'
    | '/options/$id'
    | '/options/create'
    | '/specs/$id'
    | '/specs/create'
    | '/cars'
    | '/manufactures'
    | '/options'
    | '/specs'
    | '/manufactures/edit/$id'
    | '/options/edit/$id'
    | '/specs/edit/$id'
  fileRoutesByTo: FileRoutesByTo
  to:
    | '/'
    | '/login'
    | '/profile'
    | '/register'
    | '/manufactures/$id'
    | '/manufactures/create'
    | '/options/$id'
    | '/options/create'
    | '/specs/$id'
    | '/specs/create'
    | '/cars'
    | '/manufactures'
    | '/options'
    | '/specs'
    | '/manufactures/edit/$id'
    | '/options/edit/$id'
    | '/specs/edit/$id'
  id:
    | '__root__'
    | '/'
    | '/login'
    | '/profile'
    | '/register'
    | '/manufactures/$id'
    | '/manufactures/create'
    | '/options/$id'
    | '/options/create'
    | '/specs/$id'
    | '/specs/create'
    | '/cars/'
    | '/manufactures/'
    | '/options/'
    | '/specs/'
    | '/manufactures/edit/$id'
    | '/options/edit/$id'
    | '/specs/edit/$id'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexLazyRoute: typeof IndexLazyRoute
  LoginLazyRoute: typeof LoginLazyRoute
  ProfileLazyRoute: typeof ProfileLazyRoute
  RegisterLazyRoute: typeof RegisterLazyRoute
  ManufacturesIdLazyRoute: typeof ManufacturesIdLazyRoute
  ManufacturesCreateLazyRoute: typeof ManufacturesCreateLazyRoute
  OptionsIdLazyRoute: typeof OptionsIdLazyRoute
  OptionsCreateLazyRoute: typeof OptionsCreateLazyRoute
  SpecsIdLazyRoute: typeof SpecsIdLazyRoute
  SpecsCreateLazyRoute: typeof SpecsCreateLazyRoute
  CarsIndexLazyRoute: typeof CarsIndexLazyRoute
  ManufacturesIndexLazyRoute: typeof ManufacturesIndexLazyRoute
  OptionsIndexLazyRoute: typeof OptionsIndexLazyRoute
  SpecsIndexLazyRoute: typeof SpecsIndexLazyRoute
  ManufacturesEditIdLazyRoute: typeof ManufacturesEditIdLazyRoute
  OptionsEditIdLazyRoute: typeof OptionsEditIdLazyRoute
  SpecsEditIdLazyRoute: typeof SpecsEditIdLazyRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexLazyRoute: IndexLazyRoute,
  LoginLazyRoute: LoginLazyRoute,
  ProfileLazyRoute: ProfileLazyRoute,
  RegisterLazyRoute: RegisterLazyRoute,
  ManufacturesIdLazyRoute: ManufacturesIdLazyRoute,
  ManufacturesCreateLazyRoute: ManufacturesCreateLazyRoute,
  OptionsIdLazyRoute: OptionsIdLazyRoute,
  OptionsCreateLazyRoute: OptionsCreateLazyRoute,
  SpecsIdLazyRoute: SpecsIdLazyRoute,
  SpecsCreateLazyRoute: SpecsCreateLazyRoute,
  CarsIndexLazyRoute: CarsIndexLazyRoute,
  ManufacturesIndexLazyRoute: ManufacturesIndexLazyRoute,
  OptionsIndexLazyRoute: OptionsIndexLazyRoute,
  SpecsIndexLazyRoute: SpecsIndexLazyRoute,
  ManufacturesEditIdLazyRoute: ManufacturesEditIdLazyRoute,
  OptionsEditIdLazyRoute: OptionsEditIdLazyRoute,
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
        "/manufactures/$id",
        "/manufactures/create",
        "/options/$id",
        "/options/create",
        "/specs/$id",
        "/specs/create",
        "/cars/",
        "/manufactures/",
        "/options/",
        "/specs/",
        "/manufactures/edit/$id",
        "/options/edit/$id",
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
    "/manufactures/$id": {
      "filePath": "manufactures/$id.lazy.jsx"
    },
    "/manufactures/create": {
      "filePath": "manufactures/create.lazy.jsx"
    },
    "/options/$id": {
      "filePath": "options/$id.lazy.jsx"
    },
    "/options/create": {
      "filePath": "options/create.lazy.jsx"
    },
    "/specs/$id": {
      "filePath": "specs/$id.lazy.jsx"
    },
    "/specs/create": {
      "filePath": "specs/create.lazy.jsx"
    },
    "/cars/": {
      "filePath": "cars/index.lazy.jsx"
    },
    "/manufactures/": {
      "filePath": "manufactures/index.lazy.jsx"
    },
    "/options/": {
      "filePath": "options/index.lazy.jsx"
    },
    "/specs/": {
      "filePath": "specs/index.lazy.jsx"
    },
    "/manufactures/edit/$id": {
      "filePath": "manufactures/edit/$id.lazy.jsx"
    },
    "/options/edit/$id": {
      "filePath": "options/edit/$id.lazy.jsx"
    },
    "/specs/edit/$id": {
      "filePath": "specs/edit/$id.lazy.jsx"
    }
  }
}
ROUTE_MANIFEST_END */
