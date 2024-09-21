"use client";

import Container from "@/components/container";
import { useState } from "react";
import { useForm } from "react-hook-form";
import useWeb3Forms from "@web3forms/react";
import emailjs from "emailjs-com";
import {
  MapPinIcon,
  EnvelopeIcon,
  PhoneIcon
} from "@heroicons/react/24/outline";
import { emailJsConfig } from "@/lib/firebase/environmen";

export default function Contact({ settings }) {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();
  const [isSuccess, setIsSuccess] = useState(false);
  const [message, setMessage] = useState(false);

  const onSubmit = data => {
    emailjs
      .send(
        emailJsConfig.YOUR_SERVICE_ID,
        emailJsConfig.YOUR_TEMPLATE_ID,
        {
          from_name: data.name,
          message: data.message,
          reply_to: data.email
        },
        emailJsConfig.YOUR_PUBLIC_KEY
      )
      .then(response => {
        setIsSuccess(true);
        setMessage("Mensaje enviado con éxito!");
      })
      .catch(error => {
        setIsSuccess(false);
        setMessage("Hubo un error al enviar el mensaje.");
      });
  };
  return (
    <Container>
      <h1 className="text-brand-primary mb-3 mt-2 text-center text-3xl font-semibold tracking-tight dark:text-white lg:text-4xl lg:leading-snug">
        Contacto
      </h1>
      <div className="text-center">
        <p className="text-lg">Estoy para ayudar.</p>
      </div>

      <div className="my-10 grid md:grid-cols-2">
        <div className="my-10">
          <h2 className="text-2xl font-semibold dark:text-white">
            Contacto
          </h2>
          <p className="mt-5 max-w-sm">Hola no tengas miedo en</p>

          <div className="mt-5">
            <div className="text-dark-600 mt-2 flex items-center space-x-2 dark:text-gray-400">
              <MapPinIcon className="h-4 w-4" />
              <span>San Jose, CR</span>
            </div>
            {settings?.email && (
              <div className="text-dark-600 mt-2 flex items-center space-x-2 dark:text-gray-400">
                <EnvelopeIcon className="h-4 w-4" />
                <a href={`mailto:${settings.email}`}>
                  {settings.email}
                </a>
              </div>
            )}
            {settings?.phone && (
              <div className="text-dark-600 mt-2 flex items-center space-x-2 dark:text-gray-400">
                <PhoneIcon className="h-4 w-4" />
                <a href={`tel:${settings.phone}`}>{settings.phone}</a>
              </div>
            )}
          </div>
        </div>
        <div>
          <form onSubmit={handleSubmit(onSubmit)} className="my-10">
            <input
              type="checkbox"
              id=""
              className="hidden"
              style={{ display: "none" }}
              {...register("botcheck")}></input>

            <div className="mb-5">
              <input
                type="text"
                placeholder="Nombre"
                autoComplete="false"
                className={`w-full rounded-md border-2 px-4 py-3 outline-none placeholder:text-gray-800 focus:ring-4 dark:bg-gray-900 dark:text-white   dark:placeholder:text-gray-200  ${
                  errors.name
                    ? "border-red-600 ring-red-100 focus:border-red-600 dark:ring-0"
                    : "border-gray-300 ring-gray-100 focus:border-gray-600 dark:border-gray-600 dark:ring-0 dark:focus:border-white"
                }`}
                {...register("name", {
                  required: "El nombre es requerido",
                  maxLength: 80
                })}
              />
              {errors.name && (
                <div className="mt-1 text-red-600">
                  <small>{errors.name.message}</small>
                </div>
              )}
            </div>

            <div className="mb-5">
              <label htmlFor="email_address" className="sr-only">
                Correo electronico
              </label>
              <input
                id="email_address"
                type="email"
                placeholder="Email"
                name="email"
                autoComplete="false"
                className={`w-full rounded-md border-2 px-4 py-3 outline-none placeholder:text-gray-800 focus:ring-4 dark:bg-gray-900 dark:text-white   dark:placeholder:text-gray-200  ${
                  errors.email
                    ? "border-red-600 ring-red-100 focus:border-red-600 dark:ring-0"
                    : "border-gray-300 ring-gray-100 focus:border-gray-600 dark:border-gray-600 dark:ring-0 dark:focus:border-white"
                }`}
                {...register("email", {
                  required: "Ingrese email",
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: "Please enter a valid email"
                  }
                })}
              />
              {errors.email && (
                <div className="mt-1 text-red-600">
                  <small>{errors.email.message}</small>
                </div>
              )}
            </div>

            <div className="mb-3">
              <textarea
                name="message"
                placeholder="Su mensaje"
                className={`h-36 w-full rounded-md border-2 px-4 py-3 outline-none placeholder:text-gray-800   focus:ring-4 dark:bg-gray-900  dark:text-white dark:placeholder:text-gray-200  ${
                  errors.message
                    ? "border-red-600 ring-red-100 focus:border-red-600 dark:ring-0"
                    : "border-gray-300 ring-gray-100 focus:border-gray-600 dark:border-gray-600 dark:ring-0 dark:focus:border-white"
                }`}
                {...register("message", {
                  required: "Ingrese su mensaje"
                })}
              />
              {errors.message && (
                <div className="mt-1 text-red-600">
                  {" "}
                  <small>{errors.message.message}</small>
                </div>
              )}
            </div>

            <button
              type="submit"
              className="w-full rounded-md bg-gray-900 px-7 py-4 font-semibold text-white transition-colors hover:bg-gray-800 focus:outline-none focus:ring focus:ring-gray-200 focus:ring-offset-2 dark:bg-white dark:text-black ">
              Enviar
            </button>
          </form>
          {message && (
            <div
              className={`mt-5 p-4 text-center ${
                isSuccess ? "bg-green-500" : "bg-red-500"
              } text-white`}>
              {message}
            </div>
          )}
        </div>
      </div>
    </Container>
  );
}
