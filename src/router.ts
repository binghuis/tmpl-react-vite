// Generouted, changes to this file will be overriden
/* eslint-disable */

import { components, hooks, utils } from '@generouted/react-router/client'

export type Path =
  | `/`
  | `/dynamic`
  | `/dynamic/:id`
  | `/dynamic/:id/detail`
  | `/login`
  | `/nested`
  | `/nested/nested-1`
  | `/nested/nested-1/nested-1-2`
  | `/related`

export type Params = {
  '/dynamic/:id': { id: string }
  '/dynamic/:id/detail': { id: string }
}

export type ModalPath = never

export const { Link, Navigate } = components<Path, Params>()
export const { useModals, useNavigate, useParams } = hooks<Path, Params, ModalPath>()
export const { redirect } = utils<Path, Params>()
