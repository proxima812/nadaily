import { f as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_B8tmmdD1.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p><em>«Когда в конечном счете убеждаемся, что не можем больше жить по-человечески\nни с наркотиками, ни без них, мы оказываемся в тупике… Оказывается у нас есть\nальтернатива движению к мучительному концу — к тюрьме, больнице или смерти.\nЭто поиск нового пути в жизни».</em></p>\n<p>Основной текст, с. 105</p>\n<p>Что было самым ужасным во время активного употребления наркотиков? Для многих\nиз нас возможность умереть однажды от нашей болезни не была самым страшным\nмоментом. Самым страшным было медленное умирание, которое происходило из дня в\nдень, беспросветность и бессмысленность жизни. Мы ощущали себя призраками, а\nвовсе не жизнерадостными созданиями, мы не чувствовали себя частью окружающего\nмира.</p>\n<p>Выздоравливая, мы пришли к убеждению, что в нашем существовании есть смысл:\nжизнь дана нам, чтобы любить себя и любить других. Работая по Двенадцати\nШагам, мы научились принимать себя. С принятием себя пришло и уважение к себе.\nМы заметили, что все, что мы делаем, отражается на окружающих, что мы\nнеразрывно связаны с другими людьми, так же как и они с нами. Мы начали\nдоверять людям и признавать свою ответственность пред ними.</p>\n<p>Выздоравливая, мы вернулись к жизни. Мы поддерживаем нашу новую жизнь, жертвуя\nчем-то ради других, и каждый день мы ищем пути, как сделать это лучше. Таким\nобразом мы включаем в свою жизнь Десятый, Одиннадцатый и Двенадцатый Шаги.\nВремена, когда мы жили как призраки, прошли, но они могут вернуться, если мы\nне будем делать все возможное, чтобы быть здоровыми, любящими и ответственными\nперед своей жизнью и жизнями окружающих людей.</p>\n<p><strong>ТОЛЬКО СЕГОДНЯ:</strong> Я нашел новый путь в жизни. Сегодня я буду делать все\nвозможное, чтобы относиться с любовью к окружающим и к самому себе.</p>";

				const frontmatter = {"title":"22 декабря.   Новый путь в жизни","description":"Ежедневные размышления АН - 22 декабря.   Новый путь в жизни","id":"357","heroImage":"","pubDate":"2023-05-04T00:00:00.000Z","moth":"dekabr"};
				const file = "/Users/samgold/Desktop/Проекты/12 проектов/daily-na/src/content/diaries/dekabr/daily_22-12.md";
				const url = undefined;
				function rawContent() {
					return "\n_«Когда в конечном счете убеждаемся, что не можем больше жить по-человечески\nни с наркотиками, ни без них, мы оказываемся в тупике… Оказывается у нас есть\nальтернатива движению к мучительному концу — к тюрьме, больнице или смерти.\nЭто поиск нового пути в жизни»._\n\nОсновной текст, с. 105\n\nЧто было самым ужасным во время активного употребления наркотиков? Для многих\nиз нас возможность умереть однажды от нашей болезни не была самым страшным\nмоментом. Самым страшным было медленное умирание, которое происходило из дня в\nдень, беспросветность и бессмысленность жизни. Мы ощущали себя призраками, а\nвовсе не жизнерадостными созданиями, мы не чувствовали себя частью окружающего\nмира.\n\nВыздоравливая, мы пришли к убеждению, что в нашем существовании есть смысл:\nжизнь дана нам, чтобы любить себя и любить других. Работая по Двенадцати\nШагам, мы научились принимать себя. С принятием себя пришло и уважение к себе.\nМы заметили, что все, что мы делаем, отражается на окружающих, что мы\nнеразрывно связаны с другими людьми, так же как и они с нами. Мы начали\nдоверять людям и признавать свою ответственность пред ними.\n\nВыздоравливая, мы вернулись к жизни. Мы поддерживаем нашу новую жизнь, жертвуя\nчем-то ради других, и каждый день мы ищем пути, как сделать это лучше. Таким\nобразом мы включаем в свою жизнь Десятый, Одиннадцатый и Двенадцатый Шаги.\nВремена, когда мы жили как призраки, прошли, но они могут вернуться, если мы\nне будем делать все возможное, чтобы быть здоровыми, любящими и ответственными\nперед своей жизнью и жизнями окружающих людей.\n\n**ТОЛЬКО СЕГОДНЯ:** Я нашел новый путь в жизни. Сегодня я буду делать все\nвозможное, чтобы относиться с любовью к окружающим и к самому себе.\n";
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
