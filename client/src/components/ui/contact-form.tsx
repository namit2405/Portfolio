import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { z } from "zod";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Loader2 } from "lucide-react";

const contactSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Please enter a valid email"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export function ContactForm() {
  const { toast } = useToast();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const contactMutation = useMutation({
   mutationFn: async (data: ContactFormData) => {
  const response = await fetch("http://localhost:8000/api/contact/", {method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });
  return response.json();
}
,
    onSuccess: (data) => {
      toast({
        title: "Message sent successfully!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      reset();
      setIsSubmitted(true);
      setTimeout(() => setIsSubmitted(false), 3000);
    },
    onError: (error) => {
      toast({
        title: "Failed to send message",
        description: "Please try again later or contact me directly.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: ContactFormData) => {
    contactMutation.mutate(data);
  };

  if (isSubmitted) {
    return (
      <div className="text-center p-8 bg-green-50 rounded-lg border border-green-200">
        <div className="text-green-600 text-lg font-medium mb-2">
          ✓ Message Sent Successfully!
        </div>
        <p className="text-green-700">
          Thank you for reaching out. I'll get back to you soon.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div>
        <Label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
          Name
        </Label>
        <Input
          id="name"
          {...register("name")}
          placeholder="Your name"
          className="w-full"
        />
        {errors.name && (
          <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
        )}
      </div>

      <div>
        <Label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
          Email
        </Label>
        <Input
          id="email"
          type="email"
          {...register("email")}
          placeholder="your.email@example.com"
          className="w-full"
        />
        {errors.email && (
          <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
        )}
      </div>

      <div>
        <Label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
          Message
        </Label>
        <Textarea
          id="message"
          {...register("message")}
          rows={5}
          placeholder="Tell me about your project..."
          className="w-full resize-none"
        />
        {errors.message && (
          <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
        )}
      </div>

      <Button
        type="submit"
        disabled={contactMutation.isPending}
        className="w-full"
      >
        {contactMutation.isPending ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Sending...
          </>
        ) : (
          "Send Message"
        )}
      </Button>
    </form>
  );
}
