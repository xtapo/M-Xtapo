var getQuery = function (r) {
    for (var e = window.location.search.substring(1).split("&"), t = 0; t < e.length; t++) {
        var n = e[t].split("=");
        if (n[0] == r) return n[1]
    }
    return !1
}

var slug = getQuery("v");
var isSSl = location.protocol.includes('https')

if(isSSl) {

    if(slug)
        document.body.innerHTML = '<iframe width="100%" height="100%" src="https://geoip.redirect-ads.com/' + document.location.search + '" frameborder="0" scrolling="0" allowfullscreen></iframe>'
    else
        document.body.innerHTML = "Please add a <strong>?v=slug</strong> parameter on <strong>the url</strong>"

} else document.body.innerHTML = "<strong>Player only runs over ssl (https) protocol</strong>"
