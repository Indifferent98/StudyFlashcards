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
  | 'author.name-asc'
  | 'author.name-desc'
  | 'cardsCount-asc'
  | 'cardsCount-desc'
  | 'created-asc'
  | 'created-desc'
  | 'name-asc'
  | 'name-desc'
  | 'updated-asc'
  | 'updated-desc'
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
  cardsCount: number
  cover: string
  created: string
  id: string
  isPrivate: boolean
  name: string
  updated: string
  userId: string
}
