/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as IndexImport } from './routes/index'
import { Route as UsersZodIndexImport } from './routes/users/zod.index'
import { Route as UsersValibotIndexImport } from './routes/users/valibot.index'
import { Route as UsersArktypeIndexImport } from './routes/users/arktype.index'

// Create/Update Routes

const IndexRoute = IndexImport.update({
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const UsersZodIndexRoute = UsersZodIndexImport.update({
  path: '/users/zod/',
  getParentRoute: () => rootRoute,
} as any)

const UsersValibotIndexRoute = UsersValibotIndexImport.update({
  path: '/users/valibot/',
  getParentRoute: () => rootRoute,
} as any)

const UsersArktypeIndexRoute = UsersArktypeIndexImport.update({
  path: '/users/arktype/',
  getParentRoute: () => rootRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/users/arktype/': {
      id: '/users/arktype/'
      path: '/users/arktype'
      fullPath: '/users/arktype'
      preLoaderRoute: typeof UsersArktypeIndexImport
      parentRoute: typeof rootRoute
    }
    '/users/valibot/': {
      id: '/users/valibot/'
      path: '/users/valibot'
      fullPath: '/users/valibot'
      preLoaderRoute: typeof UsersValibotIndexImport
      parentRoute: typeof rootRoute
    }
    '/users/zod/': {
      id: '/users/zod/'
      path: '/users/zod'
      fullPath: '/users/zod'
      preLoaderRoute: typeof UsersZodIndexImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/users/arktype': typeof UsersArktypeIndexRoute
  '/users/valibot': typeof UsersValibotIndexRoute
  '/users/zod': typeof UsersZodIndexRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/users/arktype': typeof UsersArktypeIndexRoute
  '/users/valibot': typeof UsersValibotIndexRoute
  '/users/zod': typeof UsersZodIndexRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexRoute
  '/users/arktype/': typeof UsersArktypeIndexRoute
  '/users/valibot/': typeof UsersValibotIndexRoute
  '/users/zod/': typeof UsersZodIndexRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths: '/' | '/users/arktype' | '/users/valibot' | '/users/zod'
  fileRoutesByTo: FileRoutesByTo
  to: '/' | '/users/arktype' | '/users/valibot' | '/users/zod'
  id: '__root__' | '/' | '/users/arktype/' | '/users/valibot/' | '/users/zod/'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  UsersArktypeIndexRoute: typeof UsersArktypeIndexRoute
  UsersValibotIndexRoute: typeof UsersValibotIndexRoute
  UsersZodIndexRoute: typeof UsersZodIndexRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  UsersArktypeIndexRoute: UsersArktypeIndexRoute,
  UsersValibotIndexRoute: UsersValibotIndexRoute,
  UsersZodIndexRoute: UsersZodIndexRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* prettier-ignore-end */

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/users/arktype/",
        "/users/valibot/",
        "/users/zod/"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/users/arktype/": {
      "filePath": "users/arktype.index.tsx"
    },
    "/users/valibot/": {
      "filePath": "users/valibot.index.tsx"
    },
    "/users/zod/": {
      "filePath": "users/zod.index.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
