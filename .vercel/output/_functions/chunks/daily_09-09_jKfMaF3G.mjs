import { f as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_B8tmmdD1.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p><em>«Одной из самых больших ошибок на пути выздоровления являются нереалистичные\nожидания от… других».</em></p>\n<p>Основной текст, с. 99</p>\n<p>Многие из нас приходят к Анонимным Наркоманам, чувствуя себя самыми\nнесчастными на свете. По сравнению с нами выздоравливающие наркоманы, которых\nмы встречаем на собраниях, могут казаться почти сверхлюдьми из-за их\nспокойствия и уверенности в себе. Эти радушные, любящие люди уже много месяцев\nи даже лет живут в соответствии с духовными принципами, отдавая всех себя на\nблаго других и не требуя ничего взамен. Мы верим им и позволяем им любить нас\nдо тех пор, пока мы сами не научимся любить себя. И мы думаем, что эти люди\nлегко приведут в порядок нашу жизнь.</p>\n<p>Затем очарование раннего выздоровления начинает увядать, и мы замечаем, что\nнаши друзья по АН и наш спонсор – это всего лишь люди. Может быть, член нашей\nдомашней группы посылает нас за кофе для себя или мы видим, как два ветерана\nссорятся на собрании комитета, или мы обнаруживаем, что у нашего спонсора есть\nодин, а то и два дефекта характера. Мы раздавлены, лишены иллюзий, –\nоказывается, эти выздоравливающие наркоманы вовсе не совершенны! Как же мы\nможем доверять им после этого?</p>\n<p>Истина находится где-то посередине между «героями выздоровления» и «вшивыми\nАН-овскими задницами»: наши друзья наркоманы не абсолютно плохие и не\nабсолютно хорошие люди. В конце концов, если бы они были совершенны, то им не\nпонадобилась бы эта программа. Наши друзья и спонсор – это обычные\nвыздоравливающие наркоманы, такие же, как мы. Мы можем полагаться на их\nобычный опыт выздоровления и использовать его в своей собственной программе.</p>\n<p><strong>ТОЛЬКО СЕГОДНЯ:</strong> Мои друзья и мой спонсор – это люди, такие же, как я. И\nпотому я еще больше доверяю их опыту.</p>";

				const frontmatter = {"title":"9 сентября.  Глиняные ноги","description":"Ежедневные размышления АН - 9 сентября.  Глиняные ноги","id":"253","heroImage":"","pubDate":"2023-05-04T00:00:00.000Z","moth":"sentyabr"};
				const file = "/Users/samgold/Desktop/Проекты/12 проектов/daily-na/src/content/diaries/sentyabr/daily_09-09.md";
				const url = undefined;
				function rawContent() {
					return "\n_«Одной из самых больших ошибок на пути выздоровления являются нереалистичные\nожидания от… других»._\n\nОсновной текст, с. 99\n\nМногие из нас приходят к Анонимным Наркоманам, чувствуя себя самыми\nнесчастными на свете. По сравнению с нами выздоравливающие наркоманы, которых\nмы встречаем на собраниях, могут казаться почти сверхлюдьми из-за их\nспокойствия и уверенности в себе. Эти радушные, любящие люди уже много месяцев\nи даже лет живут в соответствии с духовными принципами, отдавая всех себя на\nблаго других и не требуя ничего взамен. Мы верим им и позволяем им любить нас\nдо тех пор, пока мы сами не научимся любить себя. И мы думаем, что эти люди\nлегко приведут в порядок нашу жизнь.\n\nЗатем очарование раннего выздоровления начинает увядать, и мы замечаем, что\nнаши друзья по АН и наш спонсор – это всего лишь люди. Может быть, член нашей\nдомашней группы посылает нас за кофе для себя или мы видим, как два ветерана\nссорятся на собрании комитета, или мы обнаруживаем, что у нашего спонсора есть\nодин, а то и два дефекта характера. Мы раздавлены, лишены иллюзий, –\nоказывается, эти выздоравливающие наркоманы вовсе не совершенны! Как же мы\nможем доверять им после этого?\n\nИстина находится где-то посередине между «героями выздоровления» и «вшивыми\nАН-овскими задницами»: наши друзья наркоманы не абсолютно плохие и не\nабсолютно хорошие люди. В конце концов, если бы они были совершенны, то им не\nпонадобилась бы эта программа. Наши друзья и спонсор – это обычные\nвыздоравливающие наркоманы, такие же, как мы. Мы можем полагаться на их\nобычный опыт выздоровления и использовать его в своей собственной программе.\n\n**ТОЛЬКО СЕГОДНЯ:** Мои друзья и мой спонсор – это люди, такие же, как я. И\nпотому я еще больше доверяю их опыту.\n";
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