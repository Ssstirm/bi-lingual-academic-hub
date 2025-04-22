
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
  "nav.projects": {
    en: "Projects",
    cn: "项目"
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
  "hero.biography": {
    en: "I am a researcher specializing in Artificial Intelligence and Data Science. My work focuses on developing advanced algorithms for natural language processing and computer vision applications.",
    cn: "我是一名专注于人工智能和数据科学的研究者。我的工作重点是开发用于自然语言处理和计算机视觉应用的高级算法。"
  },
  "hero.currentPosition": {
    en: "Currently working as Associate Professor at University of Science and Technology.",
    cn: "目前在科技大学担任副教授。"
  },
  "hero.experience": {
    en: "Professional Experience",
    cn: "专业经验"
  },
  "hero.education": {
    en: "Education",
    cn: "教育背景"
  },
  "hero.research": {
    en: "Research Interests",
    cn: "研究兴趣"
  },
  
  // Experience Items
  "experience.current": {
    en: "2020 - Present",
    cn: "2020年 - 至今"
  },
  "experience.position1": {
    en: "Associate Professor",
    cn: "副教授"
  },
  "experience.institution1": {
    en: "University of Science and Technology",
    cn: "科技大学"
  },
  "experience.previous1": {
    en: "2015 - 2020",
    cn: "2015年 - 2020年"
  },
  "experience.position2": {
    en: "Assistant Professor",
    cn: "助理教授"
  },
  "experience.institution2": {
    en: "Institute of Advanced Research",
    cn: "高级研究所"
  },
  "experience.previous2": {
    en: "2010 - 2015",
    cn: "2010年 - 2015年"
  },
  "experience.position3": {
    en: "Postdoctoral Researcher",
    cn: "博士后研究员"
  },
  "experience.institution3": {
    en: "National Laboratory of Technology",
    cn: "国家技术实验室"
  },
  
  // Education Items
  "education.phd": {
    en: "2005 - 2010",
    cn: "2005年 - 2010年"
  },
  "education.phdDegree": {
    en: "Ph.D. in Computer Science",
    cn: "计算机科学博士"
  },
  "education.phdInstitution": {
    en: "University of Technology",
    cn: "技术大学"
  },
  "education.masters": {
    en: "2002 - 2005",
    cn: "2002年 - 2005年"
  },
  "education.mastersDegree": {
    en: "M.Sc. in Computer Science",
    cn: "计算机科学硕士"
  },
  "education.mastersInstitution": {
    en: "Institute of Science",
    cn: "科学研究所"
  },
  
  // Research Interests
  "research.ai": {
    en: "Artificial Intelligence: Machine learning algorithms and applications",
    cn: "人工智能：机器学习算法及应用"
  },
  "research.data": {
    en: "Data Science: Big data analytics and knowledge discovery",
    cn: "数据科学：大数据分析和知识发现"
  },
  "research.hci": {
    en: "Human-Computer Interaction: User experience and interface design",
    cn: "人机交互：用户体验和界面设计"
  },
  
  // Projects Section
  "projects.title": {
    en: "Projects",
    cn: "项目"
  },
  "projects.description": {
    en: "Explore my current research projects and areas of focus",
    cn: "探索我当前的研究项目和研究重点"
  },
  "projects.project1.title": {
    en: "Artificial Intelligence Research",
    cn: "人工智能研究"
  },
  "projects.project1.description": {
    en: "Development of advanced AI algorithms for natural language processing and computer vision applications.",
    cn: "开发用于自然语言处理和计算机视觉应用的高级人工智能算法。"
  },
  "projects.project2.title": {
    en: "Data Science Applications",
    cn: "数据科学应用"
  },
  "projects.project2.description": {
    en: "Analysis of large-scale datasets to extract meaningful patterns and insights for decision-making processes.",
    cn: "分析大规模数据集，提取有意义的模式和见解，用于决策过程。"
  },
  "projects.project3.title": {
    en: "Human-Computer Interaction",
    cn: "人机交互"
  },
  "projects.project3.description": {
    en: "Design and evaluation of user interfaces to improve the usability and user experience of digital products.",
    cn: "设计和评估用户界面，以提高数字产品的可用性和用户体验。"
  },
  
  // Publications Section
  "publications.title": {
    en: "Publications",
    cn: "出版物"
  },
  "publications.viewAll": {
    en: "View All Publications",
    cn: "查看所有出版物"
  },
  "publications.pub1.title": {
    en: "Advancing Machine Learning Techniques for Natural Language Processing",
    cn: "推进自然语言处理的机器学习技术"
  },
  "publications.pub1.authors": {
    en: "Your Name, Co-author A, Co-author B",
    cn: "您的名字, 合著者A, 合著者B"
  },
  "publications.pub1.venue": {
    en: "Journal of Artificial Intelligence Research",
    cn: "人工智能研究期刊"
  },
  "publications.pub1.year": {
    en: "2023",
    cn: "2023年"
  },
  "publications.pub2.title": {
    en: "Statistical Analysis of Big Data: Challenges and Opportunities",
    cn: "大数据统计分析：挑战与机遇"
  },
  "publications.pub2.authors": {
    en: "Your Name, Co-author C",
    cn: "您的名字, 合著者C"
  },
  "publications.pub2.venue": {
    en: "International Conference on Data Science",
    cn: "国际数据科学会议"
  },
  "publications.pub2.year": {
    en: "2022",
    cn: "2022年"
  },
  "publications.pub3.title": {
    en: "User Interface Design Principles for Academic Websites",
    cn: "学术网站用户界面设计原则"
  },
  "publications.pub3.authors": {
    en: "Your Name, Co-author D, Co-author E",
    cn: "您的名字, 合著者D, 合著者E"
  },
  "publications.pub3.venue": {
    en: "ACM Conference on Human Factors in Computing Systems",
    cn: "ACM计算系统人因素会议"
  },
  "publications.pub3.year": {
    en: "2021",
    cn: "2021年"
  },
  
  // Contact Section
  "contact.title": {
    en: "Contact",
    cn: "联系方式"
  },
  "contact.info": {
    en: "Contact Information",
    cn: "联系信息"
  },
  "contact.email": {
    en: "Email",
    cn: "电子邮件"
  },
  "contact.emailAddress": {
    en: "your.email@university.edu",
    cn: "your.email@university.edu"
  },
  "contact.office": {
    en: "Office",
    cn: "办公室"
  },
  "contact.officeAddress": {
    en: "Room 123, Computer Science Building\nUniversity of Science and Technology\n123 Academic Street\nCity, State 12345",
    cn: "计算机科学楼123室\n科技大学\n学术街123号\n城市，州/省 12345"
  },
  "contact.hours": {
    en: "Office Hours",
    cn: "办公时间"
  },
  "contact.hoursList": {
    en: "Monday: 10:00 AM - 12:00 PM\nWednesday: 2:00 PM - 4:00 PM",
    cn: "周一：上午10:00 - 中午12:00\n周三：下午2:00 - 下午4:00"
  },
  "contact.connect": {
    en: "Connect",
    cn: "社交媒体"
  },
  "contact.message": {
    en: "Send a Message",
    cn: "发送消息"
  },
  "contact.name": {
    en: "Name",
    cn: "姓名"
  },
  "contact.namePlaceholder": {
    en: "Your Name",
    cn: "您的姓名"
  },
  "contact.emailField": {
    en: "Email",
    cn: "电子邮件"
  },
  "contact.emailPlaceholder": {
    en: "your.email@example.com",
    cn: "your.email@example.com"
  },
  "contact.subject": {
    en: "Subject",
    cn: "主题"
  },
  "contact.subjectPlaceholder": {
    en: "Message Subject",
    cn: "消息主题"
  },
  "contact.message": {
    en: "Message",
    cn: "消息内容"
  },
  "contact.messagePlaceholder": {
    en: "Your message...",
    cn: "您的消息..."
  },
  "contact.send": {
    en: "Send Message",
    cn: "发送消息"
  },
  
  // Footer
  "footer.copyright": {
    en: "All rights reserved.",
    cn: "保留所有权利。"
  },
  "footer.privacy": {
    en: "Privacy Policy",
    cn: "隐私政策"
  },
  "footer.terms": {
    en: "Terms of Use",
    cn: "使用条款"
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
