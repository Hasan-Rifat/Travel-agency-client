import RegisterForm from "@/components/view/Auth/Register";
import React from "react";

type pageProps = {};

const page: React.FC<pageProps> = () => {
  return (
    <section>
      <div>
        <RegisterForm />
      </div>
    </section>
  );
};
export default page;
