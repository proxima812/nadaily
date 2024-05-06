import { f as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_B8tmmdD1.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p><em>“В соответствии с принципами выздоровления мы стараемся не осуждать, не\nвырабатывать стереотипов, не поучать друг друга”.</em></p>\n<p>Основной текст, с. 14</p>\n<p>Будем откровенны: в Анонимных Наркоманах мы все равно что в стеклянном доме.\nНаши товарищи по группе знают о нашей личной жизни больше, чем кто-либо\nраньше. Они знают, с кем мы проводим время, где работаем, по какому шагу\nработаем, сколько у нас детей и так далее. А то, чего наши товарищи по группе\nне знают, они могут домыслить.</p>\n<p>Мы можем чувствовать себя несчастными из-за того, что другие сплетничают о\nнас. Но если мы уйдем из товарищества и изолируем себя, чтобы избежать\nсплетен, то мы также лишим себя любви, дружбы и бесценного опыта\nвыздоровления, который наши товарищи по группе нам предлагают. Гораздо лучше\nбыло бы относиться к сплетням следующим образом: просто принять вещи такими,\nкакие они есть, и себя такими, какие мы есть, и жить своей жизнью в\nсоответствии с принципами. Чем большую уверенность мы обретем в отношении\nсвоей личной программы, принимаемых нами решений и получаемого нами\nруководства от любящего Бога, тем меньше нас будет волновать чужое мнение.</p>\n<p><strong>ТОЛЬКО СЕГОДНЯ:</strong> Я принял на себя обязательство быть членом товарищества\nАН. Чужое мнение не помешает мне выполнять свои обязательства по\nвыздоровлению.</p>";

				const frontmatter = {"title":"23 сентября.  Отношение к сплетням","description":"Ежедневные размышления АН - 23 сентября.  Отношение к сплетням","id":"267","heroImage":"","pubDate":"2023-05-04T00:00:00.000Z","moth":"sentyabr"};
				const file = "/Users/samgold/Desktop/Проекты/12 проектов/daily-na/src/content/diaries/sentyabr/daily_23-09.md";
				const url = undefined;
				function rawContent() {
					return "\n_“В соответствии с принципами выздоровления мы стараемся не осуждать, не\nвырабатывать стереотипов, не поучать друг друга”._\n\nОсновной текст, с. 14\n\nБудем откровенны: в Анонимных Наркоманах мы все равно что в стеклянном доме.\nНаши товарищи по группе знают о нашей личной жизни больше, чем кто-либо\nраньше. Они знают, с кем мы проводим время, где работаем, по какому шагу\nработаем, сколько у нас детей и так далее. А то, чего наши товарищи по группе\nне знают, они могут домыслить.\n\nМы можем чувствовать себя несчастными из-за того, что другие сплетничают о\nнас. Но если мы уйдем из товарищества и изолируем себя, чтобы избежать\nсплетен, то мы также лишим себя любви, дружбы и бесценного опыта\nвыздоровления, который наши товарищи по группе нам предлагают. Гораздо лучше\nбыло бы относиться к сплетням следующим образом: просто принять вещи такими,\nкакие они есть, и себя такими, какие мы есть, и жить своей жизнью в\nсоответствии с принципами. Чем большую уверенность мы обретем в отношении\nсвоей личной программы, принимаемых нами решений и получаемого нами\nруководства от любящего Бога, тем меньше нас будет волновать чужое мнение.\n\n**ТОЛЬКО СЕГОДНЯ:** Я принял на себя обязательство быть членом товарищества\nАН. Чужое мнение не помешает мне выполнять свои обязательства по\nвыздоровлению.\n";
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
