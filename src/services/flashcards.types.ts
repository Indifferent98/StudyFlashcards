export interface Author {
  id: string
  name: string
}

export interface Item {
  author: Author
  cardsCount: number
  cover?: null
  created: string
  id: string
  isPrivate: boolean
  name: string
  updated: string
  userId: string
}

export interface pagination {
  currentPage: number
  itemsPerPage: number
  totalItems: number
  totalPages: number
}

export interface getDecksResponse {
  items: Item[]
  pagination: pagination
}

export type getDeckArgs = {
  authorId?: string
  currentPage?: number
  itemsPerPage?: number
  maxCardsCount?: number
  minCardsCount?: number
  name?: string
  orderBy?: orderBy
}

export type orderBy =
  | 'cardsCount-asc'
  | 'updated-asc'
  | 'name-asc'
  | 'author.name-asc'
  | 'created-asc'
  | 'cardsCount-desc'
  | 'updated-desc'
  | 'name-desc'
  | 'author.name-desc'
  | 'created-desc'
  | null

export interface CreateDeckResponse {
  author: Author
  cardsCount: number
  cover: string
  created: string
  id: string
  isPrivate: boolean
  name: string
  updated: string
  userId: string
}

export interface createDeckArgs {
  cover?: string
  isPrivate?: boolean
  name: string
}

export interface removeResponse {
  id: string
  userId: string
  name: string
  isPrivate: boolean
  cover: string
  created: string
  updated: string
  cardsCount: number
}
