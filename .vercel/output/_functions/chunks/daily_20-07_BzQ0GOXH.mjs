import { f as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_B8tmmdD1.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p><em>«Мы признали свое бессилие перед наркоманией, признали, что наша жизнь стала\nнеуправляемой»</em></p>\n<p>Шаг Первый</p>\n<p>Первый Шаг начинается со слова «мы», и на то есть причина. Признаться вслух в\nнашем бессилии — это очень сильно. И когда мы идем на группу и делаем это\nпризнание, мы обретаем не просто личную силу. Мы становимся членами, частью\nколлективного «мы», которое позволяет нам вместе выздоравливать от наркомании.\nВместе с членством в АН приходит богатый опыт: опыт других наркоманов, который\nнашли способ лечить свою болезнь.</p>\n<p>Больше нам не надо в одиночку ломать голову над тем, как справиться со своей\nнаркоманией. Когда мы честно признаем свою беспомощность перед наркоманией, мы\nможем начинать искать путь к лучшей жизни. Мы не будем искать в одиночку — мы\nв хорошей компании.</p>\n<p><strong>ТОЛЬКО СЕГОДНЯ:</strong> Я начну день с признания своего бессилия перед\nнаркоманией. Я напомню себе, что Первый Шаг начинается со слова «мы», и я буду\nзнать, что мне никогда больше не придется оставаться один на один со своей\nболезнью.</p>";

				const frontmatter = {"title":"20 июля.  Первый Шаг","description":"Ежедневные размышления АН - 20 июля.  Первый Шаг","id":"202","heroImage":"","pubDate":"2023-05-04T00:00:00.000Z","moth":"iyul"};
				const file = "/Users/samgold/Desktop/Проекты/12 проектов/daily-na/src/content/diaries/iyul/daily_20-07.md";
				const url = undefined;
				function rawContent() {
					return "\n_«Мы признали свое бессилие перед наркоманией, признали, что наша жизнь стала\nнеуправляемой»_\n\nШаг Первый\n\nПервый Шаг начинается со слова «мы», и на то есть причина. Признаться вслух в\nнашем бессилии — это очень сильно. И когда мы идем на группу и делаем это\nпризнание, мы обретаем не просто личную силу. Мы становимся членами, частью\nколлективного «мы», которое позволяет нам вместе выздоравливать от наркомании.\nВместе с членством в АН приходит богатый опыт: опыт других наркоманов, который\nнашли способ лечить свою болезнь.\n\nБольше нам не надо в одиночку ломать голову над тем, как справиться со своей\nнаркоманией. Когда мы честно признаем свою беспомощность перед наркоманией, мы\nможем начинать искать путь к лучшей жизни. Мы не будем искать в одиночку — мы\nв хорошей компании.\n\n**ТОЛЬКО СЕГОДНЯ:** Я начну день с признания своего бессилия перед\nнаркоманией. Я напомню себе, что Первый Шаг начинается со слова «мы», и я буду\nзнать, что мне никогда больше не придется оставаться один на один со своей\nболезнью.\n";
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
