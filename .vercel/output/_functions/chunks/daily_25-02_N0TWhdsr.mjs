import { f as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_B8tmmdD1.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p><em>“Было бы непростительно написать и положить все это в стол. Наши недостатки\nрастут в темноте, но умирают, если их выставить на свет”.</em></p>\n<p>Основной текст, с. 40</p>\n<p>Сколько раз мы уже слышали эту фразу: “Мы больны настолько, насколько не\nвысказались”? Не смотря на то, что многие участники не решаются раскрыть на\nсобрании какие-то очень личные детали своей жизни, важно то, что каждый из нас\nнаходит свой путь, лучше всего ему подходящий. Как насчет того, что у всех нас\nесть такие поступки, раскрыть которые означало бы сгореть от стыда? Насколько\nкомфортнее нам становится, когда мы открываемся, и перед кем? Если мы не можем\nподелиться какими-то моментами из своей жизни на собрании, то к кому мы тогда\nмы должны обратиться?</p>\n<p>Ответ на этот вопрос мы нашли, выбрав себе спонсора. Конечно, чтобы построить\nотношения со спонсором нужно время. Важно лишь доверять этому человеку\nнастолько, чтобы быть абсолютно честными! Наши недостатки имеют власть над\nнами только до тех пор, пока мы их прячем. Если мы хотим избавиться от них, мы\nдолжны их обнаружить и открыться. Секрет остается секретом только, пока о нем\nне знает еще какой-то человек.</p>\n<p><strong>ТОЛЬКО СЕГОДНЯ:</strong> Я раскрою свои секреты. Я постараюсь быть честным со своим\nспонсором.</p>";

				const frontmatter = {"title":"25 февраля. Больны настолько, насколько не высказались","description":"Ежедневные размышления АН - 25 февраля. Больны настолько, насколько не высказались","id":"56","heroImage":"","pubDate":"2023-05-04T00:00:00.000Z","moth":"fevral"};
				const file = "/Users/samgold/Desktop/Проекты/12 проектов/daily-na/src/content/diaries/fevral/daily_25-02.md";
				const url = undefined;
				function rawContent() {
					return "\n_“Было бы непростительно написать и положить все это в стол. Наши недостатки\nрастут в темноте, но умирают, если их выставить на свет”._\n\nОсновной текст, с. 40\n\nСколько раз мы уже слышали эту фразу: “Мы больны настолько, насколько не\nвысказались”? Не смотря на то, что многие участники не решаются раскрыть на\nсобрании какие-то очень личные детали своей жизни, важно то, что каждый из нас\nнаходит свой путь, лучше всего ему подходящий. Как насчет того, что у всех нас\nесть такие поступки, раскрыть которые означало бы сгореть от стыда? Насколько\nкомфортнее нам становится, когда мы открываемся, и перед кем? Если мы не можем\nподелиться какими-то моментами из своей жизни на собрании, то к кому мы тогда\nмы должны обратиться?\n\nОтвет на этот вопрос мы нашли, выбрав себе спонсора. Конечно, чтобы построить\nотношения со спонсором нужно время. Важно лишь доверять этому человеку\nнастолько, чтобы быть абсолютно честными! Наши недостатки имеют власть над\nнами только до тех пор, пока мы их прячем. Если мы хотим избавиться от них, мы\nдолжны их обнаружить и открыться. Секрет остается секретом только, пока о нем\nне знает еще какой-то человек.\n\n**ТОЛЬКО СЕГОДНЯ:** Я раскрою свои секреты. Я постараюсь быть честным со своим\nспонсором.\n";
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
