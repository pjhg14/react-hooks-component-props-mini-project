import blogData from "../data/blog";
import Article from "./Article";

function ArticleList() {
    const articleItems = blogData.posts.map(post => {
        return(
            <Article
                key={post.id}
                title={post.title}
                date={post.date}
                preview={post.preview}
            />
        )
    })

    return(
        <main>
            {articleItems}
        </main>
    )
}

export default ArticleList