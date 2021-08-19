select "countries"."name",
     count("countryId") as "totalCities"
     from "cities"
     join "countries" using ("countryId")
     group by "countryId"
