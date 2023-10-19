import LoginForm from "@/components/view/Auth/LoginForm";
import React from "react";

type pageProps = {};

const page: React.FC<pageProps> = () => {
  return (
    <section>
      <div>
        <LoginForm />
      </div>
    </section>
  );
};
export default page;
