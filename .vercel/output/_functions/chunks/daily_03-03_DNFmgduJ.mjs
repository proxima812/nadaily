import { f as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_B8tmmdD1.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p><em>“Конечно, нас еще не раз потянет к наркотикам. Нам будет паршиво и захочется\nубежать от себя. Нам нужно вспомнить, откуда мы пришли, и что в этот раз будет\nгораздо хуже, чем раньше. В эти моменты нам особенно необходима программа.”</em></p>\n<p>Основной текст, с. 92</p>\n<p>Если мы чувствуем, что намеренно идем к срыву, мы должны представить себе свое\nупотребление вплоть до печального конца. Для многих из нас этот конец\nпредставляет собой многочисленные проблемы со здоровьем, заключение в тюрьму\nили даже смерть. Кто из нас знал людей, сорвавшихся после многих лет чистого\nвремени и только для того, чтобы умереть от своей болезни?</p>\n<p>Но существует смерть, которая всегда сопутствует возврату к активной\nнаркомании, и она, возможно, гораздо ужаснее, чем смерть физическая. Это\nдуховная смерть, которую мы переживаем, если отделяемся от нашей Высшей Силы.\nЕсли мы употребим наркотики, духовные связи, которые мы трепетно взращивали в\nсебе столько лет, ослабнут и могут даже исчезнуть. Мы будем чувствовать себя\nдействительно одинокими.</p>\n<p>Несомненно, в нашем выздоровлении случаются черные полосы. И есть лишь один\nспособ пережить эти трудные времена: с помощью веры. Если мы верим, что наша\nВысшая Сила с нами, то к нам прийдет уверенность, что все будет хорошо.</p>\n<p>Как бы плохо мы ни чувствовали себя без наркотиков, срыв — это никогда не\nвыход. Вместе мы обретаем выздоровление. Если мы останемся чистыми, мрак\nрассеется, и у нас появится более прочная связь с нашей Высшей Силой.</p>\n<p><strong>ТОЛЬКО СЕГОДНЯ:</strong> Я благодарю мою Высшую Силу за то, что она дала мне АН. Я\nзнаю, что срыв — это не решение проблемы. Какой бы вызов ни бросила мне жизнь,\nя встречу его вместе с Богом, как я его понимаю.</p>";

				const frontmatter = {"title":"3 марта. Срыв","description":"Ежедневные размышления АН - 3 марта. Срыв","id":"63","heroImage":"","pubDate":"2023-05-04T00:00:00.000Z","moth":"mart"};
				const file = "/Users/samgold/Desktop/Проекты/12 проектов/daily-na/src/content/diaries/mart/daily_03-03.md";
				const url = undefined;
				function rawContent() {
					return "\n_“Конечно, нас еще не раз потянет к наркотикам. Нам будет паршиво и захочется\nубежать от себя. Нам нужно вспомнить, откуда мы пришли, и что в этот раз будет\nгораздо хуже, чем раньше. В эти моменты нам особенно необходима программа.”_\n\nОсновной текст, с. 92\n\nЕсли мы чувствуем, что намеренно идем к срыву, мы должны представить себе свое\nупотребление вплоть до печального конца. Для многих из нас этот конец\nпредставляет собой многочисленные проблемы со здоровьем, заключение в тюрьму\nили даже смерть. Кто из нас знал людей, сорвавшихся после многих лет чистого\nвремени и только для того, чтобы умереть от своей болезни?\n\nНо существует смерть, которая всегда сопутствует возврату к активной\nнаркомании, и она, возможно, гораздо ужаснее, чем смерть физическая. Это\nдуховная смерть, которую мы переживаем, если отделяемся от нашей Высшей Силы.\nЕсли мы употребим наркотики, духовные связи, которые мы трепетно взращивали в\nсебе столько лет, ослабнут и могут даже исчезнуть. Мы будем чувствовать себя\nдействительно одинокими.\n\nНесомненно, в нашем выздоровлении случаются черные полосы. И есть лишь один\nспособ пережить эти трудные времена: с помощью веры. Если мы верим, что наша\nВысшая Сила с нами, то к нам прийдет уверенность, что все будет хорошо.\n\nКак бы плохо мы ни чувствовали себя без наркотиков, срыв — это никогда не\nвыход. Вместе мы обретаем выздоровление. Если мы останемся чистыми, мрак\nрассеется, и у нас появится более прочная связь с нашей Высшей Силой.\n\n**ТОЛЬКО СЕГОДНЯ:** Я благодарю мою Высшую Силу за то, что она дала мне АН. Я\nзнаю, что срыв — это не решение проблемы. Какой бы вызов ни бросила мне жизнь,\nя встречу его вместе с Богом, как я его понимаю.\n";
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