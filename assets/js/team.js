function main() {
    var team = {
        january: {
            core: ["Alex", "Becca", "Ian", "Mark"],
            extended: ["Charissa", "Iylia", "Talisa"]
        },
        february: {
            core: ["Alex", "Bea", "Becca", "Charissa", "Ian", "Mark", "Regina"],
            extended: ["David", "Erik", "Talisa"]
        }
    };
    // function showCore() {

    // }
    // function showExtended() {

    // }

    function clearCore() {
        $(".orbit.core").empty();
    }

    function addCore(name, position, numCores) {
        var diameter = 300,
            rotation = 360,
            top = 225;

        var startingPosition = (top + ((rotation / numCores) * position)) % 360,
            startingPosition = startingPosition.toString(),
            startingDistance = (diameter / 2).toString();

        var c = "<li class=satellite style='transform: rotate("
        + startingPosition +"deg) translateX("
        + startingDistance  + "px)'><div class=localized style='transform: rotate(-"
        + startingPosition + "deg)'><div class=counterorbit><img src=assets/img/team/"
        + name + ".jpg><span>"
        + name + "</span></div></div></li>";
        $(".orbit.core").append(c);
    }

    $( "[data-month]" ).on("click", function() {
        var month = $(this).attr("id");
        var core = team[month].core,
            numCore = core.length,
            exts = team[month].extended,
            numExts = exts.length;

        clearCore();
        for (var i = 0; i < numCore; i ++) {
            addCore(core[i], i, numCore);
        }
        $(".orbit.core").css("animation", "rotate 45s linear 0s infinite normal none")

    });


}

$(document).ready(
    main()
);