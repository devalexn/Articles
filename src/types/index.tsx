export type Article = {
    author: string
    title: string | null | undefined
    story_title: string | null | undefined
}

export type AuthorsResponse = {
    data: Article[]
    page: number
    per_page: number
    total: number
    total_pages: number
}