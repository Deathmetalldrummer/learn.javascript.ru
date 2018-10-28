var coursesFeedbackList = function(t) {
var e = {};
function n(r) {
if (e[r]) return e[r].exports;
var o = e[r] = {
i: r,
l: !1,
exports: {}
};
return t[r].call(o.exports, o, o.exports, n), o.l = !0, o.exports;
}
return n.m = t, n.c = e, n.d = function(t, e, r) {
n.o(t, e) || Object.defineProperty(t, e, {
enumerable: !0,
get: r
});
}, n.r = function(t) {
"undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
value: "Module"
}), Object.defineProperty(t, "__esModule", {
value: !0
});
}, n.t = function(t, e) {
if (1 & e && (t = n(t)), 8 & e) return t;
if (4 & e && "object" == typeof t && t && t.__esModule) return t;
var r = Object.create(null);
if (n.r(r), Object.defineProperty(r, "default", {
enumerable: !0,
value: t
}), 2 & e && "string" != typeof t) for (var o in t) n.d(r, o, function(e) {
return t[e];
}.bind(null, o));
return r;
}, n.n = function(t) {
var e = t && t.__esModule ? function() {
return t.default;
} : function() {
return t;
};
return n.d(e, "a", e), e;
}, n.o = function(t, e) {
return Object.prototype.hasOwnProperty.call(t, e);
}, n.p = "/pack/", n(n.s = 385);
}({
0: function(t, e, n) {
"use strict";
t.exports = {
lang: "ru",
currency: {
code: "RUB",
sign: "₽"
},
env: "production",
ordersMail: "orders@javascript.info",
providers: [ {
name: "Facebook",
id: "facebook"
}, {
name: "Google+",
id: "google"
}, {
name: "Вконтакте",
id: "vkontakte"
}, {
name: "Github",
id: "github"
}, {
name: "Яндекс",
id: "yandex"
} ],
stripeKey: "pk_live_ukCHHaAAUHELtXYFa9EwbROW",
automationGhGroup: "js-tasks-ru"
};
},
1: function(t, e, n) {
"use strict";
const r = new (n(5))("en");
let o = console.error;
function i(t) {
return r.hasPhrase(a, t) || o("No such phrase", t), r.t(a, ...arguments);
}
t.exports = i;
const a = n(0).lang;
"en" !== a && r.setFallback(a, "en"), r.add = ((...t) => r.addPhrase(a, ...t)), 
i.i18n = r;
},
10: function(t, e, n) {
"use strict";
t.exports = function() {
let t = document.cookie.match(/XSRF-TOKEN=([\w-]+)/);
return t ? t[1] : null;
};
},
11: function(t, e, n) {
var r = {
"./ru.yml": 12
};
function o(t) {
var e = i(t);
return n(e);
}
function i(t) {
var e = r[t];
if (!(e + 1)) {
var n = new Error("Cannot find module '" + t + "'");
throw n.code = "MODULE_NOT_FOUND", n;
}
return e;
}
o.keys = function() {
return Object.keys(r);
}, o.resolve = i, t.exports = o, o.id = 11;
},
12: function(t, e) {
t.exports = {
site: {
privacy_policy: "политика конфиденциальности",
terms: "пользовательское соглашение",
gdpr_dialog: {
title: "Этот сайт использует cookie",
text: 'Мы используем браузерные технологии, такие как cookie и local storage для хранения ваших предпочтений. Вы принимаете <a href="/privacy">политику конфиденциальности</a> и <a href="/terms">соглашение пользователя</a>?',
accept: "Принять",
cancel: "Отмена"
},
toolbar: {
lang_switcher: {
cta_text: 'Мы хотим сделать этот проект с открытым исходным кодом доступным для людей во всем мире. Пожалуйста, <a href="https://github.com/iliakan/javascript-tutorial-en" rel="noopener noreferrer" target="_blank">помогите нам перевести</a> это руководство на свой язык',
footer_text: "количество контента, переведенное на соотвествующий язык",
old_version: "Опубликована полная, но предыдущая версия учебника."
},
logo: {
normal: {
svg: "sitetoolbar__logo_ru.svg",
width: 171
},
"normal-white": {
svg: "sitetoolbar__logo_ru-white.svg"
},
small: {
svg: "sitetoolbar__logo_small_ru.svg",
width: 80
},
"small-white": {
svg: "sitetoolbar__logo_small_ru-white.svg"
}
},
sections: [ {
slug: "tutorial",
url: "/",
title: "Учебник"
}, {
slug: "courses",
title: "Курсы"
}, {
url: "https://javascript.ru/forum/",
title: "Форум"
}, {
url: "https://es5.javascript.ru",
title: "ES5"
}, {
slug: "quiz",
title: "Тесты знаний"
}, {
slug: "jobs",
title: "Стажировки"
} ],
buy_ebook_extra: "Купить",
buy_ebook: "EPUB/PDF",
search_placeholder: "Искать на Javascript.ru",
search_button: "Найти",
public_profile: "Публичный профиль",
account: "Аккаунт",
notifications: "Уведомления",
admin: "Админ",
logout: "Выйти"
},
sorry_old_browser: "Извините, IE<10 не поддерживается, пожалуйста используйте более новый браузер.",
contact_us: "связаться с нами",
about_the_project: "о проекте",
ilya_kantor: "Илья Кантор",
comments: "Комментарии",
loading: "Загружается...",
search: "Искать",
share: "Поделиться",
read_before_commenting: "перед тем как писать…",
"tablet-menu": {
choose_section: "Выберите раздел",
search_placeholder: "Поиск в учебнике",
search_button: "Поиск"
},
comment: {
help: [ "Приветствуются комментарии, содержащие дополнения и вопросы по статье, и ответы на них.", "Для одной строки кода используйте тег <code>&lt;code&gt;</code>, для нескольких строк кода&nbsp;&mdash; тег <code>&lt;pre&gt;</code>, если больше 10 строк&nbsp;&mdash; ссылку на песочницу (<a href='http://plnkr.co/edit/?p=preview'>plnkr</a>, <a href='http://jsbin.com'>JSBin</a>, <a href='http://codepen.io'>codepen</a>…)", "Если что-то непонятно в статье&nbsp;&mdash; пишите, что именно и с какого места." ]
},
meta: {
description: "Современный учебник JavaScript, начиная с основ, включающий в себя много тонкостей и фишек JavaScript/DOM."
},
edit_on_github: "Редактировать на Github",
error: "ошибка",
close: "закрыть",
hide_forever: "не показывать",
hidden_forever: "Эта информация больше не будет выводиться."
}
};
},
13: function(t, e, n) {
var r = {
"./ru.yml": 14
};
function o(t) {
var e = i(t);
return n(e);
}
function i(t) {
var e = r[t];
if (!(e + 1)) {
var n = new Error("Cannot find module '" + t + "'");
throw n.code = "MODULE_NOT_FOUND", n;
}
return e;
}
o.keys = function() {
return Object.keys(r);
}, o.resolve = i, t.exports = o, o.id = 13;
},
14: function(t, e) {
t.exports = {
server_connection_error: "Ошибка связи с сервером.",
server_request_timeout: "Превышено максимально допустимое время ожидания ответа от сервера.",
request_aborted: "Запрос был прерван.",
no_response: "Не получен ответ от сервера.",
server_error: "Ошибка на стороне сервера (код #{status}), попытайтесь позднее.",
invalid_format: "Некорректный формат ответа от сервера."
};
},
2: function(t, e, n) {
"use strict";
Object.defineProperty(e, "__esModule", {
value: !0
});
let r = n(3);
e.init = function(t) {
window.notificationManager || (window.notificationManager = new class {
constructor(t = {}) {
this.notifications = [], this.verticalSpace = t.verticalSpace || 8;
}
register(t) {
this.notifications.unshift(t), setTimeout(() => this.recalculate(), 20);
}
unregister(t) {
let e = this.notifications.indexOf(t);
this.notifications.splice(e, 1), this.recalculate();
}
recalculate() {
let t = this.verticalSpace;
this.notifications.forEach(e => {
e.top = t, t += e.height + this.verticalSpace;
});
}
}(t));
};
class o {
constructor(t, e, n) {
let r = `<div class="notification notification_popup notification_${e}">\n    <div class="notification__content">${t}</div>\n    <button title="Закрыть" class="notification__close"></button></div>`;
switch (document.body.insertAdjacentHTML("beforeEnd", r), this.elem = document.body.lastElementChild, 
n) {
case void 0:
this.timeout = this.TIMEOUT_DEFAULT;
break;

case "slow":
this.timeout = this.TIMEOUT_SLOW;
break;

case "fast":
this.timeout = this.TIMEOUT_FAST;
break;

default:
this.timeout = n;
}
window.notificationManager.register(this), this.setupCloseHandler(), this.setupCloseTimeout();
}
get TIMEOUT_DEFAULT() {
return 3e3;
}
get TIMEOUT_SLOW() {
return 5e3;
}
get TIMEOUT_FAST() {
return 1500;
}
close() {
this.elem.parentNode && (this.elem.remove(), window.notificationManager.unregister(this));
}
setupCloseHandler() {
this.delegate(".notification__close", "click", () => this.close());
}
setupCloseTimeout() {
this.timeout && setTimeout(() => this.close(), this.timeout);
}
get height() {
return this.elem.offsetHeight;
}
set top(t) {
this.elem.style.transform = "translateY(" + t + "px)";
}
}
r.delegateMixin(o.prototype);
e.Info = class extends o {
constructor(t, e) {
super(t, "info", e);
}
};
e.Warning = class extends o {
constructor(t, e) {
super(t, "warning", e);
}
};
e.Success = class extends o {
constructor(t, e) {
super(t, "success", e);
}
};
class i extends o {
constructor(t, e) {
super(t, "error", e);
}
get TIMEOUT_DEFAULT() {
return 5e3;
}
}
e.Error = i, e.Error = i;
},
23: function(t, e, n) {
var r = {
"./cert/ru.yml": 25,
"./email/ru.yml": 26,
"./feedback/ru.yml": 27,
"./frontpage/ru.yml": 28,
"./groups/ru.yml": 29,
"./models/ru.yml": 30,
"./ru.yml": 24,
"./teacher/ru.yml": 31
};
function o(t) {
var e = i(t);
return n(e);
}
function i(t) {
var e = r[t];
if (!(e + 1)) {
var n = new Error("Cannot find module '" + t + "'");
throw n.code = "MODULE_NOT_FOUND", n;
}
return e;
}
o.keys = function() {
return Object.keys(r);
}, o.resolve = i, t.exports = o, o.id = 23;
},
24: function(t, e) {
t.exports = {
courses: "Курсы",
by_user: {
title: "Описание курса",
info: "Инструкции по настройке окружения",
slack_logs: "Логи slack чата",
jb: "Скидка на редакторы Jetbrains",
ical: "Расписание в формате iCal",
tasklist: "Задачник",
materials: "Материалы для обучения",
participants: "Анкеты участников",
participants_json: "JSON участников (для CORS)"
},
group_feedback_list: {
plural_feedback: "отзыв,отзыва,отзывов"
},
group_feedback_edit: {
no_participant: "Оставлять отзыв могут только участники группы.",
no_rights: "Не хватает прав",
title: "Отзыв",
public_feedback: "Ваш отзыв успешно сохранен. При желании, вы можете поделиться им в соц сетях.",
private_feedback: "Ваш отзыв успешно сохранен. Он будет виден только нам.",
rate_course: "Поставьте, пожалуйста, курсу оценку.",
missing_feedback_text: "Вы забыли написать текст отзыва."
},
group_feedback_show: {
private_feedback: "Отзыв не публичный",
title: "Отзыв",
head_title: "Отзыв на",
comment_saved: "Комментарий сохранён",
comment_save_error: "Не получилось сохранить комментарий",
edit: "редактировать"
},
group_finish: "Группа #{title} успешно завершена.",
group_materials: {
title: "Материалы для обучения",
added_with_notifications: "Материал добавлен, уведомления разосланы.",
added_wo_notifications: "Материал добавлен, уведомления НЕ рассылались.",
email_subject: "Добавлены материалы курса",
remove_file: "Удалить файл",
file_removed: "Файл удалён.",
settings_saved: "Настройка сохранена."
},
group_materials_download: {
invalid_link: "Ссылка неверна. Возможно, этот материал был добавлен по ошибке и позже удалён из преподавателем."
},
group_slack_register: {
already_slack_user: "Пользователь с адресом #{email} уже зарегистрирован в Slack.",
user_invited: "Приглашение отправлено на адрес #{email}."
},
group_slack_invite: {
no_target: "Не участник и не преподаватель",
no_slack_user: "Пользователь с адресом #{email} не зарегистрирован в Slack, сначала запросите приглашение.",
no_slack_user_old: 'Этот пользователь не зарегистрирован в Slack. Сначала зарегистрируйтесь на <a href="#{slack_url}">#{slack_url}</a> с email #{email}.',
user_added: "Пользователь #{email} приглашён в slack-канал #{groupSlug}."
},
participants: {
data_updated: "Данные обновлены.",
fix_errors: "Исправьте, пожалуйста, ошибки."
},
invite: {
order: "Заказ #{order}",
success: "Поздравляем, вы присоединились к курсу. Ниже, рядом с курсом, вы найдёте инструкцию.",
already_accepted_title: "Это приглашение уже принято",
already_accepted: "Это приглашение уже принято. Зайдите в учётную запись участника для доступа к курсу.",
outdated_link_title: "Ссылка устарела",
outdated_link: 'Извините, ссылка по которой вы перешли, устарела. Если у вас возникли какие-либо вопросы – пишите на <a href="mailto:#{email}">#{email}</a>',
already_added: "Вы уже участник курса. Ниже, рядом с курсом, вы найдёте инструкцию.",
choose_country: " выберите страну ",
details_form: {
title: "Анкета участника",
was_logged_in: "Вы вошли на сайт под пользователем #{name}",
first_name: "Имя *",
surname: "Фамилия *",
photo: "Фото",
photo_upload: "Загрузить новое фото",
country: "Страна *",
city: "Город",
occupation: "Область работы",
occupation_note: "Кем или в какой области работаете (кратко)?",
social_note: "Профиль в соц. сети или личная страница, где можно узнать о вашей профессиональной деятельности.",
purpose: "С какой целью записались на курс?",
wishes: "Ваши пожелания по курсу?",
submit: "Отправить"
},
signup_form: {
signup_needed: "Для продолжения вам необходимо зарегистрироваться.",
username: "Имя пользователя",
password: "Пароль",
submit: "Зарегистрироваться"
}
},
signup: {
title: "Заказ № #{order}",
amount: "Стоимость",
no_such_group: "Нет такой группы.",
signup_finished_title: "Запись в эту группу завершена",
signup: "Запись на курс",
signup_finished: 'Запись в эту группу завершена. Перейдите на <a href="/courses/#{slug}">страницу курса</a>, чтобы увидеть открытые группы.',
signup_title: "Регистрация\n #{title}",
tutorial: "Учебник",
courses: "Курсы",
choose_group: "Выберите, пожалуйста, группу.",
plural_human: "человека,человек,человек",
receiptTitle: "Участие в курсе для #{count} #{people}",
email_subject: "Заказ #{order}",
payment_failed: "Оплата не прошла, попробуйте ещё раз.",
questions: 'По вопросам, касающимся оплаты, пишите на <a href="mailto:#{ordersMail}">#{ordersMail}</a>.',
contact_info: "Контактная информация:",
payment: "Оплата:",
payment_succeed: "Осуществлена успешно",
payment_pending: "Ожидается подтверждение",
thanks_for_order: "Спасибо за заказ!",
confirmation: "В ближайшее время вам придёт уведомление на адрес #{email}",
click_to_join_group: 'Перейдите в раздел <a href="#{url}/courses">Курсы</a> вашей учетной записи, чтобы присоединиться к группе.',
edit_participants: 'Отредактировать данные других участников можно в разделе <a href="#{url}/orders">Заказы</a> учетной записи. Им также придёт приглашение.',
questions_after: 'Если у вас возникли какие-либо вопросы, присылайте их на <a href="mailto:#{email}">#{email}</a>.',
teacher: "Ведущий",
seats_pluralize: "место,места,мест",
seats_left: "Осталось #{seats} #{seats_pluralized}",
seats_limited: "Количество мест ограничено",
signup_button: "Записаться",
subscribe: "Подписаться",
subscribe_other: [ "Вы также можете", "подписаться", "на уведомления о наборе новых групп по этой программе" ],
confirmation_email: "На ваш email придёт письмо с информацией о дате и деталях программы.",
this_course: "Этот курс",
conducted_plural: "ведут:",
conducted_single: "ведёт:"
},
feedback_loader: {
no_feedback: "Отзывов пока нет."
},
photo_load_widget: {
wrong_format: "Неверный тип файла или изображение повреждено."
},
participant_item: {
participant: "Участник",
invalid_email: "введите корректный email"
},
comment_form: {
submit: "Опубликовать",
cancel: "Отмена"
},
admin: {
no_such_order: "Нет такого заказа.",
no_such_group: "Нет такого заказа на курс",
no_such_file: "Нет такого файла",
transfer_participant: "Вы переведены в группу #{title}",
transfer_succeed_notified: "Перевод завершён, уведомление отослано.",
transfer_succeed_not_notified: "Перевод завершён, уведомление НЕ отсылалось.",
participant_deducted: "Участник отчислен: #{email}",
document_uploaded: "Администратор загрузил документы к заказу #{order}"
},
course: {
code_discount: "Скидка предоставлена по коду."
},
patch: {
information_updated_notified: "Информация обновлена, приглашения высланы на адреса: #{emails}.",
information_updated_not_notified: "Информация об участниках обновлена."
},
chat_logs: {
title: "Логи группового чата",
timeframe_from: "Временной диапазон c",
timeframe_to: "по",
apply: "Применить"
},
contacts: {
title: "Контактная информация",
note: "Оставьте ваши контактные данные, чтобы мы могли связаться с вами в случае необходимости",
name_surname: "Имя и Фамилия:",
phone: "Телефон:",
data_secured: "Ваши данные в безопасности",
personal_info: "Никакие ваши личные данные не будут переданы третьим лицам, кроме как по вашему желанию или для целей выполнения заключенного с вами договора.",
save_and_continue: "Сохранить и продолжить"
},
grayed_list: {
contact_info: "Контактная информация",
payment: "Оплата",
confirmation: "Подтверждение"
},
participant_register: {
title: "Места и участники",
participants_count: "Количество мест",
only_one_place: "есть только 1 место, извините",
enter_count: "введите значение от 1 до #{max}",
already_participant: "Я являюсь участником",
no: "НЕТ",
yes: "ДА",
amount: "Стоимость",
add_participants: "Указать участников",
add_later: "(это можно сделать позже)",
save_and_continue: "Сохранить и продолжить"
},
payment: {
title: "Оплата",
do_not_pay_twice: "Не оплачивайте дважды. Меняйте метод оплаты лишь если уверены, что оплата не произошла.",
terms_accept: 'Регистрируясь на курсы, вы соглашаетесь с <a href="/courses/offer.ru.pdf" target="_blank">договором оферты</a>.',
questions: 'Если у вас возникли какие-либо вопросы, присылайте их на <a href="mailto:#{ordersMail}">#{ordersMail}</a>.',
goto_payment: "Перейти к оплате"
},
participant_info: {
country: "Страна",
city: "Город",
about_link: "Ссылка на профиль",
occupation: "Область работы",
purpose: "С какой целью записались на курс?",
wishes: "Ваши пожелания по курсу"
},
guarantee: {
title: "Гарантия",
description: '<ul>\n  <li>Если объяснения будут вам непонятны</li>\n  <li>Если курсы не дадут вам новых знаний и умений</li>\n  <li>Если вы не сможете подключиться к системе онлайн-обучения</li>\n</ul> <p>…то вы сможете получить деньги назад.</p>\n<p>Для этого достаточно не позже окончания первой недели курса <a href="mailto:help@javascript.ru">написать</a>, указав причину из этого списка и что именно вас не устраивает, и тогда ваше участие будет прекращено, а вы получите деньги обратно, удобным для вас способом.</p>\n'
},
additional_information: "Дополнительная информация",
back_to_all: "Все курсы",
create_order: {
recording_finished: "Запись в эту группу завершена, извините.",
no_seats: "Извините, в этой группе уже нет мест.",
seats_limit: "Извините, уже нет такого количества мест. Уменьшите количество участников до #{max}.",
no_contact_person: "Не указано контактное лицо.",
no_participants: "Отсутствуют участники.",
not_authorized: "Вы не авторизованы.",
title_check_prefix: "Оплата за обучение на курсе:"
},
invite_email_subject: "Приглашение на курс, в группу #{group}",
invite_remind_email_subject: "#{group} – вы не присоединились к группе",
request_notification: "Вы можете запросить уведомление:",
promo_video: {
text: "Обзор курса"
},
tasklist: {
module_theory: "Теория модуля",
module_tasks: "Задачи модуля",
tasks: {
title: "Задачи",
solved: "Решена",
no_hints: "без подсказок",
with_hints: "с подсказкой",
add_solution: "Добавить",
view_solution: "Перейти к своему решению",
get_default_solution: "Получить готовое решение",
view_default_solution: "Посмотреть готовое решение"
},
filter: {
all: "Все",
added: "Добавленные",
new: "Новые",
solved: "Решенные"
}
}
};
},
25: function(t, e) {
t.exports = {
line1: "Настоящим удостоверяется, что с #{dateStart} по #{dateEnd}",
line2: "прошёл(а) обучение по программе",
no_user: "Нет такого пользователя",
no_participant: "Нет такого участника"
};
},
26: function(t, e) {
t.exports = {
invite: {
invitation: "Приглашение на курс",
seat_has_been_reserved: "На сайте javascript.ru была оформлена запись для вас на курс #{title}.",
click_to_join: ' Перейдите по ссылке <a href="#{link}">#{link}</a>, чтобы присоединиться к группе.',
auto_login: "При этом вы автоматически будете залогинены на сайте.",
contact_person: "Контактное лицо, указанное в записи: #{name}.",
questions: "Если возникнут какие-либо вопросы – вы всегда можете ответить на это письмо."
},
invite_remind: {
title: "Присоединитесь, пожалуйста, к группе",
hello: "Здравствуйте!",
still_not_joined: "Вы – в списке участников, но до сих пор не присоединились к группе #{title}.",
join_for: "Это нужно сделать, чтобы вы могли участвовать и получать материалы группы.",
click_to_join: 'Присоединиться к группе можно по ссылке <a href="#{link}">#{link}</a>.',
questions: "Если возникнут какие-либо вопросы – вы можете ответить на это письмо."
},
materials: {
title: "Уведомление о материалах курса",
materials_added: 'На страницу <a href="#{link}">#{link}</a> добавлены материалы.',
click_to_download: 'Вы можете скачать файл по прямой ссылке (если залогинены на сайте): <a href="#{fileLink}">#{fileTitle}</a>.'
},
move: {
title: "Оповещение о переводе",
hello: "Здравствуйте!",
you_were_moved: 'Вы были переведены из группы "#{oldGroup}" в группу "#{newGroup}".',
questions: "Если возникнут какие-либо вопросы – вы можете ответить на это письмо."
},
order_cancel: {
subject: "[Курсы, система регистрации] Отмена заказа #{order.number} на сайте #{host}",
title: "Ваш заказ #{number} аннулирован по истечению времени",
order_cancelled: "Ваш заказ на Javascript.ru под номером #{number} автоматически аннулирован",
group_start_soon: "&nbsp;в связи со скорым началом обучения, ввиду отсутствия информации о платеже.",
payment_expired: "&nbsp;по истечению времени ожидания, ввиду отсутствия информации о платеже.",
duplicate: "У вас есть другой, оплаченный, заказ под номером #{number} в ту же группу, так что, вероятно, аннулирован лишний, дублирующий, заказ.",
list_orders: "Список активных заказов доступен в личном кабинете:&nbsp;",
need_login: "&nbsp;(нужно авторизоваться на сайте).",
already_payed_or_soon: "Если вы оплачивали этот заказ или собираетесь это сделать сегодня – ответьте на это письмо.",
already_payed: "Если вы оплачивали этот заказ или собираетесь это сделать – ответьте на это письмо.",
info: "Автоматическая отмена неоплаченных заказов предназначена для удаления несостоявшихся заказов."
},
payment_confirmation: {
title: "Подтверждение оплаты",
payment_confirmed: "Подтверждаем получение оплаты за заказ #{number}.",
participation_confirmed: "Ваша запись одобрена",
free_participation: "Ваша запись без оплаты одобрена.",
no_participants: 'Вы не указали участников. Это можно сделать в разделе учётной записи <a href="#{profileOrdersUrl}">Заказы</a>, в деталях заказа.',
is_participant: 'Перейдите по ссылке <a href="#{orderUserInviteLink}">#{orderUserInviteLink}</a>, чтобы присоединиться к группе.',
confirmation_email: "Приглашённые вами участники также получат письмо на электронную почту с предложением присоединиться. Письмо придёт с адреса orders@javascript.ru.",
questions: "Если возникнут какие-либо вопросы – вы всегда можете ответить на это письмо."
}
};
},
27: function(t, e) {
t.exports = {
title: "Отзыв о курсе\n #{title}",
title_all: "Отзывы о курсе\n #{title}",
grades: {
1: "Плохо",
2: "Так себе",
3: "Нормально",
4: "Хорошо",
5: "Отлично"
},
recommend_text: "Оставивших этот отзыв рекомендуют этот курс",
recommend_text_frontpage: "Пользователей рекомендуют этот курс",
all_feedbacks: "Все отзывы о курсе",
feedback_cut: "весь отзыв",
page: {
recommend: 'Рекомендует курс "#{title}"',
course: "Курс",
teacher: "Преподаватель",
edit: "редактировать",
share: "Поделиться"
},
form: {
grade: "Как вы в целом оцениваете курс?*",
recommend: "Порекомендовали бы вы этот курс другим?*",
recommend_yes: "Да",
recommend_no: "Нет",
feedback: "Отзыв*",
feedback_placeholder: "Несколько слов о том, насколько полезным курс оказался для вас, доступно ли излагается материал, устраивает ли квалификация ведущего и т.д.",
is_public: "Публичный отзыв",
is_public_note: "(будет опубликован на javascript.ru)",
edit: "Редактировать",
name: "Имя",
photo: "Фото",
photo_upload: "Загрузить новое фото",
country: "Страна",
city: "Город",
occupation: "Область работы",
social: "Профиль в соц. сети или личная страница, где можно узнать о вашей профессиональной деятельности",
social_note: "Эта ссылка будет доступна только в контексте вашего отзыва. пожалуйста, укажите её.",
submit: "Отправить"
},
list: {
policy: "Политика отзывов javascript.ru",
policy_list: 'Показываются все опубликованные отзывы, даже если оценка нам "не нравится".\n Отзывы показываются "как есть", не модерируются, если нет нарушения правил сайта и курса (нецензурная лексика и др).\n Отзыв может оставить только участник курса, после прохождения.'
},
filter: {
teachers: "все преподаватели",
all: "с любой оценкой",
grade: "с оценкой"
}
};
},
28: function(t, e) {
t.exports = {
title: "Курсы Javascript",
description: "Здесь находятся «правильные» курсы по профессиональному Javascript, цель которых — научить думать на Javascript, писать просто, быстро и красиво.\n",
opened_courses: "Перейти к списку открытых курсов",
people_talk_about: "Что говорят о курсах люди",
features: [ {
name: "quality",
title: "Качество",
text: "Это самое главное. Мы изучаем разработку на профессиональном уровне"
}, {
name: "online",
onclick: "document.getElementById('online').checked = true",
title: "Дистанционность",
text: "На практике это оказывается удобнее, чем очные курсы"
}, {
name: "teachers",
title: "Поддержка",
text: "Вы получите советы по развитию именно для вас"
}, {
name: "result",
title: "Результат",
text: "Цель курсов - получить конкретные результаты в плане знаний и умений"
}, {
name: "guarantee",
title: "Гарантия",
text: "Возврат денег, если что-то не так"
} ],
program: "Программа курсов и запись",
opinions: "Мнение профессионалов",
ongoing: "Идёт набор в группы",
teachers_title: "Преподаватель,Преподаватели,Преподаватели",
teachers_description: "Курсы проводятся только опытными и проверенными профессионалами. Каждый преподаватель обладает как практическими, так и теоретическими знаниями, приобретёнными за годы работы в сфере веб-разработки.\n",
phone_toggler: "Информация о ведущем и особенностях курсов.",
learn_more: "Подробнее",
faq: {
title: "Часто задаваемые вопросы",
another_question: 'У вас другой вопрос? Напишите его в комментариях внизу этой страницы или мне на почту <a href="mailto:help@javascript.ru">help@javascript.ru</a> (проверяется регулярно), а если совсем срочно&nbsp;— по телефону +7-903-5419441.',
old_comments: 'Почитать предыдущие комментарии к этой странице можно в <a href="https://javascript.ru/courses">старом движке</a>.'
},
participant_logos: {
title: "У нас обучались",
description: "Мастер-классы для профессионалов в области JavaScript проводятся примерно с 2006 года, а курсы – с 2011 года. За это время обучились тысячи человек из сотен компаний, всех их перечислить сложно. В частности, проходили обучение сотрудники этих компаний:\n",
notes: "За время обучения были оставлены сотни отзывов, некоторые из которых вы можете видеть выше на этой странице, а также, в более подробном виде, на странице курса и в профилях преподавателей. Мнение о курсах профессионалов вы также можете увидеть выше.\n"
},
professionals: {
title: "Мнение профессионалов",
articles: [ {
userpic: "/img/courses/dmitryx.jpg",
username: "Дмитрий Поляков",
linkedin_link: "https://www.linkedin.com/in/dmitryx",
about: 'Frontend-разработчик в <a href="http://google.com">Google</a>, делает <a href="http://youtube.com">Youtube</a>, общий опыт работы архитектором и ведущим разработчиком различных проектов более 15 лет.\n',
feedback: "Участвовал в мастер-классах Ильи несколько раз, узнал много полезного. Очень нравится профессиональное и отлично организованное изложение и структуризация материала, приводимые примеры и паттерны применения в настоящей разработке. Считаю Илью одним из лучших JS разработчиков и ведущих. Крайне рекомендую курсы для тех, кто хочет отточить свои знания и стать профессионалом.\n"
}, {
userpic: "/img/courses/andrewsumin.jpg",
username: "Андрей Сумин",
linkedin_link: "https://ru.linkedin.com/in/andrewsumin",
about: 'Главный по Frontend в компании <a href="http://mail.ru">Mail.ru</a>, также принимал участие в таких проектах как <a href="http://hh.ru">hh.ru</a> и <a href="http://yandex.ru">yandex.ru</a>.\n',
feedback: "В далёком 2006 году, будучи frontend-разработчиком в Яндекс, я посетил курс Ильи. Уже тогда его занятия отличались сильной базой, подробным разбором важных и сложных аспектов и грамотной организацией. Я искренне рекомендую курсы Ильи всем кто хочет знать всё о языке JavaScript.\n"
}, {
userpic: "/img/courses/tyv.jpg",
username: "Юрий Ткаченко",
linkedin_link: "https://ua.linkedin.com/in/tkachenkoyuri",
about: 'Frontend-разработчик, в <a href="http://yandex.ru">Яндекс</a> 3 года руководил одной из команд верстальщиков, общий опыт Frontend-разработки более 10 лет .\n',
feedback: "Во время работы руководителем одной из групп верстки в Яндексе передо мной встала задача повышения квалификации большой команды верстальщиков. После длительного анализа я выбрал курс Ильи Кантора и остался очень доволен результатом, считаю этот курс лучшим из существующих на русском языке.\n"
} ]
}
};
},
29: function(t, e) {
t.exports = {
dropbox_share: {
enter_email: "Введите ниже email, с которым вы зарегистрированы на Dropbox. Вам придёт инвайт (функциональность в бете).\n",
by_default: '"По умолчанию" в поле введён ваш email на этом сайте, но, если вы уже используете Dropbox с другим email, то можете его поменять.\n',
request_access: "Запросить доступ к каталогу",
no_dropbox: "У этой группы не включён Dropbox",
success: "Готово, проверьте, в Dropbox должен быть инвайт. Он также придёт на email."
},
materials: {
notify_me: "Уведомлять меня по email о появлении материалов.",
title: "Добавление материалов",
filename: "Имя файла, по времени занятия:&nbsp;&nbsp;",
comment: "Комментарий (опционально)",
notifications: "Рассылать уведомления",
submit: "Добавить",
serial_number: "Серийный номер для видео:",
name: "Название",
size: "Размер",
added_date: "Добавлено",
no_materials: "Материалов пока нет, будут доступны позже.",
chat_logs: "Логи чата"
},
slack_logs: {
title: "Логи группового чата"
},
tasks: {
loading: "Загрузка...",
title: "Задачи для самостоятельного решения",
solved: "Решено",
solved_from: "из",
repository: "Личный репозиторий"
}
};
},
3: function(t, e, n) {
"use strict";
function r(t, e, n, r, o) {
t.addEventListener(n, function(t) {
let n = function(t, e) {
let n = t.target;
for (;n; ) {
if (n.matches(e)) return n;
if (n == t.currentTarget) break;
n = n.parentElement;
}
return null;
}(t, e);
t.delegateTarget = n, n && r.call(o || this, t);
});
}
r.delegateMixin = function(t) {
t.delegate = function(t, e, n) {
r(this.elem, t, e, n, this);
};
}, t.exports = r;
},
30: function(t, e) {
t.exports = {
course_feedback: {
missing_score: "Не стоит оценка.",
missing_text: "Отсутствует текст отзыва.",
missing_country: "Страна не указана."
},
course_group: {
invalid_timeStart: "Некорректное время начала",
invalid_timeEnd: "Некорректное время конца"
},
course_participant: {
missing_name: "Имя отсутствует.",
invalid_name: "Имя дожно состоять из одного слова.",
missing_surname: "Фамилия отсутствует.",
invalid_surname: "Фамилия должна состоять из одного слова.",
missing_country: "Страна не указана.",
invalid_url: "Некорректный URL страницы."
}
};
},
31: function(t, e) {
t.exports = {
group_start_soon: "Скоро группа: #{title}",
reminder: "Напоминание #{title}",
no_such_course: "Нет такого курса",
not_a_teacher: "Вы не ведёте данный курс",
days: [ "", "пн", "вт", "ср", "чт", "пт", "сб", "вс" ],
group_exists: "Группа #{slug} уже существует"
};
},
385: function(t, e, n) {
"use strict";
n(4);
let r = n(89), o = n(88);
const i = n(1), a = n(0).lang;
function s(t) {
let e = new r(t || window.FEEDBACK_LIST_INIT), n = document.querySelector("[data-feedback-count]");
e.elem.addEventListener("feedbackChange", function(t) {
n.hidden = !1, n.children[0].innerHTML = t.detail.loader.total, n.children[1].innerHTML = o(t.detail.loader.total, i("courses.group_feedback_list.plural_feedback"));
});
let a = document.querySelector("[data-feedback-form]"), s = a.elements.teacherId, c = a.elements.stars;
function u() {
let t = e.filter;
t.teacherId = s.value, t.stars = c.value, e.reset(t);
let n = document.querySelector("[data-stars-title].feedback-stat__item_active");
n && n.classList.remove("feedback-stat__item_active"), c.value && document.querySelector(`[data-stars-title="${c.value}"]`).classList.add("feedback-stat__item_active");
}
s.onchange = u, c.onchange = u, document.addEventListener("click", t => {
let e = t.target.closest("[data-stars-title]");
e && (c.value = e.getAttribute("data-stars-title"), u());
});
}
i.i18n.add("courses", n(23)("./" + a + ".yml")), t.exports = s, window.FEEDBACK_LIST_INIT && s();
},
4: function(t, e, n) {
"use strict";
let r = n(2), o = n(10);
const i = n(0).lang, a = n(1);
a.i18n.add("", n(11)("./" + i + ".yml")), a.i18n.add("error.network", n(13)("./" + i + ".yml")), 
document.addEventListener("xhrfail", function(t) {
new r.Error(t.reason);
}), t.exports = function(t) {
let e = new XMLHttpRequest(), n = t.method || "GET", r = t.body, i = t.url;
e.open(n, i, !t.sync), e.method = n;
let s = o();
s && !t.skipCsrf && e.setRequestHeader("X-XSRF-TOKEN", s), "[object Object]" == {}.toString.call(r) && (e.setRequestHeader("Content-Type", "application/json;charset=UTF-8"), 
r = JSON.stringify(r)), t.noDocumentEvents || (e.addEventListener("loadstart", t => {
e.timeStart = Date.now();
let n = u("xhrstart", t);
document.dispatchEvent(n);
}), e.addEventListener("loadend", t => {
let e = u("xhrend", t);
document.dispatchEvent(e);
}), e.addEventListener("success", t => {
let e = u("xhrsuccess", t);
e.result = t.result, document.dispatchEvent(e);
}), e.addEventListener("fail", t => {
let e = u("xhrfail", t);
e.reason = t.reason, document.dispatchEvent(e);
})), t.raw || e.setRequestHeader("Accept", "application/json"), e.setRequestHeader("X-Requested-With", "XMLHttpRequest");
let c = t.normalStatuses || [ 200 ];
function u(t, e) {
let n = new CustomEvent(t);
return n.originalEvent = e, n;
}
function l(t, n) {
let r = u("fail", n);
r.reason = t, e.dispatchEvent(r);
}
return e.addEventListener("error", t => {
l(a("error.network.server_connection_error"), t);
}), e.addEventListener("timeout", t => {
l(a("error.network.server_request_timeout"), t);
}), e.addEventListener("abort", t => {
l(a("error.network.request_aborted"), t);
}), e.addEventListener("load", n => {
if (!e.status) return void l(a("error.network.no_response"), n);
if (-1 == c.indexOf(e.status)) return void l(a("error.network.server_error", {
status: e.status
}), n);
let r = e.responseText;
if ((e.getResponseHeader("Content-Type") || "").match(/^application\/json/) || t.json) try {
r = JSON.parse(r);
} catch (n) {
return void l(a("error.network.invalid_format"), n);
}
!function(t, n) {
let r = u("success", n);
r.result = t, e.dispatchEvent(r);
}(r, n);
}), setTimeout(function() {
e.send(r);
}, 0), e;
};
},
5: function(t, e, n) {
"use strict";
t.exports = n(6);
},
6: function(t, e, n) {
"use strict";
var r = n(7), o = n(8);
function i(t) {
return Object.prototype.toString.call(t);
}
function a(t) {
return "[object String]" === i(t);
}
function s(t) {
return !isNaN(t) && isFinite(t);
}
function c(t) {
return !0 === t || !1 === t;
}
function u(t) {
return "[object Object]" === i(t);
}
var l = Array.isArray || function(t) {
return "[object Array]" === i(t);
}, f = Array.prototype.forEach;
function d(t, e, n) {
if (null !== t) if (f && t.forEach === f) t.forEach(e, n); else if (t.length === +t.length) for (var r = 0, o = t.length; r < o; r += 1) e.call(n, t[r], r, t); else for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && e.call(n, t[i], i, t);
}
var p = /%[sdj%]/g;
function h(t) {
var e = 1, n = arguments, r = n.length;
return String(t).replace(p, function(t) {
if ("%%" === t) return "%";
if (e >= r) return t;
switch (t) {
case "%s":
return String(n[e++]);

case "%d":
return Number(n[e++]);

case "%j":
return JSON.stringify(n[e++]);

default:
return t;
}
});
}
var _ = "en";
function m(t) {
var e = {};
return d(t || {}, function(t, n) {
t && "object" == typeof t ? d(m(t), function(t, r) {
e[n + "." + r] = t;
}) : e[n] = t;
}), e;
}
var v = "#@$";
function g(t, e) {
return t + v + e;
}
function b(t, e, n) {
var r = g(e, n), o = t._storage;
if (o.hasOwnProperty(r)) return r;
if (e === t._defaultLocale) return null;
var i = t._fallbacks_cache;
if (i.hasOwnProperty(r)) return i[r];
for (var a, s = t._fallbacks[e] || [ t._defaultLocale ], c = 0, u = s.length; c < u; c++) if (a = g(s[c], n), 
o.hasOwnProperty(a)) return i[r] = a, i[r];
return i[r] = null, null;
}
function y(t, e, n) {
var r = o.indexOf(t, e);
return -1 === r ? h('[pluralizer for "%s" locale not found]', t) : void 0 === n[r] ? h('[plural form %d ("%s") not found in translation]', r, o.forms(t)[r]) : n[r];
}
function k(t) {
if (!(this instanceof k)) return new k(t);
this._defaultLocale = t ? String(t) : _, this._fallbacks = {}, this._fallbacks_cache = {}, 
this._storage = {}, this._plurals_cache = {};
}
k.prototype.addPhrase = function(t, e, n, r) {
var o, i = this;
if (c(r)) o = r ? 1 / 0 : 0; else if (s(r)) {
if ((o = Math.floor(r)) < 0) throw new TypeError("Invalid flatten level (should be >= 0).");
} else o = 1 / 0;
if (u(n) && o > 0) return d(n, function(n, r) {
i.addPhrase(t, (e ? e + "." : "") + r, n, o - 1);
}), this;
if (a(n)) this._storage[g(t, e)] = {
translation: n,
locale: t,
raw: !1
}; else {
if (!(l(n) || s(n) || c(n) || 0 === o && u(n))) throw new TypeError("Invalid translation - [String|Object|Array|Number|Boolean] expected.");
this._storage[g(t, e)] = {
translation: n,
locale: t,
raw: !0
};
}
return i._fallbacks_cache = {}, this;
}, k.prototype.setFallback = function(t, e) {
var n = this._defaultLocale;
if (n === t) throw new Error("Default locale can't have fallbacks");
var r = l(e) ? e.slice() : [ e ];
return r[r.length - 1] !== n && r.push(n), this._fallbacks[t] = r, this._fallbacks_cache = {}, 
this;
};
var x = /#\{|\(\(|\\\\/;
k.prototype.translate = function(t, e, n) {
var o, c = b(this, t, e);
return c ? (o = this._storage[c]).raw ? o.translation : (o.hasOwnProperty("compiled") || (o.compiled = function(t, e, n) {
var o, i, a, s, c, u;
return x.test(e) ? 1 === (o = r.parse(e)).length && "literal" === o[0].type ? o[0].text : (t._plurals_cache[n] || (t._plurals_cache[n] = new k(n)), 
u = t._plurals_cache[n], (i = []).push([ 'var str = "", strict, strict_exec, forms, forms_exec, plrl, cache, loc, loc_plzr, anchor;' ]), 
i.push("params = flatten(params);"), d(o, function(t) {
if ("literal" !== t.type) {
if ("variable" === t.type) return a = t.anchor, void i.push(h('str += ("undefined" === typeof (params[%j])) ? "[missed variable: %s]" : params[%j];', a, a, a));
if ("plural" !== t.type) throw new Error("Unknown node type");
a = t.anchor, s = {}, d(t.strict, function(e, o) {
var i = r.parse(e);
if (1 === i.length && "literal" === i[0].type) return s[o] = !1, void (t.strict[o] = i[0].text);
s[o] = !0, u.hasPhrase(n, e, !0) || u.addPhrase(n, e, e);
}), c = {}, d(t.forms, function(e, o) {
var i, a = r.parse(e);
if (1 === a.length && "literal" === a[0].type) return i = a[0].text, t.forms[o] = i, 
void (c[i] = !1);
c[e] = !0, u.hasPhrase(n, e, !0) || u.addPhrase(n, e, e);
}), i.push(h("loc = %j;", n)), i.push(h("loc_plzr = %j;", n.split(/[-_]/)[0])), 
i.push(h("anchor = params[%j];", a)), i.push(h("cache = this._plurals_cache[loc];")), 
i.push(h("strict = %j;", t.strict)), i.push(h("strict_exec = %j;", s)), i.push(h("forms = %j;", t.forms)), 
i.push(h("forms_exec = %j;", c)), i.push("if (+(anchor) != anchor) {"), i.push(h('  str += "[invalid plurals amount: %s(" + anchor + ")]";', a)), 
i.push("} else {"), i.push("  if (strict[anchor] !== undefined) {"), i.push("    plrl = strict[anchor];"), 
i.push("    str += strict_exec[anchor] ? cache.t(loc, plrl, params) : plrl;"), i.push("  } else {"), 
i.push("    plrl = pluralizer(loc_plzr, +anchor, forms);"), i.push("    str += forms_exec[plrl] ? cache.t(loc, plrl, params) : plrl;"), 
i.push("  }"), i.push("}");
} else i.push(h("str += %j;", t.text));
}), i.push("return str;"), new Function("params", "flatten", "pluralizer", i.join("\n"))) : e;
}(this, o.translation, o.locale)), "[object Function]" !== i(o.compiled) ? o.compiled : ((s(n) || a(n)) && (n = {
count: n,
value: n
}), o.compiled.call(this, n, m, y))) : t + ": No translation for [" + e + "]";
}, k.prototype.hasPhrase = function(t, e, n) {
return n ? this._storage.hasOwnProperty(g(t, e)) : !!b(this, t, e);
}, k.prototype.getLocale = function(t, e, n) {
if (n) return this._storage.hasOwnProperty(g(t, e)) ? t : null;
var r = b(this, t, e);
return r ? r.split(v, 2)[0] : null;
}, k.prototype.t = k.prototype.translate, k.prototype.stringify = function(t) {
var e = this, n = {};
d(this._storage, function(t, e) {
n[e.split(v)[1]] = !0;
});
var r = {};
d(n, function(n, o) {
var i = b(e, t, o);
if (i) {
var a = e._storage[i].locale;
r[a] || (r[a] = {}), r[a][o] = e._storage[i].translation;
}
});
var o = {
fallback: {},
locales: r
}, i = (e._fallbacks[t] || []).slice(0, -1);
return i.length && (o.fallback[t] = i), JSON.stringify(o);
}, k.prototype.load = function(t) {
var e = this;
return a(t) && (t = JSON.parse(t)), d(t.locales, function(t, n) {
d(t, function(t, r) {
e.addPhrase(n, r, t, 0);
});
}), d(t.fallback, function(t, n) {
e.setFallback(n, t);
}), this;
}, t.exports = k;
},
7: function(t, e, n) {
"use strict";
t.exports = function() {
function t(t, e, n, r, o, i) {
this.message = t, this.expected = e, this.found = n, this.offset = r, this.line = o, 
this.column = i, this.name = "SyntaxError";
}
return function(t, e) {
function n() {
this.constructor = t;
}
n.prototype = e.prototype, t.prototype = new n();
}(t, Error), {
SyntaxError: t,
parse: function(e) {
var n, r = arguments.length > 1 ? arguments[1] : {}, o = {}, i = {
start: lt
}, a = lt, s = o, c = "((", u = {
type: "literal",
value: "((",
description: '"(("'
}, l = "))", f = {
type: "literal",
value: "))",
description: '"))"'
}, d = null, p = function(t, e) {
return {
type: "plural",
forms: function(t) {
for (var e = [], n = 0; n < t.length; n++) void 0 === t[n].strict && e.push(t[n].text);
return e;
}(t),
strict: function(t) {
for (var e = {}, n = 0; n < t.length; n++) void 0 !== t[n].strict && (e[t[n].strict] = t[n].text);
return e;
}(t),
anchor: e || "count"
};
}, h = "|", _ = {
type: "literal",
value: "|",
description: '"|"'
}, m = function(t, e) {
return [ t ].concat(e);
}, v = function(t) {
return [ t ];
}, g = "=", b = {
type: "literal",
value: "=",
description: '"="'
}, y = /^[0-9]/, k = {
type: "class",
value: "[0-9]",
description: "[0-9]"
}, x = " ", w = {
type: "literal",
value: " ",
description: '" "'
}, F = function(t, e) {
return {
strict: t.join(""),
text: e.join("")
};
}, j = function() {
return {
text: at()
};
}, E = "\\", O = {
type: "literal",
value: "\\",
description: '"\\\\"'
}, S = /^[\\|)(]/, T = {
type: "class",
value: "[\\\\|)(]",
description: "[\\\\|)(]"
}, A = function(t) {
return t;
}, L = void 0, M = {
type: "any",
description: "any character"
}, C = function() {
return at();
}, q = ":", U = {
type: "literal",
value: ":",
description: '":"'
}, z = function(t) {
return t;
}, P = "#{", R = {
type: "literal",
value: "#{",
description: '"#{"'
}, N = "}", I = {
type: "literal",
value: "}",
description: '"}"'
}, D = function(t) {
return {
type: "variable",
anchor: t
};
}, H = ".", J = {
type: "literal",
value: ".",
description: '"."'
}, $ = function() {
return at();
}, G = /^[a-zA-Z_$]/, B = {
type: "class",
value: "[a-zA-Z_$]",
description: "[a-zA-Z_$]"
}, X = /^[a-zA-Z0-9_$]/, Z = {
type: "class",
value: "[a-zA-Z0-9_$]",
description: "[a-zA-Z0-9_$]"
}, K = function(t) {
return t;
}, W = function(t) {
return {
type: "literal",
text: t.join("")
};
}, Y = /^[\\#()|]/, Q = {
type: "class",
value: "[\\\\#()|]",
description: "[\\\\#()|]"
}, V = 0, tt = 0, et = 0, nt = {
line: 1,
column: 1,
seenCR: !1
}, rt = 0, ot = [], it = 0;
if ("startRule" in r) {
if (!(r.startRule in i)) throw new Error("Can't start parsing from rule \"" + r.startRule + '".');
a = i[r.startRule];
}
function at() {
return e.substring(tt, V);
}
function st(t) {
return et !== t && (et > t && (et = 0, nt = {
line: 1,
column: 1,
seenCR: !1
}), function(t, n, r) {
var o, i;
for (o = n; o < r; o++) "\n" === (i = e.charAt(o)) ? (t.seenCR || t.line++, t.column = 1, 
t.seenCR = !1) : "\r" === i || "\u2028" === i || "\u2029" === i ? (t.line++, t.column = 1, 
t.seenCR = !0) : (t.column++, t.seenCR = !1);
}(nt, et, t), et = t), nt;
}
function ct(t) {
V < rt || (V > rt && (rt = V, ot = []), ot.push(t));
}
function ut(n, r, o) {
var i = st(o), a = o < e.length ? e.charAt(o) : null;
return null !== r && function(t) {
var e = 1;
for (t.sort(function(t, e) {
return t.description < e.description ? -1 : t.description > e.description ? 1 : 0;
}); e < t.length; ) t[e - 1] === t[e] ? t.splice(e, 1) : e++;
}(r), new t(null !== n ? n : function(t, e) {
var n, r = new Array(t.length);
for (n = 0; n < t.length; n++) r[n] = t[n].description;
return "Expected " + (t.length > 1 ? r.slice(0, -1).join(", ") + " or " + r[t.length - 1] : r[0]) + " but " + (e ? '"' + function(t) {
function e(t) {
return t.charCodeAt(0).toString(16).toUpperCase();
}
return t.replace(/\\/g, "\\\\").replace(/"/g, '\\"').replace(/\x08/g, "\\b").replace(/\t/g, "\\t").replace(/\n/g, "\\n").replace(/\f/g, "\\f").replace(/\r/g, "\\r").replace(/[\x00-\x07\x0B\x0E\x0F]/g, function(t) {
return "\\x0" + e(t);
}).replace(/[\x10-\x1F\x80-\xFF]/g, function(t) {
return "\\x" + e(t);
}).replace(/[\u0180-\u0FFF]/g, function(t) {
return "\\u0" + e(t);
}).replace(/[\u1080-\uFFFF]/g, function(t) {
return "\\u" + e(t);
});
}(e) + '"' : "end of input") + " found.";
}(r, a), r, a, o, i.line, i.column);
}
function lt() {
var t, e;
for (t = [], (e = vt()) === o && (e = ft()) === o && (e = ht()); e !== o; ) t.push(e), 
(e = vt()) === o && (e = ft()) === o && (e = ht());
return t;
}
function ft() {
var t, n, r, i, a;
return t = V, e.substr(V, 2) === c ? (n = c, V += 2) : (n = o, 0 === it && ct(u)), 
n !== o && (r = function t() {
var n, r, i, a;
return n = V, (r = dt()) !== o ? (124 === e.charCodeAt(V) ? (i = h, V++) : (i = o, 
0 === it && ct(_)), i !== o && (a = t()) !== o ? (tt = n, r = m(r, a), n = r) : (V = n, 
n = s)) : (V = n, n = s), n === o && (n = V, (r = dt()) !== o && (tt = n, r = v(r)), 
n = r), n;
}()) !== o ? (e.substr(V, 2) === l ? (i = l, V += 2) : (i = o, 0 === it && ct(f)), 
i !== o ? ((a = function() {
var t, n, r;
return t = V, 58 === e.charCodeAt(V) ? (n = q, V++) : (n = o, 0 === it && ct(U)), 
n !== o && (r = _t()) !== o ? (tt = t, n = z(r), t = n) : (V = t, t = s), t;
}()) === o && (a = d), a !== o ? (tt = t, t = n = p(r, a)) : (V = t, t = s)) : (V = t, 
t = s)) : (V = t, t = s), t;
}
function dt() {
var t, n, r, i, a, c;
if (t = V, 61 === e.charCodeAt(V) ? (n = g, V++) : (n = o, 0 === it && ct(b)), n !== o) {
if (r = [], y.test(e.charAt(V)) ? (i = e.charAt(V), V++) : (i = o, 0 === it && ct(k)), 
i !== o) for (;i !== o; ) r.push(i), y.test(e.charAt(V)) ? (i = e.charAt(V), V++) : (i = o, 
0 === it && ct(k)); else r = s;
if (r !== o) if (32 === e.charCodeAt(V) ? (i = x, V++) : (i = o, 0 === it && ct(w)), 
i === o && (i = d), i !== o) {
if (a = [], (c = pt()) !== o) for (;c !== o; ) a.push(c), c = pt(); else a = s;
a !== o ? (tt = t, t = n = F(r, a)) : (V = t, t = s);
} else V = t, t = s; else V = t, t = s;
} else V = t, t = s;
if (t === o) {
if (t = V, n = [], (r = pt()) !== o) for (;r !== o; ) n.push(r), r = pt(); else n = s;
n !== o && (tt = t, n = j()), t = n;
}
return t;
}
function pt() {
var t, n, r;
return t = V, 92 === e.charCodeAt(V) ? (n = E, V++) : (n = o, 0 === it && ct(O)), 
n !== o ? (S.test(e.charAt(V)) ? (r = e.charAt(V), V++) : (r = o, 0 === it && ct(T)), 
r !== o ? (tt = t, t = n = A(r)) : (V = t, t = s)) : (V = t, t = s), t === o && (t = V, 
n = V, it++, 124 === e.charCodeAt(V) ? (r = h, V++) : (r = o, 0 === it && ct(_)), 
r === o && (e.substr(V, 2) === l ? (r = l, V += 2) : (r = o, 0 === it && ct(f))), 
it--, r === o ? n = L : (V = n, n = s), n !== o ? (e.length > V ? (r = e.charAt(V), 
V++) : (r = o, 0 === it && ct(M)), r !== o ? (tt = t, t = n = C()) : (V = t, t = s)) : (V = t, 
t = s)), t;
}
function ht() {
var t, n, r, i;
return t = V, e.substr(V, 2) === P ? (n = P, V += 2) : (n = o, 0 === it && ct(R)), 
n !== o && (r = _t()) !== o ? (125 === e.charCodeAt(V) ? (i = N, V++) : (i = o, 
0 === it && ct(I)), i !== o ? (tt = t, t = n = D(r)) : (V = t, t = s)) : (V = t, 
t = s), t;
}
function _t() {
var t, n, r, i;
if (t = V, mt() !== o) if (46 === e.charCodeAt(V) ? (n = H, V++) : (n = o, 0 === it && ct(J)), 
n !== o) {
if (r = [], (i = _t()) !== o) for (;i !== o; ) r.push(i), i = _t(); else r = s;
r !== o ? (tt = t, t = $()) : (V = t, t = s);
} else V = t, t = s; else V = t, t = s;
return t === o && (t = mt()), t;
}
function mt() {
var t, n, r, i;
if (t = V, G.test(e.charAt(V)) ? (n = e.charAt(V), V++) : (n = o, 0 === it && ct(B)), 
n !== o) {
for (r = [], X.test(e.charAt(V)) ? (i = e.charAt(V), V++) : (i = o, 0 === it && ct(Z)); i !== o; ) r.push(i), 
X.test(e.charAt(V)) ? (i = e.charAt(V), V++) : (i = o, 0 === it && ct(Z));
r !== o ? (tt = t, t = n = C()) : (V = t, t = s);
} else V = t, t = s;
return t;
}
function vt() {
var t, e, n, r, i;
if (t = V, e = [], n = V, r = V, it++, (i = ft()) === o && (i = ht()), it--, i === o ? r = L : (V = r, 
r = s), r !== o && (i = gt()) !== o ? (tt = n, n = r = K(i)) : (V = n, n = s), n !== o) for (;n !== o; ) e.push(n), 
n = V, r = V, it++, (i = ft()) === o && (i = ht()), it--, i === o ? r = L : (V = r, 
r = s), r !== o && (i = gt()) !== o ? (tt = n, n = r = K(i)) : (V = n, n = s); else e = s;
return e !== o && (tt = t, e = W(e)), t = e;
}
function gt() {
var t, n, r;
return t = V, 92 === e.charCodeAt(V) ? (n = E, V++) : (n = o, 0 === it && ct(O)), 
n !== o ? (Y.test(e.charAt(V)) ? (r = e.charAt(V), V++) : (r = o, 0 === it && ct(Q)), 
r !== o ? (tt = t, t = n = A(r)) : (V = t, t = s)) : (V = t, t = s), t === o && (e.length > V ? (t = e.charAt(V), 
V++) : (t = o, 0 === it && ct(M))), t;
}
if ((n = a()) !== o && V === e.length) return n;
throw n !== o && V < e.length && ct({
type: "end",
description: "end of input"
}), ut(null, ot, rt);
}
};
}();
},
8: function(t, e, n) {
"use strict";
var r = {};
function o(t) {
var e;
return r[t] ? t : (e = t.toLowerCase().replace("_", "-"), r[e] ? e : (e = e.split("-")[0], 
r[e] ? e : null));
}
function i(t, e) {
var n = o(t);
if (!n) return -1;
if (!r[n].cFn) return 0;
var i = String(e), a = i.indexOf(".") < 0 ? "" : i.split(".")[1], s = a.length, c = +e, u = +i.split(".")[0], l = 0 === a.length ? 0 : +a.replace(/0+$/, "");
return r[n].cFn(c, u, s, +a, l);
}
function a(t, e) {
var n = o(t);
if (!n) return -1;
if (!r[n].oFn) return 0;
var i = String(e), a = i.indexOf(".") < 0 ? "" : i.split(".")[1], s = a.length, c = +e, u = +i.split(".")[0], l = 0 === a.length ? 0 : +a.replace(/0+$/, "");
return r[n].oFn(c, u, s, +a, l);
}
t.exports = function(t, e) {
var n = o(t);
return n ? r[n].c[i(n, e)] : null;
}, t.exports.indexOf = i, t.exports.forms = function(t) {
var e = o(t);
return r[e] ? r[e].c : null;
}, t.exports.ordinal = function(t, e) {
var n = o(t);
return r[n] ? r[n].o[a(n, e)] : null;
}, t.exports.ordinal.indexOf = a, t.exports.ordinal.forms = function(t) {
var e = o(t);
return r[e] ? r[e].o : null;
};
var s = [ "zero", "one", "two", "few", "many", "other" ];
function c(t) {
return s[t];
}
function u(t, e) {
var n;
for (e.c = e.c ? e.c.map(c) : [ "other" ], e.o = e.o ? e.o.map(c) : [ "other" ], 
n = 0; n < t.length; n++) r[t[n]] = e;
}
function l(t, e, n) {
return t <= n && n <= e && n % 1 == 0;
}
function f(t, e) {
return t.indexOf(e) >= 0;
}
u([ "af", "asa", "bem", "bez", "bg", "brx", "ce", "cgg", "chr", "ckb", "dv", "ee", "el", "eo", "es", "eu", "fo", "fur", "gsw", "ha", "haw", "jgo", "jmc", "kaj", "kcg", "kkj", "kl", "ks", "ksb", "ku", "ky", "lb", "lg", "mas", "mgo", "ml", "mn", "nah", "nb", "nd", "nn", "nnh", "no", "nr", "ny", "nyn", "om", "or", "os", "pap", "ps", "rm", "rof", "rwk", "saq", "sdh", "seh", "sn", "so", "ss", "ssy", "st", "syr", "ta", "te", "teo", "tig", "tk", "tn", "tr", "ts", "ug", "uz", "ve", "vo", "vun", "wae", "xh", "xog" ], {
c: [ 1, 5 ],
cFn: function(t) {
return 1 === t ? 0 : 1;
}
}), u([ "ak", "bh", "guw", "ln", "mg", "nso", "pa", "ti", "wa" ], {
c: [ 1, 5 ],
cFn: function(t) {
return l(0, 1, t) ? 0 : 1;
}
}), u([ "am", "fa", "kn", "zu" ], {
c: [ 1, 5 ],
cFn: function(t, e) {
return 0 === e || 1 === t ? 0 : 1;
}
}), u([ "ar", "ars" ], {
c: [ 0, 1, 2, 3, 4, 5 ],
cFn: function(t) {
var e = t % 100;
return 0 === t ? 0 : 1 === t ? 1 : 2 === t ? 2 : l(3, 10, e) ? 3 : l(11, 99, e) ? 4 : 5;
}
}), u([ "as", "bn" ], {
c: [ 1, 5 ],
cFn: function(t, e) {
return 0 === e || 1 === t ? 0 : 1;
},
o: [ 1, 2, 3, 4, 5 ],
oFn: function(t) {
return f([ 1, 5, 7, 8, 9, 10 ], t) ? 0 : f([ 2, 3 ], t) ? 1 : 4 === t ? 2 : 6 === t ? 3 : 4;
}
}), u([ "ast", "de", "et", "fi", "fy", "gl", "ji", "nl", "sw", "ur", "yi" ], {
c: [ 1, 5 ],
cFn: function(t, e, n) {
return 1 === e && 0 === n ? 0 : 1;
}
}), u([ "az" ], {
c: [ 1, 5 ],
cFn: function(t) {
return 1 === t ? 0 : 1;
},
o: [ 1, 3, 4, 5 ],
oFn: function(t, e) {
var n = e % 10, r = e % 100, o = e % 1e3;
return f([ 1, 2, 5, 7, 8 ], n) || f([ 20, 50, 70, 80 ], r) ? 0 : f([ 3, 4 ], n) || f([ 100, 200, 300, 400, 500, 600, 700, 800, 900 ], o) ? 1 : 0 === e || 6 === n || f([ 40, 60, 90 ], r) ? 2 : 3;
}
}), u([ "be" ], {
c: [ 1, 3, 4, 5 ],
cFn: function(t) {
var e = t % 10, n = t % 100;
return 1 === e && 11 !== n ? 0 : l(2, 4, e) && !l(12, 14, n) ? 1 : 0 === e || l(5, 9, e) || l(11, 14, n) ? 2 : 3;
},
o: [ 3, 5 ],
oFn: function(t) {
var e = t % 100;
return f([ 2, 3 ], t % 10) && !f([ 12, 13 ], e) ? 0 : 1;
}
}), u([ "bm", "bo", "dz", "id", "ig", "ii", "in", "ja", "jbo", "jv", "jw", "kde", "kea", "km", "ko", "lkt", "my", "nqo", "root", "sah", "ses", "sg", "th", "to", "wo", "yo", "yue", "zh" ], {}), 
u([ "br" ], {
c: [ 1, 2, 3, 4, 5 ],
cFn: function(t) {
var e = t % 10, n = t % 100, r = t % 1e6;
return 1 !== e || f([ 11, 71, 91 ], n) ? 2 !== e || f([ 12, 72, 92 ], n) ? !l(3, 4, e) && 9 !== e || l(10, 19, n) || l(70, 79, n) || l(90, 99, n) ? 0 !== t && 0 === r ? 3 : 4 : 2 : 1 : 0;
}
}), u([ "bs", "hr", "sh", "sr" ], {
c: [ 1, 3, 5 ],
cFn: function(t, e, n, r) {
var o = e % 10, i = e % 100, a = r % 10, s = r % 100;
return 0 === n && 1 === o && 11 !== i || 1 === a && 11 !== s ? 0 : 0 === n && l(2, 4, o) && !l(12, 14, i) || l(2, 4, a) && !l(12, 14, s) ? 1 : 2;
}
}), u([ "ca" ], {
c: [ 1, 5 ],
cFn: function(t, e, n) {
return 1 === e && 0 === n ? 0 : 1;
},
o: [ 1, 2, 3, 5 ],
oFn: function(t) {
return f([ 1, 3 ], t) ? 0 : 2 === t ? 1 : 4 === t ? 2 : 3;
}
}), u([ "cs", "sk" ], {
c: [ 1, 3, 4, 5 ],
cFn: function(t, e, n) {
return 1 === e && 0 === n ? 0 : l(2, 4, e) && 0 === n ? 1 : 0 !== n ? 2 : 3;
}
}), u([ "cy" ], {
c: [ 0, 1, 2, 3, 4, 5 ],
cFn: function(t) {
return 0 === t ? 0 : 1 === t ? 1 : 2 === t ? 2 : 3 === t ? 3 : 6 === t ? 4 : 5;
},
o: [ 0, 1, 2, 3, 4, 5 ],
oFn: function(t) {
return f([ 0, 7, 8, 9 ], t) ? 0 : 1 === t ? 1 : 2 === t ? 2 : f([ 3, 4 ], t) ? 3 : f([ 5, 6 ], t) ? 4 : 5;
}
}), u([ "da" ], {
c: [ 1, 5 ],
cFn: function(t, e, n, r, o) {
return 1 === t || 0 !== o && f([ 0, 1 ], e) ? 0 : 1;
}
}), u([ "dsb", "hsb" ], {
c: [ 1, 2, 3, 5 ],
cFn: function(t, e, n, r) {
var o = e % 100, i = r % 100;
return 0 === n && 1 === o || 1 === i ? 0 : 0 === n && 2 === o || 2 === i ? 1 : 0 === n && l(3, 4, o) || l(3, 4, i) ? 2 : 3;
}
}), u([ "en" ], {
c: [ 1, 5 ],
cFn: function(t, e, n) {
return 1 === e && 0 === n ? 0 : 1;
},
o: [ 1, 2, 3, 5 ],
oFn: function(t) {
var e = t % 10, n = t % 100;
return 1 === e && 11 !== n ? 0 : 2 === e && 12 !== n ? 1 : 3 === e && 13 !== n ? 2 : 3;
}
}), u([ "ff", "kab" ], {
c: [ 1, 5 ],
cFn: function(t, e) {
return f([ 0, 1 ], e) ? 0 : 1;
}
}), u([ "fil", "tl" ], {
c: [ 1, 5 ],
cFn: function(t, e, n, r) {
var o = e % 10, i = r % 10;
return 0 === n && f([ 1, 2, 3 ], e) || 0 === n && !f([ 4, 6, 9 ], o) || 0 !== n && !f([ 4, 6, 9 ], i) ? 0 : 1;
},
o: [ 1, 5 ],
oFn: function(t) {
return 1 === t ? 0 : 1;
}
}), u([ "fr", "hy" ], {
c: [ 1, 5 ],
cFn: function(t, e) {
return f([ 0, 1 ], e) ? 0 : 1;
},
o: [ 1, 5 ],
oFn: function(t) {
return 1 === t ? 0 : 1;
}
}), u([ "ga" ], {
c: [ 1, 2, 3, 4, 5 ],
cFn: function(t) {
return 1 === t ? 0 : 2 === t ? 1 : l(3, 6, t) ? 2 : l(7, 10, t) ? 3 : 4;
},
o: [ 1, 5 ],
oFn: function(t) {
return 1 === t ? 0 : 1;
}
}), u([ "gd" ], {
c: [ 1, 2, 3, 5 ],
cFn: function(t) {
return f([ 1, 11 ], t) ? 0 : f([ 2, 12 ], t) ? 1 : l(3, 10, t) || l(13, 19, t) ? 2 : 3;
}
}), u([ "gu", "hi" ], {
c: [ 1, 5 ],
cFn: function(t, e) {
return 0 === e || 1 === t ? 0 : 1;
},
o: [ 1, 2, 3, 4, 5 ],
oFn: function(t) {
return 1 === t ? 0 : f([ 2, 3 ], t) ? 1 : 4 === t ? 2 : 6 === t ? 3 : 4;
}
}), u([ "gv" ], {
c: [ 1, 2, 3, 4, 5 ],
cFn: function(t, e, n) {
var r = e % 10;
return 0 === n && 1 === r ? 0 : 0 === n && 2 === r ? 1 : 0 === n && f([ 0, 20, 40, 60, 80 ], e % 100) ? 2 : 0 !== n ? 3 : 4;
}
}), u([ "he", "iw" ], {
c: [ 1, 2, 4, 5 ],
cFn: function(t, e, n) {
var r = t % 10;
return 1 === e && 0 === n ? 0 : 2 === e && 0 === n ? 1 : 0 !== n || l(0, 10, t) || 0 !== r ? 3 : 2;
}
}), u([ "hu" ], {
c: [ 1, 5 ],
cFn: function(t) {
return 1 === t ? 0 : 1;
},
o: [ 1, 5 ],
oFn: function(t) {
return f([ 1, 5 ], t) ? 0 : 1;
}
}), u([ "is" ], {
c: [ 1, 5 ],
cFn: function(t, e, n, r, o) {
return 0 === o && 1 === e % 10 && 11 !== e % 100 || 0 !== o ? 0 : 1;
}
}), u([ "it" ], {
c: [ 1, 5 ],
cFn: function(t, e, n) {
return 1 === e && 0 === n ? 0 : 1;
},
o: [ 4, 5 ],
oFn: function(t) {
return f([ 11, 8, 80, 800 ], t) ? 0 : 1;
}
}), u([ "iu", "kw", "naq", "se", "sma", "smi", "smj", "smn", "sms" ], {
c: [ 1, 2, 5 ],
cFn: function(t) {
return 1 === t ? 0 : 2 === t ? 1 : 2;
}
}), u([ "ka" ], {
c: [ 1, 5 ],
cFn: function(t) {
return 1 === t ? 0 : 1;
},
o: [ 1, 4, 5 ],
oFn: function(t, e) {
var n = e % 100;
return 1 === e ? 0 : 0 === e || l(2, 20, n) || 40 === n || 60 === n || 80 === n ? 1 : 2;
}
}), u([ "kk" ], {
c: [ 1, 5 ],
cFn: function(t) {
return 1 === t ? 0 : 1;
},
o: [ 4, 5 ],
oFn: function(t) {
var e = t % 10;
return 6 === e || 9 === e || 0 === e && 0 !== t ? 0 : 1;
}
}), u([ "ksh" ], {
c: [ 0, 1, 5 ],
cFn: function(t) {
return 0 === t ? 0 : 1 === t ? 1 : 2;
}
}), u([ "lag" ], {
c: [ 0, 1, 5 ],
cFn: function(t, e) {
return 0 === t ? 0 : f([ 0, 1 ], e) && 0 !== t ? 1 : 2;
}
}), u([ "lo", "ms", "vi" ], {
o: [ 1, 5 ],
oFn: function(t) {
return 1 === t ? 0 : 1;
}
}), u([ "lt" ], {
c: [ 1, 3, 4, 5 ],
cFn: function(t, e, n, r) {
var o = t % 10, i = t % 100;
return 1 !== o || l(11, 19, i) ? l(2, 9, o) && !l(11, 19, i) ? 1 : 0 !== r ? 2 : 3 : 0;
}
}), u([ "lv", "prg" ], {
c: [ 0, 1, 5 ],
cFn: function(t, e, n, r) {
var o = t % 10, i = t % 100, a = r % 100, s = r % 10;
return 0 === o || l(11, 19, i) || 2 === n && l(11, 19, a) ? 0 : 1 === o && 11 !== i || 2 === n && 1 === s && 11 !== a || 2 !== n && 1 === s ? 1 : 2;
}
}), u([ "mk" ], {
c: [ 1, 5 ],
cFn: function(t, e, n, r) {
return 0 === n && 1 === e % 10 || 1 === r % 10 ? 0 : 1;
},
o: [ 1, 2, 4, 5 ],
oFn: function(t, e) {
var n = e % 10, r = e % 100;
return 1 === n && 11 !== r ? 0 : 2 === n && 12 !== r ? 1 : f([ 7, 8 ], n) && !f([ 17, 18 ], r) ? 2 : 3;
}
}), u([ "mo", "ro" ], {
c: [ 1, 3, 5 ],
cFn: function(t, e, n) {
return 1 === e && 0 === n ? 0 : 0 !== n || 0 === t || 1 !== t && l(1, 19, t % 100) ? 1 : 2;
},
o: [ 1, 5 ],
oFn: function(t) {
return 1 === t ? 0 : 1;
}
}), u([ "mr" ], {
c: [ 1, 5 ],
cFn: function(t, e) {
return 0 === e || 1 === t ? 0 : 1;
},
o: [ 1, 2, 3, 5 ],
oFn: function(t) {
return 1 === t ? 0 : f([ 2, 3 ], t) ? 1 : 4 === t ? 2 : 3;
}
}), u([ "mt" ], {
c: [ 1, 3, 4, 5 ],
cFn: function(t) {
var e = t % 100;
return 1 === t ? 0 : 0 === t || l(2, 10, e) ? 1 : l(11, 19, e) ? 2 : 3;
}
}), u([ "ne" ], {
c: [ 1, 5 ],
cFn: function(t) {
return 1 === t ? 0 : 1;
},
o: [ 1, 5 ],
oFn: function(t) {
return l(1, 4, t) ? 0 : 1;
}
}), u([ "pl" ], {
c: [ 1, 3, 4, 5 ],
cFn: function(t, e, n) {
var r = e % 10, o = e % 100;
return 1 === e && 0 === n ? 0 : 0 === n && l(2, 4, r) && !l(12, 14, o) ? 1 : 0 === n && 1 !== e && l(0, 1, r) || 0 === n && l(5, 9, r) || 0 === n && l(12, 14, o) ? 2 : 3;
}
}), u([ "pt" ], {
c: [ 1, 5 ],
cFn: function(t) {
return l(0, 2, t) && 2 !== t ? 0 : 1;
}
}), u([ "pt-pt" ], {
c: [ 1, 5 ],
cFn: function(t, e, n) {
return 1 === t && 0 === n ? 0 : 1;
}
}), u([ "ru" ], {
c: [ 1, 3, 4, 5 ],
cFn: function(t, e, n) {
var r = e % 10, o = e % 100;
return 0 === n && 1 === r && 11 !== o ? 0 : 0 === n && l(2, 4, r) && !l(12, 14, o) ? 1 : 0 === n && 0 === r || 0 === n && l(5, 9, r) || 0 === n && l(11, 14, o) ? 2 : 3;
}
}), u([ "shi" ], {
c: [ 1, 3, 5 ],
cFn: function(t, e) {
return 0 === e || 1 === t ? 0 : l(2, 10, t) ? 1 : 2;
}
}), u([ "si" ], {
c: [ 1, 5 ],
cFn: function(t, e, n, r) {
return f([ 0, 1 ], t) || 0 === e && 1 === r ? 0 : 1;
}
}), u([ "sl" ], {
c: [ 1, 2, 3, 5 ],
cFn: function(t, e, n) {
var r = e % 100;
return 0 === n && 1 === r ? 0 : 0 === n && 2 === r ? 1 : 0 === n && l(3, 4, r) || 0 !== n ? 2 : 3;
}
}), u([ "sq" ], {
c: [ 1, 5 ],
cFn: function(t) {
return 1 === t ? 0 : 1;
},
o: [ 1, 4, 5 ],
oFn: function(t) {
return 1 === t ? 0 : 4 === t % 10 && 14 !== t % 100 ? 1 : 2;
}
}), u([ "sv" ], {
c: [ 1, 5 ],
cFn: function(t, e, n) {
return 1 === e && 0 === n ? 0 : 1;
},
o: [ 1, 5 ],
oFn: function(t) {
var e = t % 100;
return f([ 1, 2 ], t % 10) && !f([ 11, 12 ], e) ? 0 : 1;
}
}), u([ "tzm" ], {
c: [ 1, 5 ],
cFn: function(t) {
return l(0, 1, t) || l(11, 99, t) ? 0 : 1;
}
}), u([ "uk" ], {
c: [ 1, 3, 4, 5 ],
cFn: function(t, e, n) {
var r = e % 10, o = e % 100;
return 0 === n && 1 === r && 11 !== o ? 0 : 0 === n && l(2, 4, r) && !l(12, 14, o) ? 1 : 0 === n && 0 === r || 0 === n && l(5, 9, r) || 0 === n && l(11, 14, o) ? 2 : 3;
},
o: [ 3, 5 ],
oFn: function(t) {
return 3 === t % 10 && 13 !== t % 100 ? 0 : 1;
}
});
},
88: function(t, e, n) {
"use strict";
t.exports = function(t, e) {
var n, r = (n = t) % 10 == 1 && n % 100 != 11 ? "one" : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 12 || n % 100 > 14) && n == Math.floor(n) ? "few" : n % 10 == 0 || n % 10 >= 5 && n % 10 <= 9 || n % 100 >= 11 && n % 100 <= 14 && n == Math.floor(n) ? "many" : "other", o = e.split(",");
switch (r) {
case "one":
return o[0];

case "few":
return o[1];

case "many":
return o[2];

default:
throw new Error("Unsupported count: " + t);
}
};
},
89: function(t, e, n) {
"use strict";
let r = n(4);
const o = n(1), i = n(0).lang;
o.i18n.add("courses", n(23)("./" + i + ".yml"));
t.exports = class {
constructor({elem: t, filter: e}) {
this.elem = t, this.container = t.querySelector("[data-feedback-container]"), this.baseUrl = "/courses/feedback-fetch", 
this.reset(e), window.addEventListener("scroll", t => this.onScroll(t));
}
reset(t) {
this.filter = t, this.count = 0, this.total = null, this.hasMore = !0, this.container.innerHTML = "", 
this.load();
}
onScroll() {
this.hasMore && this.container.getBoundingClientRect().bottom <= document.documentElement.clientHeight && !this.isLoading && this.load();
}
load() {
let t = `${this.baseUrl}?skip=${this.count}&needTotal=${null === this.total ? 1 : 0}`;
for (let e in this.filter) t += `&${e}=${this.filter[e]}`;
const e = r({
method: "GET",
json: !0,
url: t
});
this.elem.classList.add("course-feedbacks_loading"), this.isLoading = !0, e.addEventListener("loadend", () => {
this.isLoading = !1, this.elem.classList.remove("course-feedbacks_loading");
}), e.addEventListener("success", t => {
void 0 !== t.result.total && (this.total = t.result.total), t.result.count ? (this.container.insertAdjacentHTML("beforeEnd", t.result.html), 
this.count += t.result.count) : this.count || (this.container.innerHTML = `<p>${o("courses.feedback_loader.no_feedback")}</p>`, 
this.elem.classList.add("course-feedbacks_no-feedback")), !1 === t.result.hasMore && (this.hasMore = !1), 
this.elem.dispatchEvent(new CustomEvent("feedbackChange", {
bubbles: !0,
detail: {
loader: this
}
}));
});
}
};
}
});