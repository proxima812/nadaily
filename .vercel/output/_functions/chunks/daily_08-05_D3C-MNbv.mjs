import { f as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_B8tmmdD1.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p><em>“Мы поняли, что имеем право не знать ответы на все вопросы, потому что это\nпозволяет нам учиться жить по-новому.”</em></p>\n<p>Основной текст, с. 109</p>\n<p>В каком-то смысле наркомания — это великий учитель. И если она больше ничего\nнам не дает, то это может научить нас смирению. Мы слышим высказывания о том,\nчто наши самые лучшие знания в итоге привели нас в NA. Теперь, когда мы попали\nсюда, мы попали сюда, чтобы учиться.</p>\n<p>Сообщество NA — это замечательная обучающая среда для выздоравливающего\nнаркомана. Мы вовсе не обречены чувствовать себя идиотами на собраниях. Вместо\nэтого мы находим других людей, которые пришли оттуда же, откуда и мы, и\nкоторые нашли выход. Все, что нам нужно сделать — это признать, что у нас нет\nответов на все вопросы, а затем слушать, как другие делятся тем, что для них\nработает.</p>\n<p>Как выздоравливающим наркоманам и как любому человеку, нам есть, чему учиться.\nДругие наркоманы и, вообще, другие люди могут многому научить нас, рассказать\nо том, что работает, а что нет. До тех пор, пока мы остаемся открытыми для\nобучения, у нас есть возможность узнать об опыте других людей.</p>\n<p><strong>ТОЛЬКО СЕГОДНЯ:</strong> Я признаю, что у меня нет ответов на все вопросы. Я буду\nнаблюдать и прислушиваться к опыту других, чтобы найти ответы, которые мне\nнеобходимы.</p>";

				const frontmatter = {"title":"8 мая. Способны научиться","description":"Ежедневные размышления АН - 8 мая. Способны научиться","id":"129","heroImage":"","pubDate":"2023-05-04T00:00:00.000Z","moth":"maj"};
				const file = "/Users/samgold/Desktop/Проекты/12 проектов/daily-na/src/content/diaries/maj/daily_08-05.md";
				const url = undefined;
				function rawContent() {
					return "\n_“Мы поняли, что имеем право не знать ответы на все вопросы, потому что это\nпозволяет нам учиться жить по-новому.”_\n\nОсновной текст, с. 109\n\nВ каком-то смысле наркомания — это великий учитель. И если она больше ничего\nнам не дает, то это может научить нас смирению. Мы слышим высказывания о том,\nчто наши самые лучшие знания в итоге привели нас в NA. Теперь, когда мы попали\nсюда, мы попали сюда, чтобы учиться.\n\nСообщество NA — это замечательная обучающая среда для выздоравливающего\nнаркомана. Мы вовсе не обречены чувствовать себя идиотами на собраниях. Вместо\nэтого мы находим других людей, которые пришли оттуда же, откуда и мы, и\nкоторые нашли выход. Все, что нам нужно сделать — это признать, что у нас нет\nответов на все вопросы, а затем слушать, как другие делятся тем, что для них\nработает.\n\nКак выздоравливающим наркоманам и как любому человеку, нам есть, чему учиться.\nДругие наркоманы и, вообще, другие люди могут многому научить нас, рассказать\nо том, что работает, а что нет. До тех пор, пока мы остаемся открытыми для\nобучения, у нас есть возможность узнать об опыте других людей.\n\n**ТОЛЬКО СЕГОДНЯ:** Я признаю, что у меня нет ответов на все вопросы. Я буду\nнаблюдать и прислушиваться к опыту других, чтобы найти ответы, которые мне\nнеобходимы.\n";
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
