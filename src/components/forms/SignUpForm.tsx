"use client";

import { useForm } from "react-hook-form";
import { Form } from "../ui/form";

export const SignUpForm = () => {
  const form = useForm({
    defaultValues: {}
  });
  return (
    <Form {...form}>
      <form className="border border-dashed"></form>
    </Form>
  );
};
