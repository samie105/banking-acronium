import React from "react";
import DepMobileOptions from "./DepMobileOptions";
import DepositHistory from "./DepositHistory";
import { PaymentAddress } from "@/server/addressSchema";

export default function Deposits({ data }: { data: PaymentAddress }) {
  return (
    <div>
     {data&& <DepMobileOptions data={data} />}
      <DepositHistory />
    </div>
  );
}
