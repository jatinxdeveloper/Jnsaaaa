"use client";

import { useState } from "react";
import {
  Send,
  CheckCircle2,
  AlertCircle,
  Phone,
  Mail,
  Building,
  MapPin,
} from "lucide-react";
import confetti from "canvas-confetti";
import {
  CONTACT_PHONE,
  CONTACT_PHONE_TEL,
  CONTACT_EMAIL,
  CONTACT_EMAIL_MAILTO,
  INSTAGRAM_URL,
  FACEBOOK_URL,
  WHATSAPP_BASE_URL,
  InstagramIcon,
  FacebookIcon,
  WhatsAppIcon,
} from "./SocialIcons";

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: "",
    companyName: "",
    phone: "",
    email: "",
    enquiryType: "Supply Materials",
    materialDetails: "",
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const enquiryTypes = [
    "Supply Materials",
    "Source Materials",
    "Business Partnership",
    "Other",
  ];

  const validate = () => {
    const errs: { [key: string]: string } = {};
    if (!formData.fullName.trim()) {
      errs.fullName = "Full name is required.";
    }
    if (!formData.phone.trim()) {
      errs.phone = "Phone number is required.";
    } else if (!/^\+?[0-9\s-]{8,15}$/.test(formData.phone.trim())) {
      errs.phone = "Please enter a valid phone number (8-15 digits).";
    }
    if (formData.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = "Please enter a valid email address.";
    }
    if (!formData.materialDetails.trim()) {
      errs.materialDetails = "Please provide details regarding your material or requirement.";
    } else if (formData.materialDetails.trim().length < 10) {
      errs.materialDetails = "Please provide at least 10 characters of detail.";
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const copy = { ...prev };
        delete copy[name];
        return copy;
      });
    }
  };

  const createWhatsAppMessage = () => {
    return encodeURIComponent(
      `Hello JNSAAAA Recycle,\n\nI am contacting you regarding an inquiry:\n` +
      `• Name: ${formData.fullName.trim() || "Visitor"}\n` +
      `• Company: ${formData.companyName.trim() || "N/A"}\n` +
      `• Enquiry Type: ${formData.enquiryType}\n` +
      `• Phone: ${formData.phone.trim() || "N/A"}\n` +
      `• Email: ${formData.email.trim() || "N/A"}\n\n` +
      `• Material / Requirement Details:\n${formData.materialDetails.trim() || "Discuss industrial recycling and material recovery."}`
    );
  };

  const handleWhatsAppRedirect = () => {
    const message = createWhatsAppMessage();
    window.open(`${WHATSAPP_BASE_URL}?text=${message}`, "_blank");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    const message = createWhatsAppMessage();

    // Trigger WhatsApp redirect with filled form details to connect to +91 8920256852
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      window.open(`${WHATSAPP_BASE_URL}?text=${message}`, "_blank");

      try {
        confetti({
          particleCount: 50,
          spread: 60,
          origin: { y: 0.8 },
          colors: ["#25a244", "#38b000", "#032b17"],
        });
      } catch {
        // Confetti fallback
      }
    }, 400);
  };

  return (
    <section id="contact" className="py-16 sm:py-24 md:py-32 bg-[#021a0e] text-white relative overflow-hidden">
      {/* Texture & Gradients */}
      <div className="absolute inset-0 industrial-grid-dark opacity-30 pointer-events-none" />
      <div className="absolute -top-40 right-0 w-72 sm:w-96 h-72 sm:h-96 bg-[#25a244]/15 rounded-full blur-[100px] sm:blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-10 sm:mb-16 space-y-3 sm:space-y-4">
          <div className="inline-flex items-center gap-2 text-[11px] sm:text-xs uppercase font-bold tracking-widest text-[#38b000]">
            <span className="w-5 sm:w-6 h-[2px] bg-[#38b000]" />
            <span>Commercial Inquiries & WhatsApp Connect</span>
          </div>
          <h2 className="font-heading text-2xl sm:text-3xl lg:text-[35px] leading-tight sm:leading-[38px] font-bold tracking-tight text-white">
            Have Material to Supply or a Requirement to Discuss?
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-300 font-light leading-relaxed">
            Share your details and connect with us directly on WhatsApp at <strong className="text-white font-semibold">{CONTACT_PHONE}</strong> or submit an inquiry below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Functional Contact Form */}
          <div className="lg:col-span-7 bg-white/5 border border-white/15 rounded-2xl sm:rounded-3xl p-5 sm:p-8 lg:p-10 backdrop-blur-xl shadow-2xl">
            {isSubmitted ? (
              <div className="py-8 sm:py-12 text-center space-y-5 sm:space-y-6">
                <div className="w-14 sm:w-16 h-14 sm:h-16 rounded-full bg-[#25a244]/20 border border-[#38b000] text-[#38b000] flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-7 sm:w-8 h-7 sm:h-8" />
                </div>
                <div className="space-y-2">
                  <h3 className="font-heading text-xl sm:text-2xl font-bold text-white">
                    Enquiry Details Ready
                  </h3>
                  <p className="text-gray-300 text-xs sm:text-sm max-w-md mx-auto">
                    Thank you, <strong className="text-white">{formData.fullName}</strong>. Your enquiry has been prepared and opened on WhatsApp to connect with <strong className="text-[#38b000]">{CONTACT_PHONE}</strong>.
                  </p>
                </div>

                <div className="p-3.5 sm:p-4 rounded-xl bg-black/40 border border-white/10 text-xs text-left max-w-md mx-auto space-y-2 text-gray-300">
                  <div><strong>Type:</strong> {formData.enquiryType}</div>
                  <div><strong>Contact:</strong> {formData.phone}</div>
                  {formData.companyName && <div><strong>Company:</strong> {formData.companyName}</div>}
                  {formData.email && <div className="break-all"><strong>Email:</strong> {formData.email}</div>}
                  <div><strong>Details:</strong> {formData.materialDetails}</div>
                </div>

                <div className="pt-3 sm:pt-4 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4">
                  <button
                    onClick={handleWhatsAppRedirect}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3.5 rounded-xl bg-[#25a244] hover:bg-[#1e8236] text-white font-semibold text-xs sm:text-sm transition-colors shadow-lg active:scale-98 min-h-[46px]"
                  >
                    <WhatsAppIcon className="w-4 h-4" />
                    <span>Re-open WhatsApp Chat ({CONTACT_PHONE})</span>
                  </button>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        fullName: "",
                        companyName: "",
                        phone: "",
                        email: "",
                        enquiryType: "Supply Materials",
                        materialDetails: "",
                      });
                    }}
                    className="w-full sm:w-auto px-5 sm:px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-medium text-xs sm:text-sm transition-colors active:scale-98 min-h-[46px]"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6" noValidate>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  
                  {/* Full Name */}
                  <div className="space-y-1.5 sm:space-y-2">
                    <label htmlFor="fullName" className="block text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-gray-300">
                      Full Name <span className="text-[#38b000]">*</span>
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="e.g. Rajesh Sharma"
                      className={`w-full px-3.5 sm:px-4 py-3 rounded-lg bg-black/40 border ${
                        errors.fullName ? "border-red-400 focus:border-red-400" : "border-white/20 focus:border-[#38b000]"
                      } text-white placeholder-gray-500 text-base sm:text-sm focus:outline-none focus:ring-1 focus:ring-[#38b000] transition-colors`}
                    />
                    {errors.fullName && (
                      <p className="text-red-400 text-xs flex items-center gap-1 mt-1">
                        <AlertCircle className="w-3.5 h-3.5 flex-shrink-0" />
                        <span>{errors.fullName}</span>
                      </p>
                    )}
                  </div>

                  {/* Company Name */}
                  <div className="space-y-1.5 sm:space-y-2">
                    <label htmlFor="companyName" className="block text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-gray-300">
                      Company / Business <span className="text-gray-500 font-normal">(Optional)</span>
                    </label>
                    <input
                      type="text"
                      id="companyName"
                      name="companyName"
                      value={formData.companyName}
                      onChange={handleChange}
                      placeholder="e.g. Sharma Enterprises"
                      className="w-full px-3.5 sm:px-4 py-3 rounded-lg bg-black/40 border border-white/20 focus:border-[#38b000] text-white placeholder-gray-500 text-base sm:text-sm focus:outline-none focus:ring-1 focus:ring-[#38b000] transition-colors"
                    />
                  </div>

                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  
                  {/* Phone Number */}
                  <div className="space-y-1.5 sm:space-y-2">
                    <label htmlFor="phone" className="block text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-gray-300">
                      Phone Number <span className="text-[#38b000]">*</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="e.g. +91 98765 43210"
                      className={`w-full px-3.5 sm:px-4 py-3 rounded-lg bg-black/40 border ${
                        errors.phone ? "border-red-400 focus:border-red-400" : "border-white/20 focus:border-[#38b000]"
                      } text-white placeholder-gray-500 text-base sm:text-sm focus:outline-none focus:ring-1 focus:ring-[#38b000] transition-colors`}
                    />
                    {errors.phone && (
                      <p className="text-red-400 text-xs flex items-center gap-1 mt-1">
                        <AlertCircle className="w-3.5 h-3.5 flex-shrink-0" />
                        <span>{errors.phone}</span>
                      </p>
                    )}
                  </div>

                  {/* Email */}
                  <div className="space-y-1.5 sm:space-y-2">
                    <label htmlFor="email" className="block text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-gray-300">
                      Email Address <span className="text-gray-500 font-normal">(Optional)</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. rajesh@domain.com"
                      className={`w-full px-3.5 sm:px-4 py-3 rounded-lg bg-black/40 border ${
                        errors.email ? "border-red-400 focus:border-red-400" : "border-white/20 focus:border-[#38b000]"
                      } text-white placeholder-gray-500 text-base sm:text-sm focus:outline-none focus:ring-1 focus:ring-[#38b000] transition-colors`}
                    />
                    {errors.email && (
                      <p className="text-red-400 text-xs flex items-center gap-1 mt-1">
                        <AlertCircle className="w-3.5 h-3.5 flex-shrink-0" />
                        <span>{errors.email}</span>
                      </p>
                    )}
                  </div>

                </div>

                {/* Enquiry Type */}
                <div className="space-y-1.5 sm:space-y-2">
                  <label htmlFor="enquiryType" className="block text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-gray-300">
                    Enquiry Type
                  </label>
                  <select
                    id="enquiryType"
                    name="enquiryType"
                    value={formData.enquiryType}
                    onChange={handleChange}
                    className="w-full px-3.5 sm:px-4 py-3 rounded-lg bg-black/40 border border-white/20 focus:border-[#38b000] text-white text-base sm:text-sm focus:outline-none focus:ring-1 focus:ring-[#38b000] transition-colors"
                  >
                    {enquiryTypes.map((t) => (
                      <option key={t} value={t} className="bg-gray-900 text-white">
                        {t}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Material Details */}
                <div className="space-y-1.5 sm:space-y-2">
                  <label htmlFor="materialDetails" className="block text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-gray-300">
                    Material / Requirement Details <span className="text-[#38b000]">*</span>
                  </label>
                  <textarea
                    id="materialDetails"
                    name="materialDetails"
                    rows={4}
                    value={formData.materialDetails}
                    onChange={handleChange}
                    placeholder="Describe material type (e.g. electric motors, PCB lots, copper scrap), estimated quantity or weight, and current condition..."
                    className={`w-full px-3.5 sm:px-4 py-3 rounded-lg bg-black/40 border ${
                      errors.materialDetails ? "border-red-400 focus:border-red-400" : "border-white/20 focus:border-[#38b000]"
                    } text-white placeholder-gray-500 text-base sm:text-sm focus:outline-none focus:ring-1 focus:ring-[#38b000] transition-colors resize-y`}
                  />
                  {errors.materialDetails && (
                    <p className="text-red-400 text-xs flex items-center gap-1 mt-1">
                      <AlertCircle className="w-3.5 h-3.5 flex-shrink-0" />
                      <span>{errors.materialDetails}</span>
                    </p>
                  )}
                </div>

                {/* Submit CTA */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl bg-[#25a244] hover:bg-[#1e8236] text-white font-semibold text-xs sm:text-sm transition-all shadow-lg shadow-[#25a244]/25 hover:shadow-xl hover:shadow-[#25a244]/35 disabled:opacity-50 active:scale-98 group min-h-[48px]"
                  >
                    <Send className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                    <span>{isSubmitting ? "Connecting to WhatsApp..." : "Submit & Connect on WhatsApp"}</span>
                  </button>
                </div>

                <div className="flex items-center justify-center gap-2 text-[11px] text-gray-400 text-center px-1">
                  <span className="w-2 h-2 rounded-full bg-[#25a244] inline-block animate-pulse flex-shrink-0" />
                  <span>Connects immediately with our commercial team at <strong className="text-white">{CONTACT_PHONE}</strong></span>
                </div>

              </form>
            )}
          </div>

          {/* Right Column: Direct Corporate Information */}
          <div className="lg:col-span-5 space-y-6 sm:space-y-8">
            
            <div className="p-5 sm:p-8 rounded-2xl sm:rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md space-y-5 sm:space-y-6">
              <h3 className="font-heading text-lg sm:text-xl font-bold text-white">
                Direct Corporate Communication
              </h3>
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                Connect directly with our operational coordinators to schedule a site inspection, evaluate scrap lots, or discuss ongoing industrial material contracts.
              </p>

              <div className="space-y-4 text-xs sm:text-sm pt-1">
                {/* Registered Business */}
                <div className="flex items-start gap-3 sm:gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-[#25a244]/20 border border-[#25a244]/40 text-[#38b000] flex items-center justify-center flex-shrink-0">
                    <Building className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-gray-400 text-[11px] sm:text-xs block">Registered Business</span>
                    <strong className="text-white font-semibold text-xs sm:text-sm">JNSAAAA RECYCLE PRIVATE LIMITED</strong>
                  </div>
                </div>

                {/* Direct Phone */}
                <div className="flex items-start gap-3 sm:gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-[#25a244]/20 border border-[#25a244]/40 text-[#38b000] flex items-center justify-center flex-shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-gray-400 text-[11px] sm:text-xs block">Call / Phone Number</span>
                    <a
                      href={CONTACT_PHONE_TEL}
                      className="text-white font-semibold hover:text-[#38b000] transition-colors text-sm sm:text-base inline-block py-0.5"
                    >
                      {CONTACT_PHONE}
                    </a>
                  </div>
                </div>

                {/* Direct Email */}
                <div className="flex items-start gap-3 sm:gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-[#25a244]/20 border border-[#25a244]/40 text-[#38b000] flex items-center justify-center flex-shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-gray-400 text-[11px] sm:text-xs block">Email Address (Gmail)</span>
                    <a
                      href={CONTACT_EMAIL_MAILTO}
                      className="text-white font-medium hover:text-[#38b000] transition-colors break-all text-xs sm:text-sm inline-block py-0.5"
                    >
                      {CONTACT_EMAIL}
                    </a>
                  </div>
                </div>

                {/* WhatsApp Channel */}
                <div className="flex items-start gap-3 sm:gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-[#25a244]/20 border border-[#25a244]/40 text-[#38b000] flex items-center justify-center flex-shrink-0">
                    <WhatsAppIcon className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-gray-400 text-[11px] sm:text-xs block">WhatsApp Direct Channel</span>
                    <button
                      onClick={handleWhatsAppRedirect}
                      className="text-[#38b000] font-semibold hover:underline block text-left py-0.5 text-xs sm:text-sm"
                    >
                      Chat with {CONTACT_PHONE} &rarr;
                    </button>
                  </div>
                </div>

                {/* Principal Place of Business */}
                <div className="flex items-start gap-3 sm:gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-[#25a244]/20 border border-[#25a244]/40 text-[#38b000] flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-gray-400 text-[11px] sm:text-xs block">Principal Place of Business</span>
                    <p className="text-white font-medium text-xs sm:text-sm leading-relaxed">
                      Muradnagar, Ghaziabad, <br />
                      Uttar Pradesh — 201206
                    </p>
                  </div>
                </div>

              </div>

              {/* Social Channels in Contact section */}
              <div className="pt-4 border-t border-white/10 space-y-2.5">
                <span className="text-[11px] sm:text-xs text-gray-400 font-semibold uppercase tracking-wider block">
                  Follow Us Online
                </span>
                <div className="grid grid-cols-2 sm:flex sm:flex-wrap items-center gap-2.5">
                  <a
                    href={INSTAGRAM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-3.5 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-xs text-white font-medium transition-colors active:scale-95 min-h-[40px]"
                  >
                    <InstagramIcon className="w-4 h-4 text-pink-400 flex-shrink-0" />
                    <span>Instagram</span>
                  </a>
                  <a
                    href={FACEBOOK_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-3.5 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-xs text-white font-medium transition-colors active:scale-95 min-h-[40px]"
                  >
                    <FacebookIcon className="w-4 h-4 text-blue-400 flex-shrink-0" />
                    <span>Facebook</span>
                  </a>
                </div>
              </div>

            </div>

            {/* Practical Note Box */}
            <div className="p-4 sm:p-6 rounded-2xl bg-black/40 border border-white/10 text-xs text-gray-400 space-y-1.5 sm:space-y-2">
              <div className="font-semibold text-gray-300">Commercial Verification Protocol</div>
              <p className="leading-relaxed">
                All material lots are subject to physical inspection, grading, and weight verification prior to final procurement settlement.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
