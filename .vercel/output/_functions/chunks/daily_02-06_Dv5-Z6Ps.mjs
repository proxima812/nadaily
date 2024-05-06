import { f as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_B8tmmdD1.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p><em>“Мы хотели найти легкий и простой выход из создавшегося положения… И если мы\nискали помощи, то только для того, чтобы освободиться от боли”.</em></p>\n<p>Основной текст, с. 6</p>\n<p>Что-то не так. Собственно, то, что не в порядке уже давно и вызывает у нас\nболь и усложняет нам жизнь. Проблема в том, что в любой данный момент всегда\nкажется легче переносить свои недостатки, чем выдержать полный переворот,\nподразумевающий изменение образа жизни. Мы можем очень хотеть избавиться от\nболи, но нам не очень то хочется делать то, что действительно необходимо,\nчтобы устранить источник страданий из своей жизни.</p>\n<p>Большинство из нас не думали искать выздоровления от наркомании пока не\n«устали до предела быть усталыми до предела». То же самое относится и к вечным\nдефектам нашего характера, которые мы пронесли через всю жизнь. Только когда\nмы ни секунды больше не сможем переносить наши недостатки, только тогда мы\nузнаем, что переживать перемены <em>не может</em> быть так же тяжело, как переживать\nто, что происходит с нами сегодня. И большинство из нас захочет попробовать\nчто-то изменить.</p>\n<p>Слава богу, шаги никуда не деваются не зависимо от того, насколько мы устали.\nСамое смешное в том, что как только мы решаемся начать работать по Двенадцати\nШагам, мы понимаем, что наш страх перед переменами не имеет под собой никаких\nоснований. Шаги — это щадящая программа изменения шаг за шагом. Ни один шаг не\nявляется настолько страшным сам по себе, чтобы по нему было невозможно\nработать. Когда мы применяем шаги в жизни, мы изменяемся и становимся\nсвободными.</p>\n<p><strong>ТОЛЬКО СЕГОДНЯ:</strong> Не важно, что мне мешает жить полнокровной счастливой\nжизнью, я знаю, что программа поможет мне измениться шаг за шагом. Мне не\nстоит бояться Двенадцати Шагов.</p>";

				const frontmatter = {"title":"2 июня. Устал до предела","description":"Ежедневные размышления АН - 2 июня. Устал до предела","id":"154","heroImage":"","pubDate":"2023-05-04T00:00:00.000Z","moth":"iyun"};
				const file = "/Users/samgold/Desktop/Проекты/12 проектов/daily-na/src/content/diaries/iyun/daily_02-06.md";
				const url = undefined;
				function rawContent() {
					return "\n_“Мы хотели найти легкий и простой выход из создавшегося положения… И если мы\nискали помощи, то только для того, чтобы освободиться от боли”._\n\nОсновной текст, с. 6\n\nЧто-то не так. Собственно, то, что не в порядке уже давно и вызывает у нас\nболь и усложняет нам жизнь. Проблема в том, что в любой данный момент всегда\nкажется легче переносить свои недостатки, чем выдержать полный переворот,\nподразумевающий изменение образа жизни. Мы можем очень хотеть избавиться от\nболи, но нам не очень то хочется делать то, что действительно необходимо,\nчтобы устранить источник страданий из своей жизни.\n\nБольшинство из нас не думали искать выздоровления от наркомании пока не\n«устали до предела быть усталыми до предела». То же самое относится и к вечным\nдефектам нашего характера, которые мы пронесли через всю жизнь. Только когда\nмы ни секунды больше не сможем переносить наши недостатки, только тогда мы\nузнаем, что переживать перемены _не может_ быть так же тяжело, как переживать\nто, что происходит с нами сегодня. И большинство из нас захочет попробовать\nчто-то изменить.\n\nСлава богу, шаги никуда не деваются не зависимо от того, насколько мы устали.\nСамое смешное в том, что как только мы решаемся начать работать по Двенадцати\nШагам, мы понимаем, что наш страх перед переменами не имеет под собой никаких\nоснований. Шаги — это щадящая программа изменения шаг за шагом. Ни один шаг не\nявляется настолько страшным сам по себе, чтобы по нему было невозможно\nработать. Когда мы применяем шаги в жизни, мы изменяемся и становимся\nсвободными.\n\n**ТОЛЬКО СЕГОДНЯ:** Не важно, что мне мешает жить полнокровной счастливой\nжизнью, я знаю, что программа поможет мне измениться шаг за шагом. Мне не\nстоит бояться Двенадцати Шагов.\n";
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