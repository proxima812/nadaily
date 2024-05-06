import { f as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_B8tmmdD1.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p><em>“Мы узнаем, что хотим того же, чего хочет для нас Бог.”</em></p>\n<p>Основной текст, с. 56</p>\n<p>Двенадцать Шагов — это путь к духовному пробуждению. Это пробуждение принимает\nформу развивающихся отношений с любящей Высшей Силой. Каждый удачный шаг\nукрепляет эти отношения. Мы продолжаем работать по шагам, и наши отношения с\nВысшей Силой развиваются, становясь все более важными для нашей жизни.</p>\n<p>Работая по шагам, мы самостоятельно принимаем решение позволить любящей Высшей\nСиле руководить нами. Это руководство всегда доступно; нам необходимо лишь\nнастойчиво просить о нем. Часто это руководство проявляется через наш\nвнутренний голос, который мы называем совестью.</p>\n<p>Когда мы открываем свое сердце так широко, чтобы воспринять руководство на шей\nВысшей Силы, мы ощущаем душевный покой. Эта умиротворенность посылается нам,\nчтобы мы смогли пережить свои тяжелые чувства, она направляет нас, когда мы\nзагружены или смущены чем-то. Когда мы ищем и следуем Божьей воле в своей\nжизни, мы находим удовлетворение и радость, которые обычно покидают нас, если\nмы поступаем своевольно. Страх или сомнение могут помешать нам выполнять волю\nВысшей Силы, но мы уже умеем доверять моменту просветления. Наше самое большое\nсчастье — выполнять волю любящего Бога.</p>\n<p><strong>ТОЛЬКО СЕГОДНЯ:</strong> Я буду стараться укрепить свои отношения с моей высшей\nсилой. Мне известно по опыту, что знание воли моей Высшей силы приносит мне\nясность, направление и умиротворенность.</p>";

				const frontmatter = {"title":"16 мая. Воля нашей Высшей Силы","description":"Ежедневные размышления АН - 16 мая. Воля нашей Высшей Силы","id":"137","heroImage":"","pubDate":"2023-05-04T00:00:00.000Z","moth":"maj"};
				const file = "/Users/samgold/Desktop/Проекты/12 проектов/daily-na/src/content/diaries/maj/daily_16-05.md";
				const url = undefined;
				function rawContent() {
					return "\n_“Мы узнаем, что хотим того же, чего хочет для нас Бог.”_\n\nОсновной текст, с. 56\n\nДвенадцать Шагов — это путь к духовному пробуждению. Это пробуждение принимает\nформу развивающихся отношений с любящей Высшей Силой. Каждый удачный шаг\nукрепляет эти отношения. Мы продолжаем работать по шагам, и наши отношения с\nВысшей Силой развиваются, становясь все более важными для нашей жизни.\n\nРаботая по шагам, мы самостоятельно принимаем решение позволить любящей Высшей\nСиле руководить нами. Это руководство всегда доступно; нам необходимо лишь\nнастойчиво просить о нем. Часто это руководство проявляется через наш\nвнутренний голос, который мы называем совестью.\n\nКогда мы открываем свое сердце так широко, чтобы воспринять руководство на шей\nВысшей Силы, мы ощущаем душевный покой. Эта умиротворенность посылается нам,\nчтобы мы смогли пережить свои тяжелые чувства, она направляет нас, когда мы\nзагружены или смущены чем-то. Когда мы ищем и следуем Божьей воле в своей\nжизни, мы находим удовлетворение и радость, которые обычно покидают нас, если\nмы поступаем своевольно. Страх или сомнение могут помешать нам выполнять волю\nВысшей Силы, но мы уже умеем доверять моменту просветления. Наше самое большое\nсчастье — выполнять волю любящего Бога.\n\n**ТОЛЬКО СЕГОДНЯ:** Я буду стараться укрепить свои отношения с моей высшей\nсилой. Мне известно по опыту, что знание воли моей Высшей силы приносит мне\nясность, направление и умиротворенность.\n";
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