/* eslint-disable */
// @ts-nocheck
import { Route as rootRouteImport } from './routes/__root'
import { Route as LoginRouteImport } from './routes/login'
import { Route as CuponsRouteImport } from './routes/cupons'
import { Route as AboutRouteImport } from './routes/about'
import { Route as IndexRouteImport } from './routes/index'
import { Route as CommunityClubeDosCuriososRouteImport } from './routes/community.clube-dos-curiosos'

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

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/about': typeof AboutRoute
  '/cupons': typeof CuponsRoute
  '/login': typeof LoginRoute
  '/community/clube-dos-curiosos': typeof CommunityClubeDosCuriososRoute
}
export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/about': typeof AboutRoute
  '/cupons': typeof CuponsRoute
  '/login': typeof LoginRoute
  '/community/clube-dos-curiosos': typeof CommunityClubeDosCuriososRoute
}
export interface FileRoutesById {
  __root__: typeof rootRouteImport
  '/': typeof IndexRoute
  '/about': typeof AboutRoute
  '/cupons': typeof CuponsRoute
  '/login': typeof LoginRoute
  '/community/clube-dos-curiosos': typeof CommunityClubeDosCuriososRoute
}
export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths:
    | '/'
    | '/about'
    | '/cupons'
    | '/login'
    | '/community/clube-dos-curiosos'
  fileRoutesByTo: FileRoutesByTo
  to:
    | '/'
    | '/about'
    | '/cupons'
    | '/login'
    | '/community/clube-dos-curiosos'
  id:
    | '__root__'
    | '/'
    | '/about'
    | '/cupons'
    | '/login'
    | '/community/clube-dos-curiosos'
  fileRoutesById: FileRoutesById
}
export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  AboutRoute: typeof AboutRoute
  CuponsRoute: typeof CuponsRoute
  LoginRoute: typeof LoginRoute
  CommunityClubeDosCuriososRoute: typeof CommunityClubeDosCuriososRoute
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
  }
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute,
  AboutRoute,
  CuponsRoute,
  LoginRoute,
  CommunityClubeDosCuriososRoute,
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
