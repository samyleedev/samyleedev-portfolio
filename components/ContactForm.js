import React from "react";
import { MdEmojiPeople, MdEmail, MdSubject, MdMessage } from "react-icons/md";
import { SiMinutemailer } from "react-icons/si";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Swal from "sweetalert2";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const formSchema = Yup.object({
    name: Yup.string().required("Ce champ est requis."),
    subject: Yup.string().required("Ce champ est requis."),
    email: Yup.string()
      .email("L'adresse email est invalide.")
      .required("Ce champ est requis."),
    message: Yup.string().required("Ce champ est requis"),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const onSubmit = (data) => {
    reset();
    emailjs
      .send(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        data,
        process.env.NEXT_PUBLIC_USER_ID
      )
      .then((result) => {
        reset();
        Swal.fire({
          title: "Message envoyé !",
          text: "Merci ! Je reviens vers vous au plus vite !",
          icon: "success",
          confirmButtonText: "Ok",
        });
      })
      .catch((error) => {
        Swal.fire({
          title: "Oups, une erreur est survenue !",
          text: "Le message n'a pas été correctement envoyé, réessayez, ou envoyez moi directement un email à l'adresse suivante : samy.levy.dev@gmail.com",
          icon: "error",
          confirmButtonText: "Ok",
        });
      });
  };
  return (
    <div className="flex flex-col h-fit p-4  w-full md:w-1/2 rounded-lg">
      <p className="text-xs mb-3 dark:text-white">
        Tous les champs sont obligatoires
      </p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="p-2 flex items-center text-xl bg-white dark:bg-slate-600  mb-3">
          <i className="text-2xl mr-2">
            <MdEmojiPeople />
          </i>
          <input
            type="text"
            {...register("name")}
            placeholder="Nom"
            className="flex-2 bg-white dark:bg-slate-600 w-full "
          />
        </div>
        <p className="text-red-600">{errors.name?.message}</p>
        <div className="p-2 flex items-center text-xl bg-white dark:bg-slate-600 mb-3">
          <i className="text-2xl mr-2">
            <MdEmail />
          </i>
          <input
            type="text"
            {...register("email")}
            placeholder="Email"
            className="flex-2 bg-white dark:bg-slate-600 w-full"
          />
        </div>
        <p className="text-red-600">{errors.email?.message}</p>
        <div className="p-2 flex items-center text-xl bg-white dark:bg-slate-600  mb-3">
          <i className="text-2xl mr-2">
            <MdSubject />
          </i>
          <input
            type="text"
            {...register("subject")}
            placeholder="Objet"
            className="flex-2 bg-white dark:bg-slate-600 w-full"
          />
        </div>
        <p className="text-red-600">{errors.subject?.message}</p>
        <div className="p-2 flex items-start text-xl bg-white dark:bg-slate-600  mb-3">
          <i className="text-2xl mr-2">
            <MdMessage />
          </i>
          <textarea
            {...register("message")}
            placeholder="Votre message..."
            rows={4}
            className="flex-2 bg-white dark:bg-slate-600 w-full"
          />
        </div>
        <p className="text-red-600">{errors.message?.message}</p>
        <button
          type="submit"
          className="flex justify-center items-center text-xl p-3 cursor-pointer bg-gradient-to-r from-rose-600 to-red-500 rounded-xl"
        >
          <i className="text-2xl mx-2">
            <SiMinutemailer />
          </i>
          Envoyer le message !
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
