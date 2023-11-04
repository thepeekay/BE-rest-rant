const React = require('react')
const Def = require('../default.jsx')

function show(data) {
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
                            <p>Not Rated</p>
                            <h2>Description</h2>
                            <p>Located in {`${data.place.city}`}, {`${data.place.state}`} and serving {`${data.place.cuisines}`}</p>
                            <div className='edit-btns'>
                                <a href={`/places/${data.id}/edit`} className='btn btn-warning'>Edit</a>
                                <form method='POST' action={`/places/${data.id}?_method=DELETE`}>
                                    <button type='submit' className='btn btn-danger'>Delete</button>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className='show-comments'>
                        <h2>Comments</h2>
                    </div>
                </div>
            </main>
        </Def>
    )
}

module.exports = show
