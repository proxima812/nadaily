import { f as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_B8tmmdD1.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p><em>«Предположения о том, как мы будем возмещать ущерб, могут быть главным\nпрепятствием, как в составлении списка, так и в преисполнении готовностью».</em></p>\n<p>Основной текст с. 47</p>\n<p>Восьмой Шаг предлагает нам преисполниться готовностью возместить ущерб всем,\nкому мы его причинили. Когда мы подходим к этому шагу, мы можем задать себе\nвопрос, каков будет результат нашего возмещения. Будем ли мы прощены?\nОсвободимся ли от застаревшей вины? Или человек, которому мы навредили,\nизмажет нас смолой и изваляет в перьях?</p>\n<p>Нам нужно отказаться от своего стремления быть прощенными, если мы хотим\nполучить духовную пользу от Восьмого и Девятого Шагов. Если мы подходим к этим\nшагам, чего-то ожидая, то, скорее всего, мы будем разочарованы результатами.\nМы хотим спросить себя, питаем ли мы надежду на то, что получим прощение от\nчеловека, которому возмещаем ущерб. Или мы надеемся на то, что какой-то\nдобросердечный кредитор простит нам наши долги, пустив слезу над нашей\nстрашной историей со счастливым концом.</p>\n<p>Нам нужно быть готовыми возмещать ущерб, не зависимо от результата. Мы можем\nпланировать возмещение, но не можем планировать результат. И хотя нам не\nгарантировано полное прощение от каждого, кому мы навредили, мы научимся\nпрощать себя. Совершив возмещение, мы поймем, что нам больше не нужно нести на\nсебе груз прошлого.</p>\n<p><strong>ТОЛЬКО СЕГОДНЯ:</strong> Я перестану чего-либо ожидать от людей, которым я возмещаю\nущерб.</p>";

				const frontmatter = {"title":"6 октября.  Возмещать ущерб, ничего не ожидая","description":"Ежедневные размышления АН - 6 октября.  Возмещать ущерб, ничего не ожидая","id":"280","heroImage":"","pubDate":"2023-05-04T00:00:00.000Z","moth":"oktyabr"};
				const file = "/Users/samgold/Desktop/Проекты/12 проектов/daily-na/src/content/diaries/oktyabr/daily_06-10.md";
				const url = undefined;
				function rawContent() {
					return "\n_«Предположения о том, как мы будем возмещать ущерб, могут быть главным\nпрепятствием, как в составлении списка, так и в преисполнении готовностью»._\n\nОсновной текст с. 47\n\nВосьмой Шаг предлагает нам преисполниться готовностью возместить ущерб всем,\nкому мы его причинили. Когда мы подходим к этому шагу, мы можем задать себе\nвопрос, каков будет результат нашего возмещения. Будем ли мы прощены?\nОсвободимся ли от застаревшей вины? Или человек, которому мы навредили,\nизмажет нас смолой и изваляет в перьях?\n\nНам нужно отказаться от своего стремления быть прощенными, если мы хотим\nполучить духовную пользу от Восьмого и Девятого Шагов. Если мы подходим к этим\nшагам, чего-то ожидая, то, скорее всего, мы будем разочарованы результатами.\nМы хотим спросить себя, питаем ли мы надежду на то, что получим прощение от\nчеловека, которому возмещаем ущерб. Или мы надеемся на то, что какой-то\nдобросердечный кредитор простит нам наши долги, пустив слезу над нашей\nстрашной историей со счастливым концом.\n\nНам нужно быть готовыми возмещать ущерб, не зависимо от результата. Мы можем\nпланировать возмещение, но не можем планировать результат. И хотя нам не\nгарантировано полное прощение от каждого, кому мы навредили, мы научимся\nпрощать себя. Совершив возмещение, мы поймем, что нам больше не нужно нести на\nсебе груз прошлого.\n\n**ТОЛЬКО СЕГОДНЯ:** Я перестану чего-либо ожидать от людей, которым я возмещаю\nущерб.\n";
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
