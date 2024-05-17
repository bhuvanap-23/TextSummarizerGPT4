import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// const rapidApiKey = import.meta.env.VITE_RAPID_API_ARTICLE_KEY
// console.log(rapidApiKey)

export const articleApi = createApi({
    reducerPath:'articleApi',
    baseQuery:fetchBaseQuery({
        baseUrl:'https://article-extractor-and-summarizer.p.rapidapi.com/',
        prepareHeaders:(headers)=>{
            headers.set('X-RapidAPI-Key','d857200834msh959dfb675eb37cdp1a6fc5jsn1c25215fb507')
            headers.set('X-RapidAPI-Host','article-extractor-and-summarizer.p.rapidapi.com')

            return headers;
        }
    }),
    endpoints: (builder) =>({
        getSummary: builder.query({
            query:(params)=>`/summarize?url=${encodeURIComponent(params.articleUrl)}&length=3`
        })
    })
})

export const {useLazyGetSummaryQuery} = articleApi