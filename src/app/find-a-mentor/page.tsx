"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Search, Calendar } from "lucide-react";
import Link from "next/link";
import Image from 'next/image';
import { useLanguage } from "../../contexts/LanguageContext";
import Head from 'next/head';

// Static data for mentors
const mentors = [
  {
    id: 1,
    name: "John Doe",
    expertise: "English & Mathematics",
    bio: "Experienced tutor with 5+ years of teaching English and Math.",
    availability: "Mon-Fri, 9 AM - 5 PM",
    image: "",
  },
  {
    id: 2,
    name: "Jane Smith",
    expertise: "Science & Physics",
    bio: "Passionate about making science fun and easy to understand.",
    availability: "Weekends, 10 AM - 2 PM",
    image: "https://source.unsplash.com/200x200/?portrait,woman",
  },
  {
    id: 3,
    name: "Alice Johnson",
    expertise: "History & French",
    bio: "Specializes in European history and French tutoring.",
    availability: "Tue-Thu, 3 PM - 7 PM",
    image: "https://source.unsplash.com/200x200/?portrait,woman",
  },
  {
    id: 4,
    name: "Bob Brown",
    expertise: "Mathematics",
    bio: "Mathematics wizard with a passion for teaching algebra and calculus.",
    availability: "Mon-Wed, 1 PM - 5 PM",
    image: "https://pixabay.com/photos/woman-model-news-paper-female-7286576/",
  },
  {
    id: 5,
    name: "Ella Davis",
    expertise: "English",
    bio: "English literature enthusiast with a knack for creative writing.",
    availability: "Fri-Sun, 12 PM - 4 PM",
    image: "/assets/teaCH.jpg",
  },
  
];

function FindMentor() {
  const { t } = useLanguage();
  const [searchQuery, setSearchQuery] = useState("");
  const [filterExpertise, setFilterExpertise] = useState("");

  const filteredMentors = mentors.filter(
    (mentor) =>
      (searchQuery === "" || mentor.name.toLowerCase().includes(searchQuery.toLowerCase())) &&
      (filterExpertise === "" || mentor.expertise.toLowerCase().includes(filterExpertise.toLowerCase()))
  );

  return (
    <>
      <Head>
        <title>{t('findMentor.title')} | MyLearnia</title>
        <meta name="description" content="Find the perfect mentor for languages and school subjects on MyLearnia." />
        <meta property="og:title" content={t('findMentor.title') + ' | MyLearnia'} />
        <meta property="og:description" content="Find the perfect mentor for languages and school subjects on MyLearnia." />
        <meta property="og:image" content="/assets/images/hero.webp" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'ItemList',
          'name': t('findMentor.title'),
          'itemListElement': mentors.map((mentor, idx) => ({
            '@type': 'Person',
            'name': mentor.name,
            'description': mentor.bio,
            'position': idx + 1
          }))
        }) }} />
      </Head>
      <section className="py-24 px-6 lg:px-32 bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center text-4xl font-bold mb-8"
        >
          {t('findMentor.title')}
        </motion.h2>

        {/* Search and Filter Bar */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-8">
          <div className="relative w-full max-w-lg">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-500" />
            <input
              type="text"
              placeholder={t('findMentor.searchPlaceholder')}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 border rounded-lg"
            />
          </div>
          <select
            value={filterExpertise}
            onChange={(e) => setFilterExpertise(e.target.value)}
            className="w-full max-w-xs p-3 border rounded-lg"
          >
            <option value="">{t('findMentor.filterByExpertise')}</option>
            <option value="English">{t('findMentor.english')}</option>
            <option value="Mathematics">{t('findMentor.mathematics')}</option>
            <option value="Science">{t('findMentor.science')}</option>
            <option value="Physics">{t('findMentor.physics')}</option>
            <option value="History">{t('findMentor.history')}</option>
            <option value="French">{t('findMentor.french')}</option>
          </select>
        </div>

        {/* Mentor List */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredMentors.map((mentor) => (
            <motion.div
              key={mentor.id}
              whileHover={{ scale: 1.05 }}
              className="p-6 rounded-lg shadow-lg bg-orange-100 dark:bg-gray-800"
            >
              <div className="flex items-center space-x-4">
                <Image
                  src={mentor.image ? mentor.image : '/assets/images/default-avatar.png'}
                  alt={mentor.name ? mentor.name + ' profile picture' : 'Mentor profile picture'}
                  width={64}
                  height={64}
                  className="w-16 h-16 rounded-full"
                />
                <div>
                  <h3 className="text-xl font-semibold">{mentor.name}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{mentor.expertise}</p>
                </div>
              </div>
              <p className="mt-4 text-gray-700 dark:text-gray-300">{mentor.bio}</p>
              <div className="mt-4 flex items-center space-x-2">
                <Calendar className="w-5 h-5 text-orange-500" />
                <span>{mentor.availability}</span>
              </div>
              <Link
                href={`/mentor/${mentor.id}`}
                className="mt-6 inline-block px-6 py-2 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600"
              >
                {t('findMentor.bookSession')}
              </Link>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
}

export default FindMentor;
