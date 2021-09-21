function display(page) {
    var amount = page.getAttribute("value")
    if(amount==1) return window.location.href = "index.html";
    if(amount==2) return window.location.href = "Inspeccion.html";
    if(amount==3) return window.location.href = "proxy.html";
    return window.location.href = "utm.html";
}