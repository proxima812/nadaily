import { f as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_B8tmmdD1.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p><em>“Там, где прямое возмещение стало небезопасным, возможно косвенное\nвозмещение”.</em></p>\n<p>Основной текст, с. 49</p>\n<p>Когда мы употребляли наркотики, мы сметали все на своем пути ради очередной\nдозы. В результате многие из нас не вполне понимали, кому именно они навредили\nв финансовом или эмоциональном смысле. Когда настало время делать работу над\nошибками по Девятому Шагу, мы поняли, что принесли в жертву так много людей,\nчто вряд ли будет возможно всех вспомнить.</p>\n<p>С помощью спонсора и других выздоравливающих членов АН мы нашли решение, как\nпоступить в этом случае. Мы торжественно объявили, что возмещением безымянного\nущерба будет считаться возмещение расходов нашего сообщества. Мы сосредоточили\nсвое внимание на служении все еще страдающим наркоманам. Таким образом, мы\nнашли способ вернуть свои долги обществу.</p>\n<p>Сегодня, благодаря любви и руководству членов АН, мы больше даем миру, чем\nберем. Мы способствуем тому, чтобы общество жило лучше, так как мы несем весть\nо выздоровлении тем, кого встречаем в своей повседневной жизни.</p>\n<p><strong>ТОЛЬКО СЕГОДНЯ:</strong> Я произведу косвенное возмещение ущерба за счет того, что\nпообщаюсь с наркоманом, который, может быть, нуждается в помощи. Я буду\nстараться вносить свою малую лепту в улучшение жизни своего сообщества.</p>";

				const frontmatter = {"title":"18 июня. Косвенное возмещение ущерба","description":"Ежедневные размышления АН - 18 июня. Косвенное возмещение ущерба","id":"170","heroImage":"","pubDate":"2023-05-04T00:00:00.000Z","moth":"iyun"};
				const file = "/Users/samgold/Desktop/Проекты/12 проектов/daily-na/src/content/diaries/iyun/daily_18-06.md";
				const url = undefined;
				function rawContent() {
					return "\n_“Там, где прямое возмещение стало небезопасным, возможно косвенное\nвозмещение”._\n\nОсновной текст, с. 49\n\nКогда мы употребляли наркотики, мы сметали все на своем пути ради очередной\nдозы. В результате многие из нас не вполне понимали, кому именно они навредили\nв финансовом или эмоциональном смысле. Когда настало время делать работу над\nошибками по Девятому Шагу, мы поняли, что принесли в жертву так много людей,\nчто вряд ли будет возможно всех вспомнить.\n\nС помощью спонсора и других выздоравливающих членов АН мы нашли решение, как\nпоступить в этом случае. Мы торжественно объявили, что возмещением безымянного\nущерба будет считаться возмещение расходов нашего сообщества. Мы сосредоточили\nсвое внимание на служении все еще страдающим наркоманам. Таким образом, мы\nнашли способ вернуть свои долги обществу.\n\nСегодня, благодаря любви и руководству членов АН, мы больше даем миру, чем\nберем. Мы способствуем тому, чтобы общество жило лучше, так как мы несем весть\nо выздоровлении тем, кого встречаем в своей повседневной жизни.\n\n**ТОЛЬКО СЕГОДНЯ:** Я произведу косвенное возмещение ущерба за счет того, что\nпообщаюсь с наркоманом, который, может быть, нуждается в помощи. Я буду\nстараться вносить свою малую лепту в улучшение жизни своего сообщества.\n";
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
