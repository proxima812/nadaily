import { f as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_B8tmmdD1.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p><em>“Восьмой Шаг предлагает нам переход из жизни, где прежде царили чувство вины\nи угрызения совести”.</em></p>\n<p>Основной текст, с. 48</p>\n<p>Угрызения совести были одним из тех чувств, которые заставляли нас продолжать\nупотреблять. Наркомания подкосила нас, слишком больно было осознавать, что мы\nживем, оставляя за собой только опустошение и сердечные приступы. Наши\nугрызения совести часто подпитывались тем, что, как мы думали, мы ничего не\nмогли поделать с тем ущербом, который причиняем. Мы не знали, как поступать\nпо-другому.</p>\n<p>Мы снимаем с себя часть угрызений совести, когда честно смотрим в лицо этому\nчувству. Мы начинаем Восьмой Шаг, скрупулезно составляя список всех тех людей,\nкоторым мы навредили. Мы принимаем свою роль в нашем болезненном прошлом.</p>\n<p>Но Восьмой Шаг не требует от нас исправления всех наших ошибок, он только\nпомогает обрести <em>желание</em> возместить ущерб всем этим людям. Когда мы\nпреисполняемся желанием возместить причиненный нами ущерб, мы признаем, что мы\nготовы меняться. Мы укрепляем процесс выздоровления.</p>\n<p>Угрызения совести больше не являются тем инструментом, который мы\nиспользовали, чтобы мучить самих же себя. Угрызения совести стали тем\nинструментом, с помощью которого мы учимся прощать себя.</p>\n<p><strong>ТОЛЬКО СЕГОДНЯ:</strong> Я буду использовать любые свои чувства и угрызения\nсовести, как еще одну ступеньку в процессе выздоровления по Двенадцати Шагам.</p>";

				const frontmatter = {"title":"26 февраля. Угрызения совести","description":"Ежедневные размышления АН - 26 февраля. Угрызения совести","id":"57","heroImage":"","pubDate":"2023-05-04T00:00:00.000Z","moth":"fevral"};
				const file = "/Users/samgold/Desktop/Проекты/12 проектов/daily-na/src/content/diaries/fevral/daily_26-02.md";
				const url = undefined;
				function rawContent() {
					return "\n_“Восьмой Шаг предлагает нам переход из жизни, где прежде царили чувство вины\nи угрызения совести”._\n\nОсновной текст, с. 48\n\nУгрызения совести были одним из тех чувств, которые заставляли нас продолжать\nупотреблять. Наркомания подкосила нас, слишком больно было осознавать, что мы\nживем, оставляя за собой только опустошение и сердечные приступы. Наши\nугрызения совести часто подпитывались тем, что, как мы думали, мы ничего не\nмогли поделать с тем ущербом, который причиняем. Мы не знали, как поступать\nпо-другому.\n\nМы снимаем с себя часть угрызений совести, когда честно смотрим в лицо этому\nчувству. Мы начинаем Восьмой Шаг, скрупулезно составляя список всех тех людей,\nкоторым мы навредили. Мы принимаем свою роль в нашем болезненном прошлом.\n\nНо Восьмой Шаг не требует от нас исправления всех наших ошибок, он только\nпомогает обрести _желание_ возместить ущерб всем этим людям. Когда мы\nпреисполняемся желанием возместить причиненный нами ущерб, мы признаем, что мы\nготовы меняться. Мы укрепляем процесс выздоровления.\n\nУгрызения совести больше не являются тем инструментом, который мы\nиспользовали, чтобы мучить самих же себя. Угрызения совести стали тем\nинструментом, с помощью которого мы учимся прощать себя.\n\n**ТОЛЬКО СЕГОДНЯ:** Я буду использовать любые свои чувства и угрызения\nсовести, как еще одну ступеньку в процессе выздоровления по Двенадцати Шагам.\n";
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