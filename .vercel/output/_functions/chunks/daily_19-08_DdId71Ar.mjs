import { f as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_B8tmmdD1.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p><em>“Мы прилагаем все усилия, чтобы решить самые явные проблемы, оставляя\nостальные и, продвигаясь вперед в процессе выздоровления, получаем новые\nвозможности для совершенствования”.</em></p>\n<p>Основной текст, с.67</p>\n<p>Говорят, что выздоровление — это просто — нам просто нужно изменить абсолютно\n<em>все</em>! Это может показаться почти непосильной задачей, особенно когда мы\nвпервые приходим в Анонимные Наркоманы. Кроме того, не многие из нас явились\nна свое первое собрание потому, что наша жизнь была в хорошей форме. Напротив,\nочень многие из нас пришли в АН в разгар самого тяжелого кризиса в жизни. Нам\nбыло нужно выздороветь и быстро!</p>\n<p>Значительность изменений, которые требуются для нашей жизни, может\nпарализовать нас. Мы знаем, что за все, что нужно изменить, сразу не\nвозьмешься, не все сразу. С чего начинать? Есть шансы, что мы уже начали. Мы\nсделали первые, наиболее очевидные вещи, которые было надо сделать: мы\nпрекратили употреблять наркотики и мы стали ходить на собрания.</p>\n<p>Что нам делать дальше? Почти то же самое, только больше: мы делаем то, что\nможем в нашем положении. Мы идем по пути выздоровления, поднимая ногу и делая\nшаг прямо перед собой. Только после того, как совершим его, нас должно\nволновать, что дальше. Медленно, но верно мы увидим, как продвигаемся по пути,\nзримо приближаясь каждый день к становлению тем человеком, каким бы мы хотели\nбыть.</p>\n<p><strong>ТОЛЬКО СЕГОДНЯ:</strong> Я буду идти по своему пути выздоровления, вставая на ту\nступень, которая в данный момент находится непосредственно передо мной.</p>";

				const frontmatter = {"title":"19 августа. Первым делом главное","description":"Ежедневные размышления АН - 19 августа. Первым делом главное","id":"232","heroImage":"","pubDate":"2023-05-04T00:00:00.000Z","moth":"avgust"};
				const file = "/Users/samgold/Desktop/Проекты/12 проектов/daily-na/src/content/diaries/avgust/daily_19-08.md";
				const url = undefined;
				function rawContent() {
					return "\n_“Мы прилагаем все усилия, чтобы решить самые явные проблемы, оставляя\nостальные и, продвигаясь вперед в процессе выздоровления, получаем новые\nвозможности для совершенствования”._\n\nОсновной текст, с.67\n\nГоворят, что выздоровление — это просто — нам просто нужно изменить абсолютно\n_все_! Это может показаться почти непосильной задачей, особенно когда мы\nвпервые приходим в Анонимные Наркоманы. Кроме того, не многие из нас явились\nна свое первое собрание потому, что наша жизнь была в хорошей форме. Напротив,\nочень многие из нас пришли в АН в разгар самого тяжелого кризиса в жизни. Нам\nбыло нужно выздороветь и быстро!\n\nЗначительность изменений, которые требуются для нашей жизни, может\nпарализовать нас. Мы знаем, что за все, что нужно изменить, сразу не\nвозьмешься, не все сразу. С чего начинать? Есть шансы, что мы уже начали. Мы\nсделали первые, наиболее очевидные вещи, которые было надо сделать: мы\nпрекратили употреблять наркотики и мы стали ходить на собрания.\n\nЧто нам делать дальше? Почти то же самое, только больше: мы делаем то, что\nможем в нашем положении. Мы идем по пути выздоровления, поднимая ногу и делая\nшаг прямо перед собой. Только после того, как совершим его, нас должно\nволновать, что дальше. Медленно, но верно мы увидим, как продвигаемся по пути,\nзримо приближаясь каждый день к становлению тем человеком, каким бы мы хотели\nбыть.\n\n**ТОЛЬКО СЕГОДНЯ:** Я буду идти по своему пути выздоровления, вставая на ту\nступень, которая в данный момент находится непосредственно передо мной.\n";
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
