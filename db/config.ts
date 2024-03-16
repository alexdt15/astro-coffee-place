import { defineDb, defineTable, column } from "astro:db";

// https://astro.build/db/config
const CoffeeList = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    name: column.text(),
    roast: column.text(),
    ideal_for: column.text({ optional: true }),
    nuances: column.text({ optional: true }),
    image: column.text(),
  },
});

export default defineDb({
  tables: { CoffeeList },
});
