import React, { useEffect, useState, useRef } from 'react'
import { getArticles } from '../../services/DataService'
import { Article } from '../../types'

export const useAuthorsList = () => {
    const [authors, setAuthors] = useState<{[key: string]: Article[]}>({})
    const pageNumberRef = useRef(1)
    const authorsRef = useRef<{[key: string]: Article[]}>({})
    useEffect(() => {
        getArticlesList()
    }, [])

    const getArticlesList = () => {
        getArticles(pageNumberRef.current)
            .then(response => {
                saveAuthors(response.data)
                
                const nextPage = pageNumberRef.current + 1
                if(nextPage <= response.total_pages) {
                    pageNumberRef.current = nextPage
                    getArticlesList()
                } else {
                    setAuthors(authorsRef.current)
                }
            })
            .catch(error => console.warn(error))
    }

    const saveAuthors = (articles: Article[]) => {
        let newAuthors = {...authors}

        articles.map(article => {
            if(newAuthors[article.author] !== null && newAuthors[article.author] !== undefined) {
                newAuthors[article.author].push(article)
            } else {
                newAuthors[article.author] = [article]
            }
        })
        authorsRef.current = newAuthors
    }

    const isEvenNumber = (number: number) => {
        return number%2 === 0
    }

    return {
        authors,
        isEvenNumber
    }
}