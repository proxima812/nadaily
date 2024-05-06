import { f as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_B8tmmdD1.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p><em>“Мы продолжали самоанализ и, когда допускали ошибки, сразу признавали это”.</em></p>\n<p>Десятый Шаг</p>\n<p>В Анонимных Наркоманах мы узнали, что чем больше мы живем в гармонии с волей\nВысшей Силы для нас, тем больше гармонии в нашей жизни. Мы используем Десятый\nШаг, чтобы помочь себе поддерживать эту гармонию. Каждый день в течение дня мы\nвыделяем время, чтобы взглянуть на свое поведение. Некоторые из нас\nрассчитывают каждое свое действие с помощью очень простого вопроса: “Это Божья\nволя или моя?”.</p>\n<p>Во многих случаях мы обнаруживаем, что наши действия соответствуют воле Высшей\nСилы для нас, и тогда мы в свою очередь чувствуем, что живем в гармонии с\nокружающим миром. В некоторых случаях, однако, мы увидим несоответствие между\nсвоим поведением и своими ценностями. Мы поступили согласно собственной воле,\nа не воле Бога, и результатом стал диссонанс в нашей жизни.</p>\n<p>Когда мы находим такие несоответствия, мы признаем, что были не правы и\nпредпринимаем верные действия. С четким осознанием того, что нам известна воля\nБога для нас в таких ситуациях, нам, скорее всего не придется повторять свои\nдействия. И тогда более вероятно, что мы будем жить в согласии с волей нашей\nВысшей Силы для нас и с окружающим миром.</p>\n<p><strong>ТОЛЬКО СЕГОДНЯ:</strong> Я бы хотел жить в гармонии со своим миром. Сегодня я\nпроверю свои действия, задав вопрос: “Это Божья воля или моя?”.</p>";

				const frontmatter = {"title":"22 февраля. Божья воля или моя?","description":"Ежедневные размышления АН - 22 февраля. Божья воля или моя?","id":"53","heroImage":"","pubDate":"2023-05-04T00:00:00.000Z","moth":"fevral"};
				const file = "/Users/samgold/Desktop/Проекты/12 проектов/daily-na/src/content/diaries/fevral/daily_22-02.md";
				const url = undefined;
				function rawContent() {
					return "\n_“Мы продолжали самоанализ и, когда допускали ошибки, сразу признавали это”._\n\nДесятый Шаг\n\nВ Анонимных Наркоманах мы узнали, что чем больше мы живем в гармонии с волей\nВысшей Силы для нас, тем больше гармонии в нашей жизни. Мы используем Десятый\nШаг, чтобы помочь себе поддерживать эту гармонию. Каждый день в течение дня мы\nвыделяем время, чтобы взглянуть на свое поведение. Некоторые из нас\nрассчитывают каждое свое действие с помощью очень простого вопроса: “Это Божья\nволя или моя?”.\n\nВо многих случаях мы обнаруживаем, что наши действия соответствуют воле Высшей\nСилы для нас, и тогда мы в свою очередь чувствуем, что живем в гармонии с\nокружающим миром. В некоторых случаях, однако, мы увидим несоответствие между\nсвоим поведением и своими ценностями. Мы поступили согласно собственной воле,\nа не воле Бога, и результатом стал диссонанс в нашей жизни.\n\nКогда мы находим такие несоответствия, мы признаем, что были не правы и\nпредпринимаем верные действия. С четким осознанием того, что нам известна воля\nБога для нас в таких ситуациях, нам, скорее всего не придется повторять свои\nдействия. И тогда более вероятно, что мы будем жить в согласии с волей нашей\nВысшей Силы для нас и с окружающим миром.\n\n**ТОЛЬКО СЕГОДНЯ:** Я бы хотел жить в гармонии со своим миром. Сегодня я\nпроверю свои действия, задав вопрос: “Это Божья воля или моя?”.\n";
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
