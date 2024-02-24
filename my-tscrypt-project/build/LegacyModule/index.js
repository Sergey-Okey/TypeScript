"use strict";
function capitalizeTitles(posts) {
    return posts.map(post => {
        return Object.assign(Object.assign({}, post), { title: post.title.toUpperCase() });
    });
}
module.exports = capitalizeTitles;
