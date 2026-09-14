import React, { useState } from "react";
import { useForm } from "react-hook-form";

const ROLES = ["Frontend", "Backend", "AI Engineer"];

const HookForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful, isSubmitting },
    getValues,
  } = useForm({
    defaultValues: { name: "1", email: "1@gmail.com" },
    mode: "onTouched",
  });

  function submit(data) {
    return new Promise((res) => console.log("submitted", data));
  }

  if (isSubmitSuccessful) {
    return (
      <div>
        <h1>Form Submitted Successfully</h1>
      </div>
    );
  }

  return (
    <div>
      <form onSubmit={handleSubmit(submit)}>
        <label>
          Full Name
          <input {...register("name", { required: "name is required" })} />
          {errors.name && <span>{errors.name.message}</span>}
        </label>
        <label>
          Email
          <input
            type="email"
            {...register("email", { required: "email is required" })}
          />
          {errors.email && <span>{errors.email.message}</span>}
        </label>
        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Submitting..." : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default HookForm;
