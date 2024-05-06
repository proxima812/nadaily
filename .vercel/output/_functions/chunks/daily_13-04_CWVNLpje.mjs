import { f as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_B8tmmdD1.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p><em>“Все эти попытки ещё дальше уводили нас в нашу зависимость”</em></p>\n<p>Базовый текст, с.21</p>\n<p>(“… угодничество ещё дальше уводило нас в нашу зависимость…”)</p>\n<p>Когда другие одобряют наши действия и слова, мы чувствуем себя хорошо. Их\nмнение о нас и то, как оно действует на наши чувства, может иметь\nположительную сторону. Чужое мнение помогает нам чувствовать себя хорошо,\nкогда мы идём правильным курсом, и стимулирует наши дальнейшие действия на\nэтом пути. Но когда речь идёт об угодничестве мы подразумеваем совершенно\nдругое. Угодничая, мы совершаем правильные или неправильные действия с одной\nлишь целью – получить одобрение другого человека.</p>\n<p>Низкая самооценка может заставлять нас думать, что нам обязательно нужно чьё-\nто одобрение, чтобы хорошо чувствовать себя. Мы делаем что-либо, думая о том,\nкак нас за это похвалят. Некоторое время мы чувствуем себя хорошо. Но потом\nэто начинает причинять нам боль. Стараясь угодить другому человеку, мы унижаем\nсебя. Мы понимаем, что одобрение других не заполнит нашу внутреннюю пустоту.</p>\n<p>Чувство удовлетворённости, которое мы ищем, может быть достигнуто только\nтогда, когда мы начнём совершать правильные действия направленные на\nдостижение правильного результата. Мы перестаём угодничать, когда мы начнём\nсовершать правильные действия направленные на достижение правильного\nрезультата. Мы перестаём угодничать, когда мы перестаём совершать поступки,\nдля того чтобы нас похвалили и начинаем действовать по воле нашей Высшей Силы.\nКогда мы начнём так поступать мы будем приятно удивлены, обнаружив, что люди,\nкоторые важны для нас будут всё чаще одобрять наше поведение, но что само\nважное, мы сами начнём одобрять себя.</p>\n<p><strong>Только сегодня:</strong> Боже, помоги мне жить в соответствии с духовными\nпринципами. Только тогда Я смогу одобрять сам себя.</p>";

				const frontmatter = {"title":"13 апреля. Угодничество","description":"Ежедневные размышления АН - 13 апреля. Угодничество","id":"104","heroImage":"","pubDate":"2023-05-04T00:00:00.000Z","moth":"april"};
				const file = "/Users/samgold/Desktop/Проекты/12 проектов/daily-na/src/content/diaries/april/daily_13-04.md";
				const url = undefined;
				function rawContent() {
					return "\n_“Все эти попытки ещё дальше уводили нас в нашу зависимость”_\n\nБазовый текст, с.21\n\n(“… угодничество ещё дальше уводило нас в нашу зависимость…”)\n\nКогда другие одобряют наши действия и слова, мы чувствуем себя хорошо. Их\nмнение о нас и то, как оно действует на наши чувства, может иметь\nположительную сторону. Чужое мнение помогает нам чувствовать себя хорошо,\nкогда мы идём правильным курсом, и стимулирует наши дальнейшие действия на\nэтом пути. Но когда речь идёт об угодничестве мы подразумеваем совершенно\nдругое. Угодничая, мы совершаем правильные или неправильные действия с одной\nлишь целью – получить одобрение другого человека.\n\nНизкая самооценка может заставлять нас думать, что нам обязательно нужно чьё-\nто одобрение, чтобы хорошо чувствовать себя. Мы делаем что-либо, думая о том,\nкак нас за это похвалят. Некоторое время мы чувствуем себя хорошо. Но потом\nэто начинает причинять нам боль. Стараясь угодить другому человеку, мы унижаем\nсебя. Мы понимаем, что одобрение других не заполнит нашу внутреннюю пустоту.\n\nЧувство удовлетворённости, которое мы ищем, может быть достигнуто только\nтогда, когда мы начнём совершать правильные действия направленные на\nдостижение правильного результата. Мы перестаём угодничать, когда мы начнём\nсовершать правильные действия направленные на достижение правильного\nрезультата. Мы перестаём угодничать, когда мы перестаём совершать поступки,\nдля того чтобы нас похвалили и начинаем действовать по воле нашей Высшей Силы.\nКогда мы начнём так поступать мы будем приятно удивлены, обнаружив, что люди,\nкоторые важны для нас будут всё чаще одобрять наше поведение, но что само\nважное, мы сами начнём одобрять себя.\n\n**Только сегодня:** Боже, помоги мне жить в соответствии с духовными\nпринципами. Только тогда Я смогу одобрять сам себя.\n";
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