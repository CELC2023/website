import { useI18next } from "gatsby-plugin-react-i18next";

export const localizedPrefix = (link: string) => {
    const {language} = useI18next();

    if(language === 'en') {
      return link;
    } else {
      return `/${language}${link}`
    }
  }