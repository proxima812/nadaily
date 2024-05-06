import { f as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_B8tmmdD1.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p><em>“В АН наши радости умножаются, когда мы делимся тем хорошим, что есть у нас;\nнаши печали уменьшаются благодаря разделению плохого. Впервые в жизни у нас\nнет необходимости переживать что-то в одиночку”.</em></p>\n<p>IP No.16 «Новичку»</p>\n<p>Когда мы на деле применяем шаги и другие инструменты нашей программы для того,\nчтобы переживать свои невзгоды, мы приобретаем способность получать\nудовольствие и радость от чистой жизни. Но все наши радости очень быстро\nпройдут, если мы не будем разделять их с другими, тогда как невзгоды,\nпереживаемые в одиночку, могут затянуться надолго. В товариществе Анонимных\nНаркоманов мы часто умножаем свои радости и разрежаем свои тяготы благодаря\nтому, что разделяем их с другими.</p>\n<p>Мы, наркоманы, испытываем такое удовольствие в выздоровлении, которое порой\nможет оценить только другой наркоман. Товарищи по группе понимают, когда мы им\nговорим про гордость, которую мы сегодня испытываем от выполнения своих\nобязательств, про тепло, которое мы ощущаем, восстанавливая разрушенные\nвзаимоотношения, про облегчение, которые мы испытываем оттого, что нам не\nнужно употреблять наркотики, чтобы пережить день. Когда мы делимся этими\nпереживаниями с выздоравливающими наркоманами, и они в ответ делятся своими\nпохожими историями, наша радость возрастает во много раз. Тот же самый принцип\nприменяется к испытаниям, с которыми мы сталкиваемся как выздоравливающие\nнаркоманы. Делясь своими испытаниями и позволяя другим членам АН поделиться\nсвоей силой с нами, мы облегчаем свою ношу.</p>\n<p>Сообщество Анонимных Наркоманов — это наша драгоценность. Делясь друг с\nдругом, мы усиливаем радости и уменьшаем тяготы жизни в выздоровлении.</p>\n<p><strong>ТОЛЬКО СЕГОДНЯ:</strong> Я буду делиться своими радостями и своими тяготами с\nдругими выздоравливающими наркоманами. Я буду также разделять их радости и\nтяготы. Я благодарен за прочные узы Сообщества Анонимных Наркоманов.</p>";

				const frontmatter = {"title":"19 сентября.   Товарищество","description":"Ежедневные размышления АН - 19 сентября.   Товарищество","id":"263","heroImage":"","pubDate":"2023-05-04T00:00:00.000Z","moth":"sentyabr"};
				const file = "/Users/samgold/Desktop/Проекты/12 проектов/daily-na/src/content/diaries/sentyabr/daily_19-09.md";
				const url = undefined;
				function rawContent() {
					return "\n_“В АН наши радости умножаются, когда мы делимся тем хорошим, что есть у нас;\nнаши печали уменьшаются благодаря разделению плохого. Впервые в жизни у нас\nнет необходимости переживать что-то в одиночку”._\n\nIP No.16 «Новичку»\n\nКогда мы на деле применяем шаги и другие инструменты нашей программы для того,\nчтобы переживать свои невзгоды, мы приобретаем способность получать\nудовольствие и радость от чистой жизни. Но все наши радости очень быстро\nпройдут, если мы не будем разделять их с другими, тогда как невзгоды,\nпереживаемые в одиночку, могут затянуться надолго. В товариществе Анонимных\nНаркоманов мы часто умножаем свои радости и разрежаем свои тяготы благодаря\nтому, что разделяем их с другими.\n\nМы, наркоманы, испытываем такое удовольствие в выздоровлении, которое порой\nможет оценить только другой наркоман. Товарищи по группе понимают, когда мы им\nговорим про гордость, которую мы сегодня испытываем от выполнения своих\nобязательств, про тепло, которое мы ощущаем, восстанавливая разрушенные\nвзаимоотношения, про облегчение, которые мы испытываем оттого, что нам не\nнужно употреблять наркотики, чтобы пережить день. Когда мы делимся этими\nпереживаниями с выздоравливающими наркоманами, и они в ответ делятся своими\nпохожими историями, наша радость возрастает во много раз. Тот же самый принцип\nприменяется к испытаниям, с которыми мы сталкиваемся как выздоравливающие\nнаркоманы. Делясь своими испытаниями и позволяя другим членам АН поделиться\nсвоей силой с нами, мы облегчаем свою ношу.\n\nСообщество Анонимных Наркоманов — это наша драгоценность. Делясь друг с\nдругом, мы усиливаем радости и уменьшаем тяготы жизни в выздоровлении.\n\n**ТОЛЬКО СЕГОДНЯ:** Я буду делиться своими радостями и своими тяготами с\nдругими выздоравливающими наркоманами. Я буду также разделять их радости и\nтяготы. Я благодарен за прочные узы Сообщества Анонимных Наркоманов.\n";
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