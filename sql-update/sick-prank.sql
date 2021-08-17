update "films"
    set "rating" = 'R'
  where "rating" = 'NC-17'
  returning *;
