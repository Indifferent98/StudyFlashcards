export interface Author {
  id: string
  name: string
}

export interface Item {
  id: string
  userId: string
  name: string
  isPrivate: boolean
  cover?: null
  created: string
  updated: string
  cardsCount: number
  author: Author
}

export interface pagination {
  totalItems: number
  currentPage: number
  itemsPerPage: number
  totalPages: number
}

export interface getDecksResponse {
  items: Item[]
  pagination: pagination
}
