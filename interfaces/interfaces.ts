interface Reportable {
  // just need to make sure that the object we pass into the function has the properties that we expect (summary)
  //   name: string;
  //   year: Date;
  //   broken: boolean;
  summary(): string;
}

const oldCivic = {
  name: "civic",
  year: new Date(),
  broken: true,
  summary(): string {
    return (
      `Name: ${this.name}\n` + `Year: ${this.year}\n` + `Broken? ${this.broken}`
    );
  },
};

const drink = {
  color: "brown",
  carbonated: true,
  sugar: 40,
  summary(): string {
    return (
      `My drink has ${this.sugar} grams of sugar\n` +
      `It is ${this.color} and carbonated? ${this.carbonated}`
    );
  },
};

const printReportSummary = (item: Reportable): void => {
  console.log(item.summary());
};

printReportSummary(oldCivic);
printReportSummary(drink);
