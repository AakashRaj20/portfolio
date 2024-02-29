"use client";

import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { useState } from "react";
import { SyntheticEvent } from "react";
import axios from "axios";
import { ToastContainer, toast, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();
    const data = {
      name: name,
      email: email,
      phone: phone,
      message: message,
    };
    console.log(data);

    try {
      const response = await axios.post(
        "https://script.google.com/macros/s/AKfycbwTt5TA6vPBdUPUuGNxnfsqm3pJ2Bq_ZgBAko8xHDSY6mpsz6iic6lkjzM5szkPNyKZ0w/exec",
        JSON.stringify(data)
      );
      setName("");
      setEmail("");
      setPhone("");
      setMessage("");
      if (response.status === 200) {
        toast.success("Message sent Successfully!", {});
      } else {
        toast.error("Something went wrong! Please try again.");
      }
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form
      onSubmit={(e: SyntheticEvent) => handleSubmit(e)}
      className="border-gradient border-4 p-4 max-w-[650px] w-full flex flex-col gap-y-10"
    >
      <div className="grid w-full items-center gap-1.5">
        <Label htmlFor="email">Name</Label>
        <Input
          value={name}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setName(e.target.value)
          }
          type="text"
          id="name"
          placeholder="Your Full Name"
          required
        />
      </div>
      <div className="grid w-full items-center gap-1.5">
        <Label htmlFor="email">Email Address</Label>
        <Input
          value={email}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setEmail(e.target.value)
          }
          type="email"
          id="email"
          placeholder="Your Email Address"
          required
        />
      </div>
      <div className="grid w-full items-center gap-1.5">
        <Label htmlFor="email">Phone Number</Label>
        <Input
          value={phone}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setPhone(e.target.value)
          }
          type="text"
          id="phone"
          placeholder="Your Phone Number"
        />
      </div>
      <div className="grid w-full gap-1.5">
        <Label htmlFor="message">Your message</Label>
        <Textarea
          value={message}
          onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
            setMessage(e.target.value)
          }
          placeholder="Type your message here...."
          id="message"
          required
        />
      </div>
      <Button
        className="bg-white text-black text-xl hover:bg-gray-200"
        type="submit"
      >
        Submit
      </Button>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition={Slide}
      />
    </form>
  );
};

export default ContactForm;
