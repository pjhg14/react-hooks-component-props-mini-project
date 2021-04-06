function Article({ title, date= "January 1, 1970", preview, minutes }) {
    let readTime = ""

    if (minutes < 30) {
        for (let index = 0; index < minutes / 5; index++) {
            readTime += "☕️"
        }
    } else {            //minutes > 30
        for (let index = 0; index < minutes / 10; index++) {
            readTime += "🍱"
        }
    }

    readTime += `${minutes} min read time`
    

    return(
        <article>
            <h3>{title}</h3>
            <small>{date}</small>
            <p>{readTime}</p>
            <p>{preview}</p>
        </article>
    )
}

export default Article