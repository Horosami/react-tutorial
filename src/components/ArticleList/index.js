import React, {PureComponent} from 'react'
import Article from '../Article'
import './style.css'


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
// export default function ArticleList({ articles }){
//     const articleElement = articles.map((article, index) =>
//         <li key = {article.id} className="article-list__li">
//             <Article article = {article} defaultOpen = {index === 0} />
//         </li>
//     )
//     return (
//         <ul>
//             {articleElement}
//         </ul>
//     )
// }

export default class ArticleList extends PureComponent {
    render() {
        const articleElement = this.props.articles.map((article, index) =>
            <li key = {article.id} className="article-list__li">
                <Article article = {article} defaultOpen = {index === 0} />
            </li>
        )
        return (
            <ul>
                {articleElement}
            </ul>
        )
    }
}