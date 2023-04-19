import { NextPage } from 'next';

export type Roles = {
  isOnlyUser?: boolean;
};

export type NextPageAuth<P = {}> = NextPage<P> & Roles;

export type ComponentAuth = { Component: Roles };
