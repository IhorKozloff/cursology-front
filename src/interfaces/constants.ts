
export interface IRecommendedTopic {
    topic_name: string,
    topic_id: string
}

export interface IPrimaryCategory {
    name: string,
    categoryID: string,
    recomended_topics: IRecommendedTopic[]
}