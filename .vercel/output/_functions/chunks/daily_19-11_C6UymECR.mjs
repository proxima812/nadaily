import { f as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_B8tmmdD1.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p><em>«… наркоман с самого начала смог найти столько примеров выздоравливающих за\nмногие годы людей, сколько ему нужно, чтобы убедить себя, что он может стать\nчистым».</em></p>\n<p>Основной текст, с. 106</p>\n<p>Многие из нас пришли на первое собрание и подвергли критике почти все, что\nувидели. Это произошло, потому что тогда мы еще не были уверены, что АН нам\nподходит. То ли из-за того, что считали, что никто не переживал столько,\nсколько пережили мы, то ли из-за того, что тогда мы еще не достаточно\nнастрадались. Но по мере того, как мы слушали то, что говорят другие, мы\nначинали слышать новый для нас язык, понятный без слов, который строится на\nприветливости, доверии и вере: язык сопереживания. Мы испытали желание\nпринадлежать к этому сообществу и поэтому продолжали слушать.</p>\n<p>Мы находим все необходимое для того, чтобы понимать и говорить на языке\nсопереживания. Чтобы понимать этот особый язык, надо слушать сердцем. Язык\nсопереживания немногословен; он лучше воспринимается чувствами, чем на слух.\nЭто не язык проповеди или лекции — это язык сердца. Он может добраться до\nнаркомана и затронуть его дух без единого произнесенного слова.</p>\n<p>Владение языком сопереживания приходит к нам с практикой. Чем больше мы им\nпользуемся для общения с другими наркоманами и Высшей Силой, тем лучше\nпонимаем этот язык. Благодаря ему, мы возвращаемся на собрания снова и снова.</p>\n<p><strong>ТОЛЬКО СЕГОДНЯ:</strong> Я буду слушать сердцем. С каждым днем я буду все лучше и\nлучше узнавать язык сопереживания.</p>";

				const frontmatter = {"title":"19 ноября. Язык сопереживания","description":"Ежедневные размышления АН - 19 ноября. Язык сопереживания","id":"324","heroImage":"","pubDate":"2023-05-04T00:00:00.000Z","moth":"noyabr"};
				const file = "/Users/samgold/Desktop/Проекты/12 проектов/daily-na/src/content/diaries/noyabr/daily_19-11.md";
				const url = undefined;
				function rawContent() {
					return "\n_«… наркоман с самого начала смог найти столько примеров выздоравливающих за\nмногие годы людей, сколько ему нужно, чтобы убедить себя, что он может стать\nчистым»._\n\nОсновной текст, с. 106\n\nМногие из нас пришли на первое собрание и подвергли критике почти все, что\nувидели. Это произошло, потому что тогда мы еще не были уверены, что АН нам\nподходит. То ли из-за того, что считали, что никто не переживал столько,\nсколько пережили мы, то ли из-за того, что тогда мы еще не достаточно\nнастрадались. Но по мере того, как мы слушали то, что говорят другие, мы\nначинали слышать новый для нас язык, понятный без слов, который строится на\nприветливости, доверии и вере: язык сопереживания. Мы испытали желание\nпринадлежать к этому сообществу и поэтому продолжали слушать.\n\nМы находим все необходимое для того, чтобы понимать и говорить на языке\nсопереживания. Чтобы понимать этот особый язык, надо слушать сердцем. Язык\nсопереживания немногословен; он лучше воспринимается чувствами, чем на слух.\nЭто не язык проповеди или лекции — это язык сердца. Он может добраться до\nнаркомана и затронуть его дух без единого произнесенного слова.\n\nВладение языком сопереживания приходит к нам с практикой. Чем больше мы им\nпользуемся для общения с другими наркоманами и Высшей Силой, тем лучше\nпонимаем этот язык. Благодаря ему, мы возвращаемся на собрания снова и снова.\n\n**ТОЛЬКО СЕГОДНЯ:** Я буду слушать сердцем. С каждым днем я буду все лучше и\nлучше узнавать язык сопереживания.\n";
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