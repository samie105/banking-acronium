import React from "react";
import AddressEdit from "@/components/admin/UserEdits/AddresssEdit";
import dbConnect from "@/server";
import Address, { PaymentAddress } from "@/server/addressSchema";
import { unstable_noStore as noStore } from 'next/cache';

export default async function Page() {
  noStore(); // Disable caching for this page
  await dbConnect();
  
  const rawData = await Address.findOne({ name: "orioncapital" });
  const data: PaymentAddress = JSON.parse(JSON.stringify(rawData));

  return (
    <div>
     {data && <AddressEdit data={data} />}
    </div>
  );
}
