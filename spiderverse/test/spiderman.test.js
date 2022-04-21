const Spiderman = require("./../app/spiderman");

describe("Unit tests for Spiderman", () => {
  test("Create spiderman objet", () => {
    //Intanciar el objeto
    const myspiderman = new Spiderman("Spiderman", 35, "Andrew", 5, "Sony");

    //Resultados
    expect(myspiderman.name).toBe("Spiderman");
    expect(myspiderman.age).toBe(35);
    expect(myspiderman.actor).toBe("Andrew");
    expect(myspiderman.movies).toBe(5);
    expect(myspiderman.studies).toBe("Sony");
  });
});
