import { f as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_B8tmmdD1.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p><em>“Мы…получаем ясное представление о том, что дефекты характера делают с нашей\nжизнью. У нас появляется страстное желание освободиться от этих дефектов.”</em></p>\n<p>Основной текст, с. 42</p>\n<p>Полностью подготовиться к тому, чтобы избавиться от дефектов характера, — это\nдолгий процесс, и часто на это уходит целая жизнь. Наша готовность растет\nпрямо пропорционально нашему знанию этих дефектов и того вреда, который они\nпричиняют.</p>\n<p>Нам может быть очень больно видеть, какое разрушительное воздействие наши\nнедостатки оказывают на нашу жизнь и жизни тех, кто нас окружает. Если это\nтак, то самое лучшее, что мы можем сделать, — это попросить Высшую Силу\nизбавить нас от пороков, преграждающих наш путь к прогрессу.</p>\n<p>Если мы избавляемся от своих недостатков и видим, как они постепенно уходят из\nнашей жизни, мы также замечаем, что любящий Бог замещает их отсутствие\nположительными качествами. Вместо трусости мы обретаем мужество. Вместо\nжадности — щедрость. Наш иллюзорный взгляд на самих себя исчезает и сменяется\nчестностью перед собой и принятием себя.</p>\n<p>Да, если мы полностью подготовимся, то перемены неизбежны. Каждый новый\nуровень готовности приносит свои подарки. Наша личность меняется, и вскоре мы\nобнаруживаем, что наша готовность больше не подпитывается болью, а только\nстрастным желанием расти духовно.</p>\n<p><strong>ТОЛЬКО СЕГОДНЯ:</strong> Я буду повышать свою готовность, все лучше узнавая свои\nнедостатки.</p>";

				const frontmatter = {"title":"10 мая. Полностью подготовиться","description":"Ежедневные размышления АН - 10 мая. Полностью подготовиться","id":"131","heroImage":"","pubDate":"2023-05-04T00:00:00.000Z","moth":"maj"};
				const file = "/Users/samgold/Desktop/Проекты/12 проектов/daily-na/src/content/diaries/maj/daily_10-05.md";
				const url = undefined;
				function rawContent() {
					return "\n_“Мы…получаем ясное представление о том, что дефекты характера делают с нашей\nжизнью. У нас появляется страстное желание освободиться от этих дефектов.”_\n\nОсновной текст, с. 42\n\nПолностью подготовиться к тому, чтобы избавиться от дефектов характера, — это\nдолгий процесс, и часто на это уходит целая жизнь. Наша готовность растет\nпрямо пропорционально нашему знанию этих дефектов и того вреда, который они\nпричиняют.\n\nНам может быть очень больно видеть, какое разрушительное воздействие наши\nнедостатки оказывают на нашу жизнь и жизни тех, кто нас окружает. Если это\nтак, то самое лучшее, что мы можем сделать, — это попросить Высшую Силу\nизбавить нас от пороков, преграждающих наш путь к прогрессу.\n\nЕсли мы избавляемся от своих недостатков и видим, как они постепенно уходят из\nнашей жизни, мы также замечаем, что любящий Бог замещает их отсутствие\nположительными качествами. Вместо трусости мы обретаем мужество. Вместо\nжадности — щедрость. Наш иллюзорный взгляд на самих себя исчезает и сменяется\nчестностью перед собой и принятием себя.\n\nДа, если мы полностью подготовимся, то перемены неизбежны. Каждый новый\nуровень готовности приносит свои подарки. Наша личность меняется, и вскоре мы\nобнаруживаем, что наша готовность больше не подпитывается болью, а только\nстрастным желанием расти духовно.\n\n**ТОЛЬКО СЕГОДНЯ:** Я буду повышать свою готовность, все лучше узнавая свои\nнедостатки.\n";
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
