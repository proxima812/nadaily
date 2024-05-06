import { f as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_B8tmmdD1.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p><em>“Сегодня выздоровление для нас — реальность”.</em></p>\n<p>Базовый текст, с.112</p>\n<p>Боль и страдания были реальностью нашей жизни в употреблении. Мы не желали ни\nпринимать нашу жизнь, ни изменить то, что было возможным. Мы хотели избежать\nболи, принимая наркотики, но употребление только усугубляло наши трудности.\nНаше изменённое чувство реальности стало кошмаром.</p>\n<p>Живя по принципам Программы Анонимных Наркоманов, мы обнаружили, что наши\nмечты могут заменить наши кошмары. Мы растём и меняемся. Мы приобретаем\nсвободу выбора. Мы способны дарить и принимать любовь. Мы принимаем проблемы,\nкоторые предлагает нам реальная жизнь, и относимся к ним зрело.</p>\n<p>Хотя выздоровление не даёт нам иммунитета от реальности жизни, в сообществе АН\nмы можем найти поддержку, искреннюю заботу и участие, которые необходимы нам,\nчтобы встречать реальности жизни. Нам не нужно больше убегать от реальности,\nупотребляя наркотики, так как наше единство с другими выздоравливающими\nнаркоманами даёт нам силу. Сегодня поддержка, забота и участие открывает нам\nокно, через которое мы можем видеть, чувствовать и принимать реальность такой,\nкакая она есть.</p>\n<p><strong>Только сегодня:</strong> Выздоровление дарует мне жизнью и наслаждение такой, какой\nона является. Сегодня Я обниму реальность.</p>";

				const frontmatter = {"title":"25 апреля. Обнимая реальность","description":"Ежедневные размышления АН - 25 апреля. Обнимая реальность","id":"116","heroImage":"","pubDate":"2023-05-04T00:00:00.000Z","moth":"april"};
				const file = "/Users/samgold/Desktop/Проекты/12 проектов/daily-na/src/content/diaries/april/daily_25-04.md";
				const url = undefined;
				function rawContent() {
					return "\n_“Сегодня выздоровление для нас — реальность”._\n\nБазовый текст, с.112\n\nБоль и страдания были реальностью нашей жизни в употреблении. Мы не желали ни\nпринимать нашу жизнь, ни изменить то, что было возможным. Мы хотели избежать\nболи, принимая наркотики, но употребление только усугубляло наши трудности.\nНаше изменённое чувство реальности стало кошмаром.\n\nЖивя по принципам Программы Анонимных Наркоманов, мы обнаружили, что наши\nмечты могут заменить наши кошмары. Мы растём и меняемся. Мы приобретаем\nсвободу выбора. Мы способны дарить и принимать любовь. Мы принимаем проблемы,\nкоторые предлагает нам реальная жизнь, и относимся к ним зрело.\n\nХотя выздоровление не даёт нам иммунитета от реальности жизни, в сообществе АН\nмы можем найти поддержку, искреннюю заботу и участие, которые необходимы нам,\nчтобы встречать реальности жизни. Нам не нужно больше убегать от реальности,\nупотребляя наркотики, так как наше единство с другими выздоравливающими\nнаркоманами даёт нам силу. Сегодня поддержка, забота и участие открывает нам\nокно, через которое мы можем видеть, чувствовать и принимать реальность такой,\nкакая она есть.\n\n**Только сегодня:** Выздоровление дарует мне жизнью и наслаждение такой, какой\nона является. Сегодня Я обниму реальность.\n";
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
