import { f as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_B8tmmdD1.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p><em>«Мы знаем, что если мы молимся о знании Божьей воли, мы получаем самое\nлучшее, даже если это не соответствует нашим представлениям о том, чего бы нам\nхотелось».</em></p>\n<p>Основной текст, с. 55</p>\n<p>К тому времени, когда мы пришли в АН, наш внутренний голос стал ненадежным и\nприводил нас к саморазрушению. Наркомания затмила все наши желания, интересы и\nнаше ощущение того, что для нас было лучше. Вот почему, выздоравливая, мы\nразвиваем в себе веру в Силу, более могущественную, чем наша собственная,\nкоторая может вернуть нам здравомыслие и распорядиться нашей жизнью лучше, чем\nмы сделали бы это сами. Мы стали учиться полагаться на заботу Высшей Силы и\nдоверять тому внутреннему голосу, которым она направляет нас.</p>\n<p>Как и в любом процессе обучения, нам необходима практика «молитвы только о\nзнании Божьей воли и о даровании силы для ее исполнения». Эгоистичность и\nзацикленность на себе, которые мы развивали, употребляя наркотики, невозможно\nоткинуть за несколько часов. Эти черты нашего характера могут оказывать\nвоздействие и на то, как мы молимся. Иногда мы можем поймать себя даже на том,\nчто обращаемся к Богу со словами: «Избавь меня от этих недостатков, чтобы я\nмог выглядеть лучше».</p>\n<p>Чем яснее мы понимаем, что из себя представляют наши собственные идеи и\nжелания, тем проще отличить нашу волю от воли Высшей Силы. Мы могли бы\nмолиться так: «К твоему сведению, Бог, вот то, что <em>я</em> хочу в этой ситуации.\nНо тем не менее, в любом случае я прошу, чтобы исполнилась твоя воля, а не\nмоя». Однажды сделав это, мы будем готовы распознать и принять руководство\nВысшей Силы.</p>\n<p><strong>ТОЛЬКО СЕГОДНЯ:</strong> Высшая Сила, я научился доверять твоему руководству, хотя\nу меня все еще есть свои собственные желания и мысли о том, как жить. Позволь\nмне поделиться с тобой этими мыслями и ясно понять, какова твоя воля для меня.\nИ пусть исполнится воля твоя, а не моя.</p>";

				const frontmatter = {"title":"4 декабря.   Воля Бога, а не наша","description":"Ежедневные размышления АН - 4 декабря.   Воля Бога, а не наша","id":"339","heroImage":"","pubDate":"2023-05-04T00:00:00.000Z","moth":"dekabr"};
				const file = "/Users/samgold/Desktop/Проекты/12 проектов/daily-na/src/content/diaries/dekabr/daily_04-12.md";
				const url = undefined;
				function rawContent() {
					return "\n_«Мы знаем, что если мы молимся о знании Божьей воли, мы получаем самое\nлучшее, даже если это не соответствует нашим представлениям о том, чего бы нам\nхотелось»._\n\nОсновной текст, с. 55\n\nК тому времени, когда мы пришли в АН, наш внутренний голос стал ненадежным и\nприводил нас к саморазрушению. Наркомания затмила все наши желания, интересы и\nнаше ощущение того, что для нас было лучше. Вот почему, выздоравливая, мы\nразвиваем в себе веру в Силу, более могущественную, чем наша собственная,\nкоторая может вернуть нам здравомыслие и распорядиться нашей жизнью лучше, чем\nмы сделали бы это сами. Мы стали учиться полагаться на заботу Высшей Силы и\nдоверять тому внутреннему голосу, которым она направляет нас.\n\nКак и в любом процессе обучения, нам необходима практика «молитвы только о\nзнании Божьей воли и о даровании силы для ее исполнения». Эгоистичность и\nзацикленность на себе, которые мы развивали, употребляя наркотики, невозможно\nоткинуть за несколько часов. Эти черты нашего характера могут оказывать\nвоздействие и на то, как мы молимся. Иногда мы можем поймать себя даже на том,\nчто обращаемся к Богу со словами: «Избавь меня от этих недостатков, чтобы я\nмог выглядеть лучше».\n\nЧем яснее мы понимаем, что из себя представляют наши собственные идеи и\nжелания, тем проще отличить нашу волю от воли Высшей Силы. Мы могли бы\nмолиться так: «К твоему сведению, Бог, вот то, что _я_ хочу в этой ситуации.\nНо тем не менее, в любом случае я прошу, чтобы исполнилась твоя воля, а не\nмоя». Однажды сделав это, мы будем готовы распознать и принять руководство\nВысшей Силы.\n\n**ТОЛЬКО СЕГОДНЯ:** Высшая Сила, я научился доверять твоему руководству, хотя\nу меня все еще есть свои собственные желания и мысли о том, как жить. Позволь\nмне поделиться с тобой этими мыслями и ясно понять, какова твоя воля для меня.\nИ пусть исполнится воля твоя, а не моя.\n";
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
