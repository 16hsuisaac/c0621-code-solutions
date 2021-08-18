with totalPaidCTE as (
  select "title",
       sum("amount") as totalPaid
      from "films"
      join "inventory" using ("filmId")
      join "rentals" using ("inventoryId")
      join "payments" using ("rentalId")
      group by "title"
      order by "title"
),
totalCostCTE as (
  select "title",
         sum("replacementCost") as totalReplacementCost
      from "films"
      join "inventory" using ("filmId")
      group by "title"
      order by "title"
)

select "title",
       "description",
       "rating",
       totalPaid - totalReplacementCost as totalProfit
    from totalCostCTE
      inner join totalPaidCTE using ("title")
      inner join "films" using ("title")
    order by totalProfit desc
    limit 5
