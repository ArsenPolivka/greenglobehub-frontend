import { SignUpForm } from "@/sections/SignUp/SignUpForm";

export default async function Page(): Promise<JSX.Element> {
  return (
    <>
      <SignUpForm type="login" />
    </>
  );
}
