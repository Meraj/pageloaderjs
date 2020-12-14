function pageloader(NavigationBTN, AppBody, onStart, onSuccess, onError) {
    // Get Navigation Buttons By Class
    const NavNTNElement = document.getElementsByClassName(NavigationBTN)
    // Get App Body By Id
    const AppBodyElement = document.getElementById(AppBody)
    // Get App Html
    const AppHtml = document.getElementsByTagName('html')[0]
    for (var i = 0; i < NavNTNElement.length; i++) {
        // Click Listener For Navigation Buttons
        NavNTNElement[i].addEventListener("click", function (e) {
            e.preventDefault(); // Prevent links to load new page
            onStart() // on Start Function
            updatePage(e.target.getAttribute('href')) // Update Page
        });
    }

    function updatePage(UrlLink) {
        getDestinationPage(UrlLink)
    }

    function getDestinationPage(UrlLink) {
        const xmlHttp = new XMLHttpRequest();
        xmlHttp.onerror = function () {
            onError()
        }
        xmlHttp.onreadystatechange = function () {
            if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
                updateAppBody(UrlLink, xmlHttp.responseText);
            } else {
                onError()
            }
        }
        xmlHttp.open("GET", UrlLink, true); // true for asynchronous
        xmlHttp.send(null);
    }

    function updateAppBody(UrlLink, Response) {
        const ResponseDom = new DOMParser().parseFromString(Response, "text/html");
        const AppTitle = ResponseDom.getElementsByTagName('title')[0].textContent;
        console.log(AppTitle)
        AppBodyElement.innerText = ""
        history.pushState({}, AppTitle, UrlLink);
        const destAppBody = ResponseDom.getElementById(AppBody)
        AppHtml.getElementsByTagName('title')[0].innerText = AppTitle
        AppBodyElement.appendChild(destAppBody);
        onSuccess()
    }


}