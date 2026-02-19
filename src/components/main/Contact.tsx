"use client";

import { FaPaperPlane } from "react-icons/fa";
import Typography from "../utility/typography";
import { Button } from "../ui/button";
import { useState } from "react";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";

const Map = () => {
  // State to manage form inputs
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    first_name: "",
    last_name: "",
    email: "",
    message: "",
  });

  // Handle input change
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error on change
    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  // Validate form inputs
  const validate = () => {
    const newErrors: typeof errors = {
      first_name: "",
      last_name: "",
      email: "",
      message: "",
    };

    if (formData.first_name.trim().length < 2) {
      newErrors.first_name = "First name must be at least 2 characters long";
    }
    if (formData.last_name.trim().length < 2) {
      newErrors.last_name = "Last name must be at least 2 characters long";
    }
    if (!formData.email.includes("@")) {
      newErrors.email = "Invalid email format";
    }
    if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters long";
    } else if (formData.message.trim().length > 1500) {
      newErrors.message = "Message must not exceed 1500 characters";
    }

    setErrors(newErrors);

    // Return true if there are no errors
    return Object.values(newErrors).every((err) => err === "");
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) return;

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Email sent successfully!");
        setFormData({
          first_name: "",
          last_name: "",
          email: "",
          message: "",
        });
      } else {
        const errorData = await response.json();
        alert(`Failed to send email: ${errorData.error}`);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("An error occurred. Please try again later.");
    }
  };
  return (
    <section
      className="flex flex-col gap-5 items-center justify-center  py-20 px-4 md:px-0 min-h-screen"
      id="contact"
    >
      <Typography variant="h1" text="Kontakt" />
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 w-full h-full">
        <div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3277.9780765295995!2d22.58613147636161!3d43.15934168423171!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47553d2e0fa7effd%3A0x43b783a57bf66d79!2z0JPQvtC70LXQvNC4INCc0L7RgdGCLCBLbmphemEgTWlsb8WhYSwgUGlyb3QgMTgzMDA!5e1!3m2!1sen!2srs!4v1771484098501!5m2!1sen!2srs"
            width="100%"
            height="100%"
            loading="lazy"
            className="w-full h-full rounded-3xl shadow-xl border border-border transition-all"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Maps"
          ></iframe>
        </div>
        {/* Right Section */}
        <div className="w-full h-full bg-background shadow-xl rounded-3xl p-6 md:p-12 col-span-1 border border-border">
          <Typography
            variant="h3"
            text="Naručite svoj slatki san 🎂"
            className="mb-2 text-accent"
          />

          <p className="text-muted-foreground mb-8">
            Pošaljite nam upit i napravićemo slatko savršenstvo po vašoj želji.
          </p>

          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 md:grid-cols-2 gap-4"
          >
            {/* Ime */}
            <div>
              <Input
                type="text"
                id="first_name"
                name="first_name"
                placeholder="Ime"
                value={formData.first_name}
                onChange={handleChange}
                className={`w-full rounded-xl border ${
                  errors.first_name ? "border-red-500" : "border-input"
                }`}
              />
              {errors.first_name && (
                <p className="text-red-500 text-sm mt-1">{errors.first_name}</p>
              )}
            </div>

            {/* Prezime */}
            <div>
              <Input
                type="text"
                id="last_name"
                name="last_name"
                placeholder="Prezime"
                value={formData.last_name}
                onChange={handleChange}
                className={`w-full rounded-xl border ${
                  errors.last_name ? "border-red-500" : "border-input"
                }`}
              />
              {errors.last_name && (
                <p className="text-red-500 text-sm mt-1">{errors.last_name}</p>
              )}
            </div>

            {/* Email */}
            <div className="col-span-full">
              <Input
                type="email"
                id="email"
                name="email"
                placeholder="Email adresa"
                value={formData.email}
                onChange={handleChange}
                className={`w-full rounded-xl border ${
                  errors.email ? "border-red-500" : "border-input"
                }`}
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
              )}
            </div>

            {/* Tip torte */}
            <div className="col-span-full">
              <Input
                type="text"
                id="cake_type"
                name="cake_type"
                placeholder="Vrsta torte (npr. čokoladna, voćna, rođendanska...)"
                onChange={handleChange}
                className="w-full rounded-xl border border-input"
              />
            </div>

            {/* Poruka */}
            <div className="col-span-full">
              <Textarea
                id="message"
                name="message"
                placeholder="Napišite detalje porudžbine (datum, broj osoba, posebne želje...)"
                rows={6}
                value={formData.message}
                onChange={handleChange}
                className={`w-full rounded-xl border ${
                  errors.message ? "border-red-500" : "border-input"
                }`}
              />
              {errors.message && (
                <p className="text-red-500 text-sm mt-1">{errors.message}</p>
              )}
            </div>

            {/* Submit */}
            <Button
              type="submit"
              className="col-span-full w-full rounded-full py-6 text-lg font-semibold shadow-lg hover:scale-[1.02] transition-all"
            >
              Pošalji porudžbinu 🍰
            </Button>
          </form>
        </div>
      </div>
      <div className="w-full md:w-fit">
        <p className="text-center text-lg max-w-fit">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
          risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec,
          ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula
          massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci
          nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl
          sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae,
          consequat in, pretium at, leo. Nullam dolore
        </p>
      </div>
    </section>
  );
};

export default Map;
