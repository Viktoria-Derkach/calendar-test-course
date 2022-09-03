import React from 'react'
import Event from '../pages/Event';
import Login from '../pages/Login';
export interface IRoute {
 path: string;
 component: React.ComponentType;
exact?: boolean;
}

export enum RoutesNames {
  LOGIN='/login',
  EVENT='/'
}

export const publicRoutes: IRoute[] = [
 { path: RoutesNames.LOGIN, component: Login, exact: true }
]

export const privateRoutes: IRoute[] = [
  { path: RoutesNames.EVENT, component: Event, exact: true }
 ]
