import React, { useState } from "react";
import TopNavbar from "../components/TopNavbar";
import BottomNavbar from "../components/BottomNavbar";
import Footer from "../components/Footer";
import feature1 from "../images/service-images/feature1.jpg";
import feature2 from "../images/service-images/feature2.jpg";
import feature3 from "../images/service-images/feature3.jpg";
import feature4 from "../images/service-images/feature4.jpg";
import feature5 from "../images/service-images/feature5.jpg";
import feature6 from "../images/service-images/feature6.jpg";
import feature7 from "../images/service-images/feature7.jpg";
import feature8 from "../images/service-images/feature8.jpg";
import feature9 from "../images/service-images/feature9.jpg";
import feature10 from "../images/service-images/feature10.jpg";
import feature11 from "../images/service-images/feature11.jpg";
import feature12 from "../images/service-images/feature12.jpg";
import feature13 from "../images/service-images/feature13.jpg";
import feature14 from "../images/service-images/feature14.jpg";
import { Link } from "react-router-dom";

const Services = () => {
  const imageArray = [
    {
      id: 1,
      image: feature1,
      HeadText: "Humkara with Haleem - A Powerful Mystical Practice",
      paragraph1:
        "Humkara with Haleem is a profound spiritual practice that harnesses the vibrational power of sacred sounds to cleanse negativity, awaken inner strength, and align with cosmic energies. Rooted in ancient wisdom, this technique involves the chanting of powerful seed mantras that generate high-frequency vibrations, dissolving blockages and inviting divine protection.",
      paragraph2:
        "“Benefits of Humkara with Haleem:”",
      paragraph3:
        "✨ Removes Negative Energies - Clears obstacles, karmic burdens, and unwanted influences.",
      paragraph4:
          "✨ Enhances Spiritual Protection - Creates a powerful energetic shield against negativity.",
      paragraph5:
          "✨ Amplifies Manifestation Power - Aligns intentions with universal forces for abundance and success.",
      paragraph6:
          "✨ Balances Chakras & Energizes Aura - Restores inner harmony and boosts vitality.",
      paragraph7:
          "✨ Deepens Meditation & Intuition - Strengthens spiritual awareness and connection to higher realms.",
      paragraph8:
          "This sacred practice is a gateway to transformation, helping seekers shift from limitations to empowerment. Experience the profound effects of Humkara with Haleem and step into your highest potential!",  
    },
    {
      id: 2,
      image: feature2,
      HeadText: "Tarot Card Reading - Unlock the Wisdom of the Universe",
      paragraph1:
        "Tarot card reading is a powerful divination tool that provides insight, clarity, and guidance on various aspects of life. It taps into the subconscious mind and universal energies, helping you navigate challenges, make informed decisions, and align with your true path.",
      paragraph2:
        "“At Mahakaal Cosmic Portal, we offer exclusive subscription packages to ensure you receive continuous guidance and support:”",
      paragraph3:
        "✨ General Monthly Guidance - Stay aligned with the energies of each month. This package offers a personalized tarot reading at the beginning of every month to provide clarity on opportunities, challenges, and key focus areas.",
      paragraph4:
        "✨ Specific Life Aspect Guidance - Need insight into love, career, finances, or personal growth? This package delivers in-depth tarot guidance tailored to a specific area of your life, helping you move forward with confidence and clarity.",
      paragraph5:
        "Embrace the wisdom of the Tarot and let the universe illuminate your path!",
    },
    {
      id: 3,
      image: feature3,
      HeadText: "Numerology - Decode the Secrets of Your Destiny",
      paragraph1:
        "Numerology is an ancient mystical science that reveals how numbers influence your life, personality, and destiny. By analyzing your birth date and name, numerology provides deep insights into your strengths, challenges, and life path, helping you make empowered choices.",
      paragraph2:
        "“At Mahakaal Cosmic Portal, we specialize in:”",
      paragraph3:
        "✨ Life Path & Destiny Numbers - Understand your core purpose and karmic lessons.",
      paragraph4:
        "✨ Name Numerology - Discover how the vibrations of your name impact your energy, success, and relationships. Learn if a name correction can enhance your fortune. ",
      paragraph5:
        "✨ Mobile Number Numerology - Your mobile number carries a unique energy signature. Find out if it aligns with your personal vibrations and attracts positive opportunities.",
      paragraph6:
        "✨ Compatibility & Relationship Numbers - Gain insight into the harmony between you and your loved ones through numerology.",
      paragraph7:
      "Unlock the hidden power of numbers and align your life with the universe's energy!",
    },
    {
      id: 4,
      image: feature4,
      HeadText: "Aura & Chakra Scanning - Decode Your Energy Field",
      paragraph1:
          "Your aura and chakras are the energetic blueprint of your being, reflecting your physical, emotional, mental, and spiritual state. Aura & Chakra Scanning is a powerful diagnostic tool that helps identify imbalances, blockages, and strengths within your energy field.",
      paragraph2:
          "“What We Offer:”",
      paragraph3:
          "✨ Aura Scanning - Analyzes the colors, strength, and patterns of your aura to reveal emotional and spiritual well-being.",
      paragraph4:
          "✨ Chakra Scanning - Detects blockages in the seven main chakras, ensuring optimal energy flow for balance and harmony.",
      paragraph5:
          "✨ Energy Imbalance Detection - Identifies negative influences, past traumas, and areas needing healing.",
      paragraph6:
          "✨ Personalized Healing Recommendations - Get insights into practices, crystals, or remedies to restore energetic alignment.",
      paragraph7:
          "By understanding your energy field, you can take proactive steps toward healing, self-awareness, and spiritual growth. Experience Aura & Chakra Scanning to realign with your true self and elevate your vibrational frequency!.",
     },
    {
      id: 5,
      image: feature5,
      HeadText: "Palmistry - The Blueprint of Your Destiny",
      paragraph1:
        "Palmistry, or Chiromancy, is an ancient divination art that reveals insights about your personality, life path, strengths, and challenges by analyzing the lines, mounts, and shapes of your hands. Your palms hold the imprints of your past, present, and future, making them a powerful tool for self-discovery and guidance.",
      paragraph2:
        "“What Palmistry Can Reveal:”",
      paragraph3: 
        "✨ Life Path & Destiny - Understand your true purpose and karmic lessons.",
      paragraph4:
        "✨ Career & Financial Growth - Identify potential opportunities and challenges in your professional journey.",
      paragraph5:
        "✨ Relationships & Compatibility - Gain clarity on love, marriage, and emotional connections.",
      paragraph6:
        "✨ Health & Vitality - Decode physical and mental well-being through the lines and mounts of the palm.",
      paragraph7:
      "✨ Spiritual Insights - Discover hidden talents, psychic abilities, and past-life influences.",
      paragraph8:
      "At Academy of Universal Mysticism, we offer detailed palm readings to help you navigate life's journey with confidence and wisdom. Unlock the secrets within your hands and embrace the guidance they hold for your future!",
    },
    {
      id: 6,
      image: feature6,
      HeadText: "Animal energy healing",
      paragraph1:
        "Animal Energy Healing is a gentle, non-invasive holistic practice that supports the physical, emotional, and energetic well-being of animals. Based on the understanding that all living beings have an energy field, this healing modality aims to balance and clear energetic blockages, promoting natural healing processes.",
      paragraph2:
        "This method help relieve stress, ease pain, boost immunity, and support recovery from illness or trauma. Animal Energy Healing is beneficial for pets, farm animals, and even wild animals, and it works well alongside veterinary care.",
      paragraph3: "It is especially effective for animals dealing with anxiety, behavioral issues, aging-related discomfort, or past trauma. Sessions is done remotely, making it accessible and stress-free for the animal. Only requirement is a full photograph of the animal and a brief of issue being faced.",
      paragraph4:
        "Animal Energy Healing is rooted in compassion, intuition, and the deep bond between humans and animals, helping them live healthier and happier lives.",
    },
    {
      id: 7,
      image: feature7,
      HeadText: "Angelic Healing - Connect with Divine Light & Guidance",
      paragraph1:
        "Angelic Healing is a gentle yet powerful spiritual practice that involves working with high-vibrational angelic beings to bring emotional, mental, physical, and spiritual healing.",
      paragraph2:
        "These celestial energies offer unconditional love, protection, and divine support, helping you release fear, pain, and energetic blockages.",
      paragraph3: 
        "What Angelic Healing Offers:",
      paragraph4:
        "✨ Deep Emotional & Energetic Cleansing - Let go of trauma, grief, and negative patterns.",
      paragraph5:
        "✨ Divine Protection & Support - Experience the loving presence of Archangels and guardian angels.",
      paragraph6:
        "✨ Chakra & Aura Alignment - Restore balance and harmony within your energy field.",
      paragraph7:
        "✨ Spiritual Awakening - Strengthen your intuition, inner peace, and connection to the divine.",
      paragraph8:
        "✨ Healing Through Light & Intention - Sessions use guided meditation, affirmations, and angelic symbols to channel healing energy.",
      paragraph9:
        "At Mahakaal Cosmic Portal, our Angelic Healing sessions are intuitively guided and infused with divine love.",
      paragraph10:
        "Whether you're seeking clarity, peace, or spiritual connection, the angelic realm offers gentle, radiant support on your healing journey.",
    },
    {
      id: 8,
      image: feature8,
      HeadText: "Face Reading - Discover the Story Written on Your Face",
      paragraph1:
        "Face Reading, also known as Physiognomy, is an ancient art of interpreting facial features to reveal deep insights about a person’s personality, emotions, destiny, and life patterns. Every line, curve, and expression on the face holds symbolic meaning, reflecting your inner nature and life experiences.",
      paragraph2:
        "What Face Reading Can Reveal:",
      paragraph3: 
        "✨ Personality Traits - Understand core behavioral patterns, strengths, and weaknesses.",
      paragraph4:
        "✨ Emotional Tendencies - Decode how you express and process emotions through facial features.",
      paragraph5:
        "✨ Career & Success Indicators - Identify signs of leadership, creativity, stability, and financial potential.",
      paragraph6:
        "✨ Health & Vitality - Uncover signs of physical and emotional imbalances reflected on the face.",
      paragraph7:
        "✨ Life Path & Relationships - Gain clarity about life purpose, timing of major events, and compatibility with others.",
      paragraph8:
        "At MahakaalCosmicPortal, our face reading sessions offer profound insights by blending traditional wisdom with intuitive observation. Your face is a living map—let it guide you toward self-awareness, empowerment, and alignment with your destiny.",
    },
    {
      id: 9,
      image: feature9,
      HeadText: "Kundali Analysis - Unlock the Blueprint of Your Soul",
      paragraph1:
        "Kundali Analysis, also known as birth chart or horoscope analysis, is a powerful Vedic astrology tool that maps the position of planets at the time of your birth. This celestial blueprint reveals your life purpose, personality traits, karmic patterns, strengths, challenges, and the timing of key life events.",
      paragraph2:
        "What Kundali Analysis Can Reveal:.",
      paragraph3:
        "✨ Life Path & Soul Purpose - Understand your dharma (life mission) and karmic lessons.",
      paragraph4:
        "✨  Career & Financial Prospects - Identify your professional strengths and periods of growth or change.",
      paragraph5:
        "✨ Marriage & Relationships - Get clarity on love life, compatibility, and timing of significant relationships.",
      paragraph6:
        "✨ Health Insights - Discover physical or emotional tendencies based on planetary influences.",
      paragraph7:
        "✨ Favorable & Challenging Periods - Learn about dashas (planetary periods), transits, and remedies for smoother navigation.",
      paragraph8:
        "At MahakaalCosmicPortal, we provide in-depth Kundali Analysis to help you make aligned decisions, understand your soul's journey, and transform challenges into opportunities.",
      paragraph9:
        "Your birth chart is not just a prediction—it's a mirror to your divine design. Let the stars guide you to clarity, purpose, and fulfillment.",
    },
    {
      id: 10,
      image: feature10,
      HeadText: "Mediumship - Bridging the Realms of Spirit and Soul",
      paragraph1:
        "Mediumship is the sacred ability to connect with spirits, ancestors, and higher realms to receive messages, guidance, and healing. A medium serves as a divine channel, facilitating communication between the physical world and the spiritual dimension, offering comfort, closure, and deeper understanding.",
      paragraph2:
        "What Mediumship Can Offer:",
      paragraph3: 
        "✨ Messages from Departed Loved Ones - Receive loving guidance, unresolved messages, or affirmation of their continued presence.",
      paragraph4:
        "✨ Spiritual Guidance - Connect with spirit guides, angels, and ascended beings for direction and clarity.",
      paragraph5:
        "✨ Emotional Healing & Closure - Find peace, forgiveness, and healing through soul-to-soul communication.",
      paragraph6:
        "✨ Validation of the Afterlife - Experience evidence-based insights that affirm the continuity of life beyond death.",
      paragraph7:
        "✨ Awakening Intuition & Spiritual Growth - Mediumship often opens your path to deeper soul awareness.",
      paragraph8:
        "At Mahakaal CosmicPortal, our mediumship sessions are conducted in a protected, high-vibrational space with deep respect for spirit and your healing journey. Whether you seek answers, comfort, or connection, mediumship offers a heart-centered bridge between worlds.",
    },
    {
      id: 11,
      image: feature11,
      HeadText: "Graphology - Discover the Power of Handwriting Analysis",
      paragraph1:
        "Graphology is the fascinating science of analyzing handwriting to reveal deep insights into an individual’s personality, emotional state, behavior patterns, and subconscious mind. Your handwriting is a mirror of your inner world—every stroke, curve, and pressure tells a story about who you are and how you think, feel, and relate to life.",
      paragraph2:
        "What Graphology Can Reveal:",
      paragraph3: 
        "✍ Personality Traits - Uncover confidence levels, emotional expression, decision-making style, and leadership qualities.",
      paragraph4:
        "✍ Mental & Emotional Health - Detect signs of stress, anxiety, overthinking, or suppressed emotions.",
      paragraph5:
        "✍ Relationship Compatibility - Understand how you communicate and connect with others.",
      paragraph6:
        "✍ Career Alignment - Identify natural talents, working style, and professional potential.",
      paragraph7:
        "✍ Behavioral Patterns & Blocks – Bring awareness to subconscious habits and limiting beliefs.",
      paragraph8:
        "At Mahakaal CosmicPortal, our Graphology sessions offer intuitive and scientific analysis of your handwriting, empowering you with self-awareness and tools for transformation. Whether for personal growth, relationship understanding, or career clarity, handwriting reveals what the heart hides.",
    },
    {
      id: 12,
      image: feature12,
      HeadText: "Lal Kitab – The Red Book of Destiny and Remedies",
      paragraph1:
        "Lal Kitab is a unique and powerful system of astrology rooted in ancient wisdom and mystical insights. Unlike traditional Vedic astrology, Lal Kitab focuses on practical, easy-to-perform remedies (upayas) that bring swift relief from karmic blocks and planetary imbalances. It is known as the “Wonder Book” of astrology for its accuracy and accessible guidance.",
      paragraph2:
        "What Lal Kitab Analysis Offers:",
      paragraph3: 
        "📕 Karmic Insights – Understand past life influences, hidden patterns, and life lessons.",
      paragraph4:
        "📕 Practical Remedies – Simple rituals like offering food, changing placements at home, or using symbolic items to neutralize planetary doshas.",
      paragraph5:
        "📕 Career, Finance & Relationships – Gain clarity and guidance on major life areas with easy-to-follow solutions.",
      paragraph6:
        "📕 Health & Emotional Balance – Decode root causes of issues and apply remedies that balance both body and spirit.",
      paragraph7:
        "📕 Personalized Charts & Predictions – Based on your birth details, receive accurate and detailed analysis aligned with Lal Kitab principles.",
      paragraph8:
        "At Mahakaal Cosmic Portal, our Lal Kitab consultations help you realign with cosmic flow using this profound system. If you're seeking transformation through simple yet potent remedies, Lal Kitab holds the keys to unlock peace, prosperity, and harmony in life.",
      },
    {
      id: 13,
      image: feature13,
      HeadText: "Prashna Kundali – Instant Answers from the Cosmos",
      paragraph1:
        "Prashna Kundali, also known as Horary Astrology, is a precise and powerful branch of Vedic astrology used to answer specific questions based on the exact time and location the question is asked. Instead of using the birth chart, it creates a new chart—the Prashna chart—to reveal divine insights and accurate predictions related to your concern.",
      paragraph2:
        "What Prashna Kundali Can Help With:",
      paragraph3: 
        "❓ Yes/No Answers – Get clear direction on pressing questions about relationships, career, health, travel, or finances.",
      paragraph4:
        "❓ Missing Objects or People – Find clues regarding lost items or disconnected relationships.",
      paragraph5:
        "❓ Urgent Decision-Making – Seek clarity on time-sensitive choices or uncertain situations.",
      paragraph6:
        "❓ Unexpected Situations – When birth details are unavailable or situations arise suddenly, Prashna Kundali offers a reliable solution.",
      paragraph7:
        "❓ Outcome Prediction – Understand the success, timing, and outcome of a planned action or event.",
      paragraph8:
        "At Mahakaal Cosmic Portal, our Prashna Kundali readings combine astrological precision with intuitive insight, helping you make informed and aligned choices. Ask your question with a pure heart—and let the cosmos respond.",
      },
    {
      id: 14,
      image: feature14,
      HeadText: "Vastu Shastra",
      paragraph1:
        "Vastu Shastra is the ancient Indian science of architecture and spatial arrangement, focusing on harmonizing the environment with natural elements to promote health, prosperity, and well-being. Derived from the Sanskrit words ‘Vastu’ (dwelling) and ‘Shastra’ (science), it lays out guidelines for the construction and design of buildings, homes, temples, and other structures.",
      paragraph2:
        "Rooted in the belief that the five elements — Earth (Prithvi), Water (Jal), Fire (Agni), Air (Vayu), and Space (Aakash) — influence human life, Vastu aims to balance these elements through directional alignments and spatial geometry.",
      paragraph3: 
        "Key principles include:",
      paragraph4:
        "Proper orientation of rooms (e.g., kitchen in the southeast, entrance in the northeast)",
      paragraph5:
        "Placement of furniture and utilities",
      paragraph6:
        "Use of shapes and symmetry in design",
      paragraph7:
        "Maximizing natural light and ventilation",
      paragraph8:
        "Vastu is often consulted during home buying, interior design, and renovations to attract positive energy and dispel negativity. Though traditional in nature, many modern architects and interior designers incorporate Vastu elements into contemporary designs.",
    },
  ];

  const [isFlippedArray, setIsFlippedArray] = useState(Array(6).fill(false));

  const handleFlip = (index) => {
    const updatedArray = [...isFlippedArray];
    updatedArray[index] = !updatedArray[index];
    setIsFlippedArray(updatedArray);
  };

  return (
    <section>
      <div className="hidden md:block">
        <TopNavbar />
      </div>
      <div className="bg-black h-[70px]">
        <BottomNavbar className="text-black" />
      </div>
      <div>
        <h1 className="text-center text-2xl md:text-3xl lg:text-4xl m-3 font-philosopher  mb-5">
          Services
        </h1>
      </div>

      <div className="grid gap-3 grid-cols-1 sm:grid-cols-1 md:grid-cols-1 text-center w-[90%] m-auto">
        {imageArray.map((item, index) => {
          return (
            <div className="m-auto border-2 w-[100%] h-auto px-7" key={item.id}>
              <img
                src={item.image}
                alt="feature image"
                className="w-[300px] m-auto rounded-full my-4"
              />
              <h3 className="font-bold text-xl my-3">{item.HeadText}</h3>
              <p className="text-gray-500">{item.paragraph1}</p>
              <p className="text-gray-800 my-4 font-bold">{item.paragraph2}</p>
              <p className="text-gray-500 my-3">{item.paragraph3}</p>
              <p className="text-gray-500 my-3">{item.paragraph4}</p>
              <p className="text-gray-500 my-3">{item.paragraph5}</p>
              <p className="text-gray-500 my-3">{item.paragraph6}</p>
              <p className="text-gray-500 my-3">{item.paragraph7}</p>
              <p className="text-gray-500 my-3">{item.paragraph8}</p>
              <p className="text-gray-500 my-3">{item.paragraph9}</p>
              <p className="text-gray-500 my-3">{item.paragraph10}</p>
              <Link to={"/appointment"}>
                <button className="text-white my-5 bg-black hover:bg-transparent border border-black rounded-sm px-3 py-2 hover:border hover:border-black hover:text-black transition duration-700 ease-in-out">
                  Get Started Here
                </button>
              </Link>
            </div>
          );
        })}
      </div>
      <div className="mt-4">
        <Footer />
      </div>
    </section>
  );
};

export default Services;
