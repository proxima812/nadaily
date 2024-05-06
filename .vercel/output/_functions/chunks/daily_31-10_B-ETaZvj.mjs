import { f as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_B8tmmdD1.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p><em>«Этот продолжающийся процесс зависит от нашего отношения к любящему Богу,\nкоторый заботится о нас и делает для нас то, что сами для себя мы сделать не в\nсостоянии».</em></p>\n<p>Основной текст, с. 120</p>\n<p>Работа по Двенадцати Шагам Анонимных Наркоманов позволяет нам заново начать\nсвою жизнь и дает определенное руководство для жизни в этом мире. Но шаги —\nэто больше, чем просто новая жизнь. Когда мы стараемся изо всех сил в работе\nпо шагам, мы развиваем взаимоотношения со своей Высшей Силой.</p>\n<p>В Третьем Шаге мы решаем позволить любящему Богу влиять на нашу жизнь. Все\nмужество, вера и готовность, которые необходимы для дальнейшей успешной работы\nпо шагам, проистекают от этого решения. В Седьмом Шаге мы идем еще дальше и\n<em>просим</em> Бога изменить нашу жизнь. Одиннадцатый Шаг — это наш способ\nсовершенствовать взаимоотношения с Богом.</p>\n<p>Выздоровление — это процесс роста и перемен, благодаря которым наша жизнь\nобновляется. Двенадцать Шагов — это дорожная карта, особое направление\nкоторому мы следуем, чтобы продолжать свое выздоровление. Но поддержка,\nкоторая нам необходима, чтобы продвигаться от шага к шагу, исходит от веры в\nВысшую Силу, от убеждения, что любая ее воля будет хороша для нас. Вера\nпридает нам мужество действовать. Каждый шаг, по которому мы работаем,\nподдерживается нашими отношениями с любящим Богом.</p>\n<p><strong>ТОЛЬКО СЕГОДНЯ:</strong> Я буду помнить, что источником моего мужества и\nцелеустремленности являются мои взаимоотношения с Высшей Силой. ****</p>";

				const frontmatter = {"title":"31 октября. Наши отношения с Высшей Силой","description":"Ежедневные размышления АН - 31 октября. Наши отношения с Высшей Силой","id":"305","heroImage":"","pubDate":"2023-05-04T00:00:00.000Z","moth":"oktyabr"};
				const file = "/Users/samgold/Desktop/Проекты/12 проектов/daily-na/src/content/diaries/oktyabr/daily_31-10.md";
				const url = undefined;
				function rawContent() {
					return "\n_«Этот продолжающийся процесс зависит от нашего отношения к любящему Богу,\nкоторый заботится о нас и делает для нас то, что сами для себя мы сделать не в\nсостоянии»._\n\nОсновной текст, с. 120\n\nРабота по Двенадцати Шагам Анонимных Наркоманов позволяет нам заново начать\nсвою жизнь и дает определенное руководство для жизни в этом мире. Но шаги —\nэто больше, чем просто новая жизнь. Когда мы стараемся изо всех сил в работе\nпо шагам, мы развиваем взаимоотношения со своей Высшей Силой.\n\nВ Третьем Шаге мы решаем позволить любящему Богу влиять на нашу жизнь. Все\nмужество, вера и готовность, которые необходимы для дальнейшей успешной работы\nпо шагам, проистекают от этого решения. В Седьмом Шаге мы идем еще дальше и\n_просим_ Бога изменить нашу жизнь. Одиннадцатый Шаг — это наш способ\nсовершенствовать взаимоотношения с Богом.\n\nВыздоровление — это процесс роста и перемен, благодаря которым наша жизнь\nобновляется. Двенадцать Шагов — это дорожная карта, особое направление\nкоторому мы следуем, чтобы продолжать свое выздоровление. Но поддержка,\nкоторая нам необходима, чтобы продвигаться от шага к шагу, исходит от веры в\nВысшую Силу, от убеждения, что любая ее воля будет хороша для нас. Вера\nпридает нам мужество действовать. Каждый шаг, по которому мы работаем,\nподдерживается нашими отношениями с любящим Богом.\n\n**ТОЛЬКО СЕГОДНЯ:** Я буду помнить, что источником моего мужества и\nцелеустремленности являются мои взаимоотношения с Высшей Силой. \\*\\*\\*\\*\n";
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