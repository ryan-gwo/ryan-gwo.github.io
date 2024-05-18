var _prevOnload = window.onload;

window.onload = function () {
    var switchLang = document.getElementsByClassName("menu-item menu-item-switch-to-english")[0];
    switchLang.onclick = function () {
        var href = window.location.href;
        var includesKeywords = href.includes("/about/") || href.includes("/tags/")|| href.includes("/categories/") || href.includes("/archives/");
        if (includesKeywords) {
            window.location.href = href.replace('.io/', '.io/en/');
        }
        else {
            window.location.href = "https://ryan-gwo.github.io/en/";
        }
        if (typeof (_prevOnload) === 'function') {
            _prevOnload();
        }
        return false;
    }
}
