import { f as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_B8tmmdD1.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p><em>“Среди беспорядка, который царит в мире, я чувствую, какое это счастье — быть\nтам, где я сейчас нахожусь.”</em></p>\n<p>Основной текст, Истории</p>\n<p>Иногда помимо нашего желания до нас доходят новости, мы слышим так много\nисторий о жестокости и ужасах. Когда мы употребляли, многие из нас привыкали к\nжестокости. Сквозь завесу нашей наркомании мы очень редко видели то, что\nпроисходит в мире, это нас не трогало. Будучи чистыми, однако, многие из нас\nобнаружили, что мы чрезвычайно чувствительны к тому, что происходит вокруг\nнас. Но, как выздоравливающие люди, что мы можем сделать, чтобы этот мир стал\nлучше?</p>\n<p>Когда мы замечаем, что нас выводит из себя беспорядок, царящий в мире, мы\nможем найти успокоение в молитве и медитации. Когда нам кажется, что все\nперевернуто с ног на голову, наш контакт с Высшей Силой может стать нашим\nспокойным островком посреди любого шторма. Если мы сосредотачиваемся на нашем\nдуховном пути, мы можем умиротворенно ответить на все свои страхи. И когда мы\nсами умиротворены, дух умиротворенности входит в окружающий нас мир. Как\nвыздоравливающие люди, мы можем способствовать позитивным переменам, делая\nвсе, что в наших силах, применяя программные принципы.</p>\n<p><strong>ТОЛЬКО СЕГОДНЯ:</strong> Я буду укреплять мир вокруг себя тем, что буду жить,\nговорить и действовать умиротворенно в своей собственной жизни.</p>";

				const frontmatter = {"title":"7 мая. От беспокойства к умиротворенности","description":"Ежедневные размышления АН - 7 мая. От беспокойства к умиротворенности","id":"128","heroImage":"","pubDate":"2023-05-04T00:00:00.000Z","moth":"maj"};
				const file = "/Users/samgold/Desktop/Проекты/12 проектов/daily-na/src/content/diaries/maj/daily_07-05.md";
				const url = undefined;
				function rawContent() {
					return "\n_“Среди беспорядка, который царит в мире, я чувствую, какое это счастье — быть\nтам, где я сейчас нахожусь.”_\n\nОсновной текст, Истории\n\nИногда помимо нашего желания до нас доходят новости, мы слышим так много\nисторий о жестокости и ужасах. Когда мы употребляли, многие из нас привыкали к\nжестокости. Сквозь завесу нашей наркомании мы очень редко видели то, что\nпроисходит в мире, это нас не трогало. Будучи чистыми, однако, многие из нас\nобнаружили, что мы чрезвычайно чувствительны к тому, что происходит вокруг\nнас. Но, как выздоравливающие люди, что мы можем сделать, чтобы этот мир стал\nлучше?\n\nКогда мы замечаем, что нас выводит из себя беспорядок, царящий в мире, мы\nможем найти успокоение в молитве и медитации. Когда нам кажется, что все\nперевернуто с ног на голову, наш контакт с Высшей Силой может стать нашим\nспокойным островком посреди любого шторма. Если мы сосредотачиваемся на нашем\nдуховном пути, мы можем умиротворенно ответить на все свои страхи. И когда мы\nсами умиротворены, дух умиротворенности входит в окружающий нас мир. Как\nвыздоравливающие люди, мы можем способствовать позитивным переменам, делая\nвсе, что в наших силах, применяя программные принципы.\n\n**ТОЛЬКО СЕГОДНЯ:** Я буду укреплять мир вокруг себя тем, что буду жить,\nговорить и действовать умиротворенно в своей собственной жизни.\n";
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
