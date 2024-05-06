import { f as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_B8tmmdD1.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p><em>«Работа с другими наркоманами — это лишь начало служения».</em></p>\n<p>Основной текст, с. 70</p>\n<p>Сейчас мы находимся в процессе выздоровления. Живя в программе, мы обрели\nнекоторую стабильность в жизни. Наша вера в Высшую Силу выросла. Наше личное\nдуховное пробуждение происходит спокойно и плавно. И что теперь? Мы спокойно\nсидим и получаем удовольствие? Конечно, нет. Мы находим возможность заниматься\nслужением.</p>\n<p>Мы склонны думать о служении как о работе в комитетах или на должностях\nразного уровня. Но служение выходит далеко за рамки такого понимания. По сути,\nмы можем изыскать возможность заниматься служение почти в каждой сфере нашей\nжизни. Наша работа — это тоже форма служения для общества, не зависимо от\nспециализации. Работа, которую мы делаем по дому — это служение для нашей\nсемьи. Возможно, мы выполняем какую-то работу для общества в качестве\nволонтеров.</p>\n<p>И как все меняется в результате нашего служения! Если мы сомневаемся в этом,\nнам надо просто представить, каким был бы мир, если бы никто ни для кого\nничего не делал. Наша работа служит на благо людям. Весть о выздоровлении,\nкоторую мы несем, выходит из стен наших групп и воздействует на все, что мы\nделаем в жизни.</p>\n<p><strong>ТОЛЬКО СЕГОДНЯ:</strong> Я буду искать возможность для служения во всем, что я\nделаю.</p>";

				const frontmatter = {"title":"31 декабря. Служение","description":"Ежедневные размышления АН - 31 декабря.  Служение","id":"366","heroImage":"","pubDate":"2023-05-04T00:00:00.000Z","moth":"dekabr"};
				const file = "/Users/samgold/Desktop/Проекты/12 проектов/daily-na/src/content/diaries/dekabr/daily_31-12.md";
				const url = undefined;
				function rawContent() {
					return "\n_«Работа с другими наркоманами — это лишь начало служения»._\n\nОсновной текст, с. 70\n\nСейчас мы находимся в процессе выздоровления. Живя в программе, мы обрели\nнекоторую стабильность в жизни. Наша вера в Высшую Силу выросла. Наше личное\nдуховное пробуждение происходит спокойно и плавно. И что теперь? Мы спокойно\nсидим и получаем удовольствие? Конечно, нет. Мы находим возможность заниматься\nслужением.\n\nМы склонны думать о служении как о работе в комитетах или на должностях\nразного уровня. Но служение выходит далеко за рамки такого понимания. По сути,\nмы можем изыскать возможность заниматься служение почти в каждой сфере нашей\nжизни. Наша работа — это тоже форма служения для общества, не зависимо от\nспециализации. Работа, которую мы делаем по дому — это служение для нашей\nсемьи. Возможно, мы выполняем какую-то работу для общества в качестве\nволонтеров.\n\nИ как все меняется в результате нашего служения! Если мы сомневаемся в этом,\nнам надо просто представить, каким был бы мир, если бы никто ни для кого\nничего не делал. Наша работа служит на благо людям. Весть о выздоровлении,\nкоторую мы несем, выходит из стен наших групп и воздействует на все, что мы\nделаем в жизни.\n\n**ТОЛЬКО СЕГОДНЯ:** Я буду искать возможность для служения во всем, что я\nделаю.\n";
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
