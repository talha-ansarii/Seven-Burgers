import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";
import Whatsapp from "../components/Whatsapp";

const Faq = () => {
  const [faqs, setFaqs] = useState([
    {
      question: "What is Seven Burgers?",
      answer:
        "Seven Burgers is a cloud kitchen specializing in crafting delicious and high-quality burgers, available for delivery and takeout.",
      open: true,
    },
    {
      question: "How can I place an order with Seven Burgers?",
      answer:
        "You can place an order through our website, mobile app, or popular food delivery platforms like UberEats, DoorDash, and GrubHub.",
      open: false,
    },
    {
      question: "What areas do you deliver to?",
      answer:
        "We deliver to various neighborhoods within the city. Please check our delivery area on our website or app for specific details.",
      open: false,
    },
    {
      question: "What are your operating hours?",
      answer:
        "Our kitchen operates from 11:00 AM to 11:00 PM, Monday to Sunday.",
      open: false,
    },
    {
      question: "Do you offer vegetarian or vegan options?",
      answer:
        "Yes, we offer a variety of vegetarian and vegan burgers made with plant-based patties and fresh ingredients.",
      open: false,
    },
    {
      question: "Can I customize my burger?",
      answer:
        "Absolutely! You can customize your burger with a variety of toppings, sauces, and sides to suit your taste.",
      open: false,
    },
    {
      question: "What ingredients do you use in your burgers?",
      answer:
        "We use fresh, high-quality ingredients, including locally sourced produce, premium meats, and artisanal buns.",
      open: false,
    },
    {
      question: "Do you offer gluten-free options?",
      answer:
        "Yes, we provide gluten-free buns and other gluten-free menu items for customers with dietary restrictions.",
      open: false,
    },
    {
      question: "How do you ensure the freshness of your food during delivery?",
      answer:
        "Our packaging is designed to maintain the temperature and freshness of your food, ensuring it arrives hot and delicious.",
      open: false,
    },
    {
      question: "What is your return or refund policy?",
      answer:
        "If you are not satisfied with your order, please contact our customer service within 24 hours for assistance with refunds or replacements.",
      open: false,
    },
    {
      question: "Do you offer catering services?",
      answer:
        "Yes, we provide catering services for events and parties. Contact us for more information and customized menu options.",
      open: false,
    },
    {
      question: "How can I contact customer service?",
      answer:
        "You can reach our customer service through the contact form on our website, via email at support@sevenburgers.com, or by calling our hotline at (123) 456-7890.",
      open: false,
    },
    {
      question: "Do you have any promotions or discounts?",
      answer:
        "We regularly offer promotions and discounts. Check our website or subscribe to our newsletter for the latest deals.",
      open: false,
    },
    {
      question: "Can I track my order?",
      answer:
        "Yes, you can track your order in real-time through our website or app.",
      open: false,
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept all major credit cards, debit cards, and popular digital payment methods like PayPal and Apple Pay.",
      open: false,
    },
    {
      question: "Are there any allergens in your food?",
      answer:
        "Our menu items may contain allergens. Please refer to the allergen information on our website or contact us for specific concerns.",
      open: false,
    },
    {
      question: "How do I leave feedback about my experience?",
      answer:
        "We value your feedback! You can leave a review on our website, social media pages, or contact us directly with your comments and suggestions.",
      open: false,
    },
  ]);

  const [scrolling, setScrolling] = useState(false);


  const toggleFAQ = (index) => {
    setFaqs(
      faqs.map((faq, i) => {
        if (i === index) {
          faq.open = !faq.open;
        } else {
          faq.open = false;
        }
        return faq;
      })
    );
  };

  useEffect(() => {
    const handleScroll = () => {
        setScrolling(window.scrollY);
    };

   

    window.addEventListener('scroll', handleScroll);

    return () => {
        window.removeEventListener('scroll', handleScroll);
    };
}, []);

// console.log(scrolling)

  return (
    <div className="bg-[#F4EBDC]">
    <Whatsapp/>
      <Navbar />
      <div className="w-[90%] mx-auto relative flex lg:flex-row flex-col lg:pt-10">
        <div className="lg:w-[40%] lg:pt-20 flex justify-center items-center m-auto">
          <img src="/faq.png" alt="faq" className={` md:mt-20 transition-all ease-linear duration-400  w-full lg:w-[40%] lg:fixed lg:translate-y-[-50%] ${scrolling > 900 ? " top-[20%] " : " top-[50%] " }`} />
        </div>
        <div className="lg:w-[55%]">
          <div className="inter lg:mt-16 pt-4 lg:text-left font-[700] text-[24px] leading-[28.8px] text-black text-center">
            Frequently Asked Questions
          </div>
          <div className="faqs w-full max-w-xl mx-auto  p-1 ">
            {faqs.map((faq, index) => (
              <FAQ faq={faq} index={index} key={index} toggleFAQ={toggleFAQ} />
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Faq;
