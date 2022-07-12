import { Post } from 'types/graphql'

import { routes, Link } from '@redwoodjs/router'

interface Props {
  article: Post
}

const Article = ({ article }: Props) => {
  return (
    <article>
      <header>
        <h2>
          <Link to={routes.article({ id: article.id })}>{article.title}</Link>
        </h2>
      </header>
      <h2>{article.body}</h2>
      <p>Posted at: {article.createdAt}</p>
    </article>
  )
}

export default Article
