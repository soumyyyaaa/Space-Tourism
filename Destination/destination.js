$(".mars").click(function() {
    $(".mars").addClass("active-menu");
    $(".moon").removeClass("active-menu");
    $(".europa").removeClass("active-menu");
    $(".titan").removeClass("active-menu");
    $(".moon-img").attr("src", "/Destination/image-mars.png")
    $(".heading1").text("MARS");
    $(".plain-text").text("Don't forget to pack your hiking boots. You'll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It's two and a half times the size of Everest!");
    $(".td1").text("225 mil. km");
    $(".td2").text("9 months");

})

$(".europa").click(function() {
    $(".europa").addClass("active-menu");
    $(".moon").removeClass("active-menu");
    $(".mars").removeClass("active-menu");
    $(".titan").removeClass("active-menu");
    $(".moon-img").attr("src", "/Destination/image-europa.png")
    $(".heading1").text("EUROPA");
    $(".plain-text").text("The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover's dream. With an icy surface, it's perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.");
    $(".td1").text("628 mil. km");
    $(".td2").text("3 years");

})

$(".titan").click(function() {
    $(".titan").addClass("active-menu");
    $(".moon").removeClass("active-menu");
    $(".mars").removeClass("active-menu");
    $(".europa").removeClass("active-menu");
    $(".moon-img").attr("src", "/Destination/image-titan.png")
    $(".heading1").text("TITAN");
    $(".plain-text").text("The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.");
    $(".td1").text("1.6 bil. km");
    $(".td2").text("7 years");

})