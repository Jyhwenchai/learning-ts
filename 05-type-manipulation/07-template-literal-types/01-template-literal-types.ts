{

// 模板字面量类型
// 模板文面量类型建立在字符串字面量类型之上，并且可以通过联合扩展成许多字符串
type World = "world";

type Greeting = `hello ${World}`;// type Greeting = "hello world"

// 当在插值位置使用联合时，类型是可以由每个联合成员表示的每个可能的字符串文字的集合
type EmailLocaleIDs = "welcome-email" | "email_heading";
type FooterLocaleIDs = "footer_title" | "footer_sendoff";

type AllLocaleIDs = `${EmailLocaleIDs | FooterLocaleIDs}_id`;	// type AllLocaleIDs = "welcome-email_id" | "email_heading_id" | "footer_title_id" | "footer_sendoff_id";

type Lang = "en" | "ja" | "pt";
 
type LocaleMessageIDs = `${Lang}_${AllLocaleIDs}`;
// type LocaleMessageIDs = "en_welcome_email_id" | "en_email_heading_id" | "en_footer_title_id" | "en_footer_sendoff_id" | "ja_welcome_email_id" | "ja_email_heading_id" | "ja_footer_title_id" | "ja_footer_sendoff_id" | "pt_welcome_email_id" | "pt_email_heading_id" | "pt_footer_title_id" | "pt_footer_sendoff_id"

}