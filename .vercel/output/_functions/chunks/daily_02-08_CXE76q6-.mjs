import { f as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_B8tmmdD1.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p><em>“Если мы чувствуем обман или давление, то честность и искренность требуют\nогромных духовных и эмоциональных сил”.</em></p>\n<p>Основной текст, с. 103</p>\n<p>Многие из нас пытаются выкрутиться из трудного положения путем нечестности,\nчтобы потом все-таки смириться и сказать правду. Некоторые из нас говорят\nнеправду, как ни в чем ни бывало, даже когда в этом нет никакого смысла.\nКаждый раз, когда мы говорим неправду, она бумерангом возвращается к нам.\nЧестность может быть не удобна, но положение, в которое мы попадаем, обычно\nнамного хуже, чем неудобство сказать правду.</p>\n<p>Честность — один из главных принципов с самого начала выздоровления, когда мы,\nнаконец, признаем свое бессилие и неуправляемость. Мы продолжаем применять\nпринцип честности каждый раз, когда сталкиваемся с выбором: то ли пребывать в\nфантазиях, то ли жить по законам реальной жизни. У нас может дрожать голос,\nкогда мы будем пробовать проявлять вновь обретенную честность. Но скоро голос\nправды из наших уст не оставит ни тени сомнения: честность — это хорошо! Легче\nжить правдой, чем жить во лжи.</p>\n<p><strong>ТОЛЬКО СЕГОДНЯ:</strong> Я честно приму жизнь со всеми ее тяготами и требованиями.\nЯ буду честным на деле, даже тогда, когда мне будет неловко. Честность\nпоможет, а не помешает моим стараниям быть чистым и выздоравливать.</p>";

				const frontmatter = {"title":"2 августа. Честность на практике","description":"Ежедневные размышления АН - 2 августа. Честность на практике","id":"215","heroImage":"","pubDate":"2023-05-04T00:00:00.000Z","moth":"avgust"};
				const file = "/Users/samgold/Desktop/Проекты/12 проектов/daily-na/src/content/diaries/avgust/daily_02-08.md";
				const url = undefined;
				function rawContent() {
					return "\n_“Если мы чувствуем обман или давление, то честность и искренность требуют\nогромных духовных и эмоциональных сил”._\n\nОсновной текст, с. 103\n\nМногие из нас пытаются выкрутиться из трудного положения путем нечестности,\nчтобы потом все-таки смириться и сказать правду. Некоторые из нас говорят\nнеправду, как ни в чем ни бывало, даже когда в этом нет никакого смысла.\nКаждый раз, когда мы говорим неправду, она бумерангом возвращается к нам.\nЧестность может быть не удобна, но положение, в которое мы попадаем, обычно\nнамного хуже, чем неудобство сказать правду.\n\nЧестность — один из главных принципов с самого начала выздоровления, когда мы,\nнаконец, признаем свое бессилие и неуправляемость. Мы продолжаем применять\nпринцип честности каждый раз, когда сталкиваемся с выбором: то ли пребывать в\nфантазиях, то ли жить по законам реальной жизни. У нас может дрожать голос,\nкогда мы будем пробовать проявлять вновь обретенную честность. Но скоро голос\nправды из наших уст не оставит ни тени сомнения: честность — это хорошо! Легче\nжить правдой, чем жить во лжи.\n\n**ТОЛЬКО СЕГОДНЯ:** Я честно приму жизнь со всеми ее тяготами и требованиями.\nЯ буду честным на деле, даже тогда, когда мне будет неловко. Честность\nпоможет, а не помешает моим стараниям быть чистым и выздоравливать.\n";
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