import LoginForm from "@/components/view/Auth/LoginForm";
import React from "react";

type pageProps = {};

const page: React.FC<pageProps> = () => {
  return (
    <main>
      <section>
        <LoginForm />
      </section>
    </main>
  );
};
export default page;
