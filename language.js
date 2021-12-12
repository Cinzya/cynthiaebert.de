if (!/^de\b/.test(navigator.language) && window.location.pathname != "/en/index.html") {
    window.location.href = "en/index.html"
}