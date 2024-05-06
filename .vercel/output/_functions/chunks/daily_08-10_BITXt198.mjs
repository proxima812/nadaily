import { f as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_B8tmmdD1.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p><em>«Мы подозреваем, что если мы не будем пользоваться тем, что имеем, то\nпотеряем это».</em></p>\n<p>Основной текст, с. 94</p>\n<p>Наркомания стала нашим образом жизни и ее смыслом — сумрачным, болезненным, но\nсмыслом, тем не менее. Программа выздоровления Анонимных Наркоманов\nпредоставляет нам новый образ жизни, который призван заменить старую рутину. И\nвместе с этим образом жизни приходит и новый смысл, полный света и надежды.</p>\n<p>Что это за новый образ жизни? Вместо изоляции мы обретаем сообщество. Вместо\nтого, чтобы жить, слепо повторяя одни и те же ошибки из раза в раз, мы\nрегулярно исследуем себя, обретая свободу сохранять то, что помогает нам\nрасти, и исключать то, что мешает. Вместо того, чтобы постоянно пытаться\nдостичь чего-то своими ограниченными силами, мы развиваем сознательный контакт\nс Силой, более могущественной, чем наша собственная.</p>\n<p>Наша жизнь должна быть правильно выстроена. Чтобы поддерживать выздоровление,\nнам нужно поддерживать и новый образ жизни, которому научила нас программа.\nРегулярно уделяя внимание этому образу, мы сможем поддержать свободу от\nсмертельной болезни наркомании, которую мы нашли, и сохранить смысл, который\nвыздоровление привнесло в нашу жизнь.</p>\n<p><strong>ТОЛЬКО СЕГОДНЯ:</strong> Я начну новый образ жизни: регулярное поддержание моего\nвыздоровления.</p>";

				const frontmatter = {"title":"8 октября. Новый образ жизни","description":"Ежедневные размышления АН - 8 октября. Новый образ жизни","id":"282","heroImage":"","pubDate":"2023-05-04T00:00:00.000Z","moth":"oktyabr"};
				const file = "/Users/samgold/Desktop/Проекты/12 проектов/daily-na/src/content/diaries/oktyabr/daily_08-10.md";
				const url = undefined;
				function rawContent() {
					return "\n_«Мы подозреваем, что если мы не будем пользоваться тем, что имеем, то\nпотеряем это»._\n\nОсновной текст, с. 94\n\nНаркомания стала нашим образом жизни и ее смыслом — сумрачным, болезненным, но\nсмыслом, тем не менее. Программа выздоровления Анонимных Наркоманов\nпредоставляет нам новый образ жизни, который призван заменить старую рутину. И\nвместе с этим образом жизни приходит и новый смысл, полный света и надежды.\n\nЧто это за новый образ жизни? Вместо изоляции мы обретаем сообщество. Вместо\nтого, чтобы жить, слепо повторяя одни и те же ошибки из раза в раз, мы\nрегулярно исследуем себя, обретая свободу сохранять то, что помогает нам\nрасти, и исключать то, что мешает. Вместо того, чтобы постоянно пытаться\nдостичь чего-то своими ограниченными силами, мы развиваем сознательный контакт\nс Силой, более могущественной, чем наша собственная.\n\nНаша жизнь должна быть правильно выстроена. Чтобы поддерживать выздоровление,\nнам нужно поддерживать и новый образ жизни, которому научила нас программа.\nРегулярно уделяя внимание этому образу, мы сможем поддержать свободу от\nсмертельной болезни наркомании, которую мы нашли, и сохранить смысл, который\nвыздоровление привнесло в нашу жизнь.\n\n**ТОЛЬКО СЕГОДНЯ:** Я начну новый образ жизни: регулярное поддержание моего\nвыздоровления.\n";
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
