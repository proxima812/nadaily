import { f as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_B8tmmdD1.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p><em>«В конце концов, мы убеждаемся, что должны стать честными, в противном случае\nмы снова будем употреблять наркотики».</em></p>\n<p>Основной текст, с. 103</p>\n<p>У каждого есть секреты, правда? У некоторых есть небольшие секреты, те, что\nвызовут лишь небольшое смущение, если всплывут наружу. У других из нас есть\nбольшие секреты, целые области нашей жизни, скрытые за густым, плотным\nтуманом. Большие секреты могут представлять более очевидную, вопиющую\nопасность для нашего выздоровления. Но маленькие секреты тоже приносят вред, и\nдаже более коварный, поскольку мы считаем их «безобидными».</p>\n<p>Большие или маленькие, но наши секреты указывают на то, что есть какой-то\nдуховный аспект нашей жизни, который мы упорно не желаем подчинить принципам\nвыздоровления. Чем дольше мы позволяем нашему своеволию вершить какие-то дела\nв нашей жизни, и чем более рьяно мы отстаиваем свое «право» поступать так и\nдальше, тем больший вред мы наносим себе. Постепенно, те территории нашей\nжизни, которые не подчинены программе, начинают разрастаться, забирая все\nбольше и больше почвы.</p>\n<p>Не зависимо от того, какие у нас секреты — большие или маленькие — рано или\nпоздно они приведут нас к одному и тому же. Нам нужно выбрать: или мы подчиним\n<em>всю</em> свою жизнь своей программе, или мы потеряем выздоровление.</p>\n<p><strong>ТОЛЬКО СЕГОДНЯ:</strong> Я хочу такое выздоровление, которое исходит только от\nполного подчинения программе. <em>Сегодня</em> я поговорю со своим спонсором и открою\nему свои секреты, и большие, и маленькие.</p>";

				const frontmatter = {"title":"14 сентября.  Секреты – это отступные пути","description":"Ежедневные размышления АН - 14 сентября.  Секреты – это отступные пути","id":"258","heroImage":"","pubDate":"2023-05-04T00:00:00.000Z","moth":"sentyabr"};
				const file = "/Users/samgold/Desktop/Проекты/12 проектов/daily-na/src/content/diaries/sentyabr/daily_14-09.md";
				const url = undefined;
				function rawContent() {
					return "\n_«В конце концов, мы убеждаемся, что должны стать честными, в противном случае\nмы снова будем употреблять наркотики»._\n\nОсновной текст, с. 103\n\nУ каждого есть секреты, правда? У некоторых есть небольшие секреты, те, что\nвызовут лишь небольшое смущение, если всплывут наружу. У других из нас есть\nбольшие секреты, целые области нашей жизни, скрытые за густым, плотным\nтуманом. Большие секреты могут представлять более очевидную, вопиющую\nопасность для нашего выздоровления. Но маленькие секреты тоже приносят вред, и\nдаже более коварный, поскольку мы считаем их «безобидными».\n\nБольшие или маленькие, но наши секреты указывают на то, что есть какой-то\nдуховный аспект нашей жизни, который мы упорно не желаем подчинить принципам\nвыздоровления. Чем дольше мы позволяем нашему своеволию вершить какие-то дела\nв нашей жизни, и чем более рьяно мы отстаиваем свое «право» поступать так и\nдальше, тем больший вред мы наносим себе. Постепенно, те территории нашей\nжизни, которые не подчинены программе, начинают разрастаться, забирая все\nбольше и больше почвы.\n\nНе зависимо от того, какие у нас секреты — большие или маленькие — рано или\nпоздно они приведут нас к одному и тому же. Нам нужно выбрать: или мы подчиним\n_всю_ свою жизнь своей программе, или мы потеряем выздоровление.\n\n**ТОЛЬКО СЕГОДНЯ:** Я хочу такое выздоровление, которое исходит только от\nполного подчинения программе. _Сегодня_ я поговорю со своим спонсором и открою\nему свои секреты, и большие, и маленькие.\n";
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
