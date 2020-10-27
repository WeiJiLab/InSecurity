import i18n from "i18next";
import {initReactI18next} from "react-i18next";
import React from "react";

// the translations
// (tip move them in a JSON file and import them)
const resources = {
    en: {
        translation: {
            "HOME": "HOME",
            "Language": "English",
            "Login": "Login",
            "Register": "Register",
            "Search": "Please input something to search."
        }
    },
    zh: {
        translation: {
            "HOME": "首页",
            "Language": "中文",
            "Login": "登录",
            "Register": "注册",
            "Search": "请输入搜索内容."
        }
    }
};

i18n
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
        resources,
        lng: "zh",

        keySeparator: false, // we do not use keys in form messages.welcome

        interpolation: {
            escapeValue: false // react already safes from xss
        }
    });

export default i18n;
