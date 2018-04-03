import React from 'react'
import Article from './Article'


//выводит конкретное количество статей
// export default function ArticleList({ articles }){
//     return (
//         <ul>
//             <li><Article article = {articles[0]}/></li>
//             <li><Article article = {articles[1]}/></li>
//         </ul>
//     )
// }

//выводит массив
export default function ArticleList({ articles }){
    const articleElement = articles.map(article =>
        <li key = {article.id}><Article article = {article}/></li>
    )
    return (
        <ul>
            {articleElement}
        </ul>
    )
}