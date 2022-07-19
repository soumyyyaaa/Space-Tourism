$(".space-port").click(function(){
    $(".launch-vehicle").removeClass("round-button-active");
    $(".space-capsule").removeClass("round-button-active");
    $(".space-port").addClass("round-button-active");
    $(".heading1").text("SPACEPORT");
    $(".plain-text").text("A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.")
    $(".tech-img-portrait").attr("src", "/Technology/image-spaceport-portrait.jpg")
    $(".tech-img-landscape").attr("src", "/Technology/image-spaceport-landscape.jpg")
});

$(".space-capsule").click(function(){
    $(".launch-vehicle").removeClass("round-button-active");
    $(".space-port").removeClass("round-button-active");
    $(".space-capsule").addClass("round-button-active");
    $(".heading1").text("SPACE CAPSULE");
    $(".plain-text").text("A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained..")
    $(".tech-img-portrait").attr("src", "/Technology/image-space-capsule-portrait.jpg")
    $(".tech-img-landscape").attr("src", "/Technology/image-space-capsule-landscape.jpg")
});

