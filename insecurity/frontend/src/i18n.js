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
            "Search": "Please input something to search.",
            "Column": "Column",
            "SecReport": "Security Report",
            "EntpriseService": "Enterprise Service",
            "Activities": "Activities",
            "Featured": "Featured Content",
            "Author": "Author",
            "Hot": "Hot",
            "Recommended": "Recommended",
            "SubscribeNow": "Subscribe Now",
            "NoDisclosureEmail": "We won't disclose your email",
            "OfflineCourseApplication": "BuildSecurityIn offline courses and application portal",
            "ExpertGeneratedContent": "Practices from tech experts at work",
            "EditorGeneratedContent": "Global security news from our editors",
            "WeeklyEssentials": "Weekly Essentials",
            "InputEmail": "Please input your email",
            "YouHaveSubscribed": "You have subscribed.",
            "YouWillGet": "You Will Get"
        }
    },
    zh: {
        translation: {
            "HOME": "首页",
            "Language": "中文",
            "Login": "登录",
            "Register": "注册",
            "Search": "请输入搜索内容.",
            "Column": "专栏",
            "SecReport": "安全报告",
            "EntpriseService": "企业服务",
            "Activities": "活动",
            "Featured": "精选内容",
            "Author": "作者",
            "Hot": "热点",
            "Recommended": "推荐内容",
            "SubscribeNow": "立即订阅",
            "NoDisclosureEmail": "我们不会向任何人泄露您的邮箱信息",
            "OfflineCourseApplication": "BuildSecurityIn 出品的课程和线下活动报名通道",
            "ExpertGeneratedContent": "一线技术专家撰写的实操技术案例",
            "EditorGeneratedContent": "资深编辑编译的全球 网络安全 要闻",
            "WeeklyEssentials": "每周精要",
            "InputEmail": "请输入邮箱",
            "YouHaveSubscribed": "你已订阅.",
            "YouWillGet": "你将获得"
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
