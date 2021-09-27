import { AuthorsResponse } from '../types'

export const getArticles = (pageNumber: number) : Promise<AuthorsResponse> => {
    return new Promise((resolve, reject) => {
        fetch(`https://jsonmock.hackerrank.com/api/articles?page=${pageNumber}`)
            .then(response => response.json())
            .then(resolve)
            .catch(reject)
        })
}

export const getArticlesByAuthorName = (pageNumber: number, authorName: string) : Promise<AuthorsResponse> => {
    return new Promise((resolve, reject) => {
        fetch(`https://jsonmock.hackerrank.com/api/articles?page=${pageNumber}&author=${authorName}`)
            .then(response => response.json())
            .then(resolve)
            .catch(reject)
        })
}