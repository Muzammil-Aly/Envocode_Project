import React from "react";
import "./About.css";
import Slider from "react-slick";
import icon from "../projectPics/about-link.png";
import Offerings from "./HomeComponents/Offerings";
import { FaLinkedin } from "react-icons/fa";
const About = () => {
  const AboutData = [
    {
      id: 1,

      Heading: "Web & App Design & Development",
      text: `Master the art of online presence with EnvoCode. Our team ensures your website and apps are both stunning and functional.`,
    },
    {
      id: 2,
      Heading: "Ecommerce Development",

      text: `EnvoCode offers robust e-commerce solutions. Seamlessly integrate payment processors and offer an unparalleled shopping experience.`,
    },
    {
      id: 3,
      Heading: "Social Media Marketing",
      text: `Dive into the digital conversation. EnvoCode’s social media strategies ensure your brand stays relevant and engaging.`,
    },

    {
      id: 4,
      Heading: "Search Engine Optimization",

      text: `Stay ahead of the curve with EnvoCode’s cutting-edge SEO strategies, designed to push you to the top.`,
    },
    {
      id: 5,
      Heading: "Photography",
      text: `Let your products and events shine with our professional photography services, capturing every moment in its best light.`,
    },
    {
      id: 6,
      Heading: "Video Production",
      text: `Capture and captivate with EnvoCode’s video solutions. We tell your story, one frame at a time.`,
    },
    {
      id: 7,
      Heading: "Content Writing",

      text: `Content is king, and our content writing services reign supreme. At Envocode, we produce compelling, SEO-optimized content that tells your story, engages your target audience, and drives conversions.`,
    },
  ];
  const teamMembers = [
    {
      name: "Muhammad Rehan",
      role: "MERN Stack Developer",
      description:
        "Meet Muhammad Rehan, the newest addition to EnvoCode’s frontend development team, where potential meets expertise. With a BS in Computer Science and valuable experience as an Assistant Sales Manager for a year, Rehan brings a unique blend of technical knowledge and business acumen to our tech crew.",
      image:
        "https://envocode.com/wp-content/uploads/elementor/thumbs/Rehan-Mern-Stack-Developer-1-qj7cis0bsafuklfypp9s2kok2nad6htcp1mqtkvgs8.webp",
      linkedin: "https://www.linkedin.com/in/muhammadrehan",
    },
    {
      name: "Arslan Tariq",
      role: "SEO Consultant & Content Strategist",
      description:
        "Meet Arslan Tariq, EnvoCode’s maestro of SEO and wizard of words. With an impressive five-year tenure in the realm of SEO, Arslan has become a master craftsman, sculpting search engine landscapes both locally and globally with his exceptional skills.",
      image:
        "https://envocode.com/wp-content/uploads/elementor/thumbs/Arslan-Seo-Consultant-qj28nr4bsfhssxy263bfgd1kulm94fquzwxmn4yugo.webp", // Replace with actual image URL
      linkedin: "https://www.linkedin.com/in/arslantariq",
    },
    {
      name: "Muhammad Shakir Anwar",
      role: "Mobile App Developer",
      description:
        "Introducing Muhammad Shakir Anwar, a budding talent in the world of mobile app development at EnvoCode. With his BS in Computer Science and emerging skills in Flutter development, Shakir is already demonstrating his potential in just one month.",
      image:
        "https://envocode.com/wp-content/uploads/elementor/thumbs/Shakir-App-developer-e1706853735743-qj7cskhsz5ugkutloufqto3ww7sn1vhdfj3i3ac2tq.webp", // Replace with actual image URL
      linkedin: "https://www.linkedin.com/in/muhammadshakir",
    },
    {
      name: "Hassan Khan",
      role: "Front-End Developer",
      description:
        "Meet Hassan Khan, the newest member of the EnvoCode family, embarking on his professional journey as a Frontend Web Developer. A fresh graduate with a BS in Computer Science, Hassan is a blank canvas ready to be painted with the vibrant colors of experience and innovation. His ambition soars high with dreams of becoming a multi-millionaire and an entrepreneur, reflecting a spirit that’s both daring and visionary.",
      image:
        "https://envocode.com/wp-content/uploads/elementor/thumbs/Hassan-Khan-Front-End-Developer-qj7cj3ae2avafwzkvu5awhu379qrqv24qlgkkweqpk.webp", // Replace with actual image URL
      linkedin: "https://www.linkedin.com/in/hassankhan",
    },
    {
      name: "Saira Razzaq",
      role: "Graphic Designer",
      description:
        "Meet Saira Razzaq, the creative force powering EnvoCode’s graphics and design team. Saira has honed her artistic and technical skills to adapt to the dynamic world of digital design. Her journey at EnvoCode began with a three-month internship, where she quickly proved her mettle and earned her current position.",
      image:
        "https://envocode.com/wp-content/uploads/elementor/thumbs/Saira-Razzaq-Graphic-Designer--qjsbpm91gx6agl1hnv2oekiv8gtankooverg4gob7c.webp", // Replace with actual image URL
      linkedin: "https://www.linkedin.com/in/sairarazzaq",
    },
    {
      name: "Sidra Khan",
      role: "Graphic Designer",
      description:
        "Meet Sidra Khan, the creative force powering EnvoCode’s graphics and design team. Sidra has honed her artistic and technical skills to adapt to the dynamic world of digital design. Her journey at EnvoCode began with a three-month internship, where she quickly proved her mettle and earned her current position.",
      image:
        "https://envocode.com/wp-content/uploads/elementor/thumbs/Sidra-graphicdesigner-qj28ngs3p93n98d2uguj6xnibd17rrltahrad3e6d4.webp", // Replace with actual image URL
      linkedin: "https://www.linkedin.com/in/sidrakh",
    },
  ];
  const clients = [
    {
      id: 1,
      imgUrl:
        "https://envocode.com/wp-content/uploads/2024/01/Abbasi-Company-client.webp",
    },
    {
      id: 2,
      imgUrl:
        "https://envocode.com/wp-content/uploads/2024/01/Al-Gohar-Education-Client.webp",
    },
    {
      id: 3,
      imgUrl:
        "https://envocode.com/wp-content/uploads/2024/01/botal-client.webp",
    },
    {
      id: 4,
      imgUrl:
        "https://envocode.com/wp-content/uploads/2024/01/Citropak-client.webp",
    },
    {
      id: 5,
      imgUrl:
        "https://envocode.com/wp-content/uploads/2024/01/Dry-Fruit-Mart-client.webp",
    },
    {
      id: 6,
      imgUrl:
        "https://envocode.com/wp-content/uploads/2024/01/Focus-client.webp",
    },
    {
      id: 7,
      imgUrl:
        "https://envocode.com/wp-content/uploads/2024/01/Fruitien-joy-client.webp",
    },
    {
      id: 8,
      imgUrl:
        "https://envocode.com/wp-content/uploads/2024/01/happyzone-Client.webp",
    },
    {
      id: 9,
      imgUrl:
        "https://envocode.com/wp-content/uploads/2024/01/mast-fm-103-client.webp",
    },
    {
      id: 10,
      imgUrl:
        "https://envocode.com/wp-content/uploads/2024/01/MeRise-Client.webp",
    },
    {
      id: 11,
      imgUrl:
        "https://envocode.com/wp-content/uploads/2024/01/MFR-Marketing-client-e1706854016960.webp",
    },
    {
      id: 12,
      imgUrl:
        "https://envocode.com/wp-content/uploads/2024/01/Rockandroll-juice-client.webp",
    },
    {
      id: 13,
      imgUrl:
        "https://envocode.com/wp-content/uploads/2024/01/Splinter-hub-Technologies-client.webp",
    },
    {
      id: 14,
      imgUrl:
        "https://envocode.com/wp-content/uploads/2024/01/uppal-cosmetics-client.webp",
    },
    {
      id: 15,
      imgUrl:
        "https://envocode.com/wp-content/uploads/2024/02/amyzone-client.webp",
    },

    {
      id: 17,
      imgUrl:
        "https://envocode.com/wp-content/uploads/2024/02/motor-36-logo-client.webp",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 8,
    slidesToScroll: 4,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="about-container">
        <header className="about-header">
          <h1 className="about-title">About Us</h1>
          <p className="about-subtitle">
            Every company has a story. This is ours.
          </p>
          <div className="about-email-logo">
            <a href="mailto:info@envocode.com" className="contact-email">
              Send us an email
            </a>
            <img src={icon} />
          </div>
        </header>

        <section className="about-introduction">
          <h2 className="introduction-title">We are the best</h2>
          <p className="introduction-description">
            EnvoCode stands as a premier Software House dedicated to reshaping
            the digital paradigm. In this ever-evolving digital era, it’s
            essential to have a partner who can guide you toward maximizing your
            online reach and potential. With EnvoCode by your side, you’ll
            harness a plethora of digital opportunities in real time.
          </p>
          <h2 className="introduction-title">
            Our Services - Tailored Software Solutions by Envocode
          </h2>
          <p className="introduction-description">
            Choosing Envocode means investing in top-notch software solutions
            that offer long-term benefits for your business. Your digital needs
            are diverse, and so are our solutions.
          </p>
        </section>
      </div>
      <Offerings
        fname="All These Services"
        sname="For You"
        SecData={AboutData}
        section="About"
      />
      <section class="block-container">
        <div class="block-content our-story">
          <h2 class="block-title">Our Story</h2>
          <p class="block-description">
            Envocode’s journey began with a vision to revolutionize the digital
            landscape through innovative software solutions. From our humble
            beginnings, we’ve grown into a dynamic force in the tech industry,
            driven by passion and guided by expertise. Over the years, we’ve
            navigated the complexities of technology, embracing challenges and
            turning them into opportunities for growth.
          </p>
          <p class="block-description">
            Our commitment to delivering excellence has not only propelled us
            forward but also built lasting relationships with our clients. Each
            milestone in our journey reflects our dedication to quality, our
            relentless pursuit of innovation, and our unwavering focus on
            helping businesses succeed in the digital era.
          </p>
          <p class="block-description">
            As we continue to evolve, our core values remain steadfast – to
            empower, innovate, and excel.
          </p>
        </div>

        <div class="block-content ceo-message">
          <h2 class="block-title">Our CEO Message</h2>
          <p class="block-description">
            At Envocode, we distinguish ourselves by deeply enriching our
            clients’ visions with precision and excellence. We are your
            strategic partners, committed to helping you achieve your goals,
            regardless of the size of your business. We partner with you every
            step of the way, from start to finish, to turn your visions into
            realities and your ambitions into achievements. Our steadfast
            commitment to excellence ensures your success at any scale.
          </p>
          <p class="block-description">
            Partner with us every step of the way, from brainstorming to launch,
            and turn your ambitious vision into a tangible reality. We equip our
            team and clients with industry-specific skills training programs to
            stay ahead of the curve, empowering everyone to embrace emerging
            technologies confidently.
          </p>
          <button class="cta-button">Contact Us</button>
        </div>
      </section>

      <section className="meet-our-team">
        <h2 className="section-title">Meet Our Team</h2>
        <div className="team-container">
          {teamMembers.map((member, index) => (
            <div className="team-member" key={index}>
              <div className="member-image-container">
                <img
                  src={member.image}
                  alt={member.name}
                  className="member-image"
                />
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="linkedin-link"
                >
                  <FaLinkedin />
                </a>
              </div>
              <h3 className="member-name">{member.name}</h3>
              <p className="member-role">{member.role}</p>
              <p className="member-description">{member.description}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="client-slider-section">
        <div className="container">
          <h2 className="slider-title">Our Clients</h2>
          <Slider {...settings}>
            {clients.map((client) => (
              <div key={client.id} className="flip-card">
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <img
                      src={client.imgUrl}
                      alt={`Client ${client.id}`}
                      className="client-logo"
                    />
                  </div>
                  <div className="flip-card-back">
                    <img
                      src={client.imgUrl}
                      alt={`Client ${client.id}`}
                      className="client-logo"
                    />
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>
      <section className="lets-start-section">
        <div className="start-content">
          <h2 className="start-title-start"> LET'S START</h2>
          <h2 className="start-title"> Explore Our Services</h2>
          <p className="start-description">
            Ready to start your next project or have questions? Get in touch
            with us today. Our team is ready to assist you with any inquiries
            and discuss how we can help bring your project to fruition.
          </p>
          <a href="/contact" className="start-button">
            Get Started
          </a>
        </div>
      </section>
    </>
  );
};

export default About;
