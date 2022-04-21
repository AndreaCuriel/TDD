const { createTestScheduler } = require("jest");
const Spiderman = require("./../app/spiderman");

describe("Unit tests for Spiderman", () => {
  test("1) Create spiderman objet", () => {
    //Intanciar el objeto
    const myspiderman = new Spiderman("Spiderman", 35, "Andrew", 5, "Sony");

    //Resultados
    expect(myspiderman.name).toBe("Spiderman");
    expect(myspiderman.age).toBe(35);
    expect(myspiderman.actor).toBe("Andrew");
    expect(myspiderman.movies).toBe(5);
    expect(myspiderman.studies).toBe("Sony");
  });

  test("2 Use the method getInfo()", () => {
    const tomholland = new Spiderman(
      "Spiderman Marvel",
      25,
      "Tom Holland",
      5,
      "Marvel"
    );
    expect(tomholland.getInfo()).toBe(
      "Hey, I'm Tom Holland from Marvel studios"
    );
  });
});
