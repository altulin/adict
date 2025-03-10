interface ISpeaker {
  name: string;
  sex: "he/him" | "she/her";
  skill: string;
  img: number;
  isLeader?: boolean;
}

export const speakers: ISpeaker[] = [
  {
    name: "Jesper Kouthoofd",
    sex: "he/him",
    skill: "Head of Design & Chief Executive Officer at Teenage Engineering",
    img: 0,
  },
  {
    name: "Karla Mickens Cole",
    sex: "she/her",
    skill: "Product Designer & Brand Lead at The Browser Company",
    img: 1,
  },
  {
    name: "Jenny Arden",
    sex: "she/her",
    skill: "Chief Design Officer at Zillow",
    img: 2,
  },
  {
    name: "Imran Chaudhri",
    sex: "he/him",
    skill: "President & Chief Designer at Humane",
    img: 3,
  },
  {
    name: "Refik Anadol",
    sex: "he/him",
    skill: "Director at Refik Anadol Studios",
    img: 4,
  },
  {
    name: "Neha Batra",
    sex: "she/her",
    skill: "Vice President of Engineering at Github",
    img: 5,
  },
  {
    name: "Alexis Gay",
    sex: "she/her",
    skill: "Comedian",
    img: 6,
  },
  {
    name: "Josh Wardle",
    sex: "he/him",
    skill: "Artist & Software Engineer at Gremco Industries, Creator of Wordle",
    img: 7,
  },
  {
    name: "Aravind Srinivas",
    sex: "he/him",
    skill: "Chief Executive Officer & Co-Founder at perplexity.ai",
    img: 8,
  },
  {
    name: "Jessica Hische",
    sex: "she/her",
    skill: "Lettering Artist at Jessica Hische Inc.",
    img: 9,
  },
  {
    name: "Claire Vo",
    sex: "she/her",
    skill: "Chief Product Officer at LaunchDarkly",
    img: 10,
  },
  {
    name: "Lenny Rachitsky",
    sex: "he/him",
    skill: "Author at Lenny's Podcast // Lenny's Newsletter",
    img: 11,
  },
  {
    name: "Reginé Gilbert",
    sex: "she/her",
    skill: "James Weldon Johnson Professor at New York University",
    img: 12,
  },
  {
    name: "Andy Allen",
    sex: "he/him",
    skill: "Software Designer at !Boring",
    img: 13,
  },
  {
    name: "Jason Ballard",
    sex: "he/him",
    skill: "CEO & Co-founder at ICON",
    img: 14,
  },
  {
    name: "Saron Yitbarek",
    sex: "she/her",
    skill: "Creator at Not A Designer",
    img: 15,
  },
  {
    name: "Hongyi Li",
    sex: "he/him",
    skill: "Director at Open Government Products",
    img: 16,
    isLeader: true,
  },
  {
    name: "Diana Mounter",
    sex: "she/her",
    skill: "Head of Design at Github",
    img: 17,
  },
  {
    name: "Kevin Systrom",
    sex: "he/him",
    skill: "Former CEO at Instagram, CEO at Artifact",
    img: 18,
    isLeader: true,
  },
  {
    name: "Oliver Sommermann",
    sex: "he/him",
    skill: "User Researcher at Ableton",
    img: 19,
  },
  {
    name: "Pablo Sánchez",
    sex: "he/him",
    skill: "Principal Designer at Ableton",
    img: 20,
  },
  {
    name: "Ovetta Sampson",
    sex: "she/her",
    skill: "Director of UX Machine Learning at Google",
    img: 21,
    isLeader: true,
  },
  {
    name: "Mike Stern",
    sex: "he/him",
    skill: "Design Evangelism Manager at Apple",
    img: 22,
  },
  {
    name: "Linda Dong",
    sex: "she/her",
    skill: "Design Evangelist at Apple",
    img: 23,
  },
];
