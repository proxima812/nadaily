import { f as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_B8tmmdD1.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p><em>«Новые идеи не могут быть привиты на невосприимчивое сознание… Открытость ума\nведет нас к самым глубинам понимания, которые всю жизнь для нас были\nнедоступны».</em></p>\n<p>Основной текст, с.93</p>\n<p>Мы пришли к Анонимным Наркоманам в самую тяжелую пору своей жизни. Что нам\nбыло нужно больше всего, когда мы пришли сюда, это новые представления, новый\nспособ жить по опыту людей, которые видели как эти представления срабатывают.\nВсе же наша предубежденность препятствовал восприятию идей, так необходимых\nнам в жизни.</p>\n<p>Отрицание препятствует оценке насколько серьезно на самом деле нам нужны новые\nпредставления и новое руководство. Путем признания своего бессилия и осознавая\nнасколько это правда, что наша жизнь стала неуправляемой, мы даем себе\nвозможность понять насколько нам нужно именно то, что дают АН.</p>\n<p>Самодеятельность и своеволие могут препятствовать признанию даже возможности\nсуществования Силы большей, чем наша. Однако, когда мы признаем плачевное\nсуществование, в которое нас завело своеволие, у нас раскрываются глаза и ум\nдля новых возможностей. Когда другие говорят нам о Силе, которая принесла\nчистоту в их жизнь, мы начинаем верить, что такая Сила может то же самое\nсовершить и для нас.</p>\n<p>Дерево, очищенное от веток, умрет даже если прививать новые ветки на его\nствол. Точно таким же образом, наркомания очистила нас от всех направлений,\nкакие были в нашей жизни. Для того, чтобы расти или даже выживать, необходимо\nоткрыть свой ум и допустить новые представления.</p>\n<p><strong>НАПОМИНАНИЕ НА СЕГОДНЯ:</strong> Я попрошу свою Высшую Силу открыть ум для новых\nпредставлений о выздоровлении.</p>";

				const frontmatter = {"title":"11 апреля. Предубежденность","description":"Ежедневные размышления АН - 11 апреля. Предубежденность","id":"102","heroImage":"","pubDate":"2023-05-04T00:00:00.000Z","moth":"april"};
				const file = "/Users/samgold/Desktop/Проекты/12 проектов/daily-na/src/content/diaries/april/daily_11-04.md";
				const url = undefined;
				function rawContent() {
					return "\n_«Новые идеи не могут быть привиты на невосприимчивое сознание… Открытость ума\nведет нас к самым глубинам понимания, которые всю жизнь для нас были\nнедоступны»._\n\nОсновной текст, с.93\n\nМы пришли к Анонимным Наркоманам в самую тяжелую пору своей жизни. Что нам\nбыло нужно больше всего, когда мы пришли сюда, это новые представления, новый\nспособ жить по опыту людей, которые видели как эти представления срабатывают.\nВсе же наша предубежденность препятствовал восприятию идей, так необходимых\nнам в жизни.\n\nОтрицание препятствует оценке насколько серьезно на самом деле нам нужны новые\nпредставления и новое руководство. Путем признания своего бессилия и осознавая\nнасколько это правда, что наша жизнь стала неуправляемой, мы даем себе\nвозможность понять насколько нам нужно именно то, что дают АН.\n\nСамодеятельность и своеволие могут препятствовать признанию даже возможности\nсуществования Силы большей, чем наша. Однако, когда мы признаем плачевное\nсуществование, в которое нас завело своеволие, у нас раскрываются глаза и ум\nдля новых возможностей. Когда другие говорят нам о Силе, которая принесла\nчистоту в их жизнь, мы начинаем верить, что такая Сила может то же самое\nсовершить и для нас.\n\nДерево, очищенное от веток, умрет даже если прививать новые ветки на его\nствол. Точно таким же образом, наркомания очистила нас от всех направлений,\nкакие были в нашей жизни. Для того, чтобы расти или даже выживать, необходимо\nоткрыть свой ум и допустить новые представления.\n\n**НАПОМИНАНИЕ НА СЕГОДНЯ:** Я попрошу свою Высшую Силу открыть ум для новых\nпредставлений о выздоровлении.\n";
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