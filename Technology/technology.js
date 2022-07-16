$(".space-port").click(function(){
    $(".launch-vehicle").removeClass("active-button");
    $(".space-capsule").removeClass("active-button");
    $(".space-port").addClass("active-button");
    $(".heading1").text("SPACEPORT");
    $(".plain-text").text("A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.")
    $(".tech-img").attr("src", "/Technology/image-spaceport-portrait.jpg")
});

$(".space-capsule").click(function(){
    $(".launch-vehicle").removeClass("active-button");
    $(".space-port").removeClass("active-button");
    $(".space-capsule").addClass("active-button");
    $(".heading1").text("SPACE CAPSULE");
    $(".plain-text").text("A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained..")
    $(".tech-img").attr("src", "/Technology/image-space-capsule-portrait.jpg")
});