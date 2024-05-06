import { f as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_B8tmmdD1.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>«Для нас употреблять наркотики – значит умереть, и часто находится не один, а\nмного путей, ведущих к этому».</p>\n<p>Основной текст, с. 99</p>\n<p>Когда, будучи новичками, мы пришли на свое первое собрание, во многих из нас\nеле теплилась искра жизни. Эта искра – наш дух, и он хочет выжить. Анонимные\nнаркоманы поддерживают этот дух. Любовь сообщества быстро раздувает эту искру\nв пламя. С помощью Двенадцати Шагов и любви других выздоравливающих наркоманов\nмы начинаем расцветать и превращаться в цельных, жизнеспособных людей, какими\nнас хотела бы видеть наша Высшая Сила. Мы начинаем радоваться жизни, находим в\nней смысл. Каждый день мы делаем свой выбор в пользу чистоты, наш дух\nвозродился, и наши отношения с Богом развиваются. Наш дух крепнет с каждым\nднем, если мы делаем свой выбор в пользу чистой жизни.</p>\n<p>Несмотря на тот факт, что жизнь в выздоровлении приносит свои плоды и радости,\nтяга к употреблению может иногда стать непреодолимой. Когда все в нашей жизни\nидет не так, возврат к употреблению может показаться единственным выходом из\nположения. Но мы знаем, какими будут последствия нашего употребления: мы\nутратим свою духовность, которую тщательно взлелеяли. Мы слишком далеко\nпродвинулись по своему духовному пути, чтобы осквернить свой дух употреблением\nнаркотиков. Потушить духовное пламя, которое мы так старались раздуть в\nвыздоровлении, чтобы восстановить свою жизнь – это слишком высокая цена за\nкайф.</p>\n<p><strong>ТОЛЬКО СЕГОДНЯ:</strong> Я благодарен за то, что мой дух силен и жизнеспособен.\nСегодня я проявлю уважение к своему духу тем, что останусь в чистоте.</p>";

				const frontmatter = {"title":"22 июля.  Духовная смерть","description":"Ежедневные размышления АН - 22 июля.  Духовная смерть","id":"204","heroImage":"","pubDate":"2023-05-04T00:00:00.000Z","moth":"iyul"};
				const file = "/Users/samgold/Desktop/Проекты/12 проектов/daily-na/src/content/diaries/iyul/daily_22-07.md";
				const url = undefined;
				function rawContent() {
					return "\n«Для нас употреблять наркотики – значит умереть, и часто находится не один, а\nмного путей, ведущих к этому».\n\nОсновной текст, с. 99\n\nКогда, будучи новичками, мы пришли на свое первое собрание, во многих из нас\nеле теплилась искра жизни. Эта искра – наш дух, и он хочет выжить. Анонимные\nнаркоманы поддерживают этот дух. Любовь сообщества быстро раздувает эту искру\nв пламя. С помощью Двенадцати Шагов и любви других выздоравливающих наркоманов\nмы начинаем расцветать и превращаться в цельных, жизнеспособных людей, какими\nнас хотела бы видеть наша Высшая Сила. Мы начинаем радоваться жизни, находим в\nней смысл. Каждый день мы делаем свой выбор в пользу чистоты, наш дух\nвозродился, и наши отношения с Богом развиваются. Наш дух крепнет с каждым\nднем, если мы делаем свой выбор в пользу чистой жизни.\n\nНесмотря на тот факт, что жизнь в выздоровлении приносит свои плоды и радости,\nтяга к употреблению может иногда стать непреодолимой. Когда все в нашей жизни\nидет не так, возврат к употреблению может показаться единственным выходом из\nположения. Но мы знаем, какими будут последствия нашего употребления: мы\nутратим свою духовность, которую тщательно взлелеяли. Мы слишком далеко\nпродвинулись по своему духовному пути, чтобы осквернить свой дух употреблением\nнаркотиков. Потушить духовное пламя, которое мы так старались раздуть в\nвыздоровлении, чтобы восстановить свою жизнь – это слишком высокая цена за\nкайф.\n\n**ТОЛЬКО СЕГОДНЯ:** Я благодарен за то, что мой дух силен и жизнеспособен.\nСегодня я проявлю уважение к своему духу тем, что останусь в чистоте.\n";
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