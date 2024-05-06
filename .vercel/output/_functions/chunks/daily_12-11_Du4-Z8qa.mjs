import { f as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_B8tmmdD1.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p><em>«Когда мы искренне рассказываем историю своей жизни, всегда найдется человек,\nкоторый прошел похожий путь».</em></p>\n<p>Основной текст, с. 118</p>\n<p>Многие из нас слышали увлекательные выступления на конвенциях Анонимных\nнаркоманов. Мы помним реакцию аудитории, колеблющуюся между слезами\nидентификации и безудержным весельем. «Когда-нибудь, — дуаем мы,- я тоже стану\nглавным спикером на конвенции».</p>\n<p>Что ж для многих из нас этот день не за горами. Может быть, в один из дней нас\nпопросят выступить на спикерском собрании на группе рядом с нашим домом. Мы\nможем выступить и на небольшом семинаре. Но и после всего этого мы становимся\n«крутыми» спикерами больших конвенций. И это нормально. Мы уже уяснили для\nсебя, что у нас тоже есть чем поделиться, мы несем весть, даже если это всего\nлишь местное собрание, на котором прсутствуют пятнадцать или двадцать\nнаркоманов.</p>\n<p>У каждого из нас есть своя неповторимая история; это и есть весть. Мы не можем\nрассказываь чужую историю. Всякий раз, когда мы собираемся начать говорить, мы\nобнаруживаем, что все умные фразы и смешные байки испарились из нашей головы.\nНо у нас все же <em>есть</em> чем поделиться. Мы несем весть надежды — мы можем\nвыздоравливать, и мы выздоравливаем. И этого достаточно.</p>\n<p>ТОЛЬКО СЕГОДНЯ: Я буду помнить, что моя честная личная история — это самое\nлучшее, чем я могу поделиться. Сегодня этого достаточно.</p>";

				const frontmatter = {"title":"12 ноября.  Наша личная история","description":"Ежедневные размышления АН - 12 ноября.  Наша личная история","id":"317","heroImage":"","pubDate":"2023-05-04T00:00:00.000Z","moth":"noyabr"};
				const file = "/Users/samgold/Desktop/Проекты/12 проектов/daily-na/src/content/diaries/noyabr/daily_12-11.md";
				const url = undefined;
				function rawContent() {
					return "\n_«Когда мы искренне рассказываем историю своей жизни, всегда найдется человек,\nкоторый прошел похожий путь»._\n\nОсновной текст, с. 118\n\nМногие из нас слышали увлекательные выступления на конвенциях Анонимных\nнаркоманов. Мы помним реакцию аудитории, колеблющуюся между слезами\nидентификации и безудержным весельем. «Когда-нибудь, — дуаем мы,- я тоже стану\nглавным спикером на конвенции».\n\nЧто ж для многих из нас этот день не за горами. Может быть, в один из дней нас\nпопросят выступить на спикерском собрании на группе рядом с нашим домом. Мы\nможем выступить и на небольшом семинаре. Но и после всего этого мы становимся\n«крутыми» спикерами больших конвенций. И это нормально. Мы уже уяснили для\nсебя, что у нас тоже есть чем поделиться, мы несем весть, даже если это всего\nлишь местное собрание, на котором прсутствуют пятнадцать или двадцать\nнаркоманов.\n\nУ каждого из нас есть своя неповторимая история; это и есть весть. Мы не можем\nрассказываь чужую историю. Всякий раз, когда мы собираемся начать говорить, мы\nобнаруживаем, что все умные фразы и смешные байки испарились из нашей головы.\nНо у нас все же _есть_ чем поделиться. Мы несем весть надежды — мы можем\nвыздоравливать, и мы выздоравливаем. И этого достаточно.\n\nТОЛЬКО СЕГОДНЯ: Я буду помнить, что моя честная личная история — это самое\nлучшее, чем я могу поделиться. Сегодня этого достаточно.\n";
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