
        function opentabs(evt, tab) {
        var i, newdoccontent, tablinks;
        newdoccontent = document.getElementsByClassName("newdoccontent");
        for (i = 0; i < newdoccontent.length; i++) {
            newdoccontent[i].style.display = "none";
        }
        tablinks = document.getElementsByClassName("tablinks");
        for (i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace("active", "");
        }
        document.getElementById(tab).style.display = "block";
        evt.currentTarget.className += "active";
        }
