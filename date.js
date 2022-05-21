exports.getDate = getDate;
exports.getDay = getDay;

function getDate(){

    var today = new Date();
    options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    };
    var day = today.toLocaleDateString("en-US", options);

    return day;
}

function getDay(){
    var today = new Date();
    let options = {
        weekday: "long"
    };
    var day = today.toLocaleDateString("en-US", options);
    return day;
}