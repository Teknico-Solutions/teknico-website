"use client";

import React from "react";
import Image from "next/image";
import { useForm, SubmitHandler } from "react-hook-form";

export interface IFormInput {
  name: string;
  email: string;
  service: string;
  phone: string;
  message: string;
}

const ContactForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = async (data) => (
    await fetch("/api/email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
  );

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="p-[30px] bg-[#fff] max-w-[550px] w-full flex flex-col items-center justify-center gap-4 mx-[50px] rounded-[15px]"
    >
      <h2 className="mb-[30px]">Get Connected</h2>
      <div className="form-element">
        <label className="form-label">your name</label>
        <input
          className="form-input"
          {...register("name", { required: true })}
        />
        {errors.name && <p role="alert">{errors.name?.message}</p>}
      </div>
      <div className="form-element">
        <label className="form-label">your e-mail</label>
        <input
          className="form-input"
          type="email"
          {...register("email", { required: true })}
        />
        {errors.email && <p role="alert">{errors.email?.message}</p>}
      </div>
      <div className="form-element">
        <label className="form-label">service</label>
        <select
          className="form-input"
          {...register("service", { required: true })}
        >
          <option value="others">Others</option>
        </select>
        {errors.service && <p role="alert">{errors.service?.message}</p>}
      </div>
      <div className="form-element">
        <label className="form-label">your phone number</label>
        <input className="form-input" {...register("phone")} />
      </div>
      <div className="form-element">
        <label className="form-label">message</label>
        <textarea
          className="form-input"
          rows={5}
          {...register("message", { required: true })}
        />
        {errors.message && <p role="alert">{errors.message?.message}</p>}
      </div>
      {/* <input {...register("lastName", { pattern: /^[A-Za-z]+$/i })} /> */}
      <div>
        <input
          className="cursor-pointer btn-primary-rounded"
          type="submit"
          value={"send email"}
        />
      </div>
    </form>
  );
};

export default ContactForm;
