import React, { useEffect, useState, useRef } from 'react'
import { Alert } from 'react-native'
import { getArticlesByAuthorName } from '../../services/DataService'
import { Article } from '../../types'

export const useBooksList = (authorName: string) => {
    const [titles, setTitles] = useState<string[]>([])
    const pageNumberRef = useRef(1)
    const titlesRef = useRef<string[]>([])
    useEffect(() => {
        getArticlesList()
    }, [])

    const getArticlesList = () => {
        getArticlesByAuthorName(pageNumberRef.current, authorName)
            .then(response => {
                saveTitles(response.data)

                const nextPage = pageNumberRef.current + 1
                if(nextPage <= response.total_pages) {
                    pageNumberRef.current = nextPage
                    getArticlesList()
                } else {
                    setTitles(titlesRef.current)
                }
            })
            .catch(error => console.warn(error))
    }

    const saveTitles = (articles: Article[]) => {
        const newTitles: string[] = []
        articles.map(article => {
            if(article.title && article.title.length > 0) {
                newTitles.push(article.title)
            } else if(article.story_title && article.story_title.length > 0) {
                newTitles.push(article.story_title)
            } else {
                newTitles.push('NA')
            }
        })
        titlesRef.current = newTitles
    }

    return {
        titles
    }
}