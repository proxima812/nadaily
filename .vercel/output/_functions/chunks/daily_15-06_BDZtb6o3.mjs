import { f as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_B8tmmdD1.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p><em>«Многие из нас «держатся» за свои страхи, сомнения, отвращение или ненависть\nк себе из-за того, что существует ложная безопасность в уже знакомой нам боли.\nКажется, безопаснее ухватиться за то, что мы знаем, чем избавиться от этого\nради чего-то неизвестного».</em></p>\n<p>Основной текст, с. 41</p>\n<p>Мы часто слышали, как говорят, что «мы начнем меняться лишь тогда, когда боль\nоставаться тем, что мы есть, станет сильнее, чем боль от перемен». Наш страх\nмешает нам расти, когда мы боимся прекратить отношения, изменить карьеру,\nпосетить новые собрания, завести новую дружбу или попробовать сделать что-то\nнеординарное. Мы остаемся в ситуациях, которые нас больше не устраивают,\nгораздо дольше, чем это можно переносить, просто потому, что мы чувствуем, что\nзнакомые ситуации безопаснее, чем неизвестные.</p>\n<p>Любому изменению сопутствует непреодолимый страх. «А что, если я останусь\nодиноким навсегда?», — думаем мы, когда принимаем решение покинуть любовника.\n«А что, если я окажусь некомпетентным?», — спрашиваем мы себя, когда\nнамереваемся изменить карьеру. Мы можем игнорировать посещение новых собраний\nиз-за страха, что нам придется сближаться с людьми. Наше сознание вырабатывает\nсотни отговорок, чтобы оставаться на своем старом месте, из-за страха испытать\nчто-то новое.</p>\n<p>Мы обнаруживаем, что в основном наша боль исходит не от перемен, а от\n<em>сопротивления</em> переменам. В АН мы учимся тому, что перемены — это то, что\nпродвигает нас вперед по жизни. Новые друзья, новые отношения, новые интересы\nи ситуации вытеснят старые. Вместе с этими новыми вещами в нашей жизни мы\nнаходим новые радости и любовь.</p>\n<p><strong>ТОЛЬКО СЕГОДНЯ:</strong> Я избавлюсь от старого, распахну объятия для нового и буду\nрасти.</p>";

				const frontmatter = {"title":"15 июня. Сопротивление изменениям","description":"Ежедневные размышления АН - 15 июня. Сопротивление изменениям","id":"167","heroImage":"","pubDate":"2023-05-04T00:00:00.000Z","moth":"iyun"};
				const file = "/Users/samgold/Desktop/Проекты/12 проектов/daily-na/src/content/diaries/iyun/daily_15-06.md";
				const url = undefined;
				function rawContent() {
					return "\n_«Многие из нас «держатся» за свои страхи, сомнения, отвращение или ненависть\nк себе из-за того, что существует ложная безопасность в уже знакомой нам боли.\nКажется, безопаснее ухватиться за то, что мы знаем, чем избавиться от этого\nради чего-то неизвестного»._\n\nОсновной текст, с. 41\n\nМы часто слышали, как говорят, что «мы начнем меняться лишь тогда, когда боль\nоставаться тем, что мы есть, станет сильнее, чем боль от перемен». Наш страх\nмешает нам расти, когда мы боимся прекратить отношения, изменить карьеру,\nпосетить новые собрания, завести новую дружбу или попробовать сделать что-то\nнеординарное. Мы остаемся в ситуациях, которые нас больше не устраивают,\nгораздо дольше, чем это можно переносить, просто потому, что мы чувствуем, что\nзнакомые ситуации безопаснее, чем неизвестные.\n\nЛюбому изменению сопутствует непреодолимый страх. «А что, если я останусь\nодиноким навсегда?», — думаем мы, когда принимаем решение покинуть любовника.\n«А что, если я окажусь некомпетентным?», — спрашиваем мы себя, когда\nнамереваемся изменить карьеру. Мы можем игнорировать посещение новых собраний\nиз-за страха, что нам придется сближаться с людьми. Наше сознание вырабатывает\nсотни отговорок, чтобы оставаться на своем старом месте, из-за страха испытать\nчто-то новое.\n\nМы обнаруживаем, что в основном наша боль исходит не от перемен, а от\n_сопротивления_ переменам. В АН мы учимся тому, что перемены — это то, что\nпродвигает нас вперед по жизни. Новые друзья, новые отношения, новые интересы\nи ситуации вытеснят старые. Вместе с этими новыми вещами в нашей жизни мы\nнаходим новые радости и любовь.\n\n**ТОЛЬКО СЕГОДНЯ:** Я избавлюсь от старого, распахну объятия для нового и буду\nрасти.\n";
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
