import SignupVerifyOTP from "@/components/auth/verify/signupverifycode";
import React from "react";
import { cookies } from "next/headers";
import { decrypt, unsign } from "@/lib/encription"; // You'll need to implement this

export default async function page({
  params,
}: {
  params: { verificationType: string };
}) {
  const { verificationType } = params;
  const email = cookies().get("userEmail")?.value;
  return (
    <>
      <SignupVerifyOTP email={email} type={verificationType} />
    </>
  );
}
