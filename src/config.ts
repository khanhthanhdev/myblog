import type { Site, SocialObjects } from "./types";
import type { GiscusProps } from "@giscus/react";
export const SITE: Site = {
  website: "https://khanhthanhdev.me/", // replace this with your deployed domain
  author: "ThanhTran",
  profile: "https://khanhthanhdev.me/",
  desc: "Tran Khanh Thanh portfolio and blog about my learning journey about software engineering and robotics",
  title: "ThanhTran",
  ogImage: "ogImage.jpg",
  lightAndDarkMode: true,
  postPerIndex: 4,
  postPerPage: 3,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
  showArchives: true,
  editPost: {
    url: "https://github.com/khanhthanhdev/myblog/edit/main/content",
    text: "Suggest Changes",
    appendFilePath: true,
  },
  keywords: ["Trần Khánh Thành", "ThanhTran", "Khanhthanhdev", "Tran Khanh Thanh", "thanhkt275", "Tran Khanh Thanh VinUni", "VinUni", "GDGoC VinUni Tran Khanh Thanh"],
};

export const GISCUS: GiscusProps = {
  repo: "khanhthanhdev/myblog",
  repoId: "R_kgDONG0lCA",
  category: "Announcements",
  categoryId: "DIC_kwDONG0lCM4Cj3Hx",
  mapping: "pathname",
  reactionsEnabled: "0",
  emitMetadata: "0",
  inputPosition: "bottom",
  lang: "en",
  loading: "lazy",
};

export const LOCALE = {
  lang: "en", // html lang code. Set this empty and default will be "en"
  langTag: ["en-EN"], // BCP 47 Language Tags. Set this empty [] to use the environment default
} as const;

export const LOGO_IMAGE = {
  enable: false,
  svg: false,
  width: 216,
  height: 46,
};

export const SOCIALS: SocialObjects = [
  {
    name: "Github",
    href: "https://github.com/khanhthanhdev",
    linkTitle: ` ${SITE.title} on Github`,
    active: true,
  },
  {
    name: "Facebook",
    href: "https://github.com/khanhthanhdev",
    linkTitle: `${SITE.title} on Facebook`,
    active: true,
  },
  {
    name: "Instagram",
    href: "https://github.com/khanhthandhev",
    linkTitle: `${SITE.title} on Instagram`,
    active: false,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/khanhthanhdev/",
    linkTitle: `${SITE.title} on LinkedIn`,
    active: true,
  },
  {
    name: "Mail",
    href: "mailto:thanhkt27507@gmail.com",
    linkTitle: `Send an email to ${SITE.title}`,
    active: true,
  },
  {
    name: "HuggingFace",
    href: "https://huggingface.com/thanhkt",
    linkTitle: `${SITE.title} on Hugging Face`,
    active: true,
  },
];
