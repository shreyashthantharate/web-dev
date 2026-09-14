import React, { useState } from "react";

const ROLES = ["Frontend", "Backend", "AI Engineer"];

const ManualForm = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    role: "Frontend",
    experience: "",
    cover: "",
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  function set(field) {
    return (e) => setValues((v) => ({ ...v, [field]: e.target.value }));
  }

  function validate(v) {
    const e = {};
    if (!v.name.trim()) e.name = "Name is required";

    return e;
  }

  function submit(ev) {
    ev.preventDefault();
    const e = validate(values);
    setErrors(e);

    if (Object.keys(e).length === 0) setSubmitted(true); // if e me koi errror nhi hai to length 0 hogi tb submitted true kr do
  }

  if (submitted) {
    return (
      <div>
        <h1>Form submitted successfully</h1>
      </div>
    );
  }

  return (
    <div>
      <form onSubmit={submit} noValidate>
        <label>
          Full Name
          <input value={values.name} onChange={set("name")} />
          {errors.name && <span>{errors.name}</span>}
        </label>
        <label>
          Email
          <input type="email" value={values.email} onChange={set("email")} />
          {errors.email && <span>{errors.email}</span>}
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ManualForm;
