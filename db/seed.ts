import { db, CoffeeList } from "astro:db";

// https://astro.build/db/seed
export default async function seed() {
  await db.insert(CoffeeList).values([
    {
      name: "Colombia Aguas Calientes",
      roast: "Alto",
      ideal_for: "filtro, espresso",
      nuances: "chocolate, caramelo, cuerpo cremoso",
      image:
        "https://img.freepik.com/free-psd/take-away-coffee-cup-paper-bag-mockup_58466-11148.jpg?w=996&t=st=1708248933~exp=1708249533~hmac=a511cd3a62539a6c602da82009b7f0730eb7ec5ddf2b0e155bff23194da46f02",
    },
    {
      name: "Etiopía Yirgacheffe",
      roast: "Alto",
      ideal_for: "filtro, prensa francesa",
      nuances: "nuez, toffee, chocolate negro",
      image:
        "https://img.freepik.com/free-psd/paper-coffee-bags-mockup_58466-11166.jpg?w=996&t=st=1708247894~exp=1708248494~hmac=62cea1f1b0d51ab0fa9ead1d541e281f906d641ca0401009ed7cbcc25e05286c",
    },
    {
      name: "Guatemala Antigua",
      roast: "Bajo",
      ideal_for: "moka, espresso",
      nuances: "naranja, cítricos, mermelada",
      image:
        "https://img.freepik.com/free-psd/paper-coffee-bag-mockup_58466-11147.jpg?w=996&t=st=1708248076~exp=1708248676~hmac=1ff5a76939bbee0339df8e6f295a8d2878e5a255e31691a7b560c7a289c059cc",
    },
    {
      name: "Brasil Cerrado",
      roast: "Medio",
      ideal_for: "filtro",
      nuances: "frutos rojos, lavanda, acidez brillante",
      image:
        "https://img.freepik.com/free-psd/paper-coffee-bag-mockup_58466-11146.jpg?w=996&t=st=1708249006~exp=1708249606~hmac=e182ae3d43b1f8ce957945c0ca6bad84ab9b6efe9b7f28f0fb0c2b32c8daee4e",
    },
  ]);
}
