import React, { useEffect, useState, useRef } from 'react'
import { Alert } from 'react-native'
import { getArticlesByAuthorName } from '../../services/DataService'
import { Article } from '../../types'

export const useBooksList = (authorName: string) => {
    const [titles, setTitles] = useState<string[]>([])

    useEffect(() => {
        getArticlesList()
    }, [])

    const getArticlesList = () => {
        getArticlesByAuthorName(1, authorName)
            .then(firstPageResponse => { 
                if(firstPageResponse.total_pages > 1) {
                    Promise.all([...Array(firstPageResponse.total_pages - 1).keys()].map(
                        (_, index) => getArticlesByAuthorName(index + 2, authorName)
                    )).then(allResponses => {
                        let allResponsesArticles = [...firstPageResponse.data]
                        allResponses.map(response => {
                            allResponsesArticles = [...allResponsesArticles, ...response.data]
                        })
                        saveTitles(allResponsesArticles)
                    }).catch(error => {
                        console.warn(error)
                    })
                } else {
                    saveTitles(firstPageResponse.data)
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
        setTitles(newTitles)
    }

    return {
        titles
    }
}