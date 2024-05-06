import { f as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_B8tmmdD1.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p><em>«Мы сохраняем то, что имеем только с помощью постоянного наблюдения за\nсобой».</em></p>\n<p>Основной текст, с. 71</p>\n<p>Как мы поддерживаем бдительность в выздоровлении? Для начала, мы осознаем, что\nбольны неизлечимой болезнью. Не важно, как долго мы остаемся чистыми, не\nважно, насколько лучше стала наша жизнь, не важно, насколько здоровее мы стали\nдуховно, мы все равно остаемся наркоманами. Наша болезнь затаилась, она ждет,\nготовая в любой момент поймать нас в ловушку, если мы дадим ей такую\nвозможность.</p>\n<p>Бдительность — это наша ежедневная забота. Мы стремимся быть постоянно\nнастороже и готовыми справиться с тревожными проявлениями болезни. Это не\nзначит, что нам следует жить в бессознательном страхе, что произойдет нечто\nужасное, если мы ослабим свою бдительность; нет, нам просто надо знать, что\nопасность существует. Каждый день молиться, регулярно посещать собрания, не\nидти на компромисс с духовными принципами — это значит быть бдительными. Мы\nделаем инвентаризацию, если это необходимо, делимся с другими, когда нас\nпросят об этом, и бережно относимся к своему выздоровлению. И кроме всего\nпрочего, мы остаемся настороже!</p>\n<p>Нам дается однодневная передышка от наркомании, и только до тех пор, пока мы\nсоблюдаем бдительность. Каждый день мы применяем принципы выздоровления во\nвсех наших делах, и каждый вечер мы благодарим нашу Высшую Силу за еще один\nчистый день.</p>\n<p><strong>ТОЛЬКО СЕГОДНЯ:</strong> Я буду бдительным, делая все, что необходимо для защиты\nмоего выздоровления.</p>";

				const frontmatter = {"title":"1 января.  Бдительность","description":"Ежедневные размышления АН - 1 января.  Бдительность","id":"1","heroImage":"","pubDate":"2023-05-04T00:00:00.000Z","moth":"yanvar"};
				const file = "/Users/samgold/Desktop/Проекты/12 проектов/daily-na/src/content/diaries/yanvar/daily_01-01.md";
				const url = undefined;
				function rawContent() {
					return "\n_«Мы сохраняем то, что имеем только с помощью постоянного наблюдения за\nсобой»._\n\nОсновной текст, с. 71\n\nКак мы поддерживаем бдительность в выздоровлении? Для начала, мы осознаем, что\nбольны неизлечимой болезнью. Не важно, как долго мы остаемся чистыми, не\nважно, насколько лучше стала наша жизнь, не важно, насколько здоровее мы стали\nдуховно, мы все равно остаемся наркоманами. Наша болезнь затаилась, она ждет,\nготовая в любой момент поймать нас в ловушку, если мы дадим ей такую\nвозможность.\n\nБдительность — это наша ежедневная забота. Мы стремимся быть постоянно\nнастороже и готовыми справиться с тревожными проявлениями болезни. Это не\nзначит, что нам следует жить в бессознательном страхе, что произойдет нечто\nужасное, если мы ослабим свою бдительность; нет, нам просто надо знать, что\nопасность существует. Каждый день молиться, регулярно посещать собрания, не\nидти на компромисс с духовными принципами — это значит быть бдительными. Мы\nделаем инвентаризацию, если это необходимо, делимся с другими, когда нас\nпросят об этом, и бережно относимся к своему выздоровлению. И кроме всего\nпрочего, мы остаемся настороже!\n\nНам дается однодневная передышка от наркомании, и только до тех пор, пока мы\nсоблюдаем бдительность. Каждый день мы применяем принципы выздоровления во\nвсех наших делах, и каждый вечер мы благодарим нашу Высшую Силу за еще один\nчистый день.\n\n**ТОЛЬКО СЕГОДНЯ:** Я буду бдительным, делая все, что необходимо для защиты\nмоего выздоровления.\n";
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