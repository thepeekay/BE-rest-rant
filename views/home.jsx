const React = require('react')
const Def = require('./default.jsx')

function home() {
    return (
        <Def>
            <main>
                <h1>HOME</h1>
                <div>
                    <img src="/images/food1.jpg" alt="food1" />
                    <div>
                        <p>Photo by <a href="https://unsplash.com/@laurlanc">Laura</a> on <a href="https://unsplash.com">Unplash</a></p>
                    </div>
                </div>
                <a href="/places">
                    <button className="btn btn-primary btn-lg">Places Page</button>
                </a>

            </main>
        </Def>
    )
}

module.exports = home