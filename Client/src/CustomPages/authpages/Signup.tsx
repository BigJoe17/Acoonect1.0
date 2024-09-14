// Login.tsx
import Logo from "@/components/extra/Logo";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { FaGoogle, FaLinkedin, FaGithub } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { useToast } from "../../hooks/use-toast";

const formSchema = z.object({
  email: z.string().email({
    message: "Please enter a valid email.",
  }),
  password: z.string().min(8, {
    message: "Password must be at least 8 characters.",
  }),
  name: z.string().min(3, {
    message: "Name must be at least 3 characters.",
  }),
});

const Signup: React.FC = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      name: "",
      password: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
    toast({
      title: "Signup successful",
      description: "You have successfully signed up.",
      type: "foreground",

      className: "bg-gray-800 text-white text-xl",
    });
    navigate("/onboarding");
  }

  return (
    <div className="min-h-screen  flex justify-between bg-gray-100 relative">
      {/* Left side image */}
      <div
        className="w-1/3 bg-cover bg-center rounded-tr-[30px] rounded-br-[30px]"
        style={{
          backgroundImage: "url('/Features/resource_sharing.jpeg')", // Add your image URL here
        }}
      ></div>

      {/* Right side form */}
      <div className="w-2/3 flex justify-center items-center bg-gray-100 relative">
        <div className="bg-white p-4 rounded-lg shadow-md w-[50%] mx-auto">
          <h2 className="text-2xl font-bold font-montserrat mb-6 text-center">
            Signup
          </h2>
          <Link
            to="/"
            className="absolute top-5 left-10 hover:opacity-80 transition
        "
          >
            <Logo />
          </Link>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter your email" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter your name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter your password" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="flex items-center">
                <Button type="submit" className="mx-auto justify-center w-1/2">
                  Submit
                </Button>
              </div>
            </form>
            <Separator className="my-4" />
            <FormDescription>
              Already have an account?{" "}
              <Link to="/login" className="text-blue-600">
                Sign in
              </Link>{" "}
              now.
            </FormDescription>
            <h1 className="text-2xl font-medium font-montserrat my-4">or</h1>
            {/* Login with Socials here (Google, Github, Linkedin etc.) */}
            <div className=" flex justify-center items-center gap-4">
              <Button
                size="icon"
                className=" text-foreground bg-gray-100 shadow flex items-center justify-center hover:text-white"
              >
                <FaGoogle size={18} />
              </Button>
              <Button
                size="icon"
                className=" text-foreground bg-gray-100 shadow flex items-center justify-center hover:text-white"
              >
                <FaGithub size={18} />
              </Button>
              <Button
                size={"icon"}
                className=" text-foreground bg-gray-100 shadow flex justify-center items-center hover:text-white"
              >
                <FaLinkedin size={18} />
              </Button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
