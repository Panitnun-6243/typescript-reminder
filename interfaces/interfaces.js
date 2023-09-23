var oldCivic = {
    name: "civic",
    year: new Date(),
    broken: true,
    summary: function () {
        return ("Name: ".concat(this.name, "\n") + "Year: ".concat(this.year, "\n") + "Broken? ".concat(this.broken));
    },
};
var drink = {
    color: "brown",
    carbonated: true,
    sugar: 40,
    summary: function () {
        return ("My drink has ".concat(this.sugar, " grams of sugar\n") +
            "It is ".concat(this.color, " and carbonated? ").concat(this.carbonated));
    },
};
var printReportSummary = function (item) {
    console.log(item.summary());
};
printReportSummary(oldCivic);
printReportSummary(drink);
