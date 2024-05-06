import { f as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_B8tmmdD1.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p><em>«Благодаря тому, что все группы и каждая из них в отдельности сфокусированы\nна передаче эстафеты выздоровления, обеспечивается последовательность и\nпостоянство; наркоманы могут рассчитывать на нас».</em></p>\n<p>Основной текст, с. 81</p>\n<p>Рассказы о том, как мы употребляли наркотики в прошлом, могут быть забавными.\nИстории о нашем эксцентричном поведении во время активного употребления могут\nбыть интересными. Но они скорее вносят путаницу и беспорядок, чем несут весть\nо выздоровлении. Философские концепции природы Бога порой захватывают нас.\nОбсуждение насущных противоречий, конечно, имеет место — но только не на\nсобраниях в АН.</p>\n<p>Порой бывает, мы начинаем чувствовать отвращение на собраниях, мы замечаем,\nчто осуждаем «тех, кто говорит не о том» или «опять это жалкое хныканье».\nВозможно, такие мысли — это сигнал для нас, и нам следует более пристально\nпосмотреть на самих себя, на то, что <em>мы сами</em> говорим на собраниях.</p>\n<p>Нести весть о выздоровлении на самом деле значит делиться тем, как мы попали в\nпрограмму, как нам удалось остаться чистыми и как мы работаем по Двенадцати\nШагам. Это то, за чем мы приходим на наши собрания. Наша главная цель — нести\nвесть о выздоровлении тем наркоманам, которые все еще страдают, поэтому все,\nчто мы говорим на собраниях, может быть обращено как на пользу, так и во вред.\nУ нас есть выбор, и на нас лежит ответственность.</p>\n<p><strong>ТОЛЬКО СЕГОДНЯ:</strong> Я буду делиться своим выздоровлением на собрании в АН.</p>";

				const frontmatter = {"title":"18 декабря.  Предназначение наших собраний","description":"Ежедневные размышления АН - 18 декабря.  Предназначение наших собраний","id":"353","heroImage":"","pubDate":"2023-05-04T00:00:00.000Z","moth":"dekabr"};
				const file = "/Users/samgold/Desktop/Проекты/12 проектов/daily-na/src/content/diaries/dekabr/daily_18-12.md";
				const url = undefined;
				function rawContent() {
					return "\n_«Благодаря тому, что все группы и каждая из них в отдельности сфокусированы\nна передаче эстафеты выздоровления, обеспечивается последовательность и\nпостоянство; наркоманы могут рассчитывать на нас»._\n\nОсновной текст, с. 81\n\nРассказы о том, как мы употребляли наркотики в прошлом, могут быть забавными.\nИстории о нашем эксцентричном поведении во время активного употребления могут\nбыть интересными. Но они скорее вносят путаницу и беспорядок, чем несут весть\nо выздоровлении. Философские концепции природы Бога порой захватывают нас.\nОбсуждение насущных противоречий, конечно, имеет место — но только не на\nсобраниях в АН.\n\nПорой бывает, мы начинаем чувствовать отвращение на собраниях, мы замечаем,\nчто осуждаем «тех, кто говорит не о том» или «опять это жалкое хныканье».\nВозможно, такие мысли — это сигнал для нас, и нам следует более пристально\nпосмотреть на самих себя, на то, что _мы сами_ говорим на собраниях.\n\nНести весть о выздоровлении на самом деле значит делиться тем, как мы попали в\nпрограмму, как нам удалось остаться чистыми и как мы работаем по Двенадцати\nШагам. Это то, за чем мы приходим на наши собрания. Наша главная цель — нести\nвесть о выздоровлении тем наркоманам, которые все еще страдают, поэтому все,\nчто мы говорим на собраниях, может быть обращено как на пользу, так и во вред.\nУ нас есть выбор, и на нас лежит ответственность.\n\n**ТОЛЬКО СЕГОДНЯ:** Я буду делиться своим выздоровлением на собрании в АН.\n";
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
