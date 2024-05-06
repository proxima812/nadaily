import { f as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_B8tmmdD1.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p><em>«Мы начинаем видеть, что любовь Бога существовала всегда, лишь ожидая, пока\nмы примем ее».</em></p>\n<p>Основной текст, с. 57</p>\n<p>Любовь Бога — это преображающая сила, которая движет нашим выздоровлением. С\nпомощью этой любви мы находим свободу от безнадежности, отчаяния бесконечного\nупотребления, ненависти к себе, толкавшей на то, чтобы употреблять еще больше.\nС помощью этой любви мы находим смысл и цель в своей, когда-то бессмысленной,\nжизни. С помощью этой любви мы обретаем внутреннее направление и силу,\nнеобходимые, чтобы начать новый образ жизни: образ жизни АН. С помощью этой\nлюбви мы начинаем видеть по-другому, как будто новыми глазами.</p>\n<p>Когда мы исследуем свою жизнь сквозь призму любви, мы делаем потрясающее\nоткрытие: любящий Бог, к пониманию которого мы пришли совсем недавно,\nоказывается, всегда был с нами и всегда любил нас. Мы вспоминаем времена,\nкогда мы просили помощи у Высшей Силы и получали ее. Мы даже вспоминаем те\nпериоды, когда не просили о помощи, но все равно получали ее. Мы понимаем, что\nлюбящая Высшая Сила заботилась о нас все время, защищая нашу жизнь до того\nдня, когда мы смогли самостоятельно принять эту любовь.</p>\n<p>Сила любви всегда была с нами. Сегодня мы благодарны за то, что смогли прожить\nдостаточно долго, чтобы обрести уверенность, что эта любовь присутствует в\nокружающем мире и в нашей жизни. Она наполняет жизнью само наше существование,\nруководит нашим выздоровлением и показывает нам, как жить.</p>\n<p><strong>ТОЛЬКО СЕГОДНЯ:</strong> Я принимаю любовь Высшей Силы в свою жизнь. Я осознаю, что\nвнутри меня есть руководство и энергия этой Силы. Сегодня я заявляю об этом с\nуверенностью.</p>";

				const frontmatter = {"title":"9 августа.  Сила любви","description":"Ежедневные размышления АН - 9 августа.  Сила любви","id":"222","heroImage":"","pubDate":"2023-05-04T00:00:00.000Z","moth":"avgust"};
				const file = "/Users/samgold/Desktop/Проекты/12 проектов/daily-na/src/content/diaries/avgust/daily_09-08.md";
				const url = undefined;
				function rawContent() {
					return "\n_«Мы начинаем видеть, что любовь Бога существовала всегда, лишь ожидая, пока\nмы примем ее»._\n\nОсновной текст, с. 57\n\nЛюбовь Бога — это преображающая сила, которая движет нашим выздоровлением. С\nпомощью этой любви мы находим свободу от безнадежности, отчаяния бесконечного\nупотребления, ненависти к себе, толкавшей на то, чтобы употреблять еще больше.\nС помощью этой любви мы находим смысл и цель в своей, когда-то бессмысленной,\nжизни. С помощью этой любви мы обретаем внутреннее направление и силу,\nнеобходимые, чтобы начать новый образ жизни: образ жизни АН. С помощью этой\nлюбви мы начинаем видеть по-другому, как будто новыми глазами.\n\nКогда мы исследуем свою жизнь сквозь призму любви, мы делаем потрясающее\nоткрытие: любящий Бог, к пониманию которого мы пришли совсем недавно,\nоказывается, всегда был с нами и всегда любил нас. Мы вспоминаем времена,\nкогда мы просили помощи у Высшей Силы и получали ее. Мы даже вспоминаем те\nпериоды, когда не просили о помощи, но все равно получали ее. Мы понимаем, что\nлюбящая Высшая Сила заботилась о нас все время, защищая нашу жизнь до того\nдня, когда мы смогли самостоятельно принять эту любовь.\n\nСила любви всегда была с нами. Сегодня мы благодарны за то, что смогли прожить\nдостаточно долго, чтобы обрести уверенность, что эта любовь присутствует в\nокружающем мире и в нашей жизни. Она наполняет жизнью само наше существование,\nруководит нашим выздоровлением и показывает нам, как жить.\n\n**ТОЛЬКО СЕГОДНЯ:** Я принимаю любовь Высшей Силы в свою жизнь. Я осознаю, что\nвнутри меня есть руководство и энергия этой Силы. Сегодня я заявляю об этом с\nуверенностью.\n";
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
