const React = require('react')
const Def = require('./default.jsx')

function home() {
    return (
        <Def>
            <main>
                <h1>HOME</h1>
                <a href="/places">
                    <button className="btn btn-primary btn-lg">Places Page</button>
                </a>

            </main>
        </Def>
    )
}

module.exports = home