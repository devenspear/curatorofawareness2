"use client";

import { motion } from "framer-motion";
import { designSystem } from "@/lib/design-system";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, ExternalLink } from "lucide-react";
import Image from "next/image";

interface Book {
  title: string;
  year: string;
  amazonUrl: string;
}

interface Author {
  name: string;
  title: string;
  photo: string;
  keyIdea: string;
  books: Book[];
}

const authors: Author[] = [
  {
    name: "Nick Bostrom",
    title: "Philosopher, Oxford",
    photo: "https://nickbostrom.com/img/press/nick-bostrom-01.jpg",
    keyIdea: "Simulation Argument pioneer",
    books: [
      {
        title: "Superintelligence",
        year: "2014",
        amazonUrl: "https://www.amazon.com/dp/0199678111",
      },
      {
        title: "Anthropic Bias",
        year: "2002",
        amazonUrl: "https://www.amazon.com/dp/0415938589",
      },
    ],
  },
  {
    name: "Donald Hoffman",
    title: "Cognitive Scientist, UC Irvine",
    photo: "https://sites.socsci.uci.edu/~ddhoff/don.jpg",
    keyIdea: "Reality is an interface, not truth",
    books: [
      {
        title: "The Case Against Reality",
        year: "2019",
        amazonUrl: "https://www.amazon.com/dp/0393254690",
      },
    ],
  },
  {
    name: "Max Tegmark",
    title: "Physicist, MIT",
    photo: "https://physics.mit.edu/wp-content/uploads/2021/01/tegmark_max-aspect-ratio-420-334-420x334-c-default.jpg",
    keyIdea: "Mathematical Universe Hypothesis",
    books: [
      {
        title: "Our Mathematical Universe",
        year: "2014",
        amazonUrl: "https://www.amazon.com/dp/0307599809",
      },
      {
        title: "Life 3.0",
        year: "2017",
        amazonUrl: "https://www.amazon.com/dp/1101970316",
      },
    ],
  },
  {
    name: "Rizwan Virk",
    title: "Computer Scientist, ASU/MIT",
    photo: "https://webapp4.asu.edu/photo-ws/directory_photo/rvirk1?size=medium",
    keyIdea: "Video games meet quantum physics",
    books: [
      {
        title: "The Simulation Hypothesis",
        year: "2019",
        amazonUrl: "https://www.amazon.com/dp/1732734422",
      },
      {
        title: "The Simulated Multiverse",
        year: "2021",
        amazonUrl: "https://www.amazon.com/dp/1732734449",
      },
    ],
  },
  {
    name: "David Chalmers",
    title: "Philosopher, NYU",
    photo: "https://consc.net/djc1.jpg",
    keyIdea: "Hard problem of consciousness",
    books: [
      {
        title: "The Conscious Mind",
        year: "1996",
        amazonUrl: "https://www.amazon.com/dp/0195117891",
      },
      {
        title: "Reality+",
        year: "2022",
        amazonUrl: "https://www.amazon.com/dp/0393635805",
      },
    ],
  },
  {
    name: "Bernardo Kastrup",
    title: "Philosopher",
    photo: "https://www.essentiafoundation.org/wp-content/uploads/Bernardo-Kastrup-220x220.jpg",
    keyIdea: "Consciousness is fundamental",
    books: [
      {
        title: "The Idea of the World",
        year: "2019",
        amazonUrl: "https://www.amazon.com/dp/1785357398",
      },
      {
        title: "Why Materialism Is Baloney",
        year: "2014",
        amazonUrl: "https://www.amazon.com/dp/1782793652",
      },
    ],
  },
  {
    name: "Robert Lanza",
    title: "Scientist",
    photo: "https://robertlanza.com/wp-content/uploads/2022/12/1200px-Robert_Lanza_in_laboratory_01-1.png",
    keyIdea: "Life creates the universe",
    books: [
      {
        title: "Biocentrism",
        year: "2009",
        amazonUrl: "https://www.amazon.com/dp/1933771690",
      },
    ],
  },
  {
    name: "Eckhart Tolle",
    title: "Spiritual Teacher",
    photo: "https://eckharttolle.com/wp-content/uploads/2023/05/EckhartTolle3.png",
    keyIdea: "Present-moment awareness",
    books: [
      {
        title: "The Power of Now",
        year: "1997",
        amazonUrl: "https://www.amazon.com/dp/1577314808",
      },
      {
        title: "A New Earth",
        year: "2005",
        amazonUrl: "https://www.amazon.com/dp/0452289963",
      },
    ],
  },
  {
    name: "Alan Watts",
    title: "Philosopher",
    photo: "https://images.squarespace-cdn.com/content/v1/665a1f132e67fe20cb75d316/db89a0e7-11a0-4720-8be6-69bc554db400/LETTERBOX_Alan+With+Mic.jpg",
    keyIdea: "Eastern wisdom for the West",
    books: [
      {
        title: "The Book",
        year: "1966",
        amazonUrl: "https://www.amazon.com/dp/0679723005",
      },
      {
        title: "The Way of Zen",
        year: "1957",
        amazonUrl: "https://www.amazon.com/dp/0375705104",
      },
    ],
  },
];

export function TopAuthorsBooks() {
  return (
    <section className={`${designSystem.spacing.section} relative bg-gradient-to-b from-background via-accent/10 to-background`}>
      <div className={designSystem.spacing.container}>
        <motion.div
          {...designSystem.animations.fadeInUp}
          className="text-center mb-12"
        >
          <h2 className={`${designSystem.typography.h2} mb-3 text-foreground`}>
            Essential Reading
          </h2>
          <p className={`${designSystem.typography.body} text-muted-foreground max-w-2xl mx-auto`}>
            Leading thinkers on simulation theory, consciousness, and reality
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {authors.map((author, index) => (
            <motion.div
              key={author.name}
              {...designSystem.animations.fadeIn}
              transition={{ delay: index * 0.05 }}
            >
              <Card className="bg-card/50 border-border backdrop-blur-sm hover:border-primary/40 transition-all h-full">
                <CardHeader className="pb-3">
                  <div className="flex items-start gap-4">
                    <div className="w-[84px] h-[84px] rounded-full overflow-hidden border-2 border-primary/20 flex-shrink-0">
                      <Image
                        src={author.photo}
                        alt={author.name}
                        width={84}
                        height={84}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <CardTitle className="text-foreground text-lg mb-1">{author.name}</CardTitle>
                      <p className="text-xs text-muted-foreground mb-1">{author.title}</p>
                      <p className="text-xs text-primary italic">{author.keyIdea}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="space-y-2">
                    {author.books.map((book) => (
                      <div
                        key={book.title}
                        className="flex items-center justify-between gap-2 p-2 rounded-md bg-accent/30 hover:bg-accent/50 transition-colors"
                      >
                        <div className="flex items-center gap-2 min-w-0 flex-1">
                          <BookOpen className="w-3 h-3 text-primary flex-shrink-0" />
                          <div className="min-w-0 flex-1">
                            <p className="text-xs text-foreground font-medium truncate">{book.title}</p>
                            <p className="text-xs text-muted-foreground">{book.year}</p>
                          </div>
                        </div>
                        <Button
                          asChild
                          variant="ghost"
                          size="sm"
                          className="h-7 px-2 flex-shrink-0"
                        >
                          <a href={book.amazonUrl} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="w-3 h-3" />
                          </a>
                        </Button>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
