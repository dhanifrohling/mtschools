// Functionality of the header and navigation.

// DOM content loaded handler.
document.addEventListener('DOMContentLoaded', function () {

    var navBtn = document.getElementById('navBtn');
    var navPanel = document.getElementById('navPanel');
    var srchBtn = document.getElementById('srchBtn');
    var srchPanel = document.getElementById('srchPanel');
        
    // If the homepage.
    if (window.location.pathname == '/') {

        // Highlight the navigation button.
        navBtn.src = 'header/images/navAlt.png';

        // Display the navigation panel.
        navPanel.style.display = 'block';

        // Hide the search panel.
        srchPanel.style.display = 'none';
    }
    // Else, if a content page.
    else {

        // Hide the navigation panel.
        navPanel.style.display = 'none';

        // Hide the search panel.
        srchPanel.style.display = 'none';
    }

    // Navigation button hover event.
    navBtn.addEventListener('mouseover', function () {

        // Highlight the navigation button.
        navBtn.src = 'header/images/navAlt.png';
    });
    navBtn.addEventListener('mouseout', function () {

        if (navPanel.style.display == 'none') {

            // Highlight the navigation button.
            navBtn.src = 'header/images/nav.png';
        }
    });

    // Search button hover event.
    srchBtn.addEventListener('mouseover', function () {

        // Highlight the navigation button.
        srchBtn.src = 'header/images/srchAlt.png';
    });
    srchBtn.addEventListener('mouseout', function () {

        if (srchPanel.style.display == 'none') {

            // Highlight the navigation button.
            srchBtn.src = 'header/images/srch.png';
        }
    });

    // Navigation button click event.
    navBtn.addEventListener('click', function () {
        
        // If the navigation is currently hidden.
        if (navPanel.style.display == 'none') {

            // Highlight the navigation button.
            navBtn.src = 'header/images/navAlt.png';

            // Display the navigation.
            navPanel.style.display = 'block';
        }
        // Else, if the navigation is currently displayed.
        else {

            // Unhighlight the navigation button.
            navBtn.src = 'header/images/nav.png';

            // Hide the navigation.
            navPanel.style.display = 'none';
        }
    });

    // Search button click event.
    srchBtn.addEventListener('click', function () {

        // If the search panel is currently hidden.
        if (srchPanel.style.display == 'none') {

            // Highlight the search button.
            srchBtn.src = 'header/images/srchAlt.png';

            // Display the search panel.
            srchPanel.style.display = 'block';
        }
        // Else, if the search panel is currently displayed.
        else {

            // Unhighlight the search button.
            srchBtn.src = 'header/images/srch.png';

            // Hide the search panel.
            srchPanel.style.display = 'none';
        }
    });

    // Document click event.
    document.addEventListener('click', function (event) {

        // If the navigation button and navigation panel haven't been clicked.
        if (!navBtn.contains(event.target) && !navPanel.contains(event.target)) {

            // Unhighlight the navigation button.
            navBtn.src = 'header/images/nav.png';

            // Hide the navigation.
            navPanel.style.display = 'none';
        }

        // If the search button and search panel haven't been clicked.
        if (!srchBtn.contains(event.target) && !srchPanel.contains(event.target)) {

            // Unhighlight the search button.
            srchBtn.src = 'header/images/srch.png';

            // Hide the search panel.
            srchPanel.style.display = 'none';
        }
    });
});