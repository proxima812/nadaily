import { f as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_B8tmmdD1.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p><em>«Десятый Шаг может помочь нам устранить наши жизненные проблемы и\nпредупредить их появление вновь».</em></p>\n<p>Основной текст, с.51</p>\n<p>Наша личность — то, как мы думаем и чувствуем, — сформировалась под\nвоздействием жизненного опыта. Какой-то наш опыт изменил нас к лучшему, какой-\nто, наоборот, вызывает стыд и смущение; каким бы ни был наш опыт, он повлиял\nна то, кто мы есть сегодня. Мы можем использовать знания, которые мы приобрели\nв результате анализа своих ошибок, используя эту мудрость, для того чтобы\nруководствоваться ею при принятии решений сегодня.</p>\n<p>Принять себя — значит принять себя во всех отношениях — со всеми достоинствами\nи недостатками, победами и неудачами. Оставшиеся в нас не проработанные\nчувства стыда и вины могут парализовать нас и помешать нам продвигаться вперед\nпо жизни. Наиболее значительное исправление ошибок, совершенных нами в\nпрошлом, мы делаем просто за счет того, что сегодня поступаем по-другому. Мы\nстремимся к самосовершенствованию, и мера успеха определяется путем\nсопоставления того, кем мы были, с тем, кем мы стали в настоящее время.</p>\n<p>Будучи людьми, мы будем продолжать совершать ошибки; однако, нам не нужно\nповторять одни и те же ошибки снова и снова. Оглянувшись назад в прошлое и\nувидев, что мы изменились и повзрослели, мы обретем надежду на будущее. Самое\nлучшее для нас еще впереди.</p>\n<p><strong>ТОЛЬКО СЕГОДНЯ:</strong> Я добьюсь самых хороших результатов от того, чем\nрасполагаю сегодня. С каждый днем я буду узнавать что-нибудь новое, что будет\nпомогать мне завтра.</p>";

				const frontmatter = {"title":"18 ноября. Открытие себя","description":"Ежедневные размышления АН - 18 ноября. Открытие себя","id":"323","heroImage":"","pubDate":"2023-05-04T00:00:00.000Z","moth":"noyabr"};
				const file = "/Users/samgold/Desktop/Проекты/12 проектов/daily-na/src/content/diaries/noyabr/daily_18-11.md";
				const url = undefined;
				function rawContent() {
					return "\n_«Десятый Шаг может помочь нам устранить наши жизненные проблемы и\nпредупредить их появление вновь»._\n\nОсновной текст, с.51\n\nНаша личность — то, как мы думаем и чувствуем, — сформировалась под\nвоздействием жизненного опыта. Какой-то наш опыт изменил нас к лучшему, какой-\nто, наоборот, вызывает стыд и смущение; каким бы ни был наш опыт, он повлиял\nна то, кто мы есть сегодня. Мы можем использовать знания, которые мы приобрели\nв результате анализа своих ошибок, используя эту мудрость, для того чтобы\nруководствоваться ею при принятии решений сегодня.\n\nПринять себя — значит принять себя во всех отношениях — со всеми достоинствами\nи недостатками, победами и неудачами. Оставшиеся в нас не проработанные\nчувства стыда и вины могут парализовать нас и помешать нам продвигаться вперед\nпо жизни. Наиболее значительное исправление ошибок, совершенных нами в\nпрошлом, мы делаем просто за счет того, что сегодня поступаем по-другому. Мы\nстремимся к самосовершенствованию, и мера успеха определяется путем\nсопоставления того, кем мы были, с тем, кем мы стали в настоящее время.\n\nБудучи людьми, мы будем продолжать совершать ошибки; однако, нам не нужно\nповторять одни и те же ошибки снова и снова. Оглянувшись назад в прошлое и\nувидев, что мы изменились и повзрослели, мы обретем надежду на будущее. Самое\nлучшее для нас еще впереди.\n\n**ТОЛЬКО СЕГОДНЯ:** Я добьюсь самых хороших результатов от того, чем\nрасполагаю сегодня. С каждый днем я буду узнавать что-нибудь новое, что будет\nпомогать мне завтра.\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };