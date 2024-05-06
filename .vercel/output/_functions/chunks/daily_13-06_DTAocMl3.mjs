import { f as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_B8tmmdD1.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p><em>«Программа творит чудеса в нашей жизни… Мы обрели свободу жить».</em></p>\n<p>Основной текст, с. 13</p>\n<p>Большинство из нас — если мы уже какое-то время находимся в программе —\nслышали, как некоторые члены жалуются на собраниях на свою чрезмерную\nзагруженность работой, на то, что они слишком заняты, чтобы посещать собрания,\nбыть спонсором и заниматься другой деятельностью в Сообществе. Фактически, <em>мы\nсами</em> , возможно, жаловались на это. Наши дни кажутся такими заполненными:\nработой, семьей, друзьями, собраниями, служением, спонсорством, работой по\nшагам. Некоторые члены жалуются: «Мне просто не хватает часов в сутках, чтобы\nвсе сделать и выполнить все запросы!».</p>\n<p>Когда такое случается, обычно разлается приглушенный смех со стороны тех\nчленов, которые сами собирались поворчать на ту же тему. Смех происходит от\nосознания того, что мы жалуемся на чудо, которое произошло сегодня с нашей\nжизнью. Не так давно лишь немногие из нас были в состоянии иметь такие\n«проблемы» в своей жизни. Мы посвящали всю свою энергию на поддержание нашей\nактивной наркомании. Сегодня у нас полноценная жизнь, которая включает в себя\nвсе чувства и все проблемы, сопутствующие жизни в реальности.</p>\n<p><strong>ТОЛЬКО СЕГОДНЯ:</strong> Я буду помнить, что моя жизнь — это чудо. Вместо того,\nчтобы возмущаться своей занятостью, я буду благодарен за то, что моя жизнь так\nнаполнена.</p>";

				const frontmatter = {"title":"13 июня.  Полноценная жизнь","description":"Ежедневные размышления АН - 13 июня.  Полноценная жизнь","id":"165","heroImage":"","pubDate":"2023-05-04T00:00:00.000Z","moth":"iyun"};
				const file = "/Users/samgold/Desktop/Проекты/12 проектов/daily-na/src/content/diaries/iyun/daily_13-06.md";
				const url = undefined;
				function rawContent() {
					return "\n_«Программа творит чудеса в нашей жизни… Мы обрели свободу жить»._\n\nОсновной текст, с. 13\n\nБольшинство из нас — если мы уже какое-то время находимся в программе —\nслышали, как некоторые члены жалуются на собраниях на свою чрезмерную\nзагруженность работой, на то, что они слишком заняты, чтобы посещать собрания,\nбыть спонсором и заниматься другой деятельностью в Сообществе. Фактически, _мы\nсами_ , возможно, жаловались на это. Наши дни кажутся такими заполненными:\nработой, семьей, друзьями, собраниями, служением, спонсорством, работой по\nшагам. Некоторые члены жалуются: «Мне просто не хватает часов в сутках, чтобы\nвсе сделать и выполнить все запросы!».\n\nКогда такое случается, обычно разлается приглушенный смех со стороны тех\nчленов, которые сами собирались поворчать на ту же тему. Смех происходит от\nосознания того, что мы жалуемся на чудо, которое произошло сегодня с нашей\nжизнью. Не так давно лишь немногие из нас были в состоянии иметь такие\n«проблемы» в своей жизни. Мы посвящали всю свою энергию на поддержание нашей\nактивной наркомании. Сегодня у нас полноценная жизнь, которая включает в себя\nвсе чувства и все проблемы, сопутствующие жизни в реальности.\n\n**ТОЛЬКО СЕГОДНЯ:** Я буду помнить, что моя жизнь — это чудо. Вместо того,\nчтобы возмущаться своей занятостью, я буду благодарен за то, что моя жизнь так\nнаполнена.\n";
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