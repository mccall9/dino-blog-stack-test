/* eslint-disable */
// @ts-nocheck
import { Route as rootRouteImport } from './routes/__root'
import { Route as LoginRouteImport } from './routes/login'
import { Route as CuponsRouteImport } from './routes/cupons'
import { Route as AboutRouteImport } from './routes/about'
import { Route as IndexRouteImport } from './routes/index'
import { Route as CommunityClubeDosCuriososRouteImport } from './routes/community.clube-dos-curiosos'
import { Route as AuthCallbackRouteImport } from './routes/auth.callback'

const LoginRoute = LoginRouteImport.update({
  id: '/login',
  path: '/login',
  getParentRoute: () => rootRouteImport,
} as any)
const CuponsRoute = CuponsRouteImport.update({
  id: '/cupons',
  path: '/cupons',
  getParentRoute: () => rootRouteImport,
} as any)
const AboutRoute = AboutRouteImport.update({
  id: '/about',
  path: '/about',
  getParentRoute: () => rootRouteImport,
} as any)
const IndexRoute = IndexRouteImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRouteImport,
} as any)
const CommunityClubeDosCuriososRoute =
  CommunityClubeDosCuriososRouteImport.update({
    id: '/community/clube-dos-curiosos',
    path: '/community/clube-dos-curiosos',
    getParentRoute: () => rootRouteImport,
  } as any)
const AuthCallbackRoute = AuthCallbackRouteImport.update({
  id: '/auth/callback',
  path: '/auth/callback',
  getParentRoute: () => rootRouteImport,
} as any)

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/about': typeof AboutRoute
  '/cupons': typeof CuponsRoute
  '/login': typeof LoginRoute
  '/community/clube-dos-curiosos': typeof CommunityClubeDosCuriososRoute
  '/auth/callback': typeof AuthCallbackRoute
}
export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/about': typeof AboutRoute
  '/cupons': typeof CuponsRoute
  '/login': typeof LoginRoute
  '/community/clube-dos-curiosos': typeof CommunityClubeDosCuriososRoute
  '/auth/callback': typeof AuthCallbackRoute
}
export interface FileRoutesById {
  __root__: typeof rootRouteImport
  '/': typeof IndexRoute
  '/about': typeof AboutRoute
  '/cupons': typeof CuponsRoute
  '/login': typeof LoginRoute
  '/community/clube-dos-curiosos': typeof CommunityClubeDosCuriososRoute
  '/auth/callback': typeof AuthCallbackRoute
}
export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths:
    | '/'
    | '/about'
    | '/cupons'
    | '/login'
    | '/community/clube-dos-curiosos'
    | '/auth/callback'
  fileRoutesByTo: FileRoutesByTo
  to:
    | '/'
    | '/about'
    | '/cupons'
    | '/login'
    | '/community/clube-dos-curiosos'
    | '/auth/callback'
  id:
    | '__root__'
    | '/'
    | '/about'
    | '/cupons'
    | '/login'
    | '/community/clube-dos-curiosos'
    | '/auth/callback'
  fileRoutesById: FileRoutesById
}
export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  AboutRoute: typeof AboutRoute
  CuponsRoute: typeof CuponsRoute
  LoginRoute: typeof LoginRoute
  CommunityClubeDosCuriososRoute: typeof CommunityClubeDosCuriososRoute
  AuthCallbackRoute: typeof AuthCallbackRoute
}

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexRouteImport
      parentRoute: typeof rootRouteImport
    }
    '/about': {
      id: '/about'
      path: '/about'
      fullPath: '/about'
      preLoaderRoute: typeof AboutRouteImport
      parentRoute: typeof rootRouteImport
    }
    '/cupons': {
      id: '/cupons'
      path: '/cupons'
      fullPath: '/cupons'
      preLoaderRoute: typeof CuponsRouteImport
      parentRoute: typeof rootRouteImport
    }
    '/login': {
      id: '/login'
      path: '/login'
      fullPath: '/login'
      preLoaderRoute: typeof LoginRouteImport
      parentRoute: typeof rootRouteImport
    }
    '/community/clube-dos-curiosos': {
      id: '/community/clube-dos-curiosos'
      path: '/community/clube-dos-curiosos'
      fullPath: '/community/clube-dos-curiosos'
      preLoaderRoute: typeof CommunityClubeDosCuriososRouteImport
      parentRoute: typeof rootRouteImport
    }
    '/auth/callback': {
      id: '/auth/callback'
      path: '/auth/callback'
      fullPath: '/auth/callback'
      preLoaderRoute: typeof AuthCallbackRouteImport
      parentRoute: typeof rootRouteImport
    }
  }
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute,
  AboutRoute,
  CuponsRoute,
  LoginRoute,
  CommunityClubeDosCuriososRoute,
  AuthCallbackRoute,
}
export const routeTree = rootRouteImport
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

import type { getRouter } from './router.tsx'
import type { createStart } from '@tanstack/react-start'
declare module '@tanstack/react-start' {
  interface Register {
    ssr: true
    router: Awaited<ReturnType<typeof getRouter>>
  }
}
