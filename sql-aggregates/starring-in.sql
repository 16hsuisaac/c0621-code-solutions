select count("categories"."name"),
     "categories"."name"
     from "castMembers"
     join "actors" using ("actorId")
     join "filmCategory" using ("filmId")
     join "films" using ("filmId")
     join "categories" using ("categoryId")
    where "actors"."firstName" = 'Lisa' and "actors"."lastName" = 'Monroe'
    group by "categories"."name"
