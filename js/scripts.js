// Business logic
function Place (city, country, year, spot) {
    this.city = city;
    this.country = country;
    this.year = year;
    this.spot = spot;
}

Place.prototype.placeInfo = function () {
    return `${this.city}, ${this.country}`;
}

// Reset input field
const resetInput = () => {
    $("input#city").val();
    $("input#country").val();
    $("input#year").val();
    $("input#spot").val();
};

// User Interface logic
$(document).ready(function(){
    $("form").submit(function(event){
        event.preventDefault();

        let cityInput = $("input#city").val();
        let countryInput = $("input#country").val();
        let yearInput = $("input#year").val();
        let spotInput = $("input#spot").val();

        let newPlace = new Place(cityInput, countryInput, yearInput, spotInput );
        $(".places-title").show();

        $('ul#places').prepend(`<li><span class='place'>${newPlace.placeInfo()}</span></li>`);
        resetInput();

        $('.place').click(function(){
            $('#result').show();
            $('#result h2').text(`You have visited ${newPlace.city}!`);
            $(".city").text(newPlace.city);
            $(".country").text(newPlace.country);
            $(".year").text(newPlace.year);
            $(".spot").text(newPlace.spot);
        });
    });
});