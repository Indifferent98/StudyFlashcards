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
  orderBy?: string
}
