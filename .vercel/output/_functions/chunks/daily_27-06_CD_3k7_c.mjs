import { f as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_B8tmmdD1.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p><em>“Когда кто-нибудь указывает нам на наши недостатки, первой реакцией может\nбыть защита. (Нам надо осознать, что мы не идеальны.) Всегда будет место\nроста”.</em></p>\n<p>Основной текст, с. 44</p>\n<p>Выздоровление — это процесс, который вносит изменения в нашу жизнь. Нам надо\nизменяться, если мы хотим продолжать духовно расти и добиваться свободы. Важно\nне иметь предубеждений, когда нам указывают на наши недостатки, потому что нам\nпредоставляют возможность измениться и духовно расти. Защитная реакция не дает\nнам принять помощь, которая нам предлагается; но, убирая защитную реакцию, мы\nдаем себе возможность изменяться, духовно расти и обретать новую свободу.</p>\n<p>Каждый день в процессе выздоровления у нас будет возможность изменяться и\nдуховно расти. И чем лучше мы научимся подходить к возможности измениться без\nпредубеждений и с открытым сердцем, тем больше мы духовно вырастем и тем лучше\nбудем чувствовать себя в отношении выздоровления.</p>\n<p><strong>ТОЛЬКО СЕГОДНЯ:</strong> Я буду без предубеждения приветствовать любую возможность\nдля духовного роста.</p>";

				const frontmatter = {"title":"27 июня.  Изменяться и духовно расти","description":"Ежедневные размышления АН - 27 июня.  Изменяться и духовно расти","id":"179","heroImage":"","pubDate":"2023-05-04T00:00:00.000Z","moth":"iyun"};
				const file = "/Users/samgold/Desktop/Проекты/12 проектов/daily-na/src/content/diaries/iyun/daily_27-06.md";
				const url = undefined;
				function rawContent() {
					return "\n_“Когда кто-нибудь указывает нам на наши недостатки, первой реакцией может\nбыть защита. (Нам надо осознать, что мы не идеальны.) Всегда будет место\nроста”._\n\nОсновной текст, с. 44\n\nВыздоровление — это процесс, который вносит изменения в нашу жизнь. Нам надо\nизменяться, если мы хотим продолжать духовно расти и добиваться свободы. Важно\nне иметь предубеждений, когда нам указывают на наши недостатки, потому что нам\nпредоставляют возможность измениться и духовно расти. Защитная реакция не дает\nнам принять помощь, которая нам предлагается; но, убирая защитную реакцию, мы\nдаем себе возможность изменяться, духовно расти и обретать новую свободу.\n\nКаждый день в процессе выздоровления у нас будет возможность изменяться и\nдуховно расти. И чем лучше мы научимся подходить к возможности измениться без\nпредубеждений и с открытым сердцем, тем больше мы духовно вырастем и тем лучше\nбудем чувствовать себя в отношении выздоровления.\n\n**ТОЛЬКО СЕГОДНЯ:** Я буду без предубеждения приветствовать любую возможность\nдля духовного роста.\n";
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