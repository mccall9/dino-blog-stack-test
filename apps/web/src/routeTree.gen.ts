/* eslint-disable */
// @ts-nocheck
import { Route as rootRouteImport } from './routes/__root'
import { Route as LoginRouteImport } from './routes/login'
import { Route as IdeiasRouteImport } from './routes/ideias'
import { Route as CuponsRouteImport } from './routes/cupons'
import { Route as IndexRouteImport } from './routes/index'
import { Route as CommunityClubeDosCuriososRouteImport } from './routes/community.clube-dos-curiosos'

const LoginRoute = LoginRouteImport.update({
  id: '/login',
  path: '/login',
  getParentRoute: () => rootRouteImport,
} as any)
const IdeiasRoute = IdeiasRouteImport.update({
  id: '/ideias',
  path: '/ideias',
  getParentRoute: () => rootRouteImport,
} as any)
const CuponsRoute = CuponsRouteImport.update({
  id: '/cupons',
  path: '/cupons',
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
  '/cupons': typeof CuponsRoute
  '/ideias': typeof IdeiasRoute
  '/login': typeof LoginRoute
  '/community/clube-dos-curiosos': typeof CommunityClubeDosCuriososRoute
}
export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/cupons': typeof CuponsRoute
  '/ideias': typeof IdeiasRoute
  '/login': typeof LoginRoute
  '/community/clube-dos-curiosos': typeof CommunityClubeDosCuriososRoute
}
export interface FileRoutesById {
  __root__: typeof rootRouteImport
  '/': typeof IndexRoute
  '/cupons': typeof CuponsRoute
  '/ideias': typeof IdeiasRoute
  '/login': typeof LoginRoute
  '/community/clube-dos-curiosos': typeof CommunityClubeDosCuriososRoute
}
export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths:
    | '/'
    | '/cupons'
    | '/ideias'
    | '/login'
    | '/community/clube-dos-curiosos'
  fileRoutesByTo: FileRoutesByTo
  to:
    | '/'
    | '/cupons'
    | '/ideias'
    | '/login'
    | '/community/clube-dos-curiosos'
  id:
    | '__root__'
    | '/'
    | '/cupons'
    | '/ideias'
    | '/login'
    | '/community/clube-dos-curiosos'
  fileRoutesById: FileRoutesById
}
export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  CuponsRoute: typeof CuponsRoute
  IdeiasRoute: typeof IdeiasRoute
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
    '/cupons': {
      id: '/cupons'
      path: '/cupons'
      fullPath: '/cupons'
      preLoaderRoute: typeof CuponsRouteImport
      parentRoute: typeof rootRouteImport
    }
    '/ideias': {
      id: '/ideias'
      path: '/ideias'
      fullPath: '/ideias'
      preLoaderRoute: typeof IdeiasRouteImport
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
  CuponsRoute,
  IdeiasRoute,
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
