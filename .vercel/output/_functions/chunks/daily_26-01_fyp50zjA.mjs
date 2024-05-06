import { f as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_B8tmmdD1.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p><em>«Духовной частью болезни является полная сосредоточенность на собственном\n«Я».</em></p>\n<p>Основной текст, с. 25</p>\n<p>Что такое эгоцентризм? Это наша уверенность в том, что мир вращается вокруг\nнас. Наши желания, наши потребности — это единственное, на что стоит обращать\nвнимание. Наше эгоцентричное мышление порождает в нас уверенность, что своим\nумом мы сможем достичь всего, чего захотим, надо только найти способ.\nЭгоцентризм рождает иллюзию полной самодостаточности.</p>\n<p>Мы говорим, что эгоцентризм — духовная часть нашей болезни, потому что\nэгоцентричное сознание не допускает существования чего-то более значительного\nили более важного, чем оно само. Но есть духовное средство для лечения нашего\nдушевного заболевания: Двенадцать Шагов Анонимных Наркоманов. Эти шаги уводят\nнас от эгоцентризма и помогают сосредоточиться на Боге.</p>\n<p>Мы разоблачаем заблуждение о своей полной самодостаточности, признавая свое\nличное бессилие и обращаясь за помощью к Силе, более могущественной, чем наша\nсобственная. Мы осознаем несостоятельность своей непогрешимости, признавая,\nчто были не правы, возмещая ущерб и стремясь к знанию о том, что хорошо,\nисходящему от Бога, как мы его понимаем. И мы как бы сдуваемся, перестаем\nощущать свою исключительную важность, стараясь служить на благо других, а не\nтолько для себя.</p>\n<p>С эгоцентризмом, разрушающим нашу духовность, можно справиться с помощью\nдуховного средства: Двенадцати Шагов.</p>\n<p><strong>ТОЛЬКО СЕГОДНЯ:</strong> Мое руководство и моя сила приходят от Высшей Силы, а не\nот меня самого. Я буду работать по Двенадцати Шагам, чтобы стать менее\nэгоцентричным и больше сосредоточиться на Боге.</p>";

				const frontmatter = {"title":"26 января.  Эгоцентризм","description":"Ежедневные размышления АН - 26 января.  Эгоцентризм","id":"26","heroImage":"","pubDate":"2023-05-04T00:00:00.000Z","moth":"yanvar"};
				const file = "/Users/samgold/Desktop/Проекты/12 проектов/daily-na/src/content/diaries/yanvar/daily_26-01.md";
				const url = undefined;
				function rawContent() {
					return "\n_«Духовной частью болезни является полная сосредоточенность на собственном\n«Я»._\n\nОсновной текст, с. 25\n\nЧто такое эгоцентризм? Это наша уверенность в том, что мир вращается вокруг\nнас. Наши желания, наши потребности — это единственное, на что стоит обращать\nвнимание. Наше эгоцентричное мышление порождает в нас уверенность, что своим\nумом мы сможем достичь всего, чего захотим, надо только найти способ.\nЭгоцентризм рождает иллюзию полной самодостаточности.\n\nМы говорим, что эгоцентризм — духовная часть нашей болезни, потому что\nэгоцентричное сознание не допускает существования чего-то более значительного\nили более важного, чем оно само. Но есть духовное средство для лечения нашего\nдушевного заболевания: Двенадцать Шагов Анонимных Наркоманов. Эти шаги уводят\nнас от эгоцентризма и помогают сосредоточиться на Боге.\n\nМы разоблачаем заблуждение о своей полной самодостаточности, признавая свое\nличное бессилие и обращаясь за помощью к Силе, более могущественной, чем наша\nсобственная. Мы осознаем несостоятельность своей непогрешимости, признавая,\nчто были не правы, возмещая ущерб и стремясь к знанию о том, что хорошо,\nисходящему от Бога, как мы его понимаем. И мы как бы сдуваемся, перестаем\nощущать свою исключительную важность, стараясь служить на благо других, а не\nтолько для себя.\n\nС эгоцентризмом, разрушающим нашу духовность, можно справиться с помощью\nдуховного средства: Двенадцати Шагов.\n\n**ТОЛЬКО СЕГОДНЯ:** Мое руководство и моя сила приходят от Высшей Силы, а не\nот меня самого. Я буду работать по Двенадцати Шагам, чтобы стать менее\nэгоцентричным и больше сосредоточиться на Боге.\n";
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
