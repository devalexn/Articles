import React, { useEffect, useState } from 'react'
import { getArticles } from '../../services/DataService'
import { Article } from '../../types'

export const useAuthorsList = () => {
    const [authors, setAuthors] = useState<{[key: string]: Article[]}>({})

    useEffect(() => {
        getArticlesList()
    }, [])

    const getArticlesList = () => {
        getArticles(1)
            .then(firstPageResponse => { 
                if(firstPageResponse.total_pages > 1) {
                    Promise.all([...Array(firstPageResponse.total_pages - 1).keys()].map(
                        (_, index) => getArticles(index + 2)
                    )).then(allResponses => {
                        let allResponsesArticles = [...firstPageResponse.data]
                        allResponses.map(response => {
                            allResponsesArticles = [...allResponsesArticles, ...response.data]
                        })
                        saveArticles(allResponsesArticles)
                    }).catch(error => {
                        console.warn(error)
                    })
                } else {
                    saveArticles(firstPageResponse.data)
                }
            })
            .catch(error => console.warn(error))
    }

    const saveArticles = (articles: Article[]) => {
        let newAuthors: {[key: string]: Article[]} = {}

        articles.map(article => {
            const author = newAuthors[article.author]
            if(author !== undefined) {
                newAuthors[article.author] = [...newAuthors[article.author], article]
            } else {
                newAuthors[article.author] = [article]
            }
        })
            
        setAuthors(newAuthors)
    }

    const isEvenNumber = (number: number) => {
        return number%2 === 0
    }

    return {
        authors,
        isEvenNumber
    }
}