"use client";

import { motion } from "framer-motion";
import { designSystem } from "@/lib/design-system";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, ExternalLink } from "lucide-react";

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
    photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Nick_Bostrom%2C_Stanford_2006_%28square_crop%29.jpg/400px-Nick_Bostrom%2C_Stanford_2006_%28square_crop%29.jpg",
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
    photo: "https://www.cogsci.uci.edu/~ddhoff/don.jpg",
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
    photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Max_Tegmark.jpg/440px-Max_Tegmark.jpg",
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
    title: "Computer Scientist, MIT",
    photo: "https://m.media-amazon.com/images/S/amzn-author-media-prod/g6tmu4gcrv36c07pi5n8bjjs2g._SX450_.jpg",
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
    photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/David_Chalmers_TASP_2010.jpg/440px-David_Chalmers_TASP_2010.jpg",
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
        amazonUrl: "https://www.amazon.com/dp/039363580X",
      },
    ],
  },
  {
    name: "Bernardo Kastrup",
    title: "Philosopher",
    photo: "https://m.media-amazon.com/images/S/amzn-author-media-prod/lhfcj5tbkqnr8qr96p8bim70l8._SX450_.jpg",
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
    photo: "https://m.media-amazon.com/images/S/amzn-author-media-prod/7gp9a67s2s3a2e18dh3j19odfr._SX450_.jpg",
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
    photo: "https://m.media-amazon.com/images/S/amzn-author-media-prod/fq9uhtk7kgm9r1vp53bsgffj6i._SX450_.jpg",
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
    photo: "https://upload.wikimedia.org/wikipedia/en/thumb/d/d2/Alan_Watts.png/440px-Alan_Watts.png",
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
                    <img
                      src={author.photo}
                      alt={author.name}
                      className="w-[84px] h-[84px] rounded-full object-cover border-2 border-primary/20"
                    />
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
