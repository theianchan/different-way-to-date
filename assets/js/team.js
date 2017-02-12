function main() {
    var ALL_TEAM = {
        january: {
            core: ["Alex", "Becca", "Ian", "Mark"],
            extended: ["Charissa", "Iylia", "Talisa"]
        },
        february: {
            core: ["Alex", "Bea", "Becca", "Charissa", "Ian", "Mark", "Regina"],
            extended: ["David", "Erik", "Talisa"]
        }
    };

    function resetOrbit(team) {
        $(".orbit." + team).remove();
    }

    function newCore(team, name, position, numCores) {
        var diameter = (team == "core" ? 300 : 600),
            rotation = 360,
            top = 225;

        var startingPosition = (top + ((rotation / numCores) * position)) % 360,
            startingPosition = startingPosition.toString(),
            startingDistance = (diameter / 2).toString();

        var c = "<li class=satellite style='transform: rotate("
        + startingPosition +"deg) translateX("
        + startingDistance  + "px)'><div class=localized style='transform: rotate(-"
        + startingPosition + "deg)'><div class=counterorbit><img class='wow bounceIn' data-wow-delay=\""
        + (Math.floor(Math.random() * 5) + 1) + "00ms\" src=assets/img/team/"
        + name.toLowerCase() + ".jpg><span>"
        + name + "</span></div></div></li>";

        return c;
    }

    function showTeam(month, team) {
        var members = ALL_TEAM[month][team],
            numMembers = members.length;

        resetOrbit(team);
        var newOrbit = "<ul class='orbit " + team + "\'>";
        for (var i = 0; i < numMembers; i ++) {
            newOrbit += newCore(team, members[i], i, numMembers);
        }
        newOrbit += "</ul>";
        $(".space").append(newOrbit);
    }

    $( "[data-month]" ).on("click", function() {
        $(".button").removeClass("active");
        $(this).addClass("active");

        var month = $(this).attr("id");

        showTeam(month, "core");
        showTeam(month, "extended");
    });

    showTeam("january", "core");
    showTeam("january", "extended");

    new WOW().init();
}

$(document).ready(

    main()

);