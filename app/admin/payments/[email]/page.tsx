import PaymentsPage from "@/components/admin/UserEdits/PaymentsPage";
import dbConnect from "@/server";
import User, { IUser } from "@/server/userSchema";
import React from "react";

export default async function Payments({
  params,
}: {
  params: { email: string };
}) {
  await dbConnect();

  const email = params.email.replace("%40", "@");
  const rawData = await User.findOne({ email });
  const data: IUser = JSON.parse(JSON.stringify(rawData));

  return (
    <div className="w-full h-screen overflow-scroll dark:bg-neutral-950">
      <PaymentsPage data={data} />
    </div>
  );
}
