import { f as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_B8tmmdD1.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p><em>“Те, кто выдерживают в трудные времена, демонстрируют настоящее мужество,\nоснованное на вере.”</em></p>\n<p>Основной текст, с.97</p>\n<p>До прихода в АН многие из нас считали себя смелыми просто потому, что мы\nникогда не испытывали страха. Мы заглушали наркотиками все свои чувства и\nощущения, и страх в том числе; наркотики позволяли нам убедить себя, что мы\nвыносливые, мужественные люди, которые не сдадутся ни при каких\nобстоятельствах.</p>\n<p>Но то мужество, которое мы находили в наркотиках, ничего общего не имеет с\nжизнью, которой мы живем сегодня. Если мы остаемся чистыми и выздоравливаем,\nто нам порой приходится испытывать страх. Когда мы впервые обнаруживаем, что\nнапуганы, мы можем счесть себя трусами. Мы боимся снять трубку, потому что\nчеловек на другом конце провода, может быть, не поймет нас. Мы боимся кого-то\nпросить о спонсорстве, потому что боимся отказа. Нам страшно искать работу.\nСтрашно быть честными с друзьями. Но все эти страхи естественные даже для\nздоровых людей. Наша болезнь проявляется тогда, когда мы позволяем страху\nпарализовать нас.</p>\n<p>Страх останавливает наш рост, если мы не воспрепятствуем ему, то потерпим\nпоражение. Истинное мужество заключается не в отсутствии страха, а в\nготовности превозмочь его.</p>\n<p><strong>ТОЛЬКО СЕГОДНЯ:</strong> Сегодня я буду мужественным. Если я испуган, я сделаю все,\nчто необходимо мне, чтобы расти и выздоравливать.</p>";

				const frontmatter = {"title":"17  марта. Настоящее мужество","description":"Ежедневные размышления АН - 17  марта. Настоящее мужество","id":"77","heroImage":"","pubDate":"2023-05-04T00:00:00.000Z","moth":"mart"};
				const file = "/Users/samgold/Desktop/Проекты/12 проектов/daily-na/src/content/diaries/mart/daily_17-03.md";
				const url = undefined;
				function rawContent() {
					return "\n_“Те, кто выдерживают в трудные времена, демонстрируют настоящее мужество,\nоснованное на вере.”_\n\nОсновной текст, с.97\n\nДо прихода в АН многие из нас считали себя смелыми просто потому, что мы\nникогда не испытывали страха. Мы заглушали наркотиками все свои чувства и\nощущения, и страх в том числе; наркотики позволяли нам убедить себя, что мы\nвыносливые, мужественные люди, которые не сдадутся ни при каких\nобстоятельствах.\n\nНо то мужество, которое мы находили в наркотиках, ничего общего не имеет с\nжизнью, которой мы живем сегодня. Если мы остаемся чистыми и выздоравливаем,\nто нам порой приходится испытывать страх. Когда мы впервые обнаруживаем, что\nнапуганы, мы можем счесть себя трусами. Мы боимся снять трубку, потому что\nчеловек на другом конце провода, может быть, не поймет нас. Мы боимся кого-то\nпросить о спонсорстве, потому что боимся отказа. Нам страшно искать работу.\nСтрашно быть честными с друзьями. Но все эти страхи естественные даже для\nздоровых людей. Наша болезнь проявляется тогда, когда мы позволяем страху\nпарализовать нас.\n\nСтрах останавливает наш рост, если мы не воспрепятствуем ему, то потерпим\nпоражение. Истинное мужество заключается не в отсутствии страха, а в\nготовности превозмочь его.\n\n**ТОЛЬКО СЕГОДНЯ:** Сегодня я буду мужественным. Если я испуган, я сделаю все,\nчто необходимо мне, чтобы расти и выздоравливать.\n";
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