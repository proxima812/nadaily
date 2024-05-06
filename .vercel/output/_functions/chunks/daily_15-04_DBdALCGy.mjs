import { f as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_B8tmmdD1.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p><em>“Мы начали испытывать радость от чистой жизни и готовы принять больше\nхорошего из того, что предлагает нам Сообщество NA”.</em></p>\n<p>Осн.т., с.35 р.</p>\n<p>Можете вспомнить то время, когда вы смотрели на наркоманов, выздоравливающих в\nNA, и удивлялись: ”Если они не употребляют наркотики, то от чего же тогда они\nполучают радость?”. Думали ли вы, что удовольствия закончились вместе с\nнаркотиками? Очень многие из нас думали так; мы были уверены в том, что\nоставляем “хорошую жизнь” позади. Сегодня многие из нас могут посмеяться над\nэтим заблуждением, потому что мы знаем, какой полноценной может быть наша\nжизнь в выздоровлении.</p>\n<p>Множество вещей, которые приносят нам радость в выздоровлении, получены нами\nблагодаря активному участию в Содружестве NA. Мы начинаем находить настоящую\nдружбу, друзей, которые понимают и заботятся о нас бескорыстно. Мы находим\nместо, где мы можем приносить пользу. Существуют собрания выздоравливающих\nнаркоманов, служение, совместные мероприятия, которые заполняют наше время и\nзанимают наши интересы. Содружество может быть зеркалом, дающим нам отражение\nтого, какими мы можем быть. Мы находим учителей, помощников, друзей, любовь,\nзаботу и поддержку. У Содружества всегда есть что предложить нам, до тех пор\nпока мы возвращаемся.</p>\n<p><strong>ТОЛЬКО СЕГОДНЯ:</strong> Я знаю, где искать “хорошую жизнь”. Я буду возвращаться.</p>";

				const frontmatter = {"title":"15 апреля. Возвращайся","description":"Ежедневные размышления АН - 15 апреля. Возвращайся","id":"106","heroImage":"","pubDate":"2023-05-04T00:00:00.000Z","moth":"april"};
				const file = "/Users/samgold/Desktop/Проекты/12 проектов/daily-na/src/content/diaries/april/daily_15-04.md";
				const url = undefined;
				function rawContent() {
					return "\n_“Мы начали испытывать радость от чистой жизни и готовы принять больше\nхорошего из того, что предлагает нам Сообщество NA”._\n\nОсн.т., с.35 р.\n\nМожете вспомнить то время, когда вы смотрели на наркоманов, выздоравливающих в\nNA, и удивлялись: ”Если они не употребляют наркотики, то от чего же тогда они\nполучают радость?”. Думали ли вы, что удовольствия закончились вместе с\nнаркотиками? Очень многие из нас думали так; мы были уверены в том, что\nоставляем “хорошую жизнь” позади. Сегодня многие из нас могут посмеяться над\nэтим заблуждением, потому что мы знаем, какой полноценной может быть наша\nжизнь в выздоровлении.\n\nМножество вещей, которые приносят нам радость в выздоровлении, получены нами\nблагодаря активному участию в Содружестве NA. Мы начинаем находить настоящую\nдружбу, друзей, которые понимают и заботятся о нас бескорыстно. Мы находим\nместо, где мы можем приносить пользу. Существуют собрания выздоравливающих\nнаркоманов, служение, совместные мероприятия, которые заполняют наше время и\nзанимают наши интересы. Содружество может быть зеркалом, дающим нам отражение\nтого, какими мы можем быть. Мы находим учителей, помощников, друзей, любовь,\nзаботу и поддержку. У Содружества всегда есть что предложить нам, до тех пор\nпока мы возвращаемся.\n\n**ТОЛЬКО СЕГОДНЯ:** Я знаю, где искать “хорошую жизнь”. Я буду возвращаться.\n";
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