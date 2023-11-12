const React = require('react')
const Def = require('../default.jsx')

function show(data) {
    let comments = (
        <h3 className='inactive'>No comments yet!</h3>
    )
    let rating = (
        <h3 className='inactive'>Not yet rated</h3>
    )
    if (data.place.comments.length) {
        let sumRatings = data.place.comments.reduce((tot, c) => {
            return tot + c.stars
        }, 0)
        let averageRating = sumRatings / data.place.comments.length
        rating = (
            <h3>{Math.round{averageRating}} stars</h3>
        )
        comments = data.place.comments.map(c => {
            return (
                <div className='border'>
                    <h2 className='rant'>{c.rant ? 'Rant! 😠' : 'Rave! 😄'}</h2>
                    <h4>{c.content}</h4>
                    <h3>
                        <strong>- {c.author}</strong>
                    </h3>
                    <h4>Ratings: {c.stars}</h4>
                </div>
            )
        })
    }
    return (
        <Def>
            <head>
                <link rel="stylesheet" href="../style.css" />
            </head>
            <main>
                <div className='wrapper'>
                    <div className='show-page'>
                        <div className='show-img'>
                            <img src={`${data.place.pic}`} alt="" />
                        </div>
                        <div className='show-info'>
                            <h1>{data.place.name}</h1>
                            <h2>Ratings</h2>
                            <h3>{rating}</h3>
                            <h2>Description</h2>
                            <h3>{data.place.showEstablished()}</h3>
                            <h4>Serving {data.place.cuisines}</h4>
                            <h3>Located in {`${data.place.city}`}, {`${data.place.state}`}</h3>
                            <div className='edit-btns'>
                                <a href={`/places/${data.id}/edit`} className='btn btn-warning'>Edit</a>
                                <form method='POST' action={`/places/${data.id}?_method=DELETE`}>
                                    <button type='submit' className='btn btn-danger'>Delete</button>
                                </form>
                            </div>
                        </div>
                    </div>
                    <h2>Comments</h2>
                    <div className='show-comments'>
                        {comments}
                    </div>
                    <div className='review-input'>
                        <form method='POST' action={`/places/${data.place.id}/comment`}>
                            <h4>
                                <label htmlFor="content">Content</label><br />
                            </h4>
                            <textarea name="content" id="content" cols="100" rows="5" required></textarea>
                            <div className='review-input2'>
                                <h4>
                                    <label htmlFor="author">Author</label>
                                </h4>
                                <input className='author-input' type="text" id='author' name='author' />
                                <h4>
                                    <label htmlFor="stars">Star Ratings</label>
                                </h4>
                                <input type="range" id='stars' name='stars' min={1} max={5} />
                                <h4>
                                    <label htmlFor="rant">Rant!</label>
                                </h4>
                                <input type="checkbox" id='rant' name='rant' />
                            </div>
                            <input type="submit" />
                        </form>
                    </div>
                </div>
            </main>
        </Def>
    )
}

module.exports = show
