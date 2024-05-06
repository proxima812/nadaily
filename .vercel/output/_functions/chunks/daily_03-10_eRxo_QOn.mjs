import { f as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_B8tmmdD1.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p><em>«Раньше наше «Я» было таким огромным и таким господствующим, теперь же оно\nзанимает скромное положение, так как мы находимся в гармонии с любящим Богом.\nМы понимаем, что идем к более богатой, счастливой и наполненной жизни, если\nосвобождаемся от упрямства и своеволия».</em></p>\n<p>Основной текст, с.126</p>\n<p>Наркомания и своеволие шагают рука об руку. Неуправляемость, которую мы\nпризнали в Первом Шаге, была результатом своеволия в не меньшей степени, чем\nхронического злоупотребления наркотиками. И сегодня своеволие может сделать\nнашу жизнь такой же неуправляемой, какой она была, когда мы употребляли\nнаркотики. Когда <em>наши</em> представления, <em>наши</em> желания, <em>наши</em> требования стоят\nна первом месте в нашей жизни, мы обнаруживаем, что находимся в постоянном\nконфликте со всеми и всем, что нас окружает.</p>\n<p>Своеволие — это показатель того, что мы опираемся на свое эго. Единственный\nспособ освободиться от своеволия и возникающих из-за него конфликтов в нашей\nжизни, — это перестать опираться на свое эго, а вместо этого полагаться на\nруководство и силы, который предлагает нам любящий Бог.</p>\n<p>Нас учат следовать духовным принципам, а не своим эгоистическим желаниям при\nпринятии решений. Нас учат искать руководства Высшей Силы, обладающей более\nшироким взглядом на вещи, чем наш. Когда мы это выполняем, мы находим, что\nнаша жизнь все лучше и лучше вписывается в порядок окружающих нас вещей. Мы\nбольше не исключаем себя из потока жизни; мы становимся его частью и со всей\nполнотой переживаем выздоровление.</p>\n<p><strong>ТОЛЬКО СЕГОДНЯ:</strong> Я ищу свободы от эго и конфликтов, которые создает\nсвоеволие. Я буду пытаться совершенствовать свой сознательный контакт с Богом,\nкак я его понимаю, и буду искать руководство и сил, которые мне необходимы для\nтого, чтобы жить в гармонии со своим миром.</p>";

				const frontmatter = {"title":"3 октября. Расставаясь со своеволием","description":"Ежедневные размышления АН - 3 октября. Расставаясь со своеволием","id":"277","heroImage":"","pubDate":"2023-05-04T00:00:00.000Z","moth":"oktyabr"};
				const file = "/Users/samgold/Desktop/Проекты/12 проектов/daily-na/src/content/diaries/oktyabr/daily_03-10.md";
				const url = undefined;
				function rawContent() {
					return "\n_«Раньше наше «Я» было таким огромным и таким господствующим, теперь же оно\nзанимает скромное положение, так как мы находимся в гармонии с любящим Богом.\nМы понимаем, что идем к более богатой, счастливой и наполненной жизни, если\nосвобождаемся от упрямства и своеволия»._\n\nОсновной текст, с.126\n\nНаркомания и своеволие шагают рука об руку. Неуправляемость, которую мы\nпризнали в Первом Шаге, была результатом своеволия в не меньшей степени, чем\nхронического злоупотребления наркотиками. И сегодня своеволие может сделать\nнашу жизнь такой же неуправляемой, какой она была, когда мы употребляли\nнаркотики. Когда _наши_ представления, _наши_ желания, _наши_ требования стоят\nна первом месте в нашей жизни, мы обнаруживаем, что находимся в постоянном\nконфликте со всеми и всем, что нас окружает.\n\nСвоеволие — это показатель того, что мы опираемся на свое эго. Единственный\nспособ освободиться от своеволия и возникающих из-за него конфликтов в нашей\nжизни, — это перестать опираться на свое эго, а вместо этого полагаться на\nруководство и силы, который предлагает нам любящий Бог.\n\nНас учат следовать духовным принципам, а не своим эгоистическим желаниям при\nпринятии решений. Нас учат искать руководства Высшей Силы, обладающей более\nшироким взглядом на вещи, чем наш. Когда мы это выполняем, мы находим, что\nнаша жизнь все лучше и лучше вписывается в порядок окружающих нас вещей. Мы\nбольше не исключаем себя из потока жизни; мы становимся его частью и со всей\nполнотой переживаем выздоровление.\n\n**ТОЛЬКО СЕГОДНЯ:** Я ищу свободы от эго и конфликтов, которые создает\nсвоеволие. Я буду пытаться совершенствовать свой сознательный контакт с Богом,\nкак я его понимаю, и буду искать руководство и сил, которые мне необходимы для\nтого, чтобы жить в гармонии со своим миром.\n";
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