import { f as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_B8tmmdD1.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p><em>“Мы узнаем счастье, радость и свободу”</em>.</p>\n<p>Осн. т., с.103 р.</p>\n<p>Если бы кто-нибудь остановил вас сегодня на улице и спросил, чувствуете ли вы\nсебя счастливыми людьми, чтобы вы сказали? “Ну… надо подумать… У меня есть,\nгде жить, есть еда в холодильнике, работа, моя машина на ходу…Да, пожалуй, я\nсчастлив” вот что вы могли бы ответить. Это самый распространенный вариант\nтого, что для многих из нас обычно ассоциируется со счастьем. Мы часто\nзабываем при этом, что наше счастье зависит только от нас; никто и ничто,\nкроме нас самих, не сделает нас счастливыми.</p>\n<p>Счастье — это, что мы обретаем благодаря вовлеченности в дела Анонимных\nНаркоманов. Счастье, которое мы получаем от жизни, — это великая вещь, если\nнаша жизнь сосредоточена на служении наркоманам, которые все еще страдают.\nЕсли мы ставим служение выше собственных желаний, то мы замечаем, что\nперестаем циклиться на себе. В результате мы получаем больше удовлетворения от\nжизни, она становится более гармоничной. Когда мы занимаемся служением на\nблаго других, мы обнаруживаем, что и наши собственные желания осуществляются.</p>\n<p>Счастье. Что это такое, на самом деле? Мы можем представить себе счастье как\nудовлетворение и удовольствие. Оба этих душевных состояния приходят к нам,\nкогда мы меньше всего к ним стремимся. Если мы живем одним днем и при этом\nнесем весть тем наркоманам, которые все еще страдают, мы находим\nудовлетворение, счастье, и жизнь обретает более глубокий смысл.</p>\n<p><strong>ТОЛЬКО СЕГОДНЯ:</strong> Я буду счастливым. Я найду свое счастье в служении на\nблаго других.</p>";

				const frontmatter = {"title":"8 апреля. Счастье","description":"Ежедневные размышления АН - 8 апреля. Счастье","id":"99","heroImage":"","pubDate":"2023-05-04T00:00:00.000Z","moth":"april"};
				const file = "/Users/samgold/Desktop/Проекты/12 проектов/daily-na/src/content/diaries/april/daily_08-04.md";
				const url = undefined;
				function rawContent() {
					return "\n_“Мы узнаем счастье, радость и свободу”_.\n\nОсн. т., с.103 р.\n\nЕсли бы кто-нибудь остановил вас сегодня на улице и спросил, чувствуете ли вы\nсебя счастливыми людьми, чтобы вы сказали? “Ну… надо подумать… У меня есть,\nгде жить, есть еда в холодильнике, работа, моя машина на ходу…Да, пожалуй, я\nсчастлив” вот что вы могли бы ответить. Это самый распространенный вариант\nтого, что для многих из нас обычно ассоциируется со счастьем. Мы часто\nзабываем при этом, что наше счастье зависит только от нас; никто и ничто,\nкроме нас самих, не сделает нас счастливыми.\n\nСчастье — это, что мы обретаем благодаря вовлеченности в дела Анонимных\nНаркоманов. Счастье, которое мы получаем от жизни, — это великая вещь, если\nнаша жизнь сосредоточена на служении наркоманам, которые все еще страдают.\nЕсли мы ставим служение выше собственных желаний, то мы замечаем, что\nперестаем циклиться на себе. В результате мы получаем больше удовлетворения от\nжизни, она становится более гармоничной. Когда мы занимаемся служением на\nблаго других, мы обнаруживаем, что и наши собственные желания осуществляются.\n\nСчастье. Что это такое, на самом деле? Мы можем представить себе счастье как\nудовлетворение и удовольствие. Оба этих душевных состояния приходят к нам,\nкогда мы меньше всего к ним стремимся. Если мы живем одним днем и при этом\nнесем весть тем наркоманам, которые все еще страдают, мы находим\nудовлетворение, счастье, и жизнь обретает более глубокий смысл.\n\n**ТОЛЬКО СЕГОДНЯ:** Я буду счастливым. Я найду свое счастье в служении на\nблаго других.\n";
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
