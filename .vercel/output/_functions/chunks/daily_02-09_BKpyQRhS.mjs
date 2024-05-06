import { f as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_B8tmmdD1.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p><em>“Ежедневная работа по программе Двенадцати Шагов изменяет нас, уводит от\nсостояния, в котором мы находились, и препоручает Высшей Силе”.</em></p>\n<p>Основной текст, с. 104</p>\n<p>Кем мы были и кем мы стали? Существуют два пути ответить на этот вопрос. Один\nочень простой: мы пришли в Анонимные Наркоманы как наркоманы, когда наша\nнаркомания убивала нас. В АН мы получили свободу от наваждения употреблять и\nнашей компульсивности в отношении наркотиков. И наша жизнь изменилась.</p>\n<p>Но это только верхушка айсберга. Кем мы были на <em>самом деле</em>? В прошлом мы\nбыли людьми, лишенными сил или направления. У нас было чувство, что наша жизнь\nне имеет смысла и основания. Наша жизнь не представляла для нас большого\nсмысла, не больше, чем для наших семей, друзей или соседей.</p>\n<p>Кем мы становимся на <em>самом деле</em>? Сегодня мы не просто чистые наркоманы, мы —\nлюди с чувством направления, цели и с Силой более могущественной, чем наша\nсобственная. Путем повседневной работы по программе Двенадцати Шагов мы начали\nпонимать, насколько наркомания деформировала наши чувства, побуждения и\nповедение. Постепенно, разрушительная сила нашей болезни заменилась дающим\nжизнь воздействием Высшей Силы.</p>\n<p>Выздоровление означает не просто чистоту — это значит <em>обретение</em> <em>силы</em>. Мы\nсделали больше, чем просто избавились от плохих привычек; мы становимся новыми\nлюдьми, под руководством Высшей Силы.</p>\n<p><strong>ТОЛЬКО СЕГОДНЯ:</strong> Руководство, которое мне необходимо для того, чтобы стать\nновым человеком, уже наготове под рукой. Сегодня я уйду дальше от своей\nпрежней бесцельности и придвинусь ближе к Высшей Силе.</p>";

				const frontmatter = {"title":"2 сентября. С Высшей Силой","description":"Ежедневные размышления АН - 2 сентября. С Высшей Силой","id":"246","heroImage":"","pubDate":"2023-05-04T00:00:00.000Z","moth":"sentyabr"};
				const file = "/Users/samgold/Desktop/Проекты/12 проектов/daily-na/src/content/diaries/sentyabr/daily_02-09.md";
				const url = undefined;
				function rawContent() {
					return "\n_“Ежедневная работа по программе Двенадцати Шагов изменяет нас, уводит от\nсостояния, в котором мы находились, и препоручает Высшей Силе”._\n\nОсновной текст, с. 104\n\nКем мы были и кем мы стали? Существуют два пути ответить на этот вопрос. Один\nочень простой: мы пришли в Анонимные Наркоманы как наркоманы, когда наша\nнаркомания убивала нас. В АН мы получили свободу от наваждения употреблять и\nнашей компульсивности в отношении наркотиков. И наша жизнь изменилась.\n\nНо это только верхушка айсберга. Кем мы были на _самом деле_? В прошлом мы\nбыли людьми, лишенными сил или направления. У нас было чувство, что наша жизнь\nне имеет смысла и основания. Наша жизнь не представляла для нас большого\nсмысла, не больше, чем для наших семей, друзей или соседей.\n\nКем мы становимся на _самом деле_? Сегодня мы не просто чистые наркоманы, мы —\nлюди с чувством направления, цели и с Силой более могущественной, чем наша\nсобственная. Путем повседневной работы по программе Двенадцати Шагов мы начали\nпонимать, насколько наркомания деформировала наши чувства, побуждения и\nповедение. Постепенно, разрушительная сила нашей болезни заменилась дающим\nжизнь воздействием Высшей Силы.\n\nВыздоровление означает не просто чистоту — это значит _обретение_ _силы_. Мы\nсделали больше, чем просто избавились от плохих привычек; мы становимся новыми\nлюдьми, под руководством Высшей Силы.\n\n**ТОЛЬКО СЕГОДНЯ:** Руководство, которое мне необходимо для того, чтобы стать\nновым человеком, уже наготове под рукой. Сегодня я уйду дальше от своей\nпрежней бесцельности и придвинусь ближе к Высшей Силе.\n";
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