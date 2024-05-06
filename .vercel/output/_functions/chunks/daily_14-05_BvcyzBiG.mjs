import { f as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_B8tmmdD1.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p><em>“Безумие — повторять одни и те же ошибки, ожидая различных результатов.”</em></p>\n<p>Основной текст, с. 31</p>\n<p>Ошибки! Мы все знаем, каково это — совершать ошибки. Многие из нас считают,\nчто вся наша <em>жизнь</em> была одной сплошной ошибкой. Мы часто рассматриваем свои\nошибки с чувством стыда или вины, самое меньшее, что они вызывают у нас —\nрасстройство и раздражение. Мы склонны расценивать свои ошибки как\nдоказательство того, что мы все еще очень сильно больны, безумны, не способны\nдумать или слишком испорчены, не можем выздоравливать.</p>\n<p>На самом деле, ошибки — это очень жизненная и важная часть человеческого\nбытия. Для особенно неподатливых людей (какими являются наркоманы) ошибки —\nэто зачастую единственная возможность чему-то научиться. Делать ошибки не\nстыдно. Дело в том, что совершая новые ошибки мы проявляем свою готовность\nрисковать ради роста.</p>\n<p>Если мы учимся на своих ошибках, они помогают нам; совершение прежних ошибок\nможет быть сигналом о том, что мы не меняемся. Ожидание другого результата от\nтех же самых старых ошибок — вот что мы называем “безумием”. Это просто не\nработает.</p>\n<p><strong>ТОЛЬКО СЕГОДНЯ:</strong> Ошибки — это не трагедия. Но, пожалуйста, Высшая Сила,\nпомоги мне учиться на этих ошибках!</p>";

				const frontmatter = {"title":"14 мая. Оп — ля!","description":"Ежедневные размышления АН - 14 мая. Оп — ля!","id":"135","heroImage":"","pubDate":"2023-05-04T00:00:00.000Z","moth":"maj"};
				const file = "/Users/samgold/Desktop/Проекты/12 проектов/daily-na/src/content/diaries/maj/daily_14-05.md";
				const url = undefined;
				function rawContent() {
					return "\n_“Безумие — повторять одни и те же ошибки, ожидая различных результатов.”_\n\nОсновной текст, с. 31\n\nОшибки! Мы все знаем, каково это — совершать ошибки. Многие из нас считают,\nчто вся наша _жизнь_ была одной сплошной ошибкой. Мы часто рассматриваем свои\nошибки с чувством стыда или вины, самое меньшее, что они вызывают у нас —\nрасстройство и раздражение. Мы склонны расценивать свои ошибки как\nдоказательство того, что мы все еще очень сильно больны, безумны, не способны\nдумать или слишком испорчены, не можем выздоравливать.\n\nНа самом деле, ошибки — это очень жизненная и важная часть человеческого\nбытия. Для особенно неподатливых людей (какими являются наркоманы) ошибки —\nэто зачастую единственная возможность чему-то научиться. Делать ошибки не\nстыдно. Дело в том, что совершая новые ошибки мы проявляем свою готовность\nрисковать ради роста.\n\nЕсли мы учимся на своих ошибках, они помогают нам; совершение прежних ошибок\nможет быть сигналом о том, что мы не меняемся. Ожидание другого результата от\nтех же самых старых ошибок — вот что мы называем “безумием”. Это просто не\nработает.\n\n**ТОЛЬКО СЕГОДНЯ:** Ошибки — это не трагедия. Но, пожалуйста, Высшая Сила,\nпомоги мне учиться на этих ошибках!\n";
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
