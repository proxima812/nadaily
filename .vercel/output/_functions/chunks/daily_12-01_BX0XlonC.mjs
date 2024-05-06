import { f as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_B8tmmdD1.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p><em>«Достигнув духовного пробуждения в результате выполнения этих шагов…».</em></p>\n<p>Двенадцатый Шаг</p>\n<p>«Как я узнаю, что духовно пробудился?». Ко многим из нас духовное пробуждение\nприходит постепенно. Возможно, наше первое духовное осознание — это новый\nвзгляд на жизнь. Может быть, однажды рано утром мы неожиданно откроем для себя\nпение птиц. Простая красота цветка может напомнить нам, что все вокруг — это\nплоды работы Высшей Силы.</p>\n<p>Часто, наше духовное побуждение становится сильнее со временем. Мы можем\nдостигать большего духовного осознания, просто проживая свою жизнь. Мы можем\nупорно продолжать попытки улучшить свой осознанный контакт с помощью\nежедневной молитвы и медитации. Мы можем прислушиваться к внутреннему голосу в\nпоисках необходимого нам руководства. Мы можем спрашивать других наркоманов об\nих духовном опыте. Мы можем найти время, чтобы насладиться красотой\nокружающего мира.</p>\n<p><strong>ТОЛЬКО СЕГОДНЯ:</strong> Я буду размышлять о духовных пробуждениях, которые я уже\nиспытал. Я буду стремиться к тому, чтобы Бог вошел в мое сознание. Я найду\nвремя в течение дня, чтобы высоко оценить плоды работы Высшей Силы.</p>";

				const frontmatter = {"title":"12 января.  Духовное пробуждение","description":"Ежедневные размышления АН - 12 января.  Духовное пробуждение","id":"12","heroImage":"","pubDate":"2023-05-04T00:00:00.000Z","moth":"yanvar"};
				const file = "/Users/samgold/Desktop/Проекты/12 проектов/daily-na/src/content/diaries/yanvar/daily_12-01.md";
				const url = undefined;
				function rawContent() {
					return "\n_«Достигнув духовного пробуждения в результате выполнения этих шагов…»._\n\nДвенадцатый Шаг\n\n«Как я узнаю, что духовно пробудился?». Ко многим из нас духовное пробуждение\nприходит постепенно. Возможно, наше первое духовное осознание — это новый\nвзгляд на жизнь. Может быть, однажды рано утром мы неожиданно откроем для себя\nпение птиц. Простая красота цветка может напомнить нам, что все вокруг — это\nплоды работы Высшей Силы.\n\nЧасто, наше духовное побуждение становится сильнее со временем. Мы можем\nдостигать большего духовного осознания, просто проживая свою жизнь. Мы можем\nупорно продолжать попытки улучшить свой осознанный контакт с помощью\nежедневной молитвы и медитации. Мы можем прислушиваться к внутреннему голосу в\nпоисках необходимого нам руководства. Мы можем спрашивать других наркоманов об\nих духовном опыте. Мы можем найти время, чтобы насладиться красотой\nокружающего мира.\n\n**ТОЛЬКО СЕГОДНЯ:** Я буду размышлять о духовных пробуждениях, которые я уже\nиспытал. Я буду стремиться к тому, чтобы Бог вошел в мое сознание. Я найду\nвремя в течение дня, чтобы высоко оценить плоды работы Высшей Силы.\n";
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
