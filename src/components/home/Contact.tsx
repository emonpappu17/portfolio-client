/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { toast } from "sonner";


const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
};

type FormData = {
  name: string;
  email: string;
  message: string;
};

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>();


  const onSubmit = async (data: FormData) => {
    toast.success("Thanks for reaching out. This form isn’t wired up yet, but I’ll implement it soon!")
    reset();
  };

  return (
    <section id="contact" className="py-28 relative overflow-hidden px-6 md:px-12">
      {/* Section Heading */}
      <motion.div
        className="text-center mb-20"
        initial="initial"
        animate="animate"
        variants={fadeInUp}
      >
        <h2 className="text-4xl font-bold tracking-tight text-foreground">
          Contact Me
        </h2>
        <div className="mt-3 h-1 w-16 mx-auto rounded-full bg-primary" />
        <p className="mt-5 text-muted-foreground max-w-xl mx-auto text-lg leading-relaxed">
          I’d love to hear your ideas, feedback, or just a friendly hello. Let’s make something meaningful together.
        </p>
      </motion.div>

      {/* Form Card */}
      <motion.div
        className="mx-auto max-w-2xl"
        initial="initial"
        animate="animate"
        variants={fadeInUp}
        transition={{ delay: 0.1 }}
      >
        <Card className="rounded-3xl border border-border/40 shadow-sm bg-card/40">
          <CardContent className="md:p-10 p-4 space-y-8">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {/* Name */}
              <div className="space-y-2">
                <Label htmlFor="name">What should I call you?</Label>
                <Input
                  id="name"
                  placeholder="Your name here..."
                  {...register("name", { required: "Name is required" })}
                />
                {errors.name && (
                  <p className="text-sm text-destructive">{errors.name.message}</p>
                )}
              </div>

              {/* Email */}
              <div className="space-y-2">
                <Label htmlFor="email">Where can I reach you?</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^\S+@\S+$/i,
                      message: "Enter a valid email",
                    },
                  })}
                />
                {errors.email && (
                  <p className="text-sm text-destructive">{errors.email.message}</p>
                )}
              </div>

              {/* Message */}
              <div className="space-y-2">
                <Label htmlFor="message">Say what’s on your mind</Label>
                <Textarea
                  id="message"
                  placeholder="Write your message here..."
                  className="min-h-[150px]"
                  {...register("message", { required: "Message is required" })}
                />
                {errors.message && (
                  <p className="text-sm text-destructive">{errors.message.message}</p>
                )}
              </div>

              {/* Submit Button */}
              <motion.div whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.97 }}>
                <Button type="submit" className="w-full text-base font-medium" disabled={isSubmitting}>
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </motion.div>
            </form>
          </CardContent>
        </Card>
      </motion.div>
    </section>
  );
};

export default Contact;



