import { useForm, SubmitHandler } from "react-hook-form";
import { css } from "@emotion/react";
import type { NextPage } from "next";

type Inputs = {
  example: string;
  exampleRequired: string;
};

const Home: NextPage = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  return (
    <>
      <h1 css={{ color: "blue" }}>Hello, World!</h1>
      <h2
        css={css`
          color: red;
        `}
      >
        Hello, World!
      </h2>
      <h3>Hello, World!</h3>
      <h4>Hello, World!</h4>
      <h5>Hello, World!</h5>
      <h6>Hello, World!</h6>
      <ul>
        <li>LILI</li>
        <ol>OLOL</ol>
      </ul>

      <form onSubmit={handleSubmit(onSubmit)}>
        <input defaultValue="test" {...register("example")} />
        <input {...register("exampleRequired", { required: true })} />
        {errors.exampleRequired && <span>This field is required</span>}

        <input type="submit" />
      </form>
    </>
  );
};

export default Home;
