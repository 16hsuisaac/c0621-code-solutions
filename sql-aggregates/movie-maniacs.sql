select "customers"."firstName",
       "customers"."lastName",
       sum("payments"."amount") as "totalPaid"
      from "payments"
      join "customers" using ("customerId")
      group by "customers"."customerId"
      order by "totalPaid" desc
