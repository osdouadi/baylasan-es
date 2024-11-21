"use client";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm, FormProvider } from "react-hook-form";
import { useFormSchema } from "./lib/schema/form-schema";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  BriefcaseBusiness,
  CircleAlert,
  ClipboardPen,
  ListTodo,
  User,
} from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import { sendNotification } from "@/services/send-notification";
import { useState, useEffect } from "react";
import Logo from "@/components/logo";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

export default function Home() {
  const FormSchema = useFormSchema();
  const [userType, setUserType] = useState("empleado");
  const [contentType, setContentType] = useState("queja");
  const { toast } = useToast();

  const form = useForm<z.infer<typeof FormSchema>>({
    mode: "onChange",
    resolver: zodResolver(FormSchema),
    defaultValues: {
      userType: "",
      fullName: "",
      email: "",
      phoneNumber: "",
      branch: "",
      contentType: "",
      content: "",
    },
  });

  useEffect(() => {
    form.setValue("userType", userType);
  }, [userType, form]);

  useEffect(() => {
    form.setValue("contentType", contentType);
  }, [contentType, form]);

  const onSubmit = async (values: z.infer<typeof FormSchema>) => {
    try {
      await sendNotification(values);
      location.reload();
      toast({
        title: "¡La solicitud se envió correctamente!",
      });
    } catch (error) {
      toast({
        title: "Ocurrió un error al enviar la solicitud.",
      });
    }
  };

   const { isSubmitting } = form.formState;

  return (
    <section className="h-full w-full px-3 md:px-8 mx-auto max-w-5xl">
      <AlertDialog>
        <Card className="shadow-lg border border-gray-200 rounded-lg">
          <CardHeader className="text-center bg-[#414042] rounded-t-lg text-white py-4">
            <CardTitle className="text-lg md:text-xl font-semibold tracking-wider">
              Portal de sugerencias y consultas
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6 bg-white">
            <div className="flex justify-center !-mt-2 md:!-mt-4 pb-6">
              <Logo />
            </div>
            <FormProvider {...form}>
              <form className="space-y-6">
                <FormLabel className="font-semibold tracking-wide text-gray-700 flex items-center gap-1.5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="22"
                    height="22"
                    color="#374151"
                    fill="none"
                  >
                    <path
                      d="M2 18C2 16.4596 2 15.6893 2.34673 15.1235C2.54074 14.8069 2.80693 14.5407 3.12353 14.3467C3.68934 14 4.45956 14 6 14C7.54044 14 8.31066 14 8.87647 14.3467C9.19307 14.5407 9.45926 14.8069 9.65327 15.1235C10 15.6893 10 16.4596 10 18C10 19.5404 10 20.3107 9.65327 20.8765C9.45926 21.1931 9.19307 21.4593 8.87647 21.6533C8.31066 22 7.54044 22 6 22C4.45956 22 3.68934 22 3.12353 21.6533C2.80693 21.4593 2.54074 21.1931 2.34673 20.8765C2 20.3107 2 19.5404 2 18Z"
                      stroke="currentColor"
                      stroke-width="1.5"
                    />
                    <path
                      d="M14 18C14 16.4596 14 15.6893 14.3467 15.1235C14.5407 14.8069 14.8069 14.5407 15.1235 14.3467C15.6893 14 16.4596 14 18 14C19.5404 14 20.3107 14 20.8765 14.3467C21.1931 14.5407 21.4593 14.8069 21.6533 15.1235C22 15.6893 22 16.4596 22 18C22 19.5404 22 20.3107 21.6533 20.8765C21.4593 21.1931 21.1931 21.4593 20.8765 21.6533C20.3107 22 19.5404 22 18 22C16.4596 22 15.6893 22 15.1235 21.6533C14.8069 21.4593 14.5407 21.1931 14.3467 20.8765C14 20.3107 14 19.5404 14 18Z"
                      stroke="currentColor"
                      stroke-width="1.5"
                    />
                    <path
                      d="M2 6C2 4.45956 2 3.68934 2.34673 3.12353C2.54074 2.80693 2.80693 2.54074 3.12353 2.34673C3.68934 2 4.45956 2 6 2C7.54044 2 8.31066 2 8.87647 2.34673C9.19307 2.54074 9.45926 2.80693 9.65327 3.12353C10 3.68934 10 4.45956 10 6C10 7.54044 10 8.31066 9.65327 8.87647C9.45926 9.19307 9.19307 9.45926 8.87647 9.65327C8.31066 10 7.54044 10 6 10C4.45956 10 3.68934 10 3.12353 9.65327C2.80693 9.45926 2.54074 9.19307 2.34673 8.87647C2 8.31066 2 7.54044 2 6Z"
                      stroke="currentColor"
                      stroke-width="1.5"
                    />
                    <path
                      d="M14 6C14 4.45956 14 3.68934 14.3467 3.12353C14.5407 2.80693 14.8069 2.54074 15.1235 2.34673C15.6893 2 16.4596 2 18 2C19.5404 2 20.3107 2 20.8765 2.34673C21.1931 2.54074 21.4593 2.80693 21.6533 3.12353C22 3.68934 22 4.45956 22 6C22 7.54044 22 8.31066 21.6533 8.87647C21.4593 9.19307 21.1931 9.45926 20.8765 9.65327C20.3107 10 19.5404 10 18 10C16.4596 10 15.6893 10 15.1235 9.65327C14.8069 9.45926 14.5407 9.19307 14.3467 8.87647C14 8.31066 14 7.54044 14 6Z"
                      stroke="currentColor"
                      stroke-width="1.5"
                    />
                  </svg>
                  <span className="-mb-0.5">Categoría</span>
                </FormLabel>
                <Tabs
                  defaultValue="employee"
                  className="w-full !mt-4 md:!mt-6 !mb-4"
                  onValueChange={(value) =>
                    setUserType(value === "employee" ? "Empleado" : "Cliente")
                  }
                >
                  <TabsList className="flex p-2 py-7 rounded-lg shadow-inner">
                    <TabsTrigger
                      value="employee"
                      className="flex items-center gap-2 py-2 w-1/2 justify-center rounded-lg hover:text-[#414042] transition"
                    >
                      <BriefcaseBusiness strokeWidth={1.5} className="mb-1" />
                      Empleado
                    </TabsTrigger>
                    <TabsTrigger
                      value="client"
                      className="flex items-center gap-2 py-2 w-1/2 justify-center rounded-lg hover:text-[#414042] transition"
                    >
                      <User strokeWidth={1.5} className="mb-1" />
                      Cliente
                    </TabsTrigger>
                  </TabsList>
                  <TabsContent value="employee">
                    <div className="flex flex-col md:gap-4">
                      <div className="flex items-end gap-4 md:gap-6 flex-col md:flex-row w-full py-2 md:pt-4">
                        <FormField
                          name="fullName"
                          render={({ field }) => (
                            <FormItem className="w-full relative">
                              <FormLabel className="text-gray-600">
                                Nombre completo
                              </FormLabel>
                              <FormControl>
                                <Input
                                  placeholder="Nombre completo..."
                                  className="border-gray-300 rounded-lg shadow-sm focus:!ring-[#414042]/25 focus:!border-[#414042]/25"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage className="md:absolute md:-bottom-6 relative bottom-0" />
                            </FormItem>
                          )}
                        />
                        <FormField
                          name="email"
                          render={({ field }) => (
                            <FormItem className="w-full">
                              <FormLabel className="text-gray-600">
                                Correo electrónico
                              </FormLabel>
                              <FormControl>
                                <Input
                                  placeholder="Correo electrónico..."
                                  className="border-gray-300 rounded-lg shadow-sm focus:!ring-[#414042]/25 focus:!border-[#414042]/25"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      <div className="flex items-end gap-4 md:gap-6 flex-col md:flex-row w-full py-2 md:pb-4">
                        <FormField
                          name="phoneNumber"
                          render={({ field }) => (
                            <FormItem className="w-full">
                              <FormLabel className="text-gray-600">
                                Número de teléfono
                              </FormLabel>
                              <FormControl>
                                <Input
                                  placeholder="Número de teléfono..."
                                  className="border-gray-300 rounded-lg shadow-sm focus:!ring-[#414042]/25 focus:!border-[#414042]/25"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          name="branch"
                          render={({ field }) => (
                            <FormItem className="w-full">
                              <FormLabel className="text-gray-600">
                                Sucursal
                              </FormLabel>
                              <FormControl>
                                <Input
                                  placeholder="Sucursal..."
                                  className="border-gray-300 rounded-lg shadow-sm focus:!ring-[#414042]/25 focus:!border-[#414042]/25"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                    </div>
                  </TabsContent>
                  <TabsContent value="client">
                    <div className="flex flex-col md:gap-4">
                      <div className="flex items-end gap-4 md:gap-6 flex-col md:flex-row w-full py-2 md:pt-4">
                        <FormField
                          name="fullName"
                          render={({ field }) => (
                            <FormItem className="w-full relative">
                              <FormLabel className="text-gray-600">
                                Nombre completo
                              </FormLabel>
                              <FormControl>
                                <Input
                                  placeholder="Nombre completo..."
                                  className="border-gray-300 rounded-lg shadow-sm focus:!ring-[#414042]/25 focus:!border-[#414042]/25"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage className="md:absolute md:-bottom-6 relative bottom-0" />
                            </FormItem>
                          )}
                        />
                        <FormField
                          name="email"
                          render={({ field }) => (
                            <FormItem className="w-full">
                              <FormLabel className="text-gray-600">
                                Correo electrónico
                              </FormLabel>
                              <FormControl>
                                <Input
                                  placeholder="Correo electrónico..."
                                  className="border-gray-300 rounded-lg shadow-sm focus:!ring-[#414042]/25 focus:!border-[#414042]/25"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      <div className="flex items-end gap-4 md:gap-6 flex-col md:flex-row w-full py-2 md:pb-4">
                        <FormField
                          name="phoneNumber"
                          render={({ field }) => (
                            <FormItem className="w-full">
                              <FormLabel className="text-gray-600">
                                Número de teléfono
                              </FormLabel>
                              <FormControl>
                                <Input
                                  placeholder="Número de teléfono..."
                                  className="border-gray-300 rounded-lg shadow-sm focus:!ring-[#414042]/25 focus:!border-[#414042]/25"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          name="branch"
                          render={({ field }) => (
                            <FormItem className="w-full">
                              <FormLabel className="text-gray-600">
                                Sucursal
                              </FormLabel>
                              <FormControl>
                                <Input
                                  placeholder="Sucursal..."
                                  className="border-gray-300 rounded-lg shadow-sm focus:!ring-[#414042]/25 focus:!border-[#414042]/25"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
                <FormLabel className="font-semibold text-gray-700 flex items-center gap-1.5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="22"
                    height="22"
                    color="#374151"
                    fill="none"
                  >
                    <path
                      d="M2 18C2 16.4596 2 15.6893 2.34673 15.1235C2.54074 14.8069 2.80693 14.5407 3.12353 14.3467C3.68934 14 4.45956 14 6 14C7.54044 14 8.31066 14 8.87647 14.3467C9.19307 14.5407 9.45926 14.8069 9.65327 15.1235C10 15.6893 10 16.4596 10 18C10 19.5404 10 20.3107 9.65327 20.8765C9.45926 21.1931 9.19307 21.4593 8.87647 21.6533C8.31066 22 7.54044 22 6 22C4.45956 22 3.68934 22 3.12353 21.6533C2.80693 21.4593 2.54074 21.1931 2.34673 20.8765C2 20.3107 2 19.5404 2 18Z"
                      stroke="currentColor"
                      stroke-width="1.5"
                    />
                    <path
                      d="M14 18C14 16.4596 14 15.6893 14.3467 15.1235C14.5407 14.8069 14.8069 14.5407 15.1235 14.3467C15.6893 14 16.4596 14 18 14C19.5404 14 20.3107 14 20.8765 14.3467C21.1931 14.5407 21.4593 14.8069 21.6533 15.1235C22 15.6893 22 16.4596 22 18C22 19.5404 22 20.3107 21.6533 20.8765C21.4593 21.1931 21.1931 21.4593 20.8765 21.6533C20.3107 22 19.5404 22 18 22C16.4596 22 15.6893 22 15.1235 21.6533C14.8069 21.4593 14.5407 21.1931 14.3467 20.8765C14 20.3107 14 19.5404 14 18Z"
                      stroke="currentColor"
                      stroke-width="1.5"
                    />
                    <path
                      d="M2 6C2 4.45956 2 3.68934 2.34673 3.12353C2.54074 2.80693 2.80693 2.54074 3.12353 2.34673C3.68934 2 4.45956 2 6 2C7.54044 2 8.31066 2 8.87647 2.34673C9.19307 2.54074 9.45926 2.80693 9.65327 3.12353C10 3.68934 10 4.45956 10 6C10 7.54044 10 8.31066 9.65327 8.87647C9.45926 9.19307 9.19307 9.45926 8.87647 9.65327C8.31066 10 7.54044 10 6 10C4.45956 10 3.68934 10 3.12353 9.65327C2.80693 9.45926 2.54074 9.19307 2.34673 8.87647C2 8.31066 2 7.54044 2 6Z"
                      stroke="currentColor"
                      stroke-width="1.5"
                    />
                    <path
                      d="M14 6C14 4.45956 14 3.68934 14.3467 3.12353C14.5407 2.80693 14.8069 2.54074 15.1235 2.34673C15.6893 2 16.4596 2 18 2C19.5404 2 20.3107 2 20.8765 2.34673C21.1931 2.54074 21.4593 2.80693 21.6533 3.12353C22 3.68934 22 4.45956 22 6C22 7.54044 22 8.31066 21.6533 8.87647C21.4593 9.19307 21.1931 9.45926 20.8765 9.65327C20.3107 10 19.5404 10 18 10C16.4596 10 15.6893 10 15.1235 9.65327C14.8069 9.45926 14.5407 9.19307 14.3467 8.87647C14 8.31066 14 7.54044 14 6Z"
                      stroke="currentColor"
                      stroke-width="1.5"
                    />
                  </svg>
                  <span className="-mb-0.5">Tipo de mensaje</span>
                </FormLabel>
                <Tabs
                  defaultValue="complaint"
                  className="w-full !mt-4 md:!mt-6"
                  onValueChange={(value) =>
                    setContentType(
                      value === "complaint"
                        ? "queja"
                        : value === "note"
                        ? "observación"
                        : "sugerencia"
                    )
                  }
                >
                  <TabsList className="w-full h-full md:h-9 flex flex-wrap md:flex-nowrap md:gap-3 bg-gray-100 p-3 px-4 md:px-2 md:py-7 rounded-lg shadow-inner mb-6 md:mb-10">
                    <TabsTrigger
                      value="complaint"
                      className="flex items-center gap-2 py-2 md:w-1/3 justify-center rounded-lg hover:text-[#414042] transition"
                    >
                      <CircleAlert strokeWidth={1.5} className="mb-1" />
                      Queja
                    </TabsTrigger>
                    <TabsTrigger
                      value="note"
                      className="flex items-center gap-2 py-2 md:w-1/3 justify-center rounded-lg hover:text-[#414042] transition"
                    >
                      <ClipboardPen strokeWidth={1.5} className="mb-1" />
                      Observación
                    </TabsTrigger>
                    <TabsTrigger
                      value="suggestion"
                      className="flex items-center gap-2 py-2 md:w-1/3 justify-center rounded-lg hover:text-[#414042] transition"
                    >
                      <ListTodo strokeWidth={1.5} className="mb-1" />
                      Sugerencia
                    </TabsTrigger>
                  </TabsList>
                  <TabsContent value="complaint">
                    <FormField
                      name="content"
                      render={({ field }) => (
                        <FormItem className="w-full">
                          <FormLabel className="font-semibold tracking-wide text-gray-700 flex items-center gap-1.5 mb-4">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              width="22"
                              height="22"
                              color="#374151"
                              fill="none"
                            >
                              <path
                                d="M2 18C2 16.4596 2 15.6893 2.34673 15.1235C2.54074 14.8069 2.80693 14.5407 3.12353 14.3467C3.68934 14 4.45956 14 6 14C7.54044 14 8.31066 14 8.87647 14.3467C9.19307 14.5407 9.45926 14.8069 9.65327 15.1235C10 15.6893 10 16.4596 10 18C10 19.5404 10 20.3107 9.65327 20.8765C9.45926 21.1931 9.19307 21.4593 8.87647 21.6533C8.31066 22 7.54044 22 6 22C4.45956 22 3.68934 22 3.12353 21.6533C2.80693 21.4593 2.54074 21.1931 2.34673 20.8765C2 20.3107 2 19.5404 2 18Z"
                                stroke="currentColor"
                                stroke-width="1.5"
                              />
                              <path
                                d="M14 18C14 16.4596 14 15.6893 14.3467 15.1235C14.5407 14.8069 14.8069 14.5407 15.1235 14.3467C15.6893 14 16.4596 14 18 14C19.5404 14 20.3107 14 20.8765 14.3467C21.1931 14.5407 21.4593 14.8069 21.6533 15.1235C22 15.6893 22 16.4596 22 18C22 19.5404 22 20.3107 21.6533 20.8765C21.4593 21.1931 21.1931 21.4593 20.8765 21.6533C20.3107 22 19.5404 22 18 22C16.4596 22 15.6893 22 15.1235 21.6533C14.8069 21.4593 14.5407 21.1931 14.3467 20.8765C14 20.3107 14 19.5404 14 18Z"
                                stroke="currentColor"
                                stroke-width="1.5"
                              />
                              <path
                                d="M2 6C2 4.45956 2 3.68934 2.34673 3.12353C2.54074 2.80693 2.80693 2.54074 3.12353 2.34673C3.68934 2 4.45956 2 6 2C7.54044 2 8.31066 2 8.87647 2.34673C9.19307 2.54074 9.45926 2.80693 9.65327 3.12353C10 3.68934 10 4.45956 10 6C10 7.54044 10 8.31066 9.65327 8.87647C9.45926 9.19307 9.19307 9.45926 8.87647 9.65327C8.31066 10 7.54044 10 6 10C4.45956 10 3.68934 10 3.12353 9.65327C2.80693 9.45926 2.54074 9.19307 2.34673 8.87647C2 8.31066 2 7.54044 2 6Z"
                                stroke="currentColor"
                                stroke-width="1.5"
                              />
                              <path
                                d="M14 6C14 4.45956 14 3.68934 14.3467 3.12353C14.5407 2.80693 14.8069 2.54074 15.1235 2.34673C15.6893 2 16.4596 2 18 2C19.5404 2 20.3107 2 20.8765 2.34673C21.1931 2.54074 21.4593 2.80693 21.6533 3.12353C22 3.68934 22 4.45956 22 6C22 7.54044 22 8.31066 21.6533 8.87647C21.4593 9.19307 21.1931 9.45926 20.8765 9.65327C20.3107 10 19.5404 10 18 10C16.4596 10 15.6893 10 15.1235 9.65327C14.8069 9.45926 14.5407 9.19307 14.3467 8.87647C14 8.31066 14 7.54044 14 6Z"
                                stroke="currentColor"
                                stroke-width="1.5"
                              />
                            </svg>
                            <span className="-mb-0.5">
                              Cuéntanos todo lo que tengas
                            </span>
                          </FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Puedes escribir el contenido de la queja aquí"
                              className="border-gray-300 rounded-lg shadow-sm focus:!ring-[#414042]/25 focus:!border-[#414042]/25 h-40 p-3"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </TabsContent>
                  <TabsContent value="note">
                    <FormField
                      name="content"
                      render={({ field }) => (
                        <FormItem className="w-full">
                          <FormLabel className="font-semibold tracking-wide text-gray-700 flex items-center gap-1.5 mb-4">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              width="22"
                              height="22"
                              color="#374151"
                              fill="none"
                            >
                              <path
                                d="M2 18C2 16.4596 2 15.6893 2.34673 15.1235C2.54074 14.8069 2.80693 14.5407 3.12353 14.3467C3.68934 14 4.45956 14 6 14C7.54044 14 8.31066 14 8.87647 14.3467C9.19307 14.5407 9.45926 14.8069 9.65327 15.1235C10 15.6893 10 16.4596 10 18C10 19.5404 10 20.3107 9.65327 20.8765C9.45926 21.1931 9.19307 21.4593 8.87647 21.6533C8.31066 22 7.54044 22 6 22C4.45956 22 3.68934 22 3.12353 21.6533C2.80693 21.4593 2.54074 21.1931 2.34673 20.8765C2 20.3107 2 19.5404 2 18Z"
                                stroke="currentColor"
                                stroke-width="1.5"
                              />
                              <path
                                d="M14 18C14 16.4596 14 15.6893 14.3467 15.1235C14.5407 14.8069 14.8069 14.5407 15.1235 14.3467C15.6893 14 16.4596 14 18 14C19.5404 14 20.3107 14 20.8765 14.3467C21.1931 14.5407 21.4593 14.8069 21.6533 15.1235C22 15.6893 22 16.4596 22 18C22 19.5404 22 20.3107 21.6533 20.8765C21.4593 21.1931 21.1931 21.4593 20.8765 21.6533C20.3107 22 19.5404 22 18 22C16.4596 22 15.6893 22 15.1235 21.6533C14.8069 21.4593 14.5407 21.1931 14.3467 20.8765C14 20.3107 14 19.5404 14 18Z"
                                stroke="currentColor"
                                stroke-width="1.5"
                              />
                              <path
                                d="M2 6C2 4.45956 2 3.68934 2.34673 3.12353C2.54074 2.80693 2.80693 2.54074 3.12353 2.34673C3.68934 2 4.45956 2 6 2C7.54044 2 8.31066 2 8.87647 2.34673C9.19307 2.54074 9.45926 2.80693 9.65327 3.12353C10 3.68934 10 4.45956 10 6C10 7.54044 10 8.31066 9.65327 8.87647C9.45926 9.19307 9.19307 9.45926 8.87647 9.65327C8.31066 10 7.54044 10 6 10C4.45956 10 3.68934 10 3.12353 9.65327C2.80693 9.45926 2.54074 9.19307 2.34673 8.87647C2 8.31066 2 7.54044 2 6Z"
                                stroke="currentColor"
                                stroke-width="1.5"
                              />
                              <path
                                d="M14 6C14 4.45956 14 3.68934 14.3467 3.12353C14.5407 2.80693 14.8069 2.54074 15.1235 2.34673C15.6893 2 16.4596 2 18 2C19.5404 2 20.3107 2 20.8765 2.34673C21.1931 2.54074 21.4593 2.80693 21.6533 3.12353C22 3.68934 22 4.45956 22 6C22 7.54044 22 8.31066 21.6533 8.87647C21.4593 9.19307 21.1931 9.45926 20.8765 9.65327C20.3107 10 19.5404 10 18 10C16.4596 10 15.6893 10 15.1235 9.65327C14.8069 9.45926 14.5407 9.19307 14.3467 8.87647C14 8.31066 14 7.54044 14 6Z"
                                stroke="currentColor"
                                stroke-width="1.5"
                              />
                            </svg>
                            <span className="-mb-0.5">
                              Cuéntanos todo lo que tengas
                            </span>
                          </FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Puedes escribir el contenido de la observación aquí"
                              className="border-gray-300 rounded-lg shadow-sm focus:!ring-[#414042]/25 focus:!border-[#414042]/25 h-40 p-3"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </TabsContent>
                  <TabsContent value="suggestion">
                    <FormField
                      name="content"
                      render={({ field }) => (
                        <FormItem className="w-full">
                          <FormLabel className="font-semibold tracking-wide text-gray-700 flex items-center gap-1.5 mb-4">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              width="22"
                              height="22"
                              color="#374151"
                              fill="none"
                            >
                              <path
                                d="M2 18C2 16.4596 2 15.6893 2.34673 15.1235C2.54074 14.8069 2.80693 14.5407 3.12353 14.3467C3.68934 14 4.45956 14 6 14C7.54044 14 8.31066 14 8.87647 14.3467C9.19307 14.5407 9.45926 14.8069 9.65327 15.1235C10 15.6893 10 16.4596 10 18C10 19.5404 10 20.3107 9.65327 20.8765C9.45926 21.1931 9.19307 21.4593 8.87647 21.6533C8.31066 22 7.54044 22 6 22C4.45956 22 3.68934 22 3.12353 21.6533C2.80693 21.4593 2.54074 21.1931 2.34673 20.8765C2 20.3107 2 19.5404 2 18Z"
                                stroke="currentColor"
                                stroke-width="1.5"
                              />
                              <path
                                d="M14 18C14 16.4596 14 15.6893 14.3467 15.1235C14.5407 14.8069 14.8069 14.5407 15.1235 14.3467C15.6893 14 16.4596 14 18 14C19.5404 14 20.3107 14 20.8765 14.3467C21.1931 14.5407 21.4593 14.8069 21.6533 15.1235C22 15.6893 22 16.4596 22 18C22 19.5404 22 20.3107 21.6533 20.8765C21.4593 21.1931 21.1931 21.4593 20.8765 21.6533C20.3107 22 19.5404 22 18 22C16.4596 22 15.6893 22 15.1235 21.6533C14.8069 21.4593 14.5407 21.1931 14.3467 20.8765C14 20.3107 14 19.5404 14 18Z"
                                stroke="currentColor"
                                stroke-width="1.5"
                              />
                              <path
                                d="M2 6C2 4.45956 2 3.68934 2.34673 3.12353C2.54074 2.80693 2.80693 2.54074 3.12353 2.34673C3.68934 2 4.45956 2 6 2C7.54044 2 8.31066 2 8.87647 2.34673C9.19307 2.54074 9.45926 2.80693 9.65327 3.12353C10 3.68934 10 4.45956 10 6C10 7.54044 10 8.31066 9.65327 8.87647C9.45926 9.19307 9.19307 9.45926 8.87647 9.65327C8.31066 10 7.54044 10 6 10C4.45956 10 3.68934 10 3.12353 9.65327C2.80693 9.45926 2.54074 9.19307 2.34673 8.87647C2 8.31066 2 7.54044 2 6Z"
                                stroke="currentColor"
                                stroke-width="1.5"
                              />
                              <path
                                d="M14 6C14 4.45956 14 3.68934 14.3467 3.12353C14.5407 2.80693 14.8069 2.54074 15.1235 2.34673C15.6893 2 16.4596 2 18 2C19.5404 2 20.3107 2 20.8765 2.34673C21.1931 2.54074 21.4593 2.80693 21.6533 3.12353C22 3.68934 22 4.45956 22 6C22 7.54044 22 8.31066 21.6533 8.87647C21.4593 9.19307 21.1931 9.45926 20.8765 9.65327C20.3107 10 19.5404 10 18 10C16.4596 10 15.6893 10 15.1235 9.65327C14.8069 9.45926 14.5407 9.19307 14.3467 8.87647C14 8.31066 14 7.54044 14 6Z"
                                stroke="currentColor"
                                stroke-width="1.5"
                              />
                            </svg>
                            <span className="-mb-0.5">
                              Cuéntanos todo lo que tengas
                            </span>
                          </FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Puedes escribir el contenido de la sugerencia aquí"
                              className="border-gray-300 rounded-lg shadow-sm focus:!ring-[#414042]/25 focus:!border-[#414042]/25 h-40 p-3"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </TabsContent>
                </Tabs>
                <CardFooter className="flex justify-center p-0">
                  <AlertDialogTrigger asChild>
                    <Button
                      variant="default"
                      className="px-5 py-5 text-sm md:text-[1rem] tracking-wider bg-[#414042] text-white hover:text-white font-semibold rounded-lg shadow-lg hover:bg-[#414042]/90 disabled:bg-[#414042]/20 disabled:cursor-not-allowed"
                    >
                      Enviar
                    </Button>
                  </AlertDialogTrigger>
                </CardFooter>
              </form>
            </FormProvider>
          </CardContent>
        </Card>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle className="text-center">
              ¿Estás seguro de enviar el mensaje?
            </AlertDialogTitle>
            <AlertDialogDescription className="text-center">
              Estimado/a solicitante de {`la ${contentType}`}, hemos recibido su
              mensaje y nos honra. Le responderemos lo antes posible.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter className="flex justify-center flex-col md:flex-row gap-2.5 mx-auto">
            <AlertDialogCancel className="text-sm md:text-[1rem] bg-[#414042]/25 hover:bg-[#414042]/30">
              Cancelar
            </AlertDialogCancel>
            <AlertDialogAction
              disabled={isSubmitting}
              className="text-sm md:text-[1rem] px-6 py-3 bg-[#414042] text-white font-semibold rounded-lg shadow-sm hover:bg-[#414042]/90 disabled:bg-[#414042] disabled:cursor-not-allowed"
              type="submit"
              onClick={form.handleSubmit(onSubmit)}
            >
              {isSubmitting ? "Enviando..." : "Enviar"}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </section>
  );
}
