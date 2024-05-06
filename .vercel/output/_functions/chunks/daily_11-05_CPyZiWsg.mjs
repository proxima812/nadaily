import { f as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_B8tmmdD1.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p><em>“Многие из наших основных трудностей происходят от нашей неопытности в жизни\nбез наркотиков. Часто бывает, что мы спрашиваем кого-то из ветеранов о том,\nчто делать, и удивляемся простоте ответа.”</em></p>\n<p>Основной текст, с. 51</p>\n<p>Нахождение равновесия в выздоровлении слегка напоминает упражнение с весами и\nпеском. Цель в том, чтобы поместить одинаковое количество песка на каждую\nчашку, получая при этом равновесие.</p>\n<p>То же самое мы делаем с выздоровлением. С одной стороны у нас есть основа —\nчистое время и Двенадцать Шагов, а на другую мы пытаемся добавить\nтрудоустройство, домашние обязанности, друзей, спонсируемых, отношения,\nсобрания и служение. С той и с другой стороны надо соблюсти такие пропорции,\nчтобы сохранить равновесие. Первая попытка может вывести наши весы из\nравновесия. Мы можем выяснить, что из-за чрезмерной вовлеченности в служение\nмы забросили работу или семью. Но если мы пытаемся решить эту проблему,\nполностью исключив служение в NA, то равновесие опять же будет нарушено.</p>\n<p>Мы можем попросить помощи у участников, которые научились поддерживать\nравновесие. Таких людей видно сразу. Они спокойны душевно и в поведении,\nуверенны в себе. Они улыбнутся, узнав о нашей дилемме и поделятся своим\nопытом: надо добавлять всего несколько песчинок на каждую чашу весов\nпостоянно, и мы получим равновесие в выздоровлении.</p>\n<p><strong>ТОЛЬКО СЕГОДНЯ:</strong> Я ищу равновесия в своей жизни. Сегодня я попрошу других\nподелиться со мной опытом нахождения этого равновесия.</p>";

				const frontmatter = {"title":"11 мая. Уравновешивая чаши весов","description":"Ежедневные размышления АН - 11 мая. Уравновешивая чаши весов","id":"132","heroImage":"","pubDate":"2023-05-04T00:00:00.000Z","moth":"maj"};
				const file = "/Users/samgold/Desktop/Проекты/12 проектов/daily-na/src/content/diaries/maj/daily_11-05.md";
				const url = undefined;
				function rawContent() {
					return "\n_“Многие из наших основных трудностей происходят от нашей неопытности в жизни\nбез наркотиков. Часто бывает, что мы спрашиваем кого-то из ветеранов о том,\nчто делать, и удивляемся простоте ответа.”_\n\nОсновной текст, с. 51\n\nНахождение равновесия в выздоровлении слегка напоминает упражнение с весами и\nпеском. Цель в том, чтобы поместить одинаковое количество песка на каждую\nчашку, получая при этом равновесие.\n\nТо же самое мы делаем с выздоровлением. С одной стороны у нас есть основа —\nчистое время и Двенадцать Шагов, а на другую мы пытаемся добавить\nтрудоустройство, домашние обязанности, друзей, спонсируемых, отношения,\nсобрания и служение. С той и с другой стороны надо соблюсти такие пропорции,\nчтобы сохранить равновесие. Первая попытка может вывести наши весы из\nравновесия. Мы можем выяснить, что из-за чрезмерной вовлеченности в служение\nмы забросили работу или семью. Но если мы пытаемся решить эту проблему,\nполностью исключив служение в NA, то равновесие опять же будет нарушено.\n\nМы можем попросить помощи у участников, которые научились поддерживать\nравновесие. Таких людей видно сразу. Они спокойны душевно и в поведении,\nуверенны в себе. Они улыбнутся, узнав о нашей дилемме и поделятся своим\nопытом: надо добавлять всего несколько песчинок на каждую чашу весов\nпостоянно, и мы получим равновесие в выздоровлении.\n\n**ТОЛЬКО СЕГОДНЯ:** Я ищу равновесия в своей жизни. Сегодня я попрошу других\nподелиться со мной опытом нахождения этого равновесия.\n";
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
