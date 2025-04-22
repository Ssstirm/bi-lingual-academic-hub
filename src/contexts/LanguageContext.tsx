
import React, { createContext, useState, useContext, ReactNode } from "react";

type Language = "en" | "cn";

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => string;
}

const translations = {
  // Navigation
  "nav.home": {
    en: "Home",
    cn: "首页"
  },
  "nav.about": {
    en: "About",
    cn: "关于"
  },
  "nav.research": {
    en: "Research",
    cn: "研究"
  },
  "nav.publications": {
    en: "Publications",
    cn: "出版物"
  },
  "nav.contact": {
    en: "Contact",
    cn: "联系"
  },
  
  // Hero Section
  "hero.greeting": {
    en: "Hello, I'm",
    cn: "你好，我是"
  },
  "hero.title": {
    en: "Academic Researcher",
    cn: "学术研究者"
  },
  "hero.description": {
    en: "Exploring advanced research in [your field]",
    cn: "在[你的领域]探索前沿研究"
  },
  
  // About Section
  "about.title": {
    en: "About Me",
    cn: "关于我"
  },
  "about.bio": {
    en: "I am a researcher specializing in [your specialization]. My work focuses on [brief description of your research focus].",
    cn: "我是一名专注于[你的专业领域]的研究者。我的工作重点是[你的研究重点简述]。"
  },
  "about.currentPosition": {
    en: "Currently working as [your position] at [your institution].",
    cn: "目前在[你的机构]担任[你的职位]。"
  },
  "about.education": {
    en: "Education",
    cn: "教育背景"
  },
  "about.experience": {
    en: "Experience",
    cn: "工作经历"
  },
  
  // Research Section
  "research.title": {
    en: "Research",
    cn: "研究"
  },
  "research.description": {
    en: "My research interests include:",
    cn: "我的研究兴趣包括："
  },
  "research.interest1": {
    en: "[Research Interest 1]",
    cn: "[研究兴趣1]"
  },
  "research.interest2": {
    en: "[Research Interest 2]",
    cn: "[研究兴趣2]"
  },
  "research.interest3": {
    en: "[Research Interest 3]",
    cn: "[研究兴趣3]"
  },
  
  // Publications Section
  "publications.title": {
    en: "Publications",
    cn: "出版物"
  },
  "publications.journal": {
    en: "Journal Articles",
    cn: "期刊论文"
  },
  "publications.conference": {
    en: "Conference Papers",
    cn: "会议论文"
  },
  "publications.book": {
    en: "Books & Chapters",
    cn: "书籍与章节"
  },
  
  // Contact Section
  "contact.title": {
    en: "Contact",
    cn: "联系方式"
  },
  "contact.email": {
    en: "Email",
    cn: "电子邮件"
  },
  "contact.address": {
    en: "Address",
    cn: "地址"
  },
  
  // Footer
  "footer.copyright": {
    en: "© 2025 Academic Homepage. All rights reserved.",
    cn: "© 2025 学术主页。保留所有权利。"
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>("en");

  const t = (key: string): string => {
    if (translations[key as keyof typeof translations]) {
      return translations[key as keyof typeof translations][language];
    }
    return key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
