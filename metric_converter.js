function lengthConverter(from, to, val) {
    var meters;
    if (from === "meters") meters = val;
    else if (from === "kilometers") meters = val * 1000;
    else if (from === "centimeters") meters = val / 100;
    else if (from === "millimeters") meters = val / 1000;


    if (to === "meters") return meters;
    else if (to === "kilometers") return meters / 1000;
    else if (to === "centimeters") return meters * 100;
    else if (to === "millimeters") return meters * 1000;

}

exports.lengthConverter = lengthConverter;
