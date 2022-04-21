class Spiderman {
  constructor(name, age, actor, movies, studies) {
    this.name = name;
    this.age = age;
    this.actor = actor;
    this.movies = movies;
    this.studies = studies;
  }

  get getInfo() {
    return `Hey, I'm ${this.actor} from ${this.studies} studios`;
  }
}

module.exports = Spiderman;
