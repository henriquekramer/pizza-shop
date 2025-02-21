import { http, HttpResponse } from "msw";

import { GetMonthRevenueResponse } from "../get-month-revenue";

export const getMonthRevenuetMock = http.get<
  never,
  never,
  GetMonthRevenueResponse
>("/metrics/month-receipt", () => {
  return HttpResponse.json({
    receipt: 2220,
    diffFromLastMonth: 200,
  });
});
