import RegisterForm from "@/components/view/Auth/Register";
import React from "react";

type pageProps = {};

const page: React.FC<pageProps> = () => {
  return (
    <main>
      <section>
        <RegisterForm />
      </section>
    </main>
  );
};
export default page;
